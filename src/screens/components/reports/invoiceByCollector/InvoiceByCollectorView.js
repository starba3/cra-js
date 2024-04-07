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

// routes
import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
// Utility
import { exportToExcel } from 'src/utils/export';
import { getUserRole } from 'src/helpers/roleHelper';
// components
import Scrollbar from 'src/components/scrollbar';
import Iconify from 'src/components/iconify';
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
// Data Access
import { getAllCollectors } from 'src/data-access/collectors';
import { getInvoicesForCollector } from 'src/data-access/reports';



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
import InvoiceTableToolbar from './InvoiceTableToolbar';
// COMPONENTS
import TableRowNew from './tableRow';
import CollectorsListDialog from './CollectorsListDialog';


// ----------------------------------------------------------------------
const defaultFilters = {
  name: '',
  startDate: null,
  endDate: null,
};
// ----------------------------------------------------------------------

export default function InvoiceByCollectorView() {
  const theme = useTheme();

  const settings = useSettingsContext();

  const router = useRouter();

  const { t, currentLang } = useLocales()
  const Translate = (text) => t(text);

  const ROLE = getUserRole()

  const table = useTable({ defaultOrderBy: 'issueInvoiceDate' });

  const [tableData, setTableData] = useState([]);
  const [collectorsList, setCollectorsList] = useState([]);
  const [selectedCollector, setSelectedCollector] = useState(null);
  const [open, setOpen] = useState(false);

  

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const result = await getAllCollectors(ROLE);
        console.log('Result: ', result);
        setCollectorsList(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchUsers();
  }, [ROLE]);

  useEffect(() => {
    const fetchData = async () => {
      
      try {

        if (selectedCollector) {
          const result = await getInvoicesForCollector(selectedCollector.id);
          setTableData(result);
        }
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedCollector]);

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

  const handleViewRow = useCallback(
    (id) => {
      router.push(paths.dashboard.invoice.details(id));
    },
    [router]
  );


  const denseHeight = table.dense ? 56 : 76;

  const canReset =
    !!filters.name ||
    (!!filters.startDate && !!filters.endDate);

  const notFound = (!dataFiltered.length && canReset) || !dataFiltered.length;

  const TABLE_HEAD = [
    { id: 'invoiceNumber', label: Translate("invoiceNumber") },
    { id: 'issueInvoiceDate', label: Translate("issueInvoiceDate") },
    { id: 'invoiceAmount', label: Translate("invoiceAmount") },
    { id: 'productName', label: Translate("productName") },
    { id: 'department', label: Translate("department"), align: 'center' },
  ];
  
  const exportHeaderRow = [
    { key: 'invoiceNo', value: Translate("invoiceNumber")},
    { key: 'customerName', value: Translate("customerName"), localization: true, language: currentLang.value},
    { key: 'issueInvoiceDate', value: Translate("issueInvoiceDate"), isDate: true},
    { key: 'invoiceAmount', value: Translate("invoiceAmount"), isCurreny: true,  currency: Translate("currencyShortcut")},
    { key: 'productName', value: Translate("productName"), localization: true, language: currentLang.value},
    { key: 'department', value: Translate("department")},
  ];

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading={Translate("invoiceByCollector")}
          links={[
            // {
            //   name: Translate("app"),
            //   href: paths.dashboard.root,
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
            onClick={() => exportToExcel(tableData, exportHeaderRow, `${Translate("invoiceByCollector")}-${new Date().toLocaleString()}`)}
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
                  checkboxEnabled={false}
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
                        onViewRow={() => handleViewRow(row.id)}
                        selected={table.selected.includes(row.id)}
                      />
                    ))}

                  

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

        <CollectorsListDialog
          title={Translate("collectorsList")}
          list={collectorsList}  
          open={open}
          onClose={() => setOpen(false)}  
          selected={(id) => selectedCollector === id}        
          onSelect={(value) => setSelectedCollector(value)}
        />
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
