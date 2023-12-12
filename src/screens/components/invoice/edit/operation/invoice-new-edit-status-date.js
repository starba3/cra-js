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
// components
import Scrollbar from 'src/components/scrollbar';
import { Input } from '@mui/material';



// ----------------------------------------------------------------------

export default function InvoiceNewEditStatusDate({
  department,
  filters,
  onFilters,
  departmentOptions,
  currentInvoice,
  }) {
  const disabledTextColor = 'Crimson';

  const [loading, setLoading] = useState(true)
  const [collectionData, setCollectionData] = useState([])
  const [collectionSource, setCollectionSource] = useState([])
  const [claimsStatus, setClaimsStatus] = useState([])
  const [claimsDetailStatus, setClaimsDetailStatus] = useState([])
  const [defaultCollectionSource, setDefaultCollectionSource] = useState(currentInvoice?.collectionSource)
  const [defaultClaimsStatus, setDefaultClaimsStatus] = useState(currentInvoice?.claimStatus)
  const [defaultClaimsDetailStatus, setDefaultClaimsDetailStatus] = useState(currentInvoice?.claimsDetailStatus)
  const [selectedCollectionSource, setSelectedCollectionSource] = useState('')
  const [isFetched, setIsFetched] = useState(false)

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

  console.log("CUrrent invoice: ", currentInvoice);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCollectionData();
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
        const collectionSourceId = collectionSource.filter(option => option.value === defaultCollectionSource)[0].id;
        const claimStatusTemp = collectionData.filter(data => data.parentId === collectionSourceId);
    
        setClaimsStatus(claimStatusTemp)
        setValue('claimStatus', defaultClaimsStatus);

        const claimStatusId = claimStatusTemp.filter(option => option.value === defaultClaimsStatus)[0].id;
        setClaimsDetailStatus(collectionData.filter(data => data.parentId === claimStatusId))
        setValue('claimsDetailStatus', defaultClaimsDetailStatus);

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
    department: ['operation', 'sales', 'collection', 'tenderandcontracts'],
    acknowledgeStatuses: ['operation', 'sales'],
    installationStatus: ['installation'],
    installationDate: ['installation'],
    collectionSource: ['collection'],
    claimStatus: ['collection'],
    claimsDetailStatus: ['collection'],
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
    // resetField('claimsDetailStatus');
    // setValue('claimsDetailStatus', claimsDetailStatus[0].value);
  }

  const handleClaimsDetailStatusChange = (newValue) => {

      // setValue('claimsDetailStatus', newValue.target.value)
      console.log(values)
    
  }

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

  
  const deliveryDate = arrays.deliveryDate.includes(department.toLowerCase()) ? 
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
  const daysToCollect = arrays.daysToCollect.includes(department.toLowerCase()) ? 
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

  const departmentSelect = arrays.department.includes(department.toLowerCase()) ? 
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

  const acknowledgeStatus = arrays.acknowledgeStatuses.includes(department.toLowerCase()) ? 
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

  const installationDate = arrays.installationDate.includes(department.toLowerCase()) ? 
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
      value={currentInvoice.installationDate}
      style={width80}
      disabled
    /> 
  
    const installationStatus = arrays.installationStatus.includes(department.toLowerCase()) ? 
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

  const collectionSourceSelect = arrays.collectionSource.includes(department.toLowerCase()) ? 
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
  
  const ClaimStatusSelect = arrays.claimStatus.includes(department.toLowerCase()) ? 
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

  const ClaimsDetailStatusSelect = arrays.claimsDetailStatus.includes(department.toLowerCase()) ? 
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
          
  const renderNotes = (
    <>
      <Typography variant="h6" gutterBottom>
      {Translate("notes")}
      </Typography>
      <TableContainer sx={{ overflow: 'unset', mt: 5 }}>
        <Scrollbar>
          <Table sx={{ minWidth: 960 }}>
            <TableHead>
              <TableRow>

                <TableCell width={40}>#</TableCell>

                <TableCell sx={{ typography: 'subtitle2' }}>{Translate("note")}</TableCell>

                <TableCell sx={{ typography: 'subtitle2' }}>{Translate("user")}</TableCell>

                <TableCell sx={{ typography: 'subtitle2' }}>{Translate("createDate")}</TableCell>

              </TableRow>
            </TableHead>

            <TableBody>
              {currentInvoice?.notes.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>

                  <TableCell>
                    {/* <Box sx={{ maxWidth: 560 }}> */}
                      <Typography variant="subtitle2">{row.noteText}</Typography>
                    {/* </Box> */}
                  </TableCell>

                  <TableCell>{row.createdBy}</TableCell>

                  <TableCell>{row.createdDate.substring(0, row.createdDate.indexOf('T'))}</TableCell>
                  
                </TableRow>
              ))} 

            </TableBody> 
          </Table>
        </Scrollbar>
      </TableContainer>
    </>  
  );
  
  const renderAttachments = (
    <>
      <Typography variant="h6" gutterBottom>
        {Translate("attachments")}
      </Typography>
      <TableContainer sx={{ overflow: 'unset', mt: 5, mb: 7 }}>
        <Scrollbar>
          <Table sx={{ minWidth: 960 }}>
            <TableHead>
              <TableRow>

                <TableCell width={40}>#</TableCell>

                <TableCell sx={{ typography: 'subtitle2' }}>{Translate("name")}</TableCell>

                <TableCell sx={{ typography: 'subtitle2' }}>{Translate("user")}</TableCell>

                <TableCell sx={{ typography: 'subtitle2' }}>{Translate("createDate")}</TableCell>

              </TableRow>
            </TableHead>

            <TableBody>
              {currentInvoice?.attachments.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>

                  <TableCell>
                    {/* <Box sx={{ maxWidth: 560 }}> */}
                      <Typography variant="subtitle2"> <a target='_blank' rel="noreferrer" href={row.attachmentPath}>{row.fileName}</a> </Typography>
                    {/* </Box> */}
                  </TableCell>

                  <TableCell>{row.createdBy}</TableCell>

                  <TableCell>{row.createdDate.substring(0, row.createdDate.indexOf('T'))}</TableCell>

                  
                </TableRow>
              ))} 

            </TableBody> 
          </Table>
        </Scrollbar>
      </TableContainer>
    </>
  );

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

        <TextField
          label={Translate("amount")}
          value={currentInvoice?.invoiceAmount}
          style={width80}
          disabled
        />

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

        <TextField
          label={Translate("POValue")}
          value={currentInvoice?.poValue}
          style={width80}
          disabled
        />    

        <TextField
          label={Translate("region")}
          value={currentInvoice?.region}
          style={width80}
          disabled
        />        

        <TextField
          label={Translate("contractNumber")}
          value={currentInvoice?.contractNo}
          style={width80}
          disabled
        />

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

        <TextField
          label={Translate("salesTaker")}
          value={currentInvoice?.salesTakerName}
          style={width80}
          disabled
        />

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
  currentInvoice: PropTypes.object.isRequired
} 
