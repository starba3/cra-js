// react
import { useCallback } from 'react';
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
// components
import { RHFSelect, RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function InvoiceNewEditStatusDate({
  departmentId,
  filters,
  onFilters,
  departmentOptions,
  acknowledgeOptions
  }) {


  const {
    control,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const values = watch();

  const { department, acknowledgeStatus, DeliveryDate } = values;

  const handleFilterDepartment = (event) => {
    console.log('department',event.target.value);
    onFilters('department',event.target.value );
  }
  const handleFilterAcknowledge = (event) => {
    console.log('acknowledgeStatus',event.target.value);
    onFilters('acknowledgeStatus', event.target.value);
  }

  return (
    
      <Stack
        spacing={2}
        direction={{ xs: 'column', sm: 'row' }}
        sx={{ p: 3, bgcolor: 'background.neutral' }}
      >
      
        <Controller
          name="DeliveryDate"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <DatePicker
              label="Date create"
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
        />

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
              {departmentOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          )}
        />
      </FormControl>

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
              {acknowledgeOptions.map((option) => (
                <MenuItem key={option} value={option} defaultChecked={ option === department}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          )}
        />
      </FormControl>


        
        
        
    </Stack>

  );
}

InvoiceNewEditStatusDate.propTypes = {
  departmentId: PropTypes.number,
  filters: PropTypes.object,
  onFilters: PropTypes.func,
  departmentOptions: PropTypes.array.isRequired,
  acknowledgeOptions: PropTypes.array.isRequired
} 
