import * as React from 'react';
import sumBy from 'lodash/sumBy';
import { useState, useCallback, useEffect } from 'react';
// @mui
import { useTheme, alpha } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import IconButton from '@mui/material/IconButton';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

// @mui Dialog
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Alert from '@mui/material/Alert';
import { Icon } from '@iconify/react';
import Collapse from '@mui/material/Collapse';

import CircularProgress from '@mui/material/CircularProgress';

// routes
import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// utils
import { fTimestamp } from 'src/utils/format-time';
// _mock
// components
import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import { ConfirmDialog } from 'src/components/custom-dialog';
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import {
  useTable,
  getComparator,
  emptyRows,
  TableNoData,
  TableEmptyRows,
  TableHeadCustom,
  TableSelectedAction,
  TablePaginationCustom,
} from 'src/components/table';

// DATA ACCESS
import { getAllInvoices, getInvoiceImportUrl, getInvoiceInquiryData } from 'src/data-access/invoice'

import { _departments } from 'src/lists/departments'
import { _statusList } from 'src/lists/paidStatus'
import Fileupload from 'src/screens/components/dialogs/fileupload';
//
import InvoiceAnalytic from 'src/sections/invoice/invoice-analytic';
import InvoiceTableFiltersResult from 'src/sections/invoice/invoice-table-filters-result';
import InvoiceTableRow from './InvoiceTableRow';
import InvoiceTableToolbar from './InvoiceTableToolbar';





// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'invoiceNumber', label: 'Invoice Number' },
  { id: 'issueInvoiceDate', label: 'Issue Date' },
  { id: 'daysToCollected', label: 'Days To Collect' },
  { id: 'invoiceAmount', label: 'Amount' },
  { id: 'paidStatus', label: 'Paid Status', align: 'center' },
  { id: 'department', label: 'Department' , align: 'center' },
  { id: '' },
];

const defaultFilters = {
  name: '',
  service: [],
  paidStatus: [],
  status: 'all',
  startDate: null,
  endDate: null,
};

const dataGridData = await getAllInvoices()
// ----------------------------------------------------------------------

