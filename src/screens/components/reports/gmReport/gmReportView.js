import React, { useState, useCallback, useEffect } from 'react';
import useLocales from 'src/locales/use-locales';
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
// hooks
// Utility
import { exportToExcel } from 'src/utils/export';
// _mock
// components
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import BarChart from 'src/screens/components/reports/gmReport/Chart';

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
import { getGmReport } from 'src/data-access/reports';
// COMPONENTS
import TableRowNew from './tableRow';
import ReportToolBar from './reportToolBar';


// ----------------------------------------------------------------------
const defaultFilters = {
  name: '',
  startDate: null,
  endDate: null,
};
// ----------------------------------------------------------------------

export default function GmReportView() {
  const theme = useTheme();

  const settings = useSettingsContext();

  const router = useRouter();

  const { t, currentLang } = useLocales()
  const Translate = (text) => t(text);

  const table = useTable({ defaultOrderBy: 'issueInvoiceDate' });

  const [tableData, setTableData] = useState([]);
  const [collectionSource, setCollectionSource] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let collections = collectionSource.reduce((acc, item) => `${acc + item},`, '');
        
        if(collections) {
          collections = collections.substring(-1);
        }

        
          let result = await getGmReport(collectionSource);
          result = result.map((item, index) => {
            item.id = index;
            return item;
          })
          setTableData(result);

        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if(collectionSource.length > 0) {
      fetchData();
    } else {
      setTableData([]);
    }
    
  }, [collectionSource]);

  const [filters, setFilters] = useState(defaultFilters);


  const dateError =
    filters.startDate && filters.endDate
      ? filters.startDate.getTime() > filters.endDate.getTime()
      : false;

  const getOrderBy = (orderBy) => {
    if(orderBy !== "week") {
      return orderBy;
    } 
    
    return "date";   
  }

  const dataFiltered = applyFilter({
    inputData: tableData,
    comparator: getComparator(table.order, getOrderBy(table.orderBy)),
    filters,
    dateError,
  });

  const dataInPage = dataFiltered.slice(
    table.page * table.rowsPerPage,
    table.page * table.rowsPerPage + table.rowsPerPage
  );

  const handleOnChange = (value) => {
    setCollectionSource(value);
  } 

  const handleOnChange2 = useCallback(
    (name, value) => {
      table.onResetPage();
      setFilters((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    [table]
  );

  const denseHeight = table.dense ? 56 : 76;

  const canReset =
    !!filters.name ||
    (!!filters.startDate && !!filters.endDate);

  const notFound = (!dataFiltered.length && canReset) || !dataFiltered.length;

  const TABLE_HEAD = [
    { id: 'week', label: Translate('week') },
    { id: 'ready', label: Translate('ready') },
    { id: 'notReady', label: Translate('notReady') },
    { id: 'reject', label: Translate('reject') }
  ];

  const exportHeaderRow = [
    {key: "date", value: Translate("week"), isWeek: true},
    {key: "ready", value: Translate("ready"), isCurreny: true,  currency: Translate("currencyShortcut")},
    {key: "notReady", value: Translate("notReady"), isCurreny: true,  currency: Translate("currencyShortcut")},
    {key: "reject", value: Translate("reject"), isCurreny: true,  currency: Translate("currencyShortcut")},
  ];
  

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading={Translate("gmReport")}
          links={[
            // {
            //   name: Translate("app"),
            //   href: paths.dashboard.root,
            // },
            // {
            //   name: Translate("reports"),
            // },
            // {
            //   name: Translate("gmReport"),
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
            onClick={() => exportToExcel(tableData, exportHeaderRow, `${Translate("gmReport")}-${new Date().toLocaleString()}`)}
            startIcon={<Iconify icon="eva:download-outline" />}
            sx={{
              margin: 0.5
            }}
          >
            {Translate("export")}
          </Button>
        </Stack>
        <Card sx={{ mb: 3 }}>
          <ReportToolBar onChange={(value) => handleOnChange(value)}/>
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
                  checkboxEnabled={false}
                  // onSelectAllRows={(checked) =>
                  //   table.onSelectAllRows(
                  //     checked,
                  //     tableData.map((row) => row.id)
                  //   )
                  // }
                />

                <TableBody>
                  {dataFiltered && dataFiltered
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
        <Card  sx={{  mb: 3 }}>
          <BarChart data={tableData}/>  
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
