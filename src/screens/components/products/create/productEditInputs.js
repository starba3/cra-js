import { useFormContext } from 'react-hook-form';
import { useLocales } from 'src/locales';
// @mui
import Stack from '@mui/material/Stack';
// components
import { RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function ProductEditInputs() {
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
          name="code"
          label={Translate("code")}
          value={values.code}
        />

        <RHFTextField
          name="nameEn"
          label={Translate("nameEnglish")}
          value={values.nameEn}
        />

        <RHFTextField
          name="nameAr"
          label={Translate("nameArabic")}
          value={values.nameAr}
        />

        <RHFTextField
          name="descriptionEn"
          label={Translate("descriptionEnglish")}
          value={values.descriptionEn}
        />

        <RHFTextField
          name="descriptionAr"
          label={Translate("descriptionArabic")}
          value={values.descriptionAr}
        />

      </Stack>

    
  );
}
