import * as React from 'react';
import { useState, useCallback, useEffect } from 'react';
import { useLocales } from 'src/locales';
// @mui
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
// @mui Dialog
// components
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
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
import { getInvoiceInquiryData } from 'src/data-access/invoice'
import { getSalesPerformanceReport } from 'src/data-access/reports';
import { _departments } from 'src/lists/departments'
import { _statusList } from 'src/lists/paidStatus'
// Utility
import { exportToExcel } from 'src/utils/export';
import { getUserRole } from 'src/helpers/roleHelper'
//
import PerformanceTableFiltersResult from './PerformanceTableFiltersResult';
import PerformanceTableRow from './PerformanceTableRow';
import PerformanceTableToolbar from './PerformanceTableToolbar';

// ----------------------------------------------------------------------

const defaultFilters = {
  name: '',
  departments: [],
  paidStatus: [],
  status: 'all',
  startDate: null,
  endDate: null,
};

// ----------------------------------------------------------------------

export default function SalesPerformanceListView() {
  const settings = useSettingsContext();


  const table = useTable({ defaultOrderBy: 'name' });



  const { t, currentLang } = useLocales();
  const Translate = (text) => t(text);

  const [tableData, setTableData] = useState([]);
  const [filters, setFilters] = useState(defaultFilters);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getSalesPerformanceReport();
        setTableData(result);
      } catch (error) {
        console.error('Error fetching invoices:', error);
      }
    };

    
    fetchData();
  }, []);

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


  const denseHeight = table.dense ? 56 : 76;

  const canReset =
    !!filters.name ||
    !!filters.departments.length ||
    filters.status !== 'all' ||
    (!!filters.startDate && !!filters.endDate);

  const TABLE_HEAD = [
    { id: 'name', label: Translate("name") },
    { id: 'email', label: Translate("email") },
    { id: 'acknowledged', label: Translate("acknowledged"), align: 'center' },
    { id: 'tempAcknowledged', label: Translate("tempAcknowledged"), align: 'center' },
    { id: 'notAcknowledged', label: Translate("notAcknowledged"), align: 'center' },
  ];

  const exportHeaderRow = [
    { key: 'name', value: Translate("name")},
    { key: 'email', value: Translate("email")},
    { key: 'acknowledged', value: Translate("acknowledged")},
    { key: 'tempAcknowledged', value: Translate("tempAcknowledged")},
    { key: 'notAcknowledged', value: Translate("notAcknowledged")},
  ];

  const notFound = (!dataFiltered.length && canReset) || !dataFiltered.length;

  const handleFilters = useCallback(
    (name, value) => {
      table.onResetPage();
      setFilters((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    [table]
  );

  const handleResetFilters = useCallback(() => {
    setFilters(defaultFilters);
  }, []);



  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading={Translate("performance")}
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
            onClick={() => exportToExcel(tableData, exportHeaderRow, `${Translate("performance")}-${new Date().toLocaleString()}`)}
            startIcon={<Iconify icon="eva:download-outline" />}
            sx={{
              margin: 0.5
            }}
          >
            {Translate("export")}
          </Button>

        </Stack>

        <Card>
        
          <PerformanceTableToolbar
            filters={filters}
            onFilters={handleFilters}
            dateError={dateError}
            serviceOptions={_departments().map((option) => option)}
            paidStatusOptions={_statusList().map((option) => option)}
          />

          {canReset && (
            <PerformanceTableFiltersResult
              filters={filters}
              onFilters={handleFilters}
              //
              onResetFilters={handleResetFilters}
              //
              results={dataFiltered.length}
              sx={{ p: 2.5, pt: 0 }}
            />
          )}

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
                  onSelectAllRows={(checked) =>
                    table.onSelectAllRows(
                      checked,
                      tableData.map((row) => row.id)
                    )
                  }
                  checkboxEnabled={false}
                />

                <TableBody>
                  {dataFiltered
                    .slice(
                      table.page * table.rowsPerPage,
                      table.page * table.rowsPerPage + table.rowsPerPage
                    )
                    .map((row) => (
                      <PerformanceTableRow
                        key={row.id}
                        row={row}
                        selected={table.selected.includes(row.id)}            
                      />
                    ))}

                  <TableEmptyRows
                    height={denseHeight}
                    emptyRows={emptyRows(table.page, table.rowsPerPage, tableData.length)}
                  />

                  <TableNoData notFound={notFound} />
                </TableBody>
              </Table>
            </Scrollbar>
          </TableContainer>

          <TablePaginationCustom
            count={dataFiltered.length}
            page={table.page}
            rowsPerPage={table.rowsPerPage}
            onPageChange={table.onChangePage}
            onRowsPerPageChange={table.onChangeRowsPerPage}
            dense={table.dense}
            denseLabel={Translate("dense")}
            onChangeDense={table.onChangeDense}
          />
        </Card>
      </Container>

    
  );
}

function applyFilter({ inputData, comparator, filters }) {
    const { name } = filters;
  
    const stabilizedThis = inputData.map((el, index) => [el, index]);
  
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
  
    inputData = stabilizedThis.map((el) => el[0]);
  
    if (name) {
      inputData = inputData.filter(
        (record) =>
          record.name.toLowerCase().indexOf(name.toLowerCase()) !== -1 ||
          record.email.toLowerCase().indexOf(name.toLowerCase()) !== -1
          
          // invoice.invoiceTo.name.toLowerCase().indexOf(name.toLowerCase()) !== -1
      );
    }
  
    
  
    return inputData;
  }