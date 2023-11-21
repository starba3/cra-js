// react
import { useCallback, useState, useEffect } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { getCollectionData } from 'src/data-access/invoice';
import { _acknowledgeStatuses as acknowledgeOptions} from 'src/lists/acknowledgeStatus';
import { _installationStatus } from 'src/lists/installation';
import Card from '@mui/material/Card';
import Button from "@mui/material/Button";
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
// components
import Label from 'src/components/label';
import Scrollbar from 'src/components/scrollbar';


// components
import { RHFSelect, RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function InvoiceNewEditStatusDate({
  department,
  filters,
  onFilters,
  departmentOptions,
  currentInvoice,
  }) {

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
    setValue('claimStatus', claimsStatus[0].value)
    updateClaimsDetailStatus(claimsStatus[0].value)
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

  
  // Components
  const deliveryDate = arrays.deliveryDate.includes(department.toLowerCase()) ? 
  <Controller
    name="DeliveryDate"
    control={control}
    render={({ field, fieldState: { error } }) => (
      <Box sx={{ width: '80%' }}>
        <DatePicker
          label=""
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
  /> : currentInvoice.deliveryDate

  const departmentSelect = arrays.department.includes(department.toLowerCase()) ? 
    <FormControl
      sx={{
        flex: 1,
        flexShrink: 0,
        width: { xs: 3, md: '80%' },
        
      }}
    >
    <InputLabel />
    <Controller
      name="department"
      control={control}
      render={({ field }) => (
        <Select
          value={field.value}
          onChange={(newValue) => {
            field.onChange(newValue);
          }}
          input={<OutlinedInput label="" />}
          renderValue={(selected) => selected}
          sx={{ textTransform: 'capitalize', fullWidth: true }}
        >
          {departmentOptions.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      )}
    />
    </FormControl> : currentInvoice.department

  const acknowledgeStatus = arrays.acknowledgeStatuses.includes(department.toLowerCase()) ? 
    <FormControl
      sx={{
        flex: 1,
        flexShrink: 0,
        width: { xs: 3, md: '80%' },
      }}
    >
      <InputLabel />
      <Controller
        name="acknowledgeStatus"
        control={control}
        render={({ field }) => (
          <Select
            value={field.value}
            onChange={(newValue) => {
              field.onChange(newValue);
            }}
            input={<OutlinedInput label="" />}
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
    </FormControl> : currentInvoice.acknowledgeStatus

  const installationDate = arrays.installationDate.includes(department.toLowerCase()) ? 
    <Controller
      name="installationDate"
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Box sx={{ width: '80%' }}>
          <DatePicker
            label=""
            value={field.value}
            onChange={(newValue) => {
              field.onChange(newValue);
            }}
            slotProps={{
              flex: 1,
              textField: {
                fullWidth: false,
                error: !!error,
                helperText: error?.message,
              },
            }}
          />
        </Box>
        
      )}
    /> : currentInvoice.installationDate
  
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
    </FormControl> : currentInvoice.installationStatus

  const collectionSourceSelect = arrays.collectionSource.includes(department.toLowerCase()) ? 
    <FormControl
      sx={{
        flex: 1,
        flexShrink: 0,
        width: { xs: 3, md: '80%' },
      }}
    >
      <InputLabel />
      <Controller
        name="collectionSource"
        control={control}
        render={({ field }) => (
          <Select
            value={field.value}
            onChange={(newValue) => {
              field.onChange(newValue);
              handleCollectionSourceChange(newValue);
            }}
            input={<OutlinedInput label="" />}
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
    </FormControl> : currentInvoice.collectionSource
  
  const ClaimStatusSelect = arrays.claimStatus.includes(department.toLowerCase()) ? 
    <FormControl
      sx={{
        flex: 1,
        flexShrink: 0,
        width: { xs: 3, md: '80%' },
      }}
    >
      <InputLabel />
      <Controller
        name="claimStatus"
        control={control}
        render={({ field }) => (
          <Select
            value={field.value}
            onChange={(newValue) => {
              field.onChange(newValue);
              handleClaimStatusChange(newValue);
            }}
            input={<OutlinedInput label="" />}
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
    </FormControl> : currentInvoice.claimStatus

  const ClaimsDetailStatusSelect = arrays.claimsDetailStatus.includes(department.toLowerCase()) ? 
    <FormControl
      sx={{
        flex: 1,
        flexShrink: 0,
        width: { xs: 3, md: '80%' },
      }}
    >
      <InputLabel />
      <Controller
        name="claimsDetailStatus"
        control={control}
        render={({ field }) => (
          <Select
            value={field.value}
            onChange={(newValue) => {
              field.onChange(newValue);
              handleClaimsDetailStatusChange(newValue)
            }}
            
            input={<OutlinedInput label="" />}
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
    </FormControl> : currentInvoice.claimsDetailStatus
          
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

                  {/* <TableCell>{row.quantity}</TableCell> */}

                  
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
      <TableContainer sx={{ overflow: 'unset', mt: 5 }}>
        <Scrollbar>
          <Table sx={{ minWidth: 960 }}>
            <TableHead>
              <TableRow>

                <TableCell width={40}>#</TableCell>

                <TableCell sx={{ typography: 'subtitle2' }}>Name</TableCell>

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

                  {/* <TableCell>{row.quantity}</TableCell> */}

                  
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

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '& td': {
      textAlign: 'right',
      borderBottom: 'none',
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
  }));

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

    <Card sx={{ pt: 5, px: 5 }}>
      <Box
        rowGap={5}
        display="grid"
        alignItems="center"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
        }}
      >
        <Box
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

        </Stack> 

        <Stack sx={{ typography: 'body2' }}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Issue Date: 
          </Typography>
            {currentInvoice?.issueInvoiceDate }
        </Stack>

        <Stack sx={{ typography: 'body2' }}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Amount
          </Typography>
          {currentInvoice?.invoiceAmount}
        </Stack>

        <Stack sx={{ typography: 'body2' }}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Currency
          </Typography>
          {currentInvoice?.currency}
        </Stack>

        <Stack sx={{ typography: 'body2' }}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Customer Code
          </Typography>
          {currentInvoice?.customerCode}
        </Stack>

        <Stack sx={{ typography: 'body2' }}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Name English
          </Typography>
          {currentInvoice?.customerNameEn}
        </Stack>

        <Stack sx={{ typography: 'body2' }}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Name Arabic
          </Typography>
          {currentInvoice?.customerNameEn}
        </Stack>

        <Stack sx={{ typography: 'body2' }}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Po Number
          </Typography>
          {currentInvoice?.customerPO}
        </Stack>

        <Stack sx={{ typography: 'body2' }}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
          PO Value
          </Typography>
          {currentInvoice?.poValue}
        </Stack>

        <Stack sx={{ typography: 'body2' }}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Region
          </Typography>
          {currentInvoice?.region}
        </Stack>

        <Stack sx={{ typography: 'body2' }}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Contract Number
          </Typography>
          {currentInvoice?.contractNo}
        </Stack>

        <Stack sx={{ typography: 'body2' }}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Delivery Date
          </Typography>
          {deliveryDate}
        </Stack>

        <Stack sx={{ typography: 'body2' }}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Installation Date
          </Typography>
          {installationDate}
        </Stack>

        <Stack sx={{ typography: 'body2' }}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Department
          </Typography>

          {departmentSelect}

          
        </Stack>

        <Stack sx={{ typography: 'body2' }}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Installation Status
          </Typography>
          {installationStatus}
        </Stack>

        <Stack sx={{ typography: 'body2' }}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Days To Collected
          </Typography>
          {currentInvoice?.daysToCollected}
        </Stack>

        <Stack sx={{ typography: 'body2' }}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Acknowledge Status
          </Typography>
          {acknowledgeStatus}
        </Stack>

        <Stack sx={{ typography: 'body2' }}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Collection Source
          </Typography>
          {collectionSourceSelect}
        </Stack>

        <Stack sx={{ typography: 'body2' }}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Claim Status
          </Typography>
          {ClaimStatusSelect}
        </Stack>

        <Stack sx={{ typography: 'body2' }}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Claims Detail Status
          </Typography>
          {ClaimsDetailStatusSelect}
        </Stack>

        <Stack sx={{ typography: 'body2' }}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Sales Confirm
          </Typography>
          {currentInvoice?.salesConfirm}
        </Stack>

        <Stack sx={{ typography: 'body2' }}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Created By
          </Typography>
          {currentInvoice?.createdBy}
        </Stack>

        <Stack sx={{ typography: 'body2' }}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Sales Taker
          </Typography>
          {currentInvoice?.salesTakerName}
        </Stack>

        <Stack sx={{ typography: 'body2' }}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Collector Name
          </Typography>
          {currentInvoice?.collectorName}
        </Stack>

        <Stack sx={{ typography: 'body2', mb: 3}}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Responsible Engineer Name
          </Typography>
          {currentInvoice?.responsibleEngineerName}
        </Stack>
      </Box>

      {renderNotes}

      <Divider sx={{ mt: 5, borderStyle: 'dashed', mb: 3}} />
      {renderAttachments}

      <Divider sx={{ mt: 5, borderStyle: 'dashed' }} />

      {renderFooter}
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
