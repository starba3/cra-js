import * as React from 'react';
import sumBy from 'lodash/sumBy';
import { useState, useCallback, useEffect } from 'react';
import { useLocales } from 'src/locales';
// @mui
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
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

import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
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
  TablePaginationCustom,
} from 'src/components/table';

// DATA ACCESS
import { getAllInvoices, getInvoiceImportUrl, getInvoiceInquiryData, deleteInvoice } from 'src/data-access/invoice'
import { _departments } from 'src/lists/departments'
import { _statusList } from 'src/lists/paidStatus'
// Utility
import { exportToExcel } from 'src/utils/export';
//
import InvoiceAnalytic from 'src/sections/invoice/invoice-analytic';
import InvoiceTableFiltersResult from 'src/sections/invoice/invoice-table-filters-result';
import InvoiceTableRow from './InvoiceTableRow';
import InvoiceTableToolbar from './InvoiceTableToolbar';

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

export default function InvoiceListView() {
  const theme = useTheme();
  const settings = useSettingsContext();

  const router = useRouter();

  const table = useTable({ defaultOrderBy: 'issueInvoiceDate' });

  const confirm = useBoolean();

  const { t, currentLang } = useLocales();
  const Translate = (text) => t(text);

  const [tableData, setTableData] = useState([]);
  const [refresh, setRefresh] = useState(false);
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
        const result = await getAllInvoices();
        setTableData(result);
      } catch (error) {
        console.error('Error fetching invoices:', error);
      }
    };

    
    fetchData();
  }, [refresh]);

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

  const TABLE_HEAD = [
    { id: 'invoiceNumber', label: Translate("invoiceNumber") },
    { id: 'issueInvoiceDate', label: Translate("issueInvoiceDate") },
    { id: 'daysToCollected', label: Translate("daysToCollected") },
    { id: 'invoiceAmount', label: Translate("invoiceAmount") },
    { id: 'paidStatus', label: Translate("paidStatus"), align: 'center' },
    { id: 'department', label: Translate("department"), align: 'center' },
    { id: '' },
  ];

  const exportHeaderRow = [
    Translate("invoiceNumber"),
    Translate("customerName"),
    Translate("issueInvoiceDate"),
    Translate("daysToCollected"),
    Translate("invoiceAmount"),
    Translate("paidStatus"),
    Translate("department")
  ];

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

  const handleDeleteRow = (id) => {
      let success = true;
      const deleteData = async () => {
        try {
          success = await deleteInvoice(id);          
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
          
          setAlertMessage("Invalid Data, check the file and try again")

          setIsEmportError(true)
        })
         
      } catch (error) {
        // Empty
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

  return (
    <>
      <Container maxWidth={settings.themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading={Translate("list")}
          links={[
            {
              name: Translate("app"),
              href: paths.dashboard.root,
            },
            {
              name: Translate("invoice"),
            },
            {
              name: Translate("list"),
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
                {Translate("newInvoice")}
              </Button>
              <Button
              component={RouterLink}
              variant="contained"
              color='primary'
              onClick={handleClickOpen}
              startIcon={<Iconify icon="solar:import-bold" />}
            >
              {Translate("import")}
            </Button>
            <Button
                variant="contained"
                color='primary'
                onClick={() => exportToExcel(tableData, exportHeaderRow, currentLang.value, 'AllInvoices', 'ExportFile')}
                startIcon={<Iconify icon="eva:download-outline" />}
              >
                {Translate("export")}
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
                title={Translate("total")}
                total={tableData.length}
                percent={100}
                price={sumBy(tableData, 'invoiceAmount')}
                icon="solar:bill-list-bold-duotone"
                color={theme.palette.info.main}
              />

               <InvoiceAnalytic
                title={Translate("paid")}
                total={getInvoiceLength('paid')}
                percent={getPercentByStatus('paid')}
                price={getTotalAmount('paid')}
                icon="solar:file-check-bold-duotone"
                color={theme.palette.success.main}
              />

              <InvoiceAnalytic
                title={Translate("unpaid")}
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
        title={Translate("delete")}
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
            label={Translate("importFile")}
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
          <Button onClick={handleClose}>{Translate("cancel")}</Button>
          <Button onClick={handleFileUpload}>{Translate("import")}</Button>
        </DialogActions>
      </Dialog> 


      <Dialog
        open={openInquiry}
        maxWidth={false}
        color="#ef5350"
        // TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}

      >
        <DialogTitle>{Translate("invoiceInquiry")}</DialogTitle>
        <DialogContent>
          <Stack flexDirection="row" justifyContent="space-between" alignItems="center">
            <Typography>{Translate("invoiceNumber")}</Typography>
            <Typography>{Translate("createdBy")}</Typography>
            <Typography>{Translate("creationDate")}</Typography>
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
                <TableCell>{Translate("property")}</TableCell>
                <TableCell align="right">{Translate("oldValue")}</TableCell>
                <TableCell align="right">{Translate("newValue")}</TableCell>
                <TableCell align="right">{Translate("lastUpdated")}</TableCell>
                <TableCell align="right">{Translate("updatedBy")}</TableCell>
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
          <Button onClick={() => setOpenInquiry(false)}>{Translate("close")}</Button>
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