import React, { useState, useEffect } from 'react';
// @mui
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// routes
import { paths } from 'src/routes/paths';
// hooks
// Utility
import { exportToExcel } from 'src/utils/export';
// _mock
// components
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import { useSettingsContext } from 'src/components/settings';
import { useLocales } from 'src/locales';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import DonutChart from 'src/screens/components/reports/aging/Chart'

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
// COMPONENTS
import TableRowNew from './tableRow';


// ----------------------------------------------------------------------
const defaultFilters = {
  name: '',
  startDate: null,
  endDate: null,
};
// ----------------------------------------------------------------------

export default function AgingView() {

  const settings = useSettingsContext();

  const { t, currentLang } = useLocales()
  const Translate = (text) => t(text);

  const table = useTable({ defaultOrderBy: "customerName" });

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let result = await getAgingReport();
        result = result.map((item, index) => {
          item.id = index;
          return item;
      });
        setTableData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const [filters, setFilters] = useState(defaultFilters);

  

  const dateError =
    filters.startDate && filters.endDate
      ? filters.startDate.getTime() > filters.endDate.getTime()
      : false;

  const orderByCustomerName = (orderBy) => {
    if(orderBy !== "customerName") {
      return orderBy;
    } 
    
    return currentLang.value === "ar" ? "customerNameAr" : "customerNameEn";   
  }
  const dataFiltered = applyFilter({
    inputData: tableData,
    comparator: getComparator(table.order, orderByCustomerName(table.orderBy)),
    filters,
    dateError,
  });

  const dataInPage = dataFiltered.slice(
    table.page * table.rowsPerPage,
    table.page * table.rowsPerPage + table.rowsPerPage
  );



  const denseHeight = table.dense ? 56 : 76;

  const canReset =
    !!filters.name ||
    (!!filters.startDate && !!filters.endDate);

  const notFound = (!dataFiltered.length && canReset) || !dataFiltered.length;

  const TABLE_HEAD = [
    { id: 'customerName', label: Translate("customerName")  },
    { id: 'balance', label: Translate("balance") },
    { id: 'zeroToThirty', label: Translate("zeroToThirty") },
    { id: 'thirtyOneToSixty', label: Translate("thirtyOneToSixty") },
    { id: 'sixtyOneToNinety', label: Translate("sixtyOneToNinety") },
    { id: 'ninetyOneToOneTwenty', label: Translate("ninetyOneToOneTwenty") },
    { id: 'oneTwentyOnePlus', label: Translate("oneTwentyOnePlus") },
  ];

  const exportHeaderRow = [
    Translate("customerName"),
    Translate("balance"),
    Translate("zeroToThirty"),
    Translate("thirtyOneToSixty"),
    Translate("sixtyOneToNinety"),
    Translate("ninetyOneToOneTwenty"),
    Translate("oneTwentyOnePlus")
  ];
  
  const calculateOverallTotal = () => 
        calculate0to30Total() +
        calculate31to60Total() +
        calculate61to90Total() +
        calculate91to120Total() +
        calculateAbove120Total(); 

  const calculate0to30Total = () => tableData.reduce((acc, item) => acc + item.zeroToThirty, 0);
  const calculate31to60Total = () => tableData.reduce((acc, item) => acc + item.thirtyOneToSixty, 0);
  const calculate61to90Total = () => tableData.reduce((acc, item) => acc + item.sixtyOneToNinety, 0);
  const calculate91to120Total = () => tableData.reduce((acc, item) => acc + item.ninetyOneToOneTwenty, 0);
  const calculateAbove120Total = () => tableData.reduce((acc, item) => acc + item.oneTwentyOnePlus, 0);


  const totalsRow = {
    customerNameEn: Translate("total"),
    customerNameAr: Translate("total"),
    zeroToThirty: calculate0to30Total(),
    thirtyOneToSixty: calculate31to60Total(),
    sixtyOneToNinety: calculate61to90Total(),
    ninetyOneToOneTwenty: calculate91to120Total(),
    oneTwentyOnePlus: calculateAbove120Total()
  }
  const PercentageRow = {
    customerNameEn: Translate("percentage"),
    customerNameAr: Translate("percentage"),
    zeroToThirty: calculate0to30Total(),
    thirtyOneToSixty: calculate31to60Total(),
    sixtyOneToNinety: calculate61to90Total(),
    ninetyOneToOneTwenty: calculate91to120Total(),
    oneTwentyOnePlus: calculateAbove120Total()
  }

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading={Translate("aging")}
          links={[
            // {
            //   name: Translate("app"),
            //   href: paths.dashboard.root,
            // },
            // {
            //   name: Translate("reports"),
            // },
            // {
            //   name: Translate("aging"),
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
            onClick={() => exportToExcel(tableData, exportHeaderRow, currentLang.value, Translate("currencyShortcut"), 'Aging', `${Translate("aging")}-${new Date().toLocaleDateString()}`)}
            startIcon={<Iconify icon="eva:download-outline" />}
            sx={{
              margin: 0.5
            }}
          >
            {Translate("export")}
          </Button>
        </Stack>
        <Card sx={{ mb: 3 }}>
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
                  {dataFiltered
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
                    <TableRowNew
                      key={999999}
                      row={totalsRow}
                      selected={table.selected.includes(999)}
                    />

                    <TableRowNew
                      key={1000000}
                      row={PercentageRow}
                      selected={table.selected.includes(999)}
                      isPercentage
                    />

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
            denseLabel={Translate("dense")}
            dense={table.dense}
            onChangeDense={table.onChangeDense}
          />


           
        </Card>
        <Card  sx={{ display:'flex', justifyContent: 'center', mb: 3 }}>
          <DonutChart data={dataFiltered}/>  
        </Card>    
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
