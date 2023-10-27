import { useFormContext } from 'react-hook-form';
// @mui
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';
// _mock
import { _addressBooks } from 'src/_mock';
// components
import Iconify from 'src/components/iconify';
// lists
import { getAllCustomers, getSalesPersonList } from 'src/data-access/customers';
//
import  AddressListDialog  from '../../AddressListDialog';
import  AddressListDialogSales  from '../../AddressListDialogSales';



// ----------------------------------------------------------------------

export default function InvoiceNewEditAddress() {
  
  const {
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

  
  console.log('values', values)



  const from = useBoolean();

  const to = useBoolean();

  return (
    <>
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
          <Stack direction="row" alignItems="center" sx={{ mb: 1 }}>
            <Typography variant="h6" sx={{ color: 'text.disabled', flexGrow: 1 }}>
              Customer:
            </Typography>

            <IconButton onClick={from.onTrue}>
              <Iconify icon="solar:pen-bold" />
            </IconButton>
          </Stack>

          <Stack spacing={1}>
            <Typography variant="subtitle2">Code: {customerObj?.customerCode}</Typography>
            <Typography variant="body2">Name English: {customerObj?.customerNameEn}</Typography>
            <Typography variant="body2">Name Arabic:  {customerObj?.customerNameAr}</Typography> 
          </Stack>
        </Stack>

        <Stack sx={{ width: 1 }}>
          <Stack direction="row" alignItems="center" sx={{ mb: 1 }}>
            <Typography variant="h6" sx={{ color: 'text.disabled', flexGrow: 1 }}>
              Sales Person:
            </Typography>

            <IconButton onClick={to.onTrue}>
              <Iconify icon={salesPeople ? 'solar:pen-bold' : 'mingcute:add-line'} />
            </IconButton>
          </Stack>

          {salesPeople ? (
            <Stack spacing={1}>
              <Typography variant="subtitle2">{salesPersonObj?.username}</Typography>
              {/* <Typography variant="body2">{invoiceTo.fullAddress}</Typography>
              <Typography variant="body2"> {invoiceTo.phoneNumber}</Typography> */}
            </Stack>
          ) : (
            <Typography typography="caption" sx={{ color: 'error.main' }}>
              {errors.salesPeople?.message}
            </Typography>
          )}
        </Stack>
      </Stack>

      <AddressListDialog
        title="Customers"
        open={from.value}
        onClose={from.onFalse}
        selected={(selectedId) => getAllCustomers?.id === selectedId}
        onSelect={(customer) =>  {
          setValue('customerObj', customer)
          setValue('customerId', customer.id)
          setValue('customerCode', customer.customerCode)
        } }
        list={customers}
        // action={
        //   <Button
        //     size="small"
        //     startIcon={<Iconify icon="mingcute:add-line" />}
        //     sx={{ alignSelf: 'flex-end' }}
        //   >
        //     New
        //   </Button>
        // }
      />

       <AddressListDialogSales
        title="Sales"
        open={to.value}
        onClose={to.onFalse}
        selected={(selectedId) => salesPerson?.id === selectedId}
        onSelect={(person) => {
          setValue('salesPersonObj', person)
          setValue('salesPerson', person.username)
        }}
        list={salesPeople}
        // action={
        //   <Button
        //     size="small"
        //     startIcon={<Iconify icon="mingcute:add-line" />}
        //     sx={{ alignSelf: 'flex-end' }}
        //   >
        //     New
        //   </Button>
        // }
      /> 
    </>
  );
}
