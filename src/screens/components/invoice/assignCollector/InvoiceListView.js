import React, { useState, useCallback, useEffect  } from 'react';
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
import Typography from '@mui/material/Typography';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

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
} from 'src/components/table';
// DATA ACCESS
import { _departments } from 'src/lists/departments'
import { _statusList } from 'src/lists/paidStatus'
import { getUserRole } from 'src/helpers/roleHelper';
import { getAllCollectors } from 'src/data-access/collectors';
// Utility
import { exportToExcel } from 'src/utils/export';
// COMPONENTS
import InvoiceTableFiltersResult from 'src/screens/components/invoice/departments/InvoiceTableFiltersResult';
import LoadingAnimation from 'src/screens/components/utility/loadingAnimation';
import { getNeedToAssign, setInvoiceCollector, getInvoiceInquiryData  } from 'src/data-access/invoice'
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

  const ROLE = getUserRole()
  
  const [loading, setLoading] = useState(false);
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [dataUpdated, setDataUpdated] = useState(false);
  const [openInquiry, setOpenInquiry] = useState(false);
  const [inquiryId, setInquiryId] = useState(0);
  const [inquiryData, setInquiryData] = useState({});
  const [filters, setFilters] = useState(defaultFilters);
  const [isConfirmReport, setIsConfirmReport] = useState(department === undefined);
  const [openAssignUser, setOpenAssignUser] = useState(false);
  const [assignCollector, setAssignCollector] = useState('');
  const [invoiceId, setInvoiceId] = useState(0);
  const [openAlert, setOpenAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('Success');
  



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
    
  useEffect(() => {
    
    const fetchUsers = async () => {
      try {

        if (ROLE) {
          const result = await getAllCollectors(ROLE);
          console.log(result);
          setAssignCollector(result.length ? result[0].username : '') ;
          setAssignedUsers(result);
        } 
        
      } catch (error) {
        console.error('Error fetching users list:', error);
      }
    };

    fetchUsers()
  }, [ROLE]);

  useEffect(() => {
    
    
    const fetchData = async () => {

      try {

        const result = await getNeedToAssign(ROLE);
        setTableData(result);
        
      } catch (error) {
        console.error('Error fetching invoices:', error);
      }
    };

    fetchData()
  }, [ROLE, dataUpdated]);

  

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

  const handleOpenInquiry = (id) => {
    setInquiryId(id);
    setOpenInquiry(true);
  }

  const handleCloseInquiry = () => {
    setInquiryId(0);
    setOpenInquiry(false);
    setInquiryData({});
  }


  const denseHeight = table.dense ? 56 : 76;

  const canReset =
    !!filters.name ||
    (!!filters.startDate && !!filters.endDate);

  const notFound = (!dataFiltered.length && canReset) || !dataFiltered.length;

  const TABLE_HEAD = [
    { id: 'invoiceNumber', label: Translate("invoiceNumber") },
    { id: 'issueInvoiceDate', label: Translate("issueInvoiceDate") },
    // { id: 'installationStatus', label: Translate("installationStatus"), align: 'center' },
    { id: 'invoiceAmount', label: Translate("invoiceAmount") },
    { id: 'productName', label: Translate("productName"), align: 'center' },
    { id: 'department', label: Translate("department"), align: 'center' },
    { id: '', label: '' },
    { id: '', label: '' },
  ];

  const exportHeaderRow = [
    Translate("invoiceNumber"),
    Translate("customerName"),
    Translate("issueDate"),
    Translate("amount"),
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

  const handleAssignUser = async () => {    

    let timer;
    
    const startLoading = () => {
      setLoading(true);
      timer = setTimeout(() => setLoading(false), 1500); // Set loading to false after 1.5 seconds
    };

    try {
      
      startLoading()
      const body= {
        invoiceId,
        collectorName: assignCollector
      }
      
      // Send create invoice request
      setOpenAssignUser(false);
      
      

      const response = await setInvoiceCollector(body, ROLE)
      if(response.success) {
        setAlertMessage(Translate("success"))
      }
      else {
        setAlertMessage(response.errorMessage)
      }

    } catch (error) {
      console.error('Error:', error);
    } finally {
      setOpenAlert(true);
      setDataUpdated((prev) => !prev)
    }
  };

  return (
    <>
      <LoadingAnimation loading={loading} />
      
      <Container maxWidth={settings.themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading={Translate("assignCollector")}
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
          divider={<Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />}
          sx={{ py: 2 }}
        >
          <Button
            variant="contained"
            color='primary'
            onClick={() => exportToExcel(tableData, exportHeaderRow, currentLanguage, Translate("currencyShortcut"), 'AssignEngineer', `${Translate("assignEngineer")}-${new Date().toLocaleDateString()}`)}
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
              onResetFilters={handleResetFilters}
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
                      <InvoiceTableRow
                        key={`invoice-${row.id}`}
                        row={row}
                        selected={table.selected.includes(row.id)}
                        onViewRow={() => handleViewRow(row.id)}
                        handleOpenInquiry={() => handleOpenInquiry(row.id)}
                        handleOpenAssign={() => handleOpen(row.id)}
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
            denseLabel={Translate("dense")}
            dense={table.dense}
            onChangeDense={table.onChangeDense}
          />
        </Card>

        <Box sx={{ width: {xs: '100%', md: '75%', lg: '50%'}, flex: 1, marginLeft:'auto', marginTop:'10px' }}>
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


      <Dialog
        open={openAssignUser}
        color="#ef5350"
        // TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}


      >
        <DialogTitle>{Translate("assignCollector")}</DialogTitle>
        <DialogContent>
          <Select
            value={assignCollector}
            onChange={(newValue) => {
              console.log(newValue.target.value);
              setAssignCollector(newValue.target.value);
            }}
            input={<OutlinedInput label="" />}
            renderValue={(selected) => selected}
            sx={{ textTransform: 'capitalize', fullWidth: true, width:"100%" }}
          >
            {assignedUsers.map((option, index) => (
              <MenuItem key={`collector-${index}`} value={option.username}>
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

      <Dialog
        open={openInquiry}
        maxWidth={false}
        color="#ef5350"
        // TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseInquiry}

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
            <Table>
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
            </Table>
            
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