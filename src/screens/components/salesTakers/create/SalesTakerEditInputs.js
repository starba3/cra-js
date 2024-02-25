import { useFormContext, Controller } from 'react-hook-form';
import { useLocales } from 'src/locales';
// @mui
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
// components
import { RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function SalesTakerEditInputs() {
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
        name="firstName"
        control={control}
        defaultValue= {values.firstName || ''}
        render={({ field }) => (
          <TextField
            {...field}
            label={Translate("firstName")}
            fullWidth
          />
        )}
      />

      <Controller
        name="lastName"
        control={control}
        defaultValue = {values.lastName || ''}
        render={({ field }) => (
          <TextField
            {...field}
            label={Translate("lastName")}
            fullWidth
          />
        )}
      />

      <Controller
        name="email"
        control={control}
        defaultValue = {values.email || ''}
        render={({ field }) => (
          <TextField
            {...field}
            label={Translate("email")}
            fullWidth
          />
        )}
      />
      <Controller
        name="username"
        control={control}
        defaultValue = {values.username || ''}
        render={({ field }) => (
          <TextField
            {...field}
            label={Translate("username")}
            fullWidth
          />
        )}
      />
    </Stack>

    
  );
}
