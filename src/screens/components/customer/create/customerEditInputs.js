import { useFormContext } from 'react-hook-form';
import { useLocales } from 'src/locales';
// @mui
import Stack from '@mui/material/Stack';
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
        
        <RHFTextField
          name="customerCode"
          label={Translate("customerCode")}
          value={values.customerCode}
        />

        <RHFTextField
          name="customerNameEn"
          label={Translate("customerNameEn")}
          value={values.customerNameEn}
        />

        <RHFTextField
          name="customerNameAr"
          label={Translate("customerNameAr")}
          value={values.customerNameAr}
        />

      </Stack>

    
  );
}
