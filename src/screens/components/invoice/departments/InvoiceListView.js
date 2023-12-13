import sumBy from 'lodash/sumBy';
import React, { useState, useCallback, useEffect, useMemo  } from 'react';
import { useNavigate  } from 'react-router-dom';
import { useLocales } from 'src/locales';
// @mui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import IconButton from '@mui/material/IconButton';
import TableContainer from '@mui/material/TableContainer';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Icon } from '@iconify/react';
import Collapse from '@mui/material/Collapse';
import Tooltip from '@mui/material/Tooltip';
// @mui Dialog
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
// routes
import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// utils
import { fTimestamp } from 'src/utils/format-time';
// _mock
import PropTypes from 'prop-types';
// components
import Scrollbar from 'src/components/scrollbar';
import { ConfirmDialog } from 'src/components/custom-dialog';
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import Iconify from 'src/components/iconify';
import {
  useTable,
  getComparator,
  emptyRows,
  TableNoData,
  TableEmptyRows,
  TableHeadCustom,
  TablePaginationCustom,
  TableSelectedAction,
} from 'src/components/table';
// DATA ACCESS
import { _departments } from 'src/lists/departments'
import { _statusList } from 'src/lists/paidStatus'
import { getUsersByRole } from 'src/data-access/users';
// Utility
import { exportToExcel } from 'src/utils/export';
// COMPONENTS
import InvoiceAnalytic from 'src/sections/invoice/invoice-analytic';
import InvoiceTableFiltersResult from 'src/screens/components/invoice/departments/InvoiceTableFiltersResult';
import { getInvoicesByDepartment, getInvoicesBySalesConfirmation  } from 'src/data-access/invoice'
import InvoiceTableRow from './InvoiceTableRow';
import InvoiceTableToolbar from './InvoiceTableToolbar';



// ----------------------------------------------------------------------
const defaultFilters = {
  name: '',
  startDate: null,
  endDate: null,
};
// ----------------------------------------------------------------------

