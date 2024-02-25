// react
import {  useState, useEffect } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import PropTypes from 'prop-types';
import { useLocales } from 'src/locales';
// @mui
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { getCollectionData } from 'src/data-access/invoice';
import { _acknowledgeStatuses as acknowledgeOptions} from 'src/lists/acknowledgeStatus';
import { _installationStatus } from 'src/lists/installation';
import { _daysToCollectList } from 'src/lists/collectionSource';
import { _installmentStatus } from 'src/lists/installmentStatus';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import Divider from '@mui/material/Divider';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
// components
import Scrollbar from 'src/components/scrollbar';
import { getSalesPersonList } from 'src/data-access/customers'
import NotesTableView from 'src/screens/components/invoice/_common/notesTableView';
import AttachmentsTableView from 'src/screens/components/invoice/_common/attachmentsTableView';
import { Stack } from '@mui/system';



// ----------------------------------------------------------------------

export default function InvoiceNewEditStatusDate({
  department,
  filters,
  onFilters,
  departmentOptions,
  currentInvoice,
  userRole,
  }) {
  const disabledTextColor = 'Crimson';
  const { t } = useLocales()
  const Translate = (text) => t(text)
  const {
    control,
    watch,
    resetField,
    setValue,
    formState: { errors },
  } = useFormContext();

  const values = watch();

  const [loading, setLoading] = useState(true)
  const [salesList, setSalesList] = useState([])
  const [collectionData, setCollectionData] = useState([])
  const [collectionSource, setCollectionSource] = useState([])
  const [claimsStatus, setClaimsStatus] = useState([])
  const [claimsDetailStatus, setClaimsDetailStatus] = useState([])
  const [defaultCollectionSource, setDefaultCollectionSource] = useState(currentInvoice?.collectionSource)
  const [defaultClaimsStatus, setDefaultClaimsStatus] = useState(currentInvoice?.claimStatus)
  const [defaultClaimsDetailStatus, setDefaultClaimsDetailStatus] = useState(currentInvoice?.claimsDetailStatus)
  const [selectedCollectionSource, setSelectedCollectionSource] = useState('')
  const [installments, setInstallments] = useState(values.installments)
  const [isFetched, setIsFetched] = useState(false)

  console.log("installments ", values)
  console.log("Current invoice: ", currentInvoice);

  const installmentStatusList = _installmentStatus()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCollectionData();
        const salesTakerList = await getSalesPersonList()

        setSalesList(salesTakerList)

        console.log(salesTakerList)
        setCollectionData(data);
        setCollectionSource(data.filter(option => option.entityType === 'Collection Source'))
        
        console.log(data)
      } catch (error) {
        console.error('Error fetching invoice:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    
  }, []);

  useEffect(() => {
    if(collectionSource.length > 0) {
      setIsFetched(true);
    }
  }, [setIsFetched, collectionSource]);

  useEffect(() => {
    if(isFetched && !selectedCollectionSource && currentInvoice && currentInvoice.department.toLowerCase() === 'collection' ) {
      setValue('collectionSource', defaultCollectionSource);
      setSelectedCollectionSource(defaultCollectionSource);
      setSelectedCollectionSource((prev) => {
        const newValue = defaultCollectionSource;
        // Perform your logic based on the updated state
        if(defaultCollectionSource) {
          const collectionSourceId = collectionSource.filter(option => option.value === defaultCollectionSource)[0].id;
          const claimStatusTemp = collectionData.filter(data => data.parentId === collectionSourceId);
      
          setClaimsStatus(claimStatusTemp)
          setValue('claimStatus', defaultClaimsStatus);

          const claimStatusId = claimStatusTemp.filter(option => option.value === defaultClaimsStatus)[0].id;
          setClaimsDetailStatus(collectionData.filter(data => data.parentId === claimStatusId))
          setValue('claimsDetailStatus', defaultClaimsDetailStatus);
        }
        

        return newValue;
      });
    }
  }, [isFetched, setValue, collectionSource, collectionData, setClaimsStatus, setSelectedCollectionSource, setClaimsDetailStatus, defaultCollectionSource, defaultClaimsDetailStatus, defaultClaimsStatus, selectedCollectionSource, currentInvoice]);
  
  if(!collectionSource) {
    console.log('collectionSource[0]: ', collectionSource);
    handleCollectionSourceChange(collectionSource[0]);
  }

  

  const arrays = {
    daysToCollect: ['collection'],
    deliveryDate: ['operation'],
    invoiceAmount: ['operation'],
    poValue: ['operation'],
    contractNo: ['operation'],
    salesTakerName: ['operation'],
    department: ['operation', 'sales', 'collection', 'tenderandcontracts'],
    acknowledgeStatuses: ['operation', 'sales'],
    installationStatus: ['installation'],
    installationDate: ['installation'],
    collectionSource: ['collection'],
    claimStatus: ['collection'],
    claimsDetailStatus: ['collection'],
    headOfDepartments: ['head of engineer', 'head of sales', 'head of collectors',]
  }
  // Collection data changes handlers
  const handleCollectionSourceChange = (newValue) => {

    setClaimsStatus([]);
    setClaimsDetailStatus([]);
    resetField('claimStatus')
    resetField('claimsDetailStatus');
    
    const collectionSourceId = collectionSource.filter(option => option.value === newValue.target.value)[0].id;
    
    setClaimsStatus(collectionData.filter(data => data.parentId === collectionSourceId))
    if(claimsStatus.length) {
      setValue('claimStatus', claimsStatus[0].value)
      updateClaimsDetailStatus(claimsStatus[0].value)
    }    
    
    // setValue('claimsDetailStatus', claimsDetailStatus[0].value)
  }

  const handleClaimStatusChange = (newValue) => {
    
    const claimStatusId = claimsStatus.filter(option => option.value === newValue.target.value)[0].id;
    setClaimsDetailStatus(collectionData.filter(data => data.parentId === claimStatusId));
    resetField('claimsDetailStatus');
    
  }

  const updateClaimsDetailStatus = (claimStatusOption) => {
    const claimStatusId = claimsStatus.filter(option => option.value === claimStatusOption)[0].id;
    setClaimsDetailStatus(collectionData.filter(data => data.parentId === claimStatusId))

  }

  const handleClaimsDetailStatusChange = (newValue) => {
    console.log(values)
  }

  const handleAddInstallment = () => {
    setInstallments(prevInstallments => [
      ...prevInstallments,
      { 
        number: '', 
        dueDate: new Date(), 
        paymentDate: null, 
        amount: 0, 
        installmentStatus: 1 
      }
    ]);
  };

  // Style 
  const outlinedStyle = {
    // border: '1px solid crimson', // Set border width and style
    // borderRadius: '10px', // Optional: Set border radius for rounded corners
  };

  const grayBgStyle = {
    width: '95%',
    margin: '10px', // Add vertical padding
    // border:`1px solid ${disabledTextColor}`, // Set border width and style ,
    borderRadius: '10px', // Optional: Set border radius for rounded corners

  };

  const width80 = {
    width: '95%',
    margin: '10px'
  };

  // Components
  const invoiceAmount = arrays.invoiceAmount.includes(department.toLowerCase()) 
    && !arrays.headOfDepartments.includes(userRole.toLowerCase()) ? 
    <FormControl
      sx={{
        flex: 1,
        flexShrink: 0,
        width: { xs: 3 },
      }}
      style={width80}
    >
    {/* <InputLabel  > {Translate("invoiceAmount")} </InputLabel> */}
    <Controller
      
      name="invoiceAmount"
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label={Translate("invoiceAmount")}
          value={field.value}
          fullWidth
        />
      )}
    />
    </FormControl> : 
  <TextField
    label={Translate("amount")}
    value={currentInvoice?.invoiceAmount}
    style={width80}
    disabled
  />

  const poValue = arrays.poValue.includes(department.toLowerCase()) 
    && !arrays.headOfDepartments.includes(userRole.toLowerCase()) ? 
    <FormControl
      sx={{
        flex: 1,
        flexShrink: 0,
        width: { xs: 3 },
      }}
      style={width80}
    >
      {/* <InputLabel  > {Translate("invoiceAmount")} </InputLabel> */}
      <Controller
      
        name="poValue"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label={Translate("poValue")}
            value={field.value}
            fullWidth
          />
        )}
      />
    </FormControl> : 

  <TextField
    label={Translate("poValue")}
    value={currentInvoice?.poValue}
    style={width80}
    disabled
  />

  const contractNo = arrays.contractNo.includes(department.toLowerCase()) 
    && !arrays.headOfDepartments.includes(userRole.toLowerCase()) ?  
    <FormControl
      sx={{
        flex: 1,
        flexShrink: 0,
        width: { xs: 3 },
      }}
      style={width80}
    >
    {/* <InputLabel  > {Translate("invoiceAmount")} </InputLabel> */}
    <Controller
      
      name="contractNo"
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label={Translate("contractNo")}
          value={field.value}
          fullWidth
        />
      )}
    />
    </FormControl> : 
  <TextField
    label={Translate("contractNo")}
    value={currentInvoice?.contractNo}
    style={width80}
    disabled
  />

  const deliveryDate = arrays.deliveryDate.includes(department.toLowerCase()) 
    && !arrays.headOfDepartments.includes(userRole.toLowerCase()) ?  
  <Controller
    name="DeliveryDate"
    control={control}
    
    render={({ field, fieldState: { error } }) => (
        <DatePicker
          
          label={Translate("deliveryDate")}
          value={field.value}
          onChange={(newValue) => {
            field.onChange(newValue);
          }}
          sx={grayBgStyle}
        />
    )}
  /> : 
  <TextField
    label={Translate("deliveryDate")}
    value={currentInvoice.deliveryDate && currentInvoice.deliveryDate.substring(0, currentInvoice?.deliveryDate.indexOf('T'))  }
    disabled
    style={width80}      
  />

  const daysToCollect = arrays.daysToCollect.includes(department.toLowerCase()) 
    && !arrays.headOfDepartments.includes(userRole.toLowerCase()) ?  
  <FormControl
      sx={{
        flex: 1,
        flexShrink: 0,
        width: { xs: 3 },
      }}
      style={width80}
    >
    <InputLabel  > {Translate("daysToCollected")} </InputLabel>
    <Controller
      
      name="daysToCollect"
      control={control}
      render={({ field }) => (
            <Select
            style={outlinedStyle}
            value={field.value}
            onChange={(newValue) => {
              field.onChange(newValue);
            }}
            input={<OutlinedInput label={Translate("daysToCollected")} />}
            renderValue={(selected) => selected}
            sx={{
                flex: 1,
                textField: {
                textTransform: 'capitalize',
                fullWidth: true,
              }
            }}
          >
            {_daysToCollectList().map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
      )}
    />
    </FormControl> : 
  <TextField
    label={Translate("daysToCollected")}
    value={currentInvoice.daysToCollected }
    disabled
    style={width80}      
  />

  const departmentSelect = arrays.department.includes(department.toLowerCase()) 
    && !arrays.headOfDepartments.includes(userRole.toLowerCase()) ?  
    <FormControl
      sx={{
        flex: 1,
        flexShrink: 0,
        width: { xs: 3 },
      }}
      style={width80}
    >
    <InputLabel  > {Translate("department")} </InputLabel>
    <Controller
      
      name="department"
      control={control}
      render={({ field }) => (
            <Select
            style={outlinedStyle}
            value={field.value}
            onChange={(newValue) => {
              field.onChange(newValue);
            }}
            input={<OutlinedInput label={Translate("department")} />}
            renderValue={(selected) => selected}
            sx={{
                flex: 1,
                textField: {
                textTransform: 'capitalize',
                fullWidth: true,
              }
            }}
          >
            {departmentOptions.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
      )}
    />
    </FormControl> : 
    <TextField
      label={Translate("department")}
      value={currentInvoice?.department }
      style={width80}
      disabled
    />

  const acknowledgeStatus = arrays.acknowledgeStatuses.includes(department.toLowerCase()) 
    && !arrays.headOfDepartments.includes(userRole.toLowerCase()) ?  
    <FormControl
      sx={{
        flex: 1,
        flexShrink: 0,
        width: { xs: 3 },
      }}
      style={width80}
    >
      <InputLabel> Acknowledge Status </InputLabel>
      <Controller
        name="acknowledgeStatus"
        control={control}
        render={({ field }) => (
          <Select
            style={outlinedStyle}
            value={field.value}
            onChange={(newValue) => {
              field.onChange(newValue);
            }}
            input={<OutlinedInput label={Translate("acknowledgeStatus")} />}
            renderValue={(selected) => selected}
            sx={{ textTransform: 'capitalize', fullWidth: true }}
          >
            {acknowledgeOptions().map((option) => (
              <MenuItem key={option} value={option} defaultChecked={ option === department}>
                {option}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </FormControl> :
    <TextField
      label={Translate("acknowledgeStatus")}
      value={currentInvoice?.acknowledgeStatus }
      style={width80}
      disabled
    /> 

  const installationDate = arrays.installationDate.includes(department.toLowerCase()) 
    && !arrays.headOfDepartments.includes(userRole.toLowerCase()) ?  
  <Controller
  name="installationDate"
  control={control}
  
  render={({ field, fieldState: { error } }) => (
      <DatePicker
        
        label={Translate("installationDate")}
        value={field.value}
        onChange={(newValue) => {
          field.onChange(newValue);
        }}
        sx={grayBgStyle}
      />
    )}
    /> : 
    <TextField
      label={Translate("installationDate")}
      value={currentInvoice?.installationDate ? currentInvoice?.installationDate.substring(0, currentInvoice?.issueInvoiceDate.indexOf('T')) : '' }
      style={width80}
      disabled
    /> 
  
    const installationStatus = arrays.installationStatus.includes(department.toLowerCase()) 
      && !arrays.headOfDepartments.includes(userRole.toLowerCase()) ?  
    <FormControl
      sx={{
        flex: 1,
        flexShrink: 0,
        width: { xs: 3 },
      }}
      style={width80}
    >
      <InputLabel>{Translate("installationStatus")}</InputLabel>
      <Controller
        name="installationStatus"
        control={control}
        render={({ field }) => (
          <Select
            style={outlinedStyle}
            value={field.value}
            onChange={(newValue) => {
              field.onChange(newValue);
            }}
            input={<OutlinedInput label={Translate("installationStatus")} />}
            renderValue={(selected) => selected}
            sx={{ textTransform: 'capitalize', fullWidth: true }}
          >
            {_installationStatus().map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </FormControl> :
    <TextField
      label={Translate("installationStatus")}
      value={currentInvoice.installationStatus}
      style={width80}
      disabled
    /> 

  const collectionSourceSelect = arrays.collectionSource.includes(department.toLowerCase()) 
    && !arrays.headOfDepartments.includes(userRole.toLowerCase()) ?  
    <FormControl
      sx={{
        flex: 1,
        flexShrink: 0,
        width: { xs: 3,  },
        
      }}
      style={width80}
    >
      <InputLabel> {Translate("collectionSource")} </InputLabel>
      <Controller
        name="collectionSource"
        control={control}
        render={({ field }) => (
          <Select
            
            style={outlinedStyle}
            value={field.value}
            onChange={(newValue) => {
              setSelectedCollectionSource(newValue.target.value);
              field.onChange(newValue);
              handleCollectionSourceChange(newValue);
            }}
            input={<OutlinedInput label={Translate("collectionSource")} />}
            renderValue={(selected) => selected}
            sx={{ textTransform: 'capitalize', fullWidth: true }}
          >
            {collectionSource && collectionSource.map((option, index) => (
              <MenuItem key={index} value={option.value} >
                {option.value}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </FormControl> : 
    <TextField
        label={Translate("collectionSource")}
        value={currentInvoice.collectionSource}
        style={width80}
        disabled
    /> 
  
  const ClaimStatusSelect = arrays.claimStatus.includes(department.toLowerCase()) 
    && !arrays.headOfDepartments.includes(userRole.toLowerCase()) ?  
    <FormControl
      sx={{
        flex: 1,
        flexShrink: 0,
        width: { xs: 3 },
      }}
      style={width80}
    >
      <InputLabel> Claim Status </InputLabel>
      <Controller
        name="claimStatus"
        control={control}
        render={({ field }) => (
          <Select
            style={outlinedStyle}
            value={field.value}
            onChange={(newValue) => {
              field.onChange(newValue);
              handleClaimStatusChange(newValue);
            }}
            input={<OutlinedInput label={Translate("claimStatus")} />}
            renderValue={(selected) => selected}
            sx={{ textTransform: 'capitalize', fullWidth: true }}
          >
            {claimsStatus.map((option, index) => (
              <MenuItem key={index} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </FormControl> : 
    <TextField
          label={Translate("claimStatus")}
          value={currentInvoice.claimStatus}
          style={width80}
          disabled
      /> 

  const ClaimsDetailStatusSelect = arrays.claimsDetailStatus.includes(department.toLowerCase()) 
    && !arrays.headOfDepartments.includes(userRole.toLowerCase()) ?  
    <FormControl
      sx={{
        flex: 1,
        flexShrink: 0,
        width: { xs: 3, md: '80%' },
      }}
      style={width80}
    >
      <InputLabel> Claims Detail Status </InputLabel>
      <Controller
        name="claimsDetailStatus"
        control={control}
        render={({ field }) => (
          <Select
            style={outlinedStyle}
            value={field.value}
            onChange={(newValue) => {
              field.onChange(newValue);
              handleClaimsDetailStatusChange(newValue)
            }}
            
            input={<OutlinedInput label={Translate("claimsDetailStatus")} />}
            renderValue={(selected) => selected}
            sx={{ textTransform: 'capitalize', fullWidth: true }}
          >
            {claimsDetailStatus.map((option, index) => (
              <MenuItem key={index} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </FormControl> : <TextField
          label={Translate("claimsDetailStatus")}
          value={currentInvoice.claimsDetailStatus}
          style={width80}
          disabled
        /> 
    
    const salesTakerSelect = arrays.salesTakerName.includes(department.toLowerCase()) 
      && !arrays.headOfDepartments.includes(userRole.toLowerCase()) ?  
    <FormControl
      sx={{
        flex: 1,
        flexShrink: 0,
        width: { xs: 3, md: '80%' },
      }}
      style={width80}
    >
      <InputLabel> {Translate("salesTakerName")} </InputLabel>
      <Controller
        name="salesTakerName"
        control={control}
        render={({ field }) => (
          <Select
            style={outlinedStyle}
            value={field.value}
            onChange={(newValue) => {
              field.onChange(newValue);
            }}
            
            input={<OutlinedInput label={Translate("salesTakerName")} />}
            renderValue={(selected) => selected}
            sx={{ textTransform: 'capitalize', fullWidth: true }}
          >
            {salesList.map((option, index) => (
              <MenuItem key={index} value={option.username}>
                {option.username}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </FormControl> : <TextField
      label={Translate("salesTakerName")}
      value={currentInvoice?.salesTakerName}
      style={width80}
      disabled
    />   
  
  const renderInstallmentsEdit = userRole.toLowerCase() === "collection" ? (
    <>
      <Typography variant="h6" gutterBottom>
        {Translate("editInstallments")}
      </Typography>
      
      {installments.map((installment, index) => (
        <Stack
          spacing={1}
          direction={{ xs: 'column', sm: 'row' }}
          sx={{ pt: 1, pb: 2 }}
        >
          <Controller
            name={`installments[${index}].number`}
            control={control}
            defaultValue= {installment.number}
            render={({ field }) => (
              <TextField
                {...field}
                label={Translate("number")}
                fullWidth
              />
            )}
          />
        
          <Controller
            name={`installments[${index}].dueDate`}
            control={control}
            render={({ field, fieldState: { error } }) => (
              <DatePicker
                label={Translate("dueDate")}
                value={field.value}
                onChange={(newValue) => {
                  field.onChange(newValue);
                }}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    error: !!error,
                    helperText: error?.message,
                  },
                }}
              />
            )}
          />

          <Controller
            name={`installments[${index}].paymentDate`}
            control={control}
            render={({ field, fieldState: { error } }) => (
              <DatePicker
                label={Translate("paymentDate")}
                value={field.value}
                onChange={(newValue) => {
                  field.onChange(newValue);
                }}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    error: !!error,
                    helperText: error?.message,
                  },
                }}
              />
            )}
          />

          <Controller
            name={`installments[${index}].amount`}
            control={control}
            defaultValue= {installment.amount || 0}
            render={({ field }) => (
              <TextField
                {...field}
                label={Translate("amount")}
                fullWidth
              />
            )}
          />

          <FormControl fullWidth>
            <InputLabel> {Translate("installmentStatus")} </InputLabel>
            <Controller
              name={`installments[${index}].installmentStatus`}
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  
                  value={field.value}
                  onChange={(newValue) => {
                    field.onChange(newValue);
                  }}
                  input={<OutlinedInput label={Translate("installmentStatus")} />}
                  renderValue={(selected) =>  installmentStatusList[selected]}
                >
                {installmentStatusList.slice(1).map((option, StatusIndex) => (
                  <MenuItem key={StatusIndex} value={StatusIndex + 1} >
                    {option}
                  </MenuItem>
                ))}
              </Select>
              )}
            />
          </FormControl>
          

        
      </Stack>
      ))}
      <Stack justifyContent='flex-end' flexDirection='row'>
        <Button 
          variant='contained' 
          color='success'
          onClick={() => handleAddInstallment()}
        >
          {Translate("addInstallments")}
        </Button>
      </Stack>
    </>  
  ) : null;
  
  const renderInstallments = userRole.toLowerCase() === "collection" ? (
    <>
      <Typography variant="h6" gutterBottom>
      {Translate("installments")}
      </Typography>
      <TableContainer sx={{ overflow: 'unset', mt: 5, mb: 7 }}>
        <Scrollbar>
          <Table >
            <TableHead>
              <TableRow>

                <TableCell sx={{ typography: 'subtitle2' }}>{Translate("number")}</TableCell>

                <TableCell sx={{ typography: 'subtitle2' }}>{Translate("dueDate")}</TableCell>

                <TableCell sx={{ typography: 'subtitle2' }}>{Translate("paymentDate")}</TableCell>

                <TableCell sx={{ typography: 'subtitle2' }}>{Translate("amount")}</TableCell>

                <TableCell sx={{ typography: 'subtitle2' }}>{Translate("installmentStatus")}</TableCell>

              </TableRow>
            </TableHead>

            <TableBody>
              {currentInvoice?.installments.map((row, index) => (
                <TableRow key={index}>
                  {/* <TableCell>
                      <Typography variant="subtitle2">{row.noteText}</Typography>
                  </TableCell> */}
                  <TableCell>{row.number}</TableCell>
                  <TableCell>{row.dueDate.substring(0, row.dueDate.indexOf('T'))}</TableCell>
                  <TableCell>{row.paymentDate.substring(0, row.paymentDate.indexOf('T'))}</TableCell>
                  <TableCell>{row.amount}</TableCell>
                  <TableCell>{installmentStatusList[row.installmentStatus]}</TableCell>
                  
                </TableRow>
              ))} 

            </TableBody> 
          </Table>
        </Scrollbar>
      </TableContainer>
    </>  
  ) : null;

  const renderNotes = <NotesTableView data={currentInvoice?.notes} />
  
  const renderAttachments = <AttachmentsTableView data={currentInvoice?.attachments}/>

  const renderFooter = (
    <Grid container>
      <Grid xs={12} md={9} sx={{ py: 3 }}>
        <Typography variant="subtitle2">NOTES</Typography>

        <Typography variant="body2">
          We appreciate your business. Should you need us to add VAT or extra notes let us know!
        </Typography>
      </Grid>

      <Grid xs={12} md={3} sx={{ py: 3, textAlign: 'right' }}>
        <Typography variant="subtitle2">Have a Question?</Typography>

        <Typography variant="body2">support@minimals.cc</Typography>
      </Grid>
    </Grid>
  );

  return (
    <Card sx={{ pt: 5, px: 5 }} >
      <Box
        rowGap={1}
        display="grid"
        alignItems="center"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
        }}
      >

        <TextField
          label={Translate("issueDate")}
          value={currentInvoice ? currentInvoice?.issueInvoiceDate.substring(0, currentInvoice?.issueInvoiceDate.indexOf('T')) : '' }
          style={width80}
          disabled
        />

        {invoiceAmount}

        <TextField
          label={Translate("currency")}
          value={currentInvoice?.currency}
          style={width80}
          disabled
        />

        <TextField
          label={Translate("customerCode")}
          value={currentInvoice?.customerCode}
          style={width80}
          disabled
        />
        
        <TextField
          label={Translate("nameEnglish")}
          value={currentInvoice?.customerNameEn}
          style={width80}
          disabled
        />

        <TextField
          label={Translate("nameArabic")}
          value={currentInvoice?.customerNameAr}
          style={width80}
          disabled
        />

        <TextField
          label={Translate("PoNumber")}
          value={currentInvoice?.customerPO}
          style={width80}
          disabled
        />

        {poValue} 

        <TextField
          label={Translate("region")}
          value={currentInvoice?.region}
          style={width80}
          disabled
        />        

        {contractNo}

        {deliveryDate}

        {installationDate}

        {departmentSelect}

        {installationStatus}

        {daysToCollect}

        {acknowledgeStatus}

        {collectionSourceSelect}

        {ClaimStatusSelect}

        {ClaimsDetailStatusSelect}

        <TextField
          label={Translate("salesConfirm")}
          value={currentInvoice?.salesConfirm}
          style={width80}
          disabled
        />

        <TextField
          label={Translate("createdBy")}
          value={currentInvoice?.createdBy}
          style={width80}
          disabled
        />

        {salesTakerSelect}

        <TextField
          label={Translate("collectorName")}
          value={currentInvoice?.collectorName}
          style={width80}
          disabled
        />

        <TextField
          label={Translate("responsibleEngineerName")}
          value={currentInvoice?.responsibleEngineerName}
          style={width80}
          disabled
        />
      </Box>
      
      {renderInstallmentsEdit}
      {/* {renderInstallments} */}
      {renderNotes}

      <Divider sx={{ mt: 5, borderStyle: 'dashed', mb: 3}} />
      
      {renderAttachments}

      {/* <Divider sx={{ mt: 5, borderStyle: 'dashed' }} /> */}

      {/* {renderFooter} */}
    </Card>
  );
}

InvoiceNewEditStatusDate.propTypes = {
  department: PropTypes.string,
  filters: PropTypes.object,
  onFilters: PropTypes.func,
  departmentOptions: PropTypes.array.isRequired,
  currentInvoice: PropTypes.object.isRequired,
  userRole: PropTypes.string,
} 