export default function InvoiceListView() {
  const theme = useTheme();

  const settings = useSettingsContext();

  const router = useRouter();

  const table = useTable({ defaultOrderBy: 'issueInvoiceDate' });

  const confirm = useBoolean();

  const [tableData, setTableData] = useState(dataGridData);

  const [filters, setFilters] = useState(defaultFilters);

  const [open, setOpen] = React.useState(false);
  const [openErrorList, setOpenErrorList] = useState(false);
  const [errorList, setErrorList] = useState(['']);
  const [isEmportError, setIsEmportError] = useState(false);
  const [isUploadComplete, setIsUploadComplete] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [openInquiry, setOpenInquiry] = useState(false);
  const [inquiryId, setInquiryId] = useState(0);
  const [inquiryData, setInquiryData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {

        if (inquiryId) {
          const result = await getInvoiceInquiryData(inquiryId);
          setInquiryData(result);
        } else {
          setInquiryData({});
        }
        
      } catch (error) {
        console.error('Error fetching invoices:', error);
      }
    };

    
    fetchData();
  }, [inquiryId]);

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

  const denseHeight = table.dense ? 56 : 76;

  const canReset =
    !!filters.name ||
    !!filters.service.length ||
    filters.status !== 'all' ||
    (!!filters.startDate && !!filters.endDate);

  const notFound = (!dataFiltered.length && canReset) || !dataFiltered.length;

  const getInvoiceLength = (status) => tableData.filter((item) => item.paidStatus === status).length;

  const getTotalAmount = (status) =>
    sumBy(
      tableData.filter((item) => item.paidStatus === status),
      'invoiceAmount'
    );

  const getPercentByStatus = (status) => (getInvoiceLength(status) / tableData.length) * 100;

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
      router.push(paths.dashboard.invoice.edit(id));
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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleOpenInquiry = (id) => {
    setInquiryId(id);
    setOpenInquiry(true);
  }

  const handleCloseInquiry = () => {
    setInquiryId(0);
    setOpenInquiry(false);
  }

  const handleClose = () => {
    setOpen(false);
    setIsUploadComplete(false);
  };

  const handleClickOpenErrorList = () => {
    setOpenErrorList(true);
  };

  const handleCloseErrorList = () => {
    setOpenErrorList(false);
  };
  
  const handleFileUpload = () => {

    
    console.log('Loading:', loading);

    const formData = new FormData();
    
    const fileInput = document.querySelector("#file").files[0];      
    
    if(fileInput) {
      setLoading(true);
      formData.append('file', fileInput); 
      
      try {
        
        
        // Send create invoice request
        
        console.log('Loading', loading)

        const url = getInvoiceImportUrl()
        console.log('Url', url )
        fetch(url, {
          mode: 'cors',
          method: 'POST',
          headers: {
            'Accept': 'application/json',
          },
          body: formData,
          Cache: 'default'  
        })
        .then(async response => {
          await new Promise(resolve => setTimeout(resolve, 3000));
          
          if (!response.ok) {
            if (response.status === 400 || response.status === 415) {

              const error = await response.text();

              throw new Error(`Bad Request: ${error}`);
            } 
            // For other error status codes, throw a generic error
            throw new Error('Network response was not ok');
            
          }
          return response.text(); // Use text() instead of json()
          
        })
        .then(res => {
          setIsEmportError(false)
          setAlertMessage(res)
        })
        .catch(error => {
          console.error('Fetch Error:', error);
          // setErrorList(error)
          setAlertMessage("Invalid Data, check the file and try again")
          // setOpenErrorList(true)
          // setOpen(false)

          setIsEmportError(true)
        })
         
      } catch (error) {
        // setAlertMessage(error)
        // setIsEmportError(true)
      } finally {
        setLoading(false)
      }
    }
    else {
      setIsEmportError(true)
      setAlertMessage('No file selecetd.')
    }
    setIsUploadComplete(true)
  }

  
  
  const rows = [
    {name: 'Frozen yoghurt', calories: 200, fat: 8.0, carbs: 24, protein: 4.0},
    {name: 'Ice cream sandwich', calories: 200, fat: 8.0, carbs: 37, protein: 4.3},
    {name: 'Eclair', calories: 200, fat: 8.0, carbs: 24, protein: 6.0},
    {name: 'Cupcake', calories: 200, fat: 8.0, carbs: 67, protein: 4.3},
    {name: 'Gingerbread', calories: 200, fat: 8.0, carbs: 49, protein: 3.9}
  ];
  

  return (
    <>
      <Container maxWidth={settings.themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading="List"
          links={[
            {
              name: 'Dashboard',
              href: paths.dashboard.root,
            },
            {
              name: 'Invoice',
              href: paths.dashboard.invoice.root,
            },
            {
              name: 'List',
            },
          ]}
          action= {
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />}
              sx={{ py: 2 }}
            >
              <Button
                component={RouterLink}
                href={paths.dashboard.invoice.new}
                variant="contained"
                startIcon={<Iconify icon="mingcute:add-line" />}
              >
                New Invoice
              </Button>
              <Button
              component={RouterLink}
              variant="contained"
              color='primary'
              onClick={handleClickOpen}
              startIcon={<Iconify icon="solar:import-bold" />}
            >
              Import
            </Button>
          </Stack>
            
          }
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
                title="Total"
                total={tableData.length}
                percent={100}
                price={sumBy(tableData, 'invoiceAmount')}
                icon="solar:bill-list-bold-duotone"
                color={theme.palette.info.main}
              />

               <InvoiceAnalytic
                title="Paid"
                total={getInvoiceLength('paid')}
                percent={getPercentByStatus('paid')}
                price={getTotalAmount('paid')}
                icon="solar:file-check-bold-duotone"
                color={theme.palette.success.main}
              />

              <InvoiceAnalytic
                title="UnPaid"
                total={getInvoiceLength('unpaid')}
                percent={getPercentByStatus('unpaid')}
                price={getTotalAmount('unpaid')}
                icon="solar:sort-by-time-bold-duotone"
                color={theme.palette.warning.main}
              />
            </Stack>
          </Scrollbar>
        </Card>

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
              onSelectAllRows={(checked) =>
                table.onSelectAllRows(
                  checked,
                  tableData.map((row) => row.id)
                )
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
                        selected={table.selected.includes(row.id)}
                        onSelectRow={() => table.onSelectRow(row.id)}
                        onViewRow={() => handleViewRow(row.id)}
                        onEditRow={() => handleEditRow(row.id)}
                        onDeleteRow={() => handleDeleteRow(row.id)}
                        handleOpenInquiry={() => handleOpenInquiry(row.id)}
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
            onChangeDense={table.onChangeDense}
          />
        </Card>
      </Container>

      <ConfirmDialog
        open={confirm.value}
        onClose={confirm.onFalse}
        title="Delete"
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
            Delete
          </Button>
        }
      />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>File upload</DialogTitle>
        <DialogContent >
          <TextField
            autoFocus
            required
            margin="dense"
            id="file"
            label="Import file"
            type="file"
            fullWidth
            variant="standard"
            inputProps={{ accept: '.xls, .xlsx' }}
          />
            <Collapse in={isUploadComplete}>
              <Alert
                severity={isEmportError ? "error" : "success"}
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setIsUploadComplete(false);
                    }}
                    
                  >
                    <Icon icon="ic:baseline-close" />

                  </IconButton>
                }
                sx={{ mb: 2 }}
              >
                {alertMessage}
              </Alert>
              
            </Collapse>
          
            {loading && <CircularProgress />}
          
        </DialogContent>
        
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleFileUpload} >Import</Button>
        </DialogActions>
      </Dialog> 

      {/* <Dialog open={openErrorList} onClose={handleCloseErrorList}>
        <DialogTitle>Error List</DialogTitle>
        <DialogContent >
        <List sx={{ pt: 0 }}>
          {errorList.map((error, index) => (
            <ListItem disableGutters key={index}>

                <ListItemText primary={`Row${error.rowIndex} Issue: ${error.errorMessage}` } />
            </ListItem>
          ))}
        
        </List>
          
        </DialogContent>
        
        <DialogActions>
          <Button onClick={handleCloseErrorList}>Close</Button>
        </DialogActions>
      </Dialog>  */}
      <Dialog
        open={openInquiry}
        maxWidth={false}
        color="#ef5350"
        // TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}

      >
        <DialogTitle>Invoice Inquiry</DialogTitle>
        <DialogContent>
          <Stack flexDirection="row" justifyContent="space-between" alignItems="center">
            <Typography>Invoice Number</Typography>
            <Typography>Created By</Typography>
            <Typography>Creation Date</Typography>
          </Stack>
          {Object.prototype.hasOwnProperty.call(inquiryData, 'invoiceData') && 
              <Stack flexDirection="row" justifyContent="space-between" alignItems="center">
                <Typography>{inquiryData.invoiceData.invoiceNO}</Typography>
                <Typography>{inquiryData.invoiceData.createdBy}</Typography>
                <Typography>
                  {
                    inquiryData.invoiceData.createdDate.substring(0, inquiryData.invoiceData.createdDate.indexOf('T'))
                  }
                </Typography>
              </Stack>
          }
          <TableContainer sx={{ position: 'relative', overflow: 'unset' }}>
            <TableHead>
              <TableRow>
                <TableCell>Property</TableCell>
                <TableCell align="right">Old Value</TableCell>
                <TableCell align="right">New Value</TableCell>
                <TableCell align="right">Last Updated</TableCell>
                <TableCell align="right">Updated By</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {Object.prototype.hasOwnProperty.call(inquiryData, 'logs') && inquiryData.logs.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                {row.propertyName}
                </TableCell>
                <TableCell align="right">{row.oldValue}</TableCell>
                <TableCell align="right">{row.newValue}</TableCell>
                <TableCell align="right">{row.dateModified.substring(0, row.dateModified.indexOf('T'))}</TableCell>
                <TableCell align="right">{row.modifiedBy}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenInquiry(false)}>Close</Button>
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
          invoice.invoiceNo.toLowerCase().indexOf(name.toLowerCase()) !== -1
          
          // invoice.invoiceTo.name.toLowerCase().indexOf(name.toLowerCase()) !== -1
      );
    }
  
    if (status !== 'all') {
      inputData = inputData.filter((invoice) => invoice.status === status);
    }
  
    if (service.length) {
      inputData = inputData.filter((invoice) =>
        // service.map((serviceName) => serviceName.toLowerCase()).includes(invoice.department)
        service.includes('All') || service.includes(invoice.department)
      );
    }
    
    if (paidStatus.length) {
      inputData = inputData.filter((invoice) =>
        paidStatus.includes('All') || paidStatus.map((option) => option.toLowerCase()).includes(invoice.paidStatus)
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