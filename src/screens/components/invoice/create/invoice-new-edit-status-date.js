import { useFormContext, Controller } from 'react-hook-form';
import { useLocales } from 'src/locales';
// @mui
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Stack from '@mui/material/Stack';
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
        <RHFTextField
          name="invoiceNumber"
          label={Translate("invoiceNumber")}
          value={values.invoiceNumber}
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

        <RHFTextField
          name="invoiceAmount"
          label={Translate("invoiceAmount")}
          value={values.invoiceAmount}
          type="number"
        />


        
        
        
      </Stack>

      <Stack
      spacing={2}
      direction={{ xs: 'column', sm: 'row' }}
      sx={{ p: 3 }}
      >
        <RHFTextField
          name="currency"
          label={Translate("currency")}
          value={values.currency}
        />

        <RHFTextField
          name="region"
          label={Translate("region")}
          value={values.region}
        />

        <RHFTextField
          name="customerPO"
          label={Translate("PoNumber")}
          value={values.customerPO}
        />

        <RHFTextField
          name="poValue"
          label={Translate("POValue")}
          value={values.poValue}
          type="number"
        />

        <RHFTextField
          name="contractNo"
          label={Translate("contract")}
          value={values.contractNo}
        />
      </Stack>

    </>

    
  );
}
