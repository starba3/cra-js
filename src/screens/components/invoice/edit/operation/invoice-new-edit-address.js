import { useFormContext, Controller } from 'react-hook-form';
import PropTypes from 'prop-types';
// @mui
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// _mock
import { _addressBooks } from 'src/_mock';
// components
import Iconify from 'src/components/iconify';
// lists
import { getAllCustomers, getSalesPersonList } from 'src/data-access/customers';
//



// ----------------------------------------------------------------------

export default function InvoiceNewEditAddress({currentInvoice}) {
  
  const {
    control,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const customers = getAllCustomers();
  const salesPeople = getSalesPersonList();

  const selectedCustomer = {};
  const selectedSalesPerson = {};

  const updateCustomer = (customer) => {
    console.log(customer)
    selectedCustomer.customerCode = customer.customerCode
    selectedCustomer.customerNameAr = customer.customerNameAr
    selectedCustomer.customerNameEn = customer.customerNameEn
    console.log('selectedCustomer', customer)
  }

  const updateSalesPerson = (person) => {
    salesPeople.username = person.salesPeople
  }


  const mdUp = useResponsive('up', 'md');

  const values = watch();

  const { customerId, customerCode, salesPerson, customerObj, salesPersonObj } = values;

  // setValue('salesPerson', selectedSalesPerson.username)
  // setValue('customerId', selectedCustomer.id)
  // setValue('customerCode', selectedCustomer.customerCode)

  
  // console.log('values', values)



  // const from = useBoolean();

  // const to = useBoolean();

  return (
      <Stack
        spacing={{ xs: 3, md: 5 }}
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
            <Typography variant="h6" sx={{ color: 'text.disabled', flexGrow: 1 }}>
              Attachment:
            </Typography>
          </Stack>

          <TextField
            type="file"
            id='file'
            variant="outlined"
            inputProps={{ accept: '.xls, .xlsx' }}
            // onChange={handleFileChange}
          />

        </Stack>

        <Stack sx={{ width: 1 }}>
          <Stack direction="row" alignItems="center" sx={{ mb: 1 }}>
            <Typography variant="h6" sx={{ color: 'text.disabled', flexGrow: 1 }}>
              New Note:
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
                  placeholder="New Note here"
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

