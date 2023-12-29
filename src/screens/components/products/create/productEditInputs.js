import { useFormContext, Controller } from 'react-hook-form';
import { useLocales } from 'src/locales';
// @mui
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
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
        <Controller
          name="code"
          control={control}
          defaultValue= {values.code || ''}
          render={({ field }) => (
            <TextField
              {...field}
              label={Translate("code")}
              fullWidth
            />
          )}
        />

        <Controller
          name="nameEn"
          control={control}
          defaultValue= {values.nameEn || ''}
          render={({ field }) => (
            <TextField
              {...field}
              label={Translate("nameEnglish")}
              fullWidth
            />
          )}
        />

        <Controller
          name="nameAr"
          control={control}
          defaultValue= {values.nameAr || ''}
          render={({ field }) => (
            <TextField
              {...field}
              label={Translate("nameArabic")}
              fullWidth
            />
          )}
        />

        <Controller
          name="descriptionEn"
          control={control}
          defaultValue= {values.descriptionEn || ''}
          render={({ field }) => (
            <TextField
              {...field}
              label={Translate("descriptionEnglish")}
              fullWidth
            />
          )}
        />

        <Controller
          name="descriptionAr"
          control={control}
          defaultValue= {values.descriptionAr || ''}
          render={({ field }) => (
            <TextField
              {...field}
              label={Translate("descriptionArabic")}
              fullWidth
            />
          )}
        />

      </Stack>

    
  );
}
