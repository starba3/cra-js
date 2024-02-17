import { useFormContext, Controller } from 'react-hook-form';
import { useLocales } from 'src/locales';
import PropTypes from 'prop-types';
// @mui
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function InvoiceNewEditAddress({currentInvoice}) {
  
  const {
    control,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const mdUp = useResponsive('up', 'md');

  const { t } = useLocales();
  const Translate = (text) => t(text);

  // const values = watch();
  // const { customerId, customerCode, salesPerson, customerObj, salesPersonObj } = values;


  const width95Left = {
    width: 'calc(95% - 10px)',
    marginLeft: "5%"
  };

  const width95Right = {
    width: 'calc(95% - 10px)',
    marginRight: "5%"
  };

  return (
      <Stack
        spacing={{ xs: 3, md: 3 }}
        direction={{ xs: 'column', md: 'row' }}
        divider={
          <Divider
            flexItem
            orientation={mdUp ? 'vertical' : 'horizontal'}
            sx={{ borderStyle: 'dashed' }}
          />
        }
        sx={{ p: 3 }}
      >
        <Stack sx={{ width: 1 }}>
          <Stack direction="row" alignItems="center" sx={{ mb: 1}}>
            <Typography style={width95Left} variant="h6" sx={{ color: 'text.disabled', flexGrow: 1 }}>
              {Translate("attachment")}:
            </Typography>
          </Stack>

          <TextField
            type="file"
            id='file'
            variant="outlined"
            inputProps={{ accept: '.xls, .xlsx' }}
            style={width95Left}
            // onChange={handleFileChange}
          />

        </Stack>

        <Stack sx={{ width: 1 }}>
          <Stack direction="row" alignItems="center" sx={{ mb: 1 }}>
            <Typography variant="h6" sx={{ color: 'text.disabled', flexGrow: 1 }} >
              {Translate("newNote")}:
            </Typography>
          </Stack>

          <Controller
              name="CreateNote"
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  value={field.value}
                  onChange={(newValue) => {
                    field.onChange(newValue);
                  }}
                  style={width95Right}
                  placeholder={Translate("newNotePlaceHolder")}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Iconify icon="eva:search-fill" sx={{ color: 'text.add' }} />
                      </InputAdornment>
                    ),
                }}
                />
                
              )}
            />

        </Stack>
      </Stack>
  );
}

InvoiceNewEditAddress.propTypes = {
  currentInvoice: PropTypes.object,
};

