// react
import { useCallback, useState, useEffect } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import PropTypes from 'prop-types';
// @mui
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { getCollectionData } from 'src/data-access/invoice';
import { _acknowledgeStatuses as acknowledgeOptions} from 'src/lists/acknowledgeStatus';
import { _installationStatus } from 'src/lists/installation';
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
import { RHFSelect, RHFTextField } from 'src/components/hook-form';
// components
import Label from 'src/components/label';
import Scrollbar from 'src/components/scrollbar';



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
  
  // if(!loading) {
  //   
  // }

  const {
    control,
    watch,
    resetField,
    setValue,
    formState: { errors },
  } = useFormContext();

  const values = watch();

  const arrays = {
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
          
          label="Delivery Date"
          value={field.value}
          onChange={(newValue) => {
            field.onChange(newValue);
          }}
          sx={grayBgStyle}
        />
    )}
  /> : 
  <TextField
    label="Delivery Date"
    value={currentInvoice.deliveryDate && currentInvoice.deliveryDate.substring(0, currentInvoice?.deliveryDate.indexOf('T'))  }
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
    <InputLabel  > Department </InputLabel>
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
            input={<OutlinedInput label="Department" />}
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
      label="Department"
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
            input={<OutlinedInput label="Acknowledge Status" />}
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
      label="Department"
      value={currentInvoice?.acknowledgeStatus }
      style={width80}
      disabled
    /> 

  const installationDate = arrays.installationDate.includes(department.toLowerCase()) ? 
    <Controller
      name="InstallationDate"
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Box sx={grayBgStyle} >
          <DatePicker
            
            label="Installation Date"
            value={field.value}
            onChange={(newValue) => {
              field.onChange(newValue);
            }}
            slotProps={{
              flex: 1,
              textField: {
                fullWidth: true,
                error: !!error,
                helperText: error?.message,
              },
            }}
          />
        </Box>
        
      )}
    /> : 
    <TextField
      label="Installation Date"
      value={currentInvoice.installationDate}
      style={width80}
      disabled
    /> 
  
    const installationStatus = arrays.installationStatus.includes(department.toLowerCase()) ? 
    <FormControl
      sx={{
        flex: 1,
        flexShrink: 0,
        width: { xs: 3, md: '80%' },
      }}
    >
      <InputLabel />
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
            input={<OutlinedInput label="" />}
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
      label="Installation Status"
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
      <InputLabel> Collection Source </InputLabel>
      <Controller
        name="collectionSource"
        control={control}
        render={({ field }) => (
          <Select
            style={outlinedStyle}
            value={field.value}
            onChange={(newValue) => {
              field.onChange(newValue);
              handleCollectionSourceChange(newValue);
            }}
            input={<OutlinedInput label="Collection Source" />}
            renderValue={(selected) => selected}
            sx={{ textTransform: 'capitalize', fullWidth: true }}
          >
            {collectionSource.map((option, index) => (
              <MenuItem key={index} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </FormControl> : 
    <TextField
        label="Collection Source"
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
            input={<OutlinedInput label="Claim Status" />}
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
          label="Claim Status"
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
            
            input={<OutlinedInput label="Claims Detail Status" />}
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
          label="Claims Detail Status"
          value={currentInvoice.claimsDetailStatus}
          style={width80}
          disabled
        /> 
          
  const renderNotes = (
    <>
      <Typography variant="h6" gutterBottom>
        Notes
      </Typography>
      <TableContainer sx={{ overflow: 'unset', mt: 5 }}>
        <Scrollbar>
          <Table sx={{ minWidth: 960 }}>
            <TableHead>
              <TableRow>

                <TableCell width={40}>#</TableCell>

                <TableCell sx={{ typography: 'subtitle2' }}>Note</TableCell>

                <TableCell sx={{ typography: 'subtitle2' }}>User</TableCell>

                <TableCell sx={{ typography: 'subtitle2' }}>Create Date</TableCell>

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
      Attachments
      </Typography>
      <TableContainer sx={{ overflow: 'unset', mt: 5, mb: 7 }}>
        <Scrollbar>
          <Table sx={{ minWidth: 960 }}>
            <TableHead>
              <TableRow>

                <TableCell width={40}>#</TableCell>

                <TableCell sx={{ typography: 'subtitle2' }}>Name</TableCell>

                <TableCell sx={{ typography: 'subtitle2' }}>User</TableCell>

                <TableCell sx={{ typography: 'subtitle2' }}>Create Date</TableCell>

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
    
    // <Stack
    //   spacing={2}
    //   direction={{ xs: 'column', sm: 'row' }}
    //   sx={{ p: 3, bgcolor: 'background.neutral' }}
    // >
      
    //   {deliveryDate}
        
    //   {departmentSelect}

    //   {installationDate}

    //   {installationStatus}

    //   {acknowledgeStatus}

    //   {collectionSourceSelect}

    //   {ClaimStatusSelect}

    //   {ClaimsDetailStatusSelect} 

    // </Stack>

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
        {/* <Box
          component="img"
          alt="logo"
          src="/logo/logo_single.svg"
          sx={{ width: 48, height: 48 }}
        />

        
         <Stack spacing={1} alignItems={{ xs: 'flex-start', md: 'flex-end' }}>
          <Label
            variant="soft"
            color= 'default'
          >
            {currentInvoice?.department}
          </Label>

        </Stack>  */}

        <TextField
          label="Issue Date"
          value={currentInvoice ? currentInvoice?.issueInvoiceDate.substring(0, currentInvoice?.issueInvoiceDate.indexOf('T')) : '' }
          style={width80}
          disabled
        />

        <TextField
          label="Amount"
          value={currentInvoice?.invoiceAmount}
          style={width80}
          disabled
        />

        <TextField
          label="Currency"
          value={currentInvoice?.currency}
          style={width80}
          disabled
        />

        <TextField
          label="Customer Code"
          value={currentInvoice?.customerCode}
          style={width80}
          disabled
        />
        
        <TextField
          label="Name English"
          value={currentInvoice?.customerNameEn}
          style={width80}
          disabled
        />

        <TextField
          label="Name Arabic"
          value={currentInvoice?.customerNameAr}
          style={width80}
          disabled
        />

        <TextField
          label="Po Number"
          value={currentInvoice?.customerPO}
          style={width80}
          disabled
        />

        <TextField
          label="Po Value"
          value={currentInvoice?.poValue}
          style={width80}
          disabled
        />    

        <TextField
          label="Region"
          value={currentInvoice?.region}
          style={width80}
          disabled
        />        

        <TextField
          label="Contract Number"
          value={currentInvoice?.contractNo}
          style={width80}
          disabled
        />

        {deliveryDate}

        {installationDate}

        {departmentSelect}

        {installationStatus}

        <TextField
          label="Days To Collected"
          value={currentInvoice?.daysToCollected}
          style={width80}
          disabled
        />

        {acknowledgeStatus}

        {collectionSourceSelect}

        {ClaimStatusSelect}

        {ClaimsDetailStatusSelect}

        <TextField
          label="Sales Confirm"
          value={currentInvoice?.salesConfirm}
          style={width80}
          disabled
        />

        <TextField
          label="Created By"
          value={currentInvoice?.createdBy}
          style={width80}
          disabled
        />

        <TextField
          label="Sales Taker"
          value={currentInvoice?.salesTakerName}
          style={width80}
          disabled
        />

        <TextField
          label="Collector Name"
          value={currentInvoice?.collectorName}
          style={width80}
          disabled
        />

        <TextField
          label="Responsible Engineer Name"
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
