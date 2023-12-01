import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Stack from '@mui/material/Stack';
// components
import { RHFSelect, RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function InvoiceNewEditStatusDate() {
  const { control, watch } = useFormContext();

  const values = watch();

  return (
    <>
      <Stack
        spacing={2}
        direction={{ xs: 'column', sm: 'row' }}
        sx={{ p: 3, bgcolor: 'background.neutral' }}
      >
        <RHFTextField
          name="invoiceNumber"
          label="Invoice number"
          value={values.invoiceNumber}
        />
        
        <Controller
          name="createDate"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <DatePicker
              label="Date create"
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
          name="deliveryDate"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <DatePicker
              label="Deliver date"
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

        <RHFTextField
          name="invoiceAmount"
          label="Ammount"
          value={values.invoiceAmount}
          type="number"
        />


        
        
        
      </Stack>

      <Stack
      spacing={2}
      direction={{ xs: 'column', sm: 'row' }}
      sx={{ p: 3, bgcolor: 'background.neutral' }}
      >
        <RHFTextField
          name="currency"
          label="Currency"
          value={values.currency}
        />

        <RHFTextField
          name="region"
          label="Region"
          value={values.region}
        />

        <RHFTextField
          name="customerPO"
          label="PO Number"
          value={values.customerPO}
        />

        <RHFTextField
          name="poValue"
          label="PO Value"
          value={values.poValue}
          type="number"
        />

        <RHFTextField
          name="contractNo"
          label="Contract"
          value={values.contractNo}
        />
      </Stack>

    </>

    
  );
}
