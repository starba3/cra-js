import { useFormContext, Controller } from 'react-hook-form';
import { useLocales } from 'src/locales';
// @mui
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField'
// components
import { RHFSelect, RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function InvoiceNewEditStatusDate() {
  const { control, watch } = useFormContext();

  const { t } = useLocales()
  const Translate = (text) => t(text);

  const values = watch();

  return (
    <>
      <Stack
        spacing={2}
        direction={{ xs: 'column', sm: 'row' }}
        sx={{ p: 3 }}
      >
        <Controller
          name="invoiceNumber"
          control={control}
          defaultValue= {values.invoiceNumber || ''}
          render={({ field }) => (
            <TextField
              {...field}
              label={Translate("invoiceNumber")}
              fullWidth
            />
          )}
        />
        
        <Controller
          name="createDate"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <DatePicker
              label={Translate("createDate")}
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
              label={Translate("deliveryDate")}
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
          name="invoiceAmount"
          control={control}
          defaultValue= {values.invoiceAmount || ''}
          render={({ field }) => (
            <TextField
              {...field}
              label={Translate("invoiceAmount")}
              fullWidth
            />
          )}
        />
        
      </Stack>

      <Stack
      spacing={2}
      direction={{ xs: 'column', sm: 'row' }}
      sx={{ p: 3 }}
      >
        <Controller
          name="currency"
          control={control}
          defaultValue= {values.currency || ''}
          render={({ field }) => (
            <TextField
              {...field}
              label={Translate("currency")}
              fullWidth
            />
          )}
        />

        <Controller
          name="region"
          control={control}
          defaultValue= {values.region || ''}
          render={({ field }) => (
            <TextField
              {...field}
              label={Translate("region")}
              fullWidth
            />
          )}
        />

        <Controller
          name="customerPO"
          control={control}
          defaultValue= {values.customerPO || ''}
          render={({ field }) => (
            <TextField
              {...field}
              label={Translate("PoNumber")}
              fullWidth
            />
          )}
        />

        <Controller
          name="poValue"
          control={control}
          defaultValue= {values.poValue || ''}
          render={({ field }) => (
            <TextField
              {...field}
              label={Translate("poValue")}
              fullWidth
            />
          )}
        />

        <Controller
          name="contractNo"
          control={control}
          defaultValue= {values.contractNo || ''}
          render={({ field }) => (
            <TextField
              {...field}
              label={Translate("contract")}
              fullWidth
            />
          )}
        />

      </Stack>

    </>

    
  );
}