export default function InvoiceListView({department, salesStatus}) {
  const theme = useTheme();

  const navigate = useNavigate();

  const settings = useSettingsContext();

  const router = useRouter();

  const table = useTable({ defaultOrderBy: 'issueInvoiceDate' });

  const confirm = useBoolean();

  const { t, currentLang } = useLocales()
  const currentLanguage = currentLang.value;
  const Translate = (text) => t(text);
  
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [dataUpdated, setDataUpdated] = useState(false);

  

  useEffect(() => {
    let role = '';
    if (salesStatus === 1) {
      role = 'installation';
    } else if (salesStatus === 3) {
      role = 'collection';
    } 
    

    const fetchData = async () => {
      try {

        if (department !== undefined) {
          const departmentId = department === -1 ? 0 : department
          const result = await getInvoicesByDepartment(departmentId);
          setTableData(result);
        } else {
          const result = await getInvoicesBySalesConfirmation(Boolean(salesStatus));
          setTableData(result);
        }
        
      } catch (error) {
        console.error('Error fetching invoices:', error);
      }
    };

    const fetchUsers = async () => {
      try {

        if (role) {
          const result = await getUsersByRole(role);
          console.log(result);
          setAssignUser(result.length ? result[0].username : '') ;
          setAssignedUsers(result);
        } 
        
      } catch (error) {
        console.error('Error fetching users list:', error);
      }
    };

    fetchData();
    fetchUsers();
  }, [ department, salesStatus]);

  const [filters, setFilters] = useState(defaultFilters);
  const [isConfirmReport, setIsConfirmReport] = useState(department === undefined);
  const [openAssignUser, setOpenAssignUser] = useState(false);
  const [assignUser, setAssignUser] = useState('');
  const [invoiceId, setInvoiceId] = useState(0);
  const [openAlert, setOpenAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('Success');

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

  const dataInPage = dataFiltered.slice(
    table.page * table.rowsPerPage,
    table.page * table.rowsPerPage + table.rowsPerPage
  );

  const handleClose = () => {
    setOpenAssignUser(false);
  }

  const handleOpen = (id) => {

    setInvoiceId(id);
    setOpenAssignUser(true);
  }

  const denseHeight = table.dense ? 56 : 76;

  const canReset =
    !!filters.name ||
    (!!filters.startDate && !!filters.endDate);

  const notFound = (!dataFiltered.length && canReset) || !dataFiltered.length;

  const TABLE_HEAD = [
    { id: 'invoiceNumber', label: Translate("invoiceNumber") },
    { id: 'issueInvoiceDate', label: Translate("issueDate") },
    { id: 'invoiceAmount', label: Translate("amount") },
    { id: 'region', label: Translate("region"), align: 'center' },
    { id: 'productName', label: Translate("productName"), align: 'center' },
    { id: '6', label: '' },
  ];

  const exportHeaderRow = [
    Translate("invoiceNumber"),
    Translate("customerName"),
    Translate("issueDate"),
    Translate("amount"),
    Translate("region"),
    Translate("productName")
  ];

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

  // Fetch data
  const handleDeleteRow = useCallback(
    (id) => {
      const deleteRow = tableData.filter((row) => row.id !== id);
      setTableData(deleteRow);

      table.onUpdatePageDeleteRow(dataInPage.length);
    },
    [dataInPage.length, table, tableData]
  );

  const handleDeleteRows = useCallback(() => {
    const deleteRows = tableData.filter((row) => !table.selected.includes(row.id));
    setTableData(deleteRows);

    table.onUpdatePageDeleteRows({
      totalRows: tableData.length,
      totalRowsInPage: dataInPage.length,
      totalRowsFiltered: dataFiltered.length,
    });
  }, [dataFiltered.length, dataInPage.length, table, tableData]);

  const handleEditRow = useCallback(
    (id) => {
      router.push(paths.dashboard.invoice.editOperation(id));
    },
    [router]
  );

  const handleViewRow = useCallback(
    (id) => {
      router.push(paths.dashboard.invoice.details(id));
    },
    [router]
  );

  const handleFilterStatus = useCallback(
    (event, newValue) => {
      handleFilters('paidStatus', newValue);
    },
    [handleFilters]
  );

  const handleResetFilters = useCallback(() => {
    setFilters(defaultFilters);
  }, []);

  const handleConfirmInvoice = useCallback(() => {
    setFilters(defaultFilters);
  }, []);

  
  const getHeading = (id, salesConfirmStatus) => {
    let text = '';
    if (id) {
      switch(id) {
        case -1:
          text = Translate("operation");
          break;
        case 1:
          text = Translate("installation");
          break;
        case 2:
          text = Translate("sales");
          break;
        case 3:
          text = Translate("collection");
          break;
        case 4:
          text = Translate("tenderAndContracts");
          break;
        default:
          break;
      }
    } else {
      switch(salesConfirmStatus) {
        case 0:
          text = Translate("confirm_invoices");
          break;
        case 1:
          text = Translate("assign_engineer");
          break;
        case 2:
          text = Translate("assign_collector");
          break;
        default:
          break;
      }
    }

    return text;
  }
  
  const heading = getHeading(department, salesStatus)

  // Add Empty headers for Accept and reject
  if(isConfirmReport && salesStatus === 0){
    TABLE_HEAD.push({ id: '7', label: '' });
    TABLE_HEAD.push({ id: '8', label: '' });
  }

  // Add Empty headers for Assign collecter/engineer
  if(isConfirmReport && salesStatus > 0){
    TABLE_HEAD.push({ id: '7', label: '' });
    
  }

  const handleConfirmAndReject = async (id, state) => {    
    try {
      console.log(`https://invoicecollectionsystemapi.azurewebsites.net/api/Invoices/${id}/${state}BySales`)
      const redirectUrl = paths.departments.sales.confirm_invoices;
      // Send create invoice request
      
      fetch(`https://invoicecollectionsystemapi.azurewebsites.net/api/Invoices/${id}/${state}BySales`, {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        // body: JSON.stringify(body),
        Cache: 'default'
      })
      .then(res => {
        // Check if the status code is 200 or 204
        if (res.ok) {
          setDataUpdated(!dataUpdated);
          // Check if the status code is 200 or 204
          if (res.status === 204) {
            return null; // Handle 204 No Content
          }  if (res.status === 200) {
            return res.json(); // Parse JSON for other successful responses
          } 
          throw new Error(`Unexpected status code: ${res.status}`);
          
        } 
        throw new Error('Network response was not ok');
      })
      .then(res => {
        setAlertMessage(Translate("success"));
      })
      .catch(error => {
        console.log(error);
        setAlertMessage(error)
      })


      
      // console.info('DATA', JSON.stringify(data, null, 2));
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setOpenAlert(true);
    }
  };

  const handleAssignUser = async () => {    
    try {
      const endpoint = salesStatus === 1 ? 'setResponsibleEngineerByUsername' : 'setCollectorByUsername';
      const url = `https://invoicecollectionsystemapi.azurewebsites.net/api/Invoices/${invoiceId}/${endpoint}`;
      console.log(url);

      const body= {
        userName: assignUser
      };

      console.log(body);

      // Send create invoice request
      setOpenAssignUser(false);
      

      fetch(url, {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
        Cache: 'default'
      })
      .then(res => {
        // Check if the status code is 200 or 204
        if (res.ok) {
          // Check if the status code is 200 or 204
          if (res.status === 204) {
            return null; // Handle 204 No Content
          }  if (res.status === 200) {
            return res.json(); // Parse JSON for other successful responses
          } 

          throw new Error(`Unexpected status code: ${res.status}`);
          
        } 

        throw new Error('Network response was not ok');
      })
      .then(res => {
        setAlertMessage(Translate("success"));
      })
      .catch(error => {
        console.log(error)
        setAlertMessage(error);
      });


    } catch (error) {
      console.error('Error:', error);
    } finally {
      setOpenAlert(true);
    }
  };

  return (
    <>
      <Container maxWidth={settings.themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading={heading}
          links={[
            {
              name: Translate("app"),
              href: paths.dashboard.root,
            },
            {
              name: Translate("invoice"),
              href: paths.dashboard.invoice.root,
            },
            {
              name: Translate("list"),
            },
          ]}
          sx={{
            mb: { xs: 3, md: 5 },
          }}
        />

        <Card
          sx={{
            mb: { xs: 3, md: 5 },
          }}
        >
          <Scrollbar>
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />}
              sx={{ py: 2 }}
            >
              <InvoiceAnalytic
                title={Translate("total")}
                total={tableData.length}
                percent={100}
                price={sumBy(tableData, 'invoiceAmount')}
                icon="solar:bill-list-bold-duotone"
                color={theme.palette.info.main}
              />

              
            </Stack>
          </Scrollbar>
        </Card>
        <Stack
          direction="row"
          justifyContent="flex-end"
          divider={<Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />}
          sx={{ py: 2 }}
        >
          <Button
            variant="contained"
            color='primary'
            onClick={() => exportToExcel(tableData, exportHeaderRow, currentLanguage, Translate("currencyShortcut"), 'InvoiceByDepartments', `${heading}-${new Date().toLocaleDateString()}`)}
            startIcon={<Iconify icon="eva:download-outline" />}
          >
            {Translate("export")}
          </Button>
        </Stack>
        <Card>
           

          <InvoiceTableToolbar
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
            {/* <TableSelectedAction
              dense={table.dense}
              numSelected={table.selected.length}
              rowCount={tableData.length}
              onSelectAllRows={(checked) => {
                  console.log('Selected:', checked);
                  table.onSelectAllRows(
                    checked,
                    tableData.map((row) => row.id)
                  );
                  
                }
              }
              action={
                <Stack direction="row">
                  <Tooltip title="Sent">
                    <IconButton color="primary">
                      <Iconify icon="iconamoon:send-fill" />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Download">
                    <IconButton color="primary">
                      <Iconify icon="eva:download-outline" />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Print">
                    <IconButton color="primary">
                      <Iconify icon="solar:printer-minimalistic-bold" />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Delete">
                    <IconButton color="primary" onClick={confirm.onTrue}>
                      <Iconify icon="solar:trash-bin-trash-bold" />
                    </IconButton>
                  </Tooltip>
                </Stack>
              }
            /> */}

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
                />

                <TableBody>
                  {dataFiltered
                    .slice(
                      table.page * table.rowsPerPage,
                      table.page * table.rowsPerPage + table.rowsPerPage
                    )
                    .map((row) => (
                      <InvoiceTableRow
                        key={row.id}
                        row={row}
                        salesStatus={salesStatus}
                        selected={table.selected.includes(row.id)}
                        onSelectRow={() => table.onSelectRow(row.id)}
                        onViewRow={() => handleViewRow(row.id)}
                        onEditRow={() => handleEditRow(row.id)}
                        onDeleteRow={() => handleDeleteRow(row.id)}
                        handleOpen={(id) => handleOpen(id)}
                        handleConfirmAndReject={(id, state) => handleConfirmAndReject(id, state)}
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
            //
            dense={table.dense}
            onChangeDense={table.onChangeDense}
          />
        </Card>

        <Box sx={{ width: '50%', flex: 1, marginLeft:'auto', marginTop:'10px' }}>
          <Collapse in={openAlert}>
            <Alert
              severity={alertMessage === 'Success' ? 'success' : 'error'}
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpenAlert(false);
                  }}
                >
                  <Icon icon="ic:round-close" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              {alertMessage}
            </Alert>
          </Collapse>
        </Box>
      </Container>

      <ConfirmDialog
        open={confirm.value}
        onClose={confirm.onFalse}
        title={Translate("Delete")}
        content={
          <>
            Are you sure want to delete <strong> {table.selected.length} </strong> items?
          </>
        }
        action={
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              handleDeleteRows();
              confirm.onFalse();
            }}
          >
            {Translate("Delete")}
          </Button>
        }
      />

      <Dialog
        open={openAssignUser}
        color="#ef5350"
        // TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}

      >
        <DialogTitle>{Translate("assignUser")}</DialogTitle>
        <DialogContent>
          <Select
            value={assignUser}
            onChange={(newValue) => {
              console.log(newValue.target.value);
              setAssignUser(newValue.target.value);
            }}
            input={<OutlinedInput label="" />}
            renderValue={(selected) => selected}
            sx={{ textTransform: 'capitalize', fullWidth: true }}
          >
            {assignedUsers.map((option) => (
              <MenuItem key={option.id} value={option.username}>
                {option.username}
              </MenuItem>
            ))}
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{Translate("close")}</Button>
          <Button onClick={handleAssignUser}>{Translate("save")}</Button>
        </DialogActions>
      </Dialog>

      

    </>
  );
}



function applyFilter({ inputData, comparator, filters, dateError }) {
    const { name, status, service, startDate, paidStatus, endDate } = filters;
  
    const stabilizedThis = inputData.map((el, index) => [el, index]);
  
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
          invoice.invoiceNo.toLowerCase().indexOf(name.toLowerCase()) !== -1 ||
          invoice.customerNameAr.indexOf(name) !== -1
      );
    }
  
    if (!dateError) {
      if (startDate && endDate) {
        inputData = inputData.filter(
          (invoice) =>
            fTimestamp(invoice.issueInvoiceDate) >= fTimestamp(startDate) &&
            fTimestamp(invoice.issueInvoiceDate) <= fTimestamp(endDate)
        );
      }
    }
  
    return inputData;
  }

  InvoiceListView.propTypes = {
    department: PropTypes.number,
    salesStatus: PropTypes.number,
  }