import { useFormContext, Controller } from 'react-hook-form';
import { useLocales } from 'src/locales';
// @mui
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
// components
import { _userRoles } from 'src/lists/userRoles';
import { RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function UserEditInputs() {
  const { control, watch } = useFormContext();
  const values = watch();

  const { t } = useLocales();
  const Translate = (text) => t(text);

  const userRoles = _userRoles()

  return (
    <>
      <Stack
        spacing={1}
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
        spacing={1}
        direction={{ xs: 'column', sm: 'row' }}
        sx={{ p: 3 }}
      > 
        <FormControl
          sx={{
            flex: 1,
            flexShrink: 0,
            width: { xs: 3 },
          }}
        >
          <InputLabel  > {Translate("roles")} </InputLabel>
          <Controller
          
            name="role"
            control={control}
            render={({ field }) => (
              <Select
                value={field.value}
                onChange={(newValue) => {
                  field.onChange(newValue);
                }}
                input={<OutlinedInput label={Translate("roles")} />}
                renderValue={(selected) => selected}
                sx={{ 
                    flex: 1,
                    textField: {
                      textTransform: 'capitalize',
                      fullWidth: true,
                    }
                }}
              >
                {userRoles.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {Translate(option.text)}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </FormControl>
        {/* <Controller
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
        /> */}
        
      </Stack>
    </>
  );
}
