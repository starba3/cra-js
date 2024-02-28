// react
import {  useState, useEffect, useCallback } from 'react';
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
import { _acknowledgmentStatusesEdit as acknowledgeOptions} from 'src/lists/acknowledgeStatus';
import { _installationStatus } from 'src/lists/installation';
import { _daysToCollectList } from 'src/lists/collectionSource';
import { _installmentStatus } from 'src/lists/installmentStatus';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
// components
import { getSalesPersonList } from 'src/data-access/customers'
import Iconify from 'src/components/iconify';
import NotesTableView from 'src/screens/components/invoice/_common/notesTableView';
import AttachmentsTableView from 'src/screens/components/invoice/_common/attachmentsTableView';
import EditItemView from 'src/screens/components/invoice/_edit/editViewField';
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
    getValues,
    formState: { errors },
  } = useFormContext();

  const values = watch();

  const installmentStatusList = _installmentStatus()
  const installments = getValues("installments")

  
  const [loading, setLoading] = useState(true)
  const [installmentKey, setInstallmentKey] = useState(installments.length + 1)
  const [salesList, setSalesList] = useState([])
  const [collectionData, setCollectionData] = useState([])
  const [collectionSource, setCollectionSource] = useState([])
  const [claimsStatus, setClaimsStatus] = useState([])
  const [claimsDetailStatus, setClaimsDetailStatus] = useState([])
  const [defaultCollectionSource, setDefaultCollectionSource] = useState(currentInvoice?.collectionSource)
  const [defaultClaimsStatus, setDefaultClaimsStatus] = useState(currentInvoice?.claimStatus)
  const [defaultClaimsDetailStatus, setDefaultClaimsDetailStatus] = useState(currentInvoice?.claimsDetailStatus)
  const [selectedCollectionSource, setSelectedCollectionSource] = useState('')
  const [installmentsList, setInstallmentsList] = useState(installments)
  const [isFetched, setIsFetched] = useState(false)

  console.log("values ", values)
  console.log("Installments List: ", installmentsList);


  const setInstallmentsListCallback = useCallback((updatedInstallments) => {
    setInstallmentsList(updatedInstallments);
  }, [setInstallmentsList]);

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
    // console.log('collectionSource[0]: ', collectionSource);
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


  // Installments ket Generator
  const generateId = () => {
    const key = installmentKey
    setInstallmentKey((prevKey) => prevKey + 1)
    return key
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
    const newInstallments = [
      ...installmentsList,
      { 
        id: generateId(),
        number: '', 
        dueDate: new Date(), 
        paymentDate: null, 
        amount: 0, 
        installmentStatus: 1 
      }
    ]
    setValue("installments", newInstallments)
    setInstallmentsList(newInstallments)
    // setInstallments(prevInstallments => [
    //   ...prevInstallments,
    //   { 
    //     number: '', 
    //     dueDate: new Date(), 
    //     paymentDate: null, 
    //     amount: 0, 
    //     installmentStatus: 1 
    //   }
    // ]);
  };

  const handleAddRemoveInstallment = (index) => {
    const newInstallments = installmentsList.toSpliced(index, 1)
    setValue("installments", newInstallments) 
    setInstallmentsList( newInstallments)
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
    && !userRole.includes("head") ? 
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
    <EditItemView invoice={currentInvoice} properity="invoiceAmount" />

  const poValue = arrays.poValue.includes(department.toLowerCase()) 
    && !userRole.includes("head") ? 
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
    <EditItemView invoice={currentInvoice} properity="poValue" />

  const contractNo = arrays.contractNo.includes(department.toLowerCase()) 
    && !userRole.includes("head") ?  
    <FormControl
      sx={{
        flex: 1,
        flexShrink: 0,
        width: { xs: 3 },
      }}
      style={width80}
    >
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
    <EditItemView invoice={currentInvoice} properity="contractNo" />

  const deliveryDate = arrays.deliveryDate.includes(department.toLowerCase()) 
    && !userRole.includes("head") ?  
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
  <EditItemView invoice={currentInvoice} properity="deliveryDate" isDate />
  

  const daysToCollect = arrays.daysToCollect.includes(department.toLowerCase()) 
    && !userRole.includes("head") ?  
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
    <EditItemView invoice={currentInvoice} properity="daysToCollected" />

  const departmentSelect = arrays.department.includes(department.toLowerCase()) 
    && !userRole.includes("head") ?  
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
    <EditItemView invoice={currentInvoice} properity="department" />

  const acknowledgeStatus = arrays.acknowledgeStatuses.includes(department.toLowerCase()) 
    && !userRole.includes("head") ?  
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
            renderValue={(selected) => Translate(selected)}
            sx={{ textTransform: 'capitalize', fullWidth: true }}
          >
            {acknowledgeOptions().map((option) => (
              <MenuItem key={option.value} value={option.value} defaultChecked={ option.value === field.value}>
                {option.text}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </FormControl> :
    <EditItemView invoice={currentInvoice} properity="acknowledgeStatus" />

  const installationDate = arrays.installationDate.includes(department.toLowerCase()) 
    && !userRole.includes("head") ?  
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
    <EditItemView invoice={currentInvoice} properity="installationDate" isDate />
  
    const installationStatus = arrays.installationStatus.includes(department.toLowerCase()) 
      && !userRole.includes("head") ?  
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
    <EditItemView invoice={currentInvoice} properity="installationStatus" />

  const collectionSourceSelect = arrays.collectionSource.includes(department.toLowerCase()) 
    && !userRole.includes("head") ?  
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
    <EditItemView invoice={currentInvoice} properity="collectionSource" />
  
  const ClaimStatusSelect = arrays.claimStatus.includes(department.toLowerCase()) 
    && !userRole.includes("head") ?  
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
    <EditItemView invoice={currentInvoice} properity="claimStatus" />

  const ClaimsDetailStatusSelect = arrays.claimsDetailStatus.includes(department.toLowerCase()) 
    && !userRole.includes("head") ?  
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
    </FormControl> : 
    <EditItemView invoice={currentInvoice} properity="claimsDetailStatus" />
    
    const salesTakerSelect = arrays.salesTakerName.includes(department.toLowerCase()) 
      && !userRole.includes("head") ?  
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
    </FormControl> : 
    <EditItemView invoice={currentInvoice} properity="salesTakerName" />
  
  
  const renderInstallmentsEdit = userRole.toLowerCase() === "collection" ? (
    <>
      <Typography variant="h6" gutterBottom>
        {Translate("editInstallments")}
      </Typography>
      
      {installmentsList.map((installment, index) => (
        <Stack
          key={installment.id}
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

                onChange={(e) => {
                  console.log("e ", e)
                  const newValue = e.target.value;
                  field.onChange(newValue);
                  setInstallmentsListCallback((prevInstallments) => {
                    const newInstallments = [...prevInstallments];
                    newInstallments[index] = { ...newInstallments[index], number: newValue };
                    return newInstallments;
                  });
                }}

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

                onChange={(e) => {
                  const newValue = e;
                  field.onChange(newValue);
                  setInstallmentsListCallback((prevInstallments) => {
                    const newInstallments = [...prevInstallments];
                    newInstallments[index] = { ...newInstallments[index], dueDate: newValue };
                    return newInstallments;
                  });
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

                onChange={(e) => {
                  const newValue = e;
                  field.onChange(newValue);
                  setInstallmentsListCallback((prevInstallments) => {
                    const newInstallments = [...prevInstallments];
                    newInstallments[index] = { ...newInstallments[index], paymentDate: newValue };
                    return newInstallments;
                  });
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

                onChange={(e) => {
                  const newValue = e.target.value;
                  field.onChange(newValue);
                  setInstallmentsListCallback((prevInstallments) => {
                    const newInstallments = [...prevInstallments];
                    newInstallments[index] = { ...newInstallments[index], amount: newValue };
                    return newInstallments;
                  });
                }}

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
                  
                  value={field.value || 1}
                  onChange={(e) => {
                    const newValue = e.target.value;
                    field.onChange(newValue);
                    setInstallmentsListCallback((prevInstallments) => {
                      const newInstallments = [...prevInstallments];
                      newInstallments[index] = { ...newInstallments[index], installmentStatus: newValue };
                      return newInstallments;
                    });
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
          
          <IconButton onClick={() => handleAddRemoveInstallment(index)} color='error' sx={{ height: 'fit-content', marginTop:'auto', marginBottom: 'auto' }}>
            <Iconify icon="mingcute:close-fill"  />
          </IconButton>        
        
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
        <EditItemView invoice={currentInvoice} properity="issueInvoiceDate" isDate />
        {invoiceAmount}
        <EditItemView invoice={currentInvoice} properity="currency" />
        <EditItemView invoice={currentInvoice} properity="customerCode" />
        <EditItemView invoice={currentInvoice} properity="customerNameEn" />
        <EditItemView invoice={currentInvoice} properity="customerNameAr" />
        <EditItemView invoice={currentInvoice} properity="customerPO" />
        {poValue} 
        <EditItemView invoice={currentInvoice} properity="region" />        
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
        <EditItemView invoice={currentInvoice} properity="salesConfirm" />
        <EditItemView invoice={currentInvoice} properity="createdBy" />
        {salesTakerSelect}
        <EditItemView invoice={currentInvoice} properity="collectorName" />
        <EditItemView invoice={currentInvoice} properity="responsibleEngineerName" />
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
