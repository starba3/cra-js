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
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { getCollectionData } from 'src/data-access/invoice';
import { _acknowledgeStatuses as acknowledgeOptions} from 'src/lists/acknowledgeStatus';
import { _installationStatus } from 'src/lists/installation';

// components
import { RHFSelect, RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function InvoiceNewEditStatusDate({
  department,
  filters,
  onFilters,
  departmentOptions,
  }) {

  const [loading, setLoading] = useState(true)
  const [collectionData, setCollectionData] = useState([])
  const [collectionSource, setCollectionSource] = useState([])
  const [ClaimsStatus, setClaimsStatus] = useState([])
  const [ClaimsDetailStatus, setClaimsDetailStatus] = useState([])



  
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
    const collectionSourceId = collectionSource.filter(option => option.value === newValue.target.value)[0].id;
    
    setClaimsStatus(collectionData.filter(data => data.parentId === collectionSourceId))    
  }

  const handleClaimStatusChange = (newValue) => {
    setClaimsDetailStatus([]);
    const claimStatusId = ClaimsStatus.filter(option => option.value === newValue.target.value)[0].id;
    setClaimsDetailStatus(collectionData.filter(data => data.parentId === claimStatusId))
  }

  const handleClaimsDetailStatusChange = (newValue) => {

      setValue('claimsDetailStatus', newValue.target.value)
      console.log(values)
    
  }

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
          slotProps={{
            flex: 1,
            textField: {
              fullWidth: false,
              error: !!error,
              helperText: error?.message,
            },
          }}
        />
      )}
    /> : null

  const departmentSelect = arrays.department.includes(department.toLowerCase()) ? 
    <FormControl
      sx={{
        flex: 1,
        // flexShrink: 0,
        // width: { xs: 3, md: 180 },
      }}
    >
    <InputLabel>Department</InputLabel>
    <Controller
      name="department"
      control={control}
      render={({ field }) => (
        <Select
          value={field.value}
          onChange={(newValue) => {
            field.onChange(newValue);
          }}
          input={<OutlinedInput label="Department" />}
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
    </FormControl> : null

  const acknowledgeStatus = arrays.acknowledgeStatuses.includes(department.toLowerCase()) ? 
    <FormControl
      sx={{
        flex: 1,
        // flexShrink: 0,
        // width: { xs: 3, md: 180 },
      }}
    >
      <InputLabel>Acknowledge Status</InputLabel>
      <Controller
        name="acknowledgeStatus"
        control={control}
        render={({ field }) => (
          <Select
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
    </FormControl> : null

  const installationDate = arrays.installationDate.includes(department.toLowerCase()) ? 
    <Controller
      name="installationDate"
      control={control}
      render={({ field, fieldState: { error } }) => (
        <DatePicker
          label="Installation create"
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
      )}
    /> : null
  
    const installationStatus = arrays.installationStatus.includes(department.toLowerCase()) ? 
    <FormControl
      sx={{
        flex: 1,
        // flexShrink: 0,
        // width: { xs: 3, md: 180 },
      }}
    >
      <InputLabel>Installation Status</InputLabel>
      <Controller
        name="installationStatus"
        control={control}
        render={({ field }) => (
          <Select
            value={field.value}
            onChange={(newValue) => {
              field.onChange(newValue);
            }}
            input={<OutlinedInput label="Installation Status" />}
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
    </FormControl> : null

  const collectionSourceSelect = arrays.collectionSource.includes(department.toLowerCase()) ? 
    <FormControl
      sx={{
        flex: 1,
        // flexShrink: 0,
        // width: { xs: 3, md: 180 },
      }}
    >
      <InputLabel>Collection Source</InputLabel>
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
    </FormControl> : null
  
  const ClaimStatusSelect = arrays.claimStatus.includes(department.toLowerCase()) ? 
    <FormControl
      sx={{
        flex: 1,
        // flexShrink: 0,
        // width: { xs: 3, md: 180 },
      }}
    >
      <InputLabel>Claim Status</InputLabel>
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
            input={<OutlinedInput label="Claim Status" />}
            renderValue={(selected) => selected}
            sx={{ textTransform: 'capitalize', fullWidth: true }}
          >
            {ClaimsStatus.map((option, index) => (
              <MenuItem key={index} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </FormControl> : null

  const ClaimsDetailStatusSelect = arrays.claimsDetailStatus.includes(department.toLowerCase()) ? 
    <FormControl
      sx={{
        flex: 1,
        // flexShrink: 0,
        // width: { xs: 3, md: 180 },
      }}
    >
      <InputLabel>Claims Detail Status</InputLabel>
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
            onch
            input={<OutlinedInput label="Claims Detail Status" />}
            renderValue={(selected) => selected}
            sx={{ textTransform: 'capitalize', fullWidth: true }}
          >
            {ClaimsDetailStatus.map((option, index) => (
              <MenuItem key={index} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </FormControl> : null
          

  return (
    
      <Stack
        spacing={2}
        direction={{ xs: 'column', sm: 'row' }}
        sx={{ p: 3, bgcolor: 'background.neutral' }}
      >
      
      {deliveryDate}
        
      {departmentSelect}

      {installationDate}

      {installationStatus}

      {acknowledgeStatus}

      {collectionSourceSelect}

      {ClaimStatusSelect}

      {ClaimsDetailStatusSelect} 

    </Stack>

  );
}

InvoiceNewEditStatusDate.propTypes = {
  department: PropTypes.string,
  filters: PropTypes.object,
  onFilters: PropTypes.func,
  departmentOptions: PropTypes.array.isRequired
} 
