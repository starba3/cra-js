import React, { useState, useCallback, useEffect } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';

// routes
import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
// hooks
// utils
// _mock
// components
import Scrollbar from 'src/components/scrollbar';
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import DonutChart from 'src/screens/components/reports/aging/Chart';
import CustomersListDialog from 'src/screens/components/reports/invoiceForCustomers/customersListDialog';
// Data Access
import { getAllCustomers } from 'src/data-access/customers';
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

  const table = useTable({ defaultOrderBy: 'issueInvoiceDate' });

  const [tableData, setTableData] = useState([]);
  const [customersList, setCustomersList] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const result = await getAllCustomers();
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
        const result = await getInvoiceForCustomers(selectedCustomer);
        setTableData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedCustomer]);

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
    { id: 'invoiceNumber', label: 'Invoice Number' },
    { id: 'issueInvoiceDate', label: 'Issue Date' },
    { id: 'daysToCollected', label: 'Days To Collect' },
    { id: 'invoiceAmount', label: 'Amount' },
    // { id: 'customerNameAr', label: 'Name Arabic' },
    { id: 'paidStatus', label: 'Paid Status', align: 'center' },
    { id: 'department', label: 'Department' , align: 'center' },
  ];

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading='Invoices For Customers'
          links={[
            {
              name: 'Dashboard',
              href: paths.dashboard.root,
            },
            {
              name: 'Reports',
            },
            {
              name: 'Invoices For Customers',
            },
          ]}
          
          sx={{
            mb: { xs: 3, md: 5 },
          }}
        />

        <Card sx={{ mb: 3 }}>
          <InvoiceTableToolbar 
            handleOpen={() => setOpen(true)}

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
            //
            dense={table.dense}
            onChangeDense={table.onChangeDense}
          />


           
        </Card>
        {/* <Card  sx={{ display:'flex', justifyContent: 'center', mb: 3 }}>
          <DonutChart data={dataFiltered}/>  
        </Card>     */}

        <CustomersListDialog 
          title='Customers'
          list={customersList}  
          // selectedList={selectedCustomers}
          open={open}
          onClose={() => setOpen(false)}  
          selected={(id) => selectedCustomer === id}        
          onSelect={(value) => setSelectedCustomer(value.id)}
        />
      </Container>
      
  );
}

function applyFilter({ inputData, comparator, filters, dateError }) {
  console.log(inputData)
  return inputData;
}
