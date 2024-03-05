import * as React from 'react';
import { useLocales } from 'src/locales';
import { useState, useCallback, useEffect } from 'react';
// @mui
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Stack from '@mui/material/Stack';
import Divider  from '@mui/material/Divider';
import Button from '@mui/material/Button';

// routes
import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
import { Link, useNavigate } from 'react-router-dom';

// components
import Iconify from 'src/components/iconify';
import { RouterLink } from 'src/routes/components';
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
// Utility
import { exportToExcel } from 'src/utils/export';
// DATA ACCESS
import { getAllInvoices } from 'src/data-access/invoice'
import { _departments } from 'src/lists/departments'
import { _statusList } from 'src/lists/paidStatus'
import { getUserRole } from 'src/helpers/roleHelper';
import { getAllCustomers, deleteCustomer } from 'src/data-access/customers';
//
import { UserRoles } from 'src/helpers/constantsHelper';
import InvoiceTableFiltersResult from 'src/sections/invoice/invoice-table-filters-result';
import CustomerTableRow from './CustomerTableRow';
import CustomerTableToolbar from './CustomerTableToolbar';

// ----------------------------------------------------------------------



const defaultFilters = {
  name: '',
  service: [],
  paidStatus: [],
  status: 'all',
  startDate: null,
  endDate: null,
};
// ----------------------------------------------------------------------

export default function CustomerListView() {

  const settings = useSettingsContext();

  const router = useRouter();

  const table = useTable({ defaultOrderBy: 'customerCode' });

  const navigate = useNavigate();

  const { t, currentLang } = useLocales()
  const Translate = (text) => t(text);

  const ROLE = getUserRole()

  const [tableData, setTableData] = useState([]);
  const [filters, setFilters] = useState(defaultFilters);
  const [refresh, setRefresh] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllCustomers();
        setTableData(result);
        
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };
    
    fetchData();
  }, [refresh]);

  const TABLE_HEAD = [
    { id: 'customerCode', label: Translate("customerCode")  },
    { id: 'customerNameEn', label: Translate("customerNameEn")  },
    { id: 'customerNameAr', label: Translate("customerNameAr")  },
    { id: '' },
  ];

  const exportHeaderRow = [
    { key: 'customerCode', value: Translate("customerCode")},
    { key: 'customerNameEn', value: Translate("customerNameEn")},
    { key: 'customerNameAr', value: Translate("customerNameAr")},
  ];

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

  const handleRefresh = () => {
    setRefreshKey((prevKey) => prevKey + 1);
  };

  const dataInPage = dataFiltered.slice(
    table.page * table.rowsPerPage,
    table.page * table.rowsPerPage + table.rowsPerPage
  );

  const denseHeight = table.dense ? 56 : 76;

  const canReset =
    !!filters.name ||
    !!filters.service.length ||
    filters.status !== 'all' ||
    (!!filters.startDate && !!filters.endDate);

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

  // const handleDeleteRow = useCallback(
  //   (id) => {
  //     const deleteRow = tableData.filter((row) => row.id !== id);
  //     setTableData(deleteRow);

  //     table.onUpdatePageDeleteRow(dataInPage.length);
  //   },
  //   [dataInPage.length, table, tableData]
  // );

  const handleDeleteRow = (id) => {
    let success = true;
    const deleteData = async () => {
      try {
        success = await deleteCustomer(id);          
      } catch (error) {
        console.error('Error fetching invoices:', error);
      } 
      console.log("Success status: ", success);
      if (success) {
        // Fetch data only if deletion was successful
        try {
          const result = await getAllInvoices();
          setTableData(result);
        } catch (error) {
          console.error('Error fetching invoices:', error);
        }
    
        // Update refresh state after fetching data
        setRefresh(!refresh);
      }
    };
    
    deleteData();
};


  const handleEditRow = useCallback(
    (id) => {
      router.push(paths.dashboard.customers.edit(id));
    },
    [router]
  );

  const handleViewRow = useCallback(
    (id) => {
      router.push(paths.dashboard.invoice.details(id));
    },
    [router]
  );


  const handleResetFilters = useCallback(() => {
    setFilters(defaultFilters);
  }, []);


  const createPermission = [UserRoles.admin, UserRoles.operation].includes(ROLE)

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading={Translate("list")}
          links={[
            // {
            //   name: Translate("app"),
            //   href: paths.dashboard.root,
            // },
            // {
            //   name: Translate("customer"),
              
            // },
            // {
            //   name: Translate("list"),
            // },
          ]}
          // action= {
          //   <Stack
          //     direction="row"
          //     divider={<Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />}
          //     sx={{ py: 2 }}
          //   >
              
              
          // </Stack>
            
          // }
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
          
          { createPermission && <Button
            onClick={() => navigate(paths.dashboard.customers.create)}
            variant="contained"
            startIcon={<Iconify icon="mingcute:add-line" />}
            sx={{
              margin: 0.5
            }}
          >
            {Translate("newCustomer")}
          </Button> }    
          
          <Button
            variant="contained"
            color='primary'
            onClick={() => exportToExcel(tableData, exportHeaderRow, `${Translate("customers")}-${new Date().toLocaleString()}`)}
            startIcon={<Iconify icon="eva:download-outline" />}
            sx={{
              margin: 0.5
            }}
          >
            {Translate("export")}
          </Button>
        </Stack>

        <Card>
          <CustomerTableToolbar
            filters={filters}
            onFilters={handleFilters}
            dateError={dateError}
            serviceOptions={_departments().map((option) => option)}
            paidStatusOptions={_statusList().map((option) => option)}
          />

          {canReset && (
            <InvoiceTableFiltersResult
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
                  // onSelectAllRows={(checked) =>
                  //   table.onSelectAllRows(
                  //     checked,
                  //     tableData.map((row) => row.id)
                  //   )
                  // }
                  checkboxEnabled={false}
                />

                <TableBody>
                  {dataFiltered
                    .slice(
                      table.page * table.rowsPerPage,
                      table.page * table.rowsPerPage + table.rowsPerPage
                    )
                    .map((row) => (
                      <CustomerTableRow
                        key={row.id}
                        row={row}
                        selected={table.selected.includes(row.id)}
                        onSelectRow={() => table.onSelectRow(row.id)}
                        onViewRow={() => handleViewRow(row.id)}
                        onEditRow={() => handleEditRow(row.id)}
                        onDeleteRow={() => handleDeleteRow(row.id)}
                        handleOpenInquiry={() => console.log(row.id)}
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
  
    const stabilizedThis = inputData ? inputData.map((el, index) => [el, index]) : [];
  
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
  
    inputData = stabilizedThis.map((el) => el[0]);
  
    if (name) {
      inputData = inputData.filter(
        (invoice) =>
          invoice.customerNameEn.toLowerCase().indexOf(name.toLowerCase()) !== -1 ||
          invoice.customerNameAr.indexOf(name.toLowerCase()) !== -1          
      );
    }
  
    return inputData;
  }