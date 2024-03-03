import React, { useState, useEffect, useCallback } from 'react';
import { useLocales } from 'src/locales';
// @mui
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// Utility
import { exportToExcel } from 'src/utils/export';
// routes
import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
// components 
import Scrollbar from 'src/components/scrollbar';
import Iconify from 'src/components/iconify';
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import CustomersListDialog from 'src/screens/components/reports/invoiceForCustomers/customersListDialog';
// Data Access
import { GetAllCustomersWithAll } from 'src/data-access/customers';
import { getInvoiceForCustomers } from 'src/data-access/invoice';

import {
  useTable,
  getComparator,
  emptyRows,
  TableNoData,
  TableEmptyRows,
  TableHeadCustom,
  TablePaginationCustom,
} from 'src/components/table';
// DATA ACCESS
import { getAgingReport } from 'src/data-access/reports';
import InvoiceTableToolbar from './InvoiceTableToolbar';
// COMPONENTS
import TableRowNew from './tableRow';


// ----------------------------------------------------------------------
const defaultFilters = {
  name: '',
  startDate: null,
  endDate: null,
};
// ----------------------------------------------------------------------

export default function InvoiceForCustomersView() {
  const theme = useTheme();

  const settings = useSettingsContext();

  const router = useRouter();

  const { t, currentLang } = useLocales()
  const Translate = (text) => t(text);

  const table = useTable({ defaultOrderBy: 'issueInvoiceDate' });

  const [tableData, setTableData] = useState([]);
  const [customersList, setCustomersList] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const [open, setOpen] = useState(false);



  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const result = await GetAllCustomersWithAll();
        // console.log('Result: ', result);
        setCustomersList(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCustomers();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getInvoiceForCustomers(selectedCustomers);
        setTableData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedCustomers]);

  const [filters, setFilters] = useState(defaultFilters);


  const dateError =
    filters.startDate && filters.endDate
      ? filters.startDate.getTime() > filters.endDate.getTime()
      : false;

  const dataFiltered = applyFilter({
    inputData: tableData,
    comparator: getComparator(table.order, table.orderBy),
    filters,
    dateError,
  });

  const handleViewRow = useCallback(
    (id) => {
      router.push(paths.dashboard.invoice.details(id));
    },
    [router]
  );

  
  // const dataInPage = dataFiltered.slice(
  //   table.page * table.rowsPerPage,
  //   table.page * table.rowsPerPage + table.rowsPerPage
  // );



  const denseHeight = table.dense ? 56 : 76;

  const canReset =
    !!filters.name ||
    (!!filters.startDate && !!filters.endDate);

  const notFound = (!dataFiltered.length && canReset) || !dataFiltered.length;

  const TABLE_HEAD = [
    { id: 'invoiceNumber', label: Translate("invoiceNumber") },
    { id: 'issueInvoiceDate', label: Translate("issueInvoiceDate") },
    { id: 'daysToCollected', label: Translate("daysToCollected") },
    { id: 'invoiceAmount', label: Translate("invoiceAmount") },
    { id: 'paidStatus', label: Translate("paidStatus"), align: 'center' },
    { id: 'department', label: Translate("department"), align: 'center' },
  ];

  const exportHeaderRow = [
    { key: 'invoiceNo', value: Translate("invoiceNumber")},
    { key: 'customerName', value: Translate("customerName"), localization: true, language: currentLang.value},
    { key: 'issueInvoiceDate', value: Translate("issueInvoiceDate"), isDate: true},
    { key: 'daysToCollected', value: Translate("daysToCollected")},
    { key: 'invoiceAmount', value: Translate("invoiceAmount"), isCurreny: true,  currency: Translate("currencyShortcut")},
    { key: 'paidStatus', value: Translate("paidStatus")},
    { key: 'department', value: Translate("department")},
  ];

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading={Translate("invoicesForCustomer")}
          links={[
            // {
            //   name: Translate("app"),
            //   href: paths.dashboard.root,
            // },
            // {
            //   name: Translate("reports"),
            // },
            // {
            //   name: Translate("invoicesForCustomer"),
            // },
          ]}
          
          sx={{
            mb: { xs: 3, md: 5 },
          }}
        />
        <Stack
          direction="row"
          // justifyContent="flex-end"
          // divider={<Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />}
          sx={{ 
            py: 2
            }}
        >

          <Button
            variant="contained"
            color='primary'
            onClick={() => exportToExcel(tableData, exportHeaderRow, `${Translate("invoicesForCustomer")}-${new Date().toLocaleString()}`)}
            startIcon={<Iconify icon="eva:download-outline" />}
            sx={{
              margin: 0.5
            }}
          >
            {Translate("export")}
          </Button>
        </Stack>
        <Card sx={{ mb: 3 }}>
          <InvoiceTableToolbar 
            handleOpen={() => setOpen(true)}
            customers={customersList}
            selectedCustomers={selectedCustomers}
            onChange={(value) => setSelectedCustomers(value)}
          />
          <TableContainer sx={{ position: 'relative', overflow: 'unset' }}>
            <Scrollbar>
              <Table size={table.dense ? 'small' : 'medium'} sx={{ minWidth: 800 }}>
                <TableHeadCustom
                  order={table.order}
                  orderBy={table.orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={tableData.length}
                  numSelected={table.selected.length}
                  onSort={table.onSort}
                  // onSelectAllRows={(checked) =>
                  //   table.onSelectAllRows(
                  //     checked,
                  //     tableData.map((row) => row.id)
                  //   )
                  // }
                />

                <TableBody>
                  {dataFiltered.length > 0 && dataFiltered
                    .slice(
                      table.page * table.rowsPerPage,
                      table.page * table.rowsPerPage + table.rowsPerPage
                    )
                    .map((row, index) => (
                      <TableRowNew
                        onViewRow={() => handleViewRow(row.id)}
                        key={index}
                        row={row}
                        selected={table.selected.includes(row.id)}
                      />
                    ))}

                  {/* <TableEmptyRows
                    height={denseHeight}
                    emptyRows={emptyRows(table.page, table.rowsPerPage, tableData.length)}
                  /> */}

                  <TableNoData notFound={notFound} />
                </TableBody>
              </Table>
            </Scrollbar>
          </TableContainer>

          <TablePaginationCustom
            count={dataFiltered.length || 0}
            page={table.page}
            rowsPerPage={table.rowsPerPage}
            onPageChange={table.onChangePage}
            onRowsPerPageChange={table.onChangeRowsPerPage}
            denseLabel={Translate("dense")}
            dense={table.dense}
            onChangeDense={table.onChangeDense}
          />


           
        </Card>
        {/* <Card  sx={{ display:'flex', justifyContent: 'center', mb: 3 }}>
          <DonutChart data={dataFiltered}/>  
        </Card>     */}

        {/* <CustomersListDialog 
          title={Translate("customers")}
          list={customersList}  
          open={open}
          onClose={() => setOpen(false)}  
          selected={(id) => selectedCustomer === id}        
          onSelect={(value) => setSelectedCustomer(value.id)}
        /> */}
      </Container>
      
  );
}

function applyFilter({ inputData, comparator, filters, dateError }) {
  const stabilizedThis = inputData.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  
  inputData = stabilizedThis.map((el) => el[0]);

  return inputData;
}
