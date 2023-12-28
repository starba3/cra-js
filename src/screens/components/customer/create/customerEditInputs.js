import { useFormContext, Controller } from 'react-hook-form';
import { useLocales } from 'src/locales';
// @mui
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
// components
import { RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function CustomerEditInputs() {
  const { control, watch } = useFormContext();
  const values = watch();

  const { t } = useLocales();
  const Translate = (text) => t(text);

  return (
    <Stack
      spacing={2}
      direction={{ xs: 'column', sm: 'row' }}
      sx={{ p: 3 }}
    >
      <Controller
        name="customerCode"
        control={control}
        defaultValue= {values.customerCode || ''}
        render={({ field }) => (
          <TextField
            {...field}
            label={Translate("customerCode")}
            fullWidth
          />
        )}
      />

      <Controller
        name="customerNameEn"
        control={control}
        defaultValue = {values.customerNameEn || ''}
        render={({ field }) => (
          <TextField
            {...field}
            label={Translate("customerNameEn")}
            fullWidth
          />
        )}
      />

      <Controller
        name="customerNameAr"
        control={control}
        defaultValue = {values.customerNameAr || ''}
        render={({ field }) => (
          <TextField
            {...field}
            label={Translate("customerNameAr")}
            fullWidth
          />
        )}
      />
    </Stack>

    
  );
}
