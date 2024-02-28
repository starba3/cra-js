import { useFormContext, Controller } from 'react-hook-form';
import { useLocales } from 'src/locales';
// @mui
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
// components
import { RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function UserEditInputs() {
  const { control, watch } = useFormContext();
  const values = watch();

  const { t } = useLocales();
  const Translate = (text) => t(text);

  return (
    <>
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
          name="userName"
          control={control}
          defaultValue = {values.userName || ''}
          render={({ field }) => (
            <TextField
              {...field}
              label={Translate("userName")}
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
          name="role"
          control={control}
          defaultValue = {values.role}
          render={({ field }) => (
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={field.value}
              onChange={(newValue) => {
                field.onChange(newValue)
              }}
            >
              <FormControlLabel value="Operation" control={<Radio />} label={Translate("operation")} />
              <FormControlLabel value="Sales" control={<Radio />} label={Translate("sales")} />
              <FormControlLabel value="Installation" control={<Radio />} label={Translate("engineer")} />
              <FormControlLabel value="Collection" control={<Radio />} label={Translate("collector")} />
              <FormControlLabel value="HeadOfSales" control={<Radio />} label={Translate("headOfSales")} />
              <FormControlLabel value="HeadOfEngineer" control={<Radio />} label={Translate("headOfEngineers")} />
              <FormControlLabel value="HeadOfCollector" control={<Radio />} label={Translate("headOfCollectors")} />
            </RadioGroup>
          )}
        />
        
      </Stack>
    </>
  );
}
