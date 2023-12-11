import { useState, useCallback, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useLocales } from 'src/locales';
// @mui
import Stack from '@mui/material/Stack';
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
import { getAllProducts } from 'src/data-access/products';
import  AddressListDialog  from '../../dialogs/AddressListDialog';
import  AddressListDialogSales  from '../../dialogs/AddressListDialogSales';
import  ProductsListDialog  from '../../dialogs/ProductsListDialog';

// ----------------------------------------------------------------------

export default function InvoiceNewEditAddress() {
  
  const {
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const { t } = useLocales()
  const Translate = (text) => t(text);
  
  const [customersList, setCustomersList] = useState([]);
  const [productsList, setProductsList] = useState([]);
  const [salesPersonList, setSalesPersonList] = useState([]);
  const [openProductDialog, setOpenProductDialog] = useState(false);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const result = await getAllCustomers();
        setCustomersList(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const fetchProducts = async () => {
      try {
        const result = await getAllProducts();
        setProductsList(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const fetchSalesPersonList = async () => {
      try {
        const result = await getSalesPersonList();
        setSalesPersonList(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCustomers();
    fetchProducts();
    fetchSalesPersonList();
    
  }, []);


  const selectedCustomer = {};
  const selectedSalesPerson = {};

  // const updateCustomer = (customer) => {
  //   console.log(customer)
  //   selectedCustomer.customerCode = customer.customerCode
  //   selectedCustomer.customerNameAr = customer.customerNameAr
  //   selectedCustomer.customerNameEn = customer.customerNameEn
  //   console.log('selectedCustomer', customer)
  // }

  // const updateSalesPerson = (person) => {
  //   getSalesPersonList.username = person.salesPeople
  // }

  // const updateProduct = (product) => {
  //   selectedSalesPerson.username = person.salesPeople
  // }


  const mdUp = useResponsive('up', 'md');

  const values = watch();

  const { customerId, customerCode, productCode, salesPerson, customerObj, productObj, salesPersonObj } = values;

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
            {Translate("customer")}:
            </Typography>

            <IconButton onClick={from.onTrue}>
              <Iconify icon="solar:pen-bold" />
            </IconButton>
          </Stack>

          <Stack spacing={1}>
            <Typography variant="subtitle2">{Translate("code")}: {customerObj?.customerCode}</Typography>
            <Typography variant="body2">{Translate("nameEnglish")}: {customerObj?.customerNameEn}</Typography>
            <Typography variant="body2">{Translate("nameArabic")}:  {customerObj?.customerNameAr}</Typography> 
          </Stack>
        </Stack>

        <Stack sx={{ width: 1 }}>
          <Stack direction="row" alignItems="center" sx={{ mb: 1 }}>
            <Typography variant="h6" sx={{ color: 'text.disabled', flexGrow: 1 }}>
            {Translate("salesPerson")}:
            </Typography>

            <IconButton onClick={to.onTrue}>
              <Iconify icon={salesPersonList ? 'solar:pen-bold' : 'mingcute:add-line'} />
            </IconButton>
          </Stack>

          {salesPersonList ? (
            <Stack spacing={1}>
              <Typography variant="subtitle2">{salesPersonObj?.username}</Typography>
            </Stack>
          ) : (
            <Typography typography="caption" sx={{ color: 'error.main' }}>
              {errors.salesPeople?.message}
            </Typography>
          )}
        </Stack>

        <Stack sx={{ width: 1 }}>
          <Stack direction="row" alignItems="center" sx={{ mb: 1 }}>
            <Typography variant="h6" sx={{ color: 'text.disabled', flexGrow: 1 }}>
            {Translate("product")}:
            </Typography>

            <IconButton onClick={() => setOpenProductDialog(true)}>
              <Iconify icon="solar:pen-bold" />
            </IconButton>
          </Stack>

          <Stack spacing={1}>
            <Typography variant="subtitle2">{Translate("code")}: {productObj?.code}</Typography>
            <Typography variant="body2">{Translate("nameEnglish")}: {productObj?.nameEn}</Typography>
            <Typography variant="body2">{Translate("nameArabic")}:  {productObj?.nameAr}</Typography> 
          </Stack>
        </Stack>
      </Stack>

      <AddressListDialog
        title={Translate("customers")}
        open={from.value}
        onClose={from.onFalse}
        selected={(selectedId) => customersList.id === selectedId}
        onSelect={(customer) =>  {
          setValue('customerObj', customer)
          setValue('customerId', customer.id)
          setValue('customerCode', customer.customerCode)
        } }
        list={customersList}
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
        title={Translate("sales")}
        open={to.value}
        onClose={to.onFalse}
        selected={(selectedId) => salesPersonList?.id === selectedId}
        onSelect={(person) => {
          setValue( 'salesPersonObj', person)
          setValue('salesPerson', person.username)
        }}
        list={salesPersonList}
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

      <ProductsListDialog
        title={Translate("product")}
        open={openProductDialog}
        onClose={() => setOpenProductDialog(false)}
        selected={(selectedId) => productsList?.id === selectedId}
        onSelect={(person) => {
          setValue('productObj', person)
          setValue('productCode', person.code)
        }}
        list={productsList}
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
