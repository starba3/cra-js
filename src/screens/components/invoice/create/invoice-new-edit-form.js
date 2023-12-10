import PropTypes from 'prop-types';
import { useLocales } from 'src/locales';
import { useMemo } from 'react';
import * as Yup from 'yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import LoadingButton from '@mui/lab/LoadingButton';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
// routes
import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
// _mock
import { _addressBooks } from 'src/_mock';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// components
import FormProvider from 'src/components/hook-form';
import InvoiceNewEditAddress from './invoice-new-edit-address';
import InvoiceNewEditStatusDate from './invoice-new-edit-status-date';

// ----------------------------------------------------------------------

export default function InvoiceNewEditForm({ currentInvoice }) {
  const router = useRouter();

  const loadingSave = useBoolean();

  const loadingSend = useBoolean();

  const { t } = useLocales()
  const Translate = (text) => t(text);

  const NewInvoiceSchema = Yup.object().shape({
    customerId: Yup.mixed().nullable().required('Customer is required'),
    createDate: Yup.mixed().nullable().required('Create date is required'),
    deliveryDate: Yup.mixed().nullable().required('Delivery date is required'),
    invoiceNumber: Yup.string().required('Invoice number is required'),
    invoiceAmount: Yup.date().required('Invoice amount is required'),
    currency: Yup.string().required('Currency is required'),
    customerCode: Yup.string().required('Customer code is required'),
    region: Yup.string().required('Region is required'),
    productCode: Yup.string().required('Product code is required'),
    customerPO: Yup.string(),
    poValue: Yup.number(),
    contractNo: Yup.string(),
    salesPerson: Yup.string().required('salesPerson is required'),

  });

  const defaultValues = useMemo(
    () => ({
      customerObj: {},
      productObj: {},
      salesPersonObj: {},
      invoiceNumber: currentInvoice?.invoiceNumber,
      createDate: currentInvoice?.createDate || new Date(),
      invoiceAmount: currentInvoice?.invoiceAmount,
      currency: currentInvoice?.currency,
      customerId: currentInvoice?.customerId,
      customerCode: currentInvoice?.customerCode,
      region: currentInvoice?.region,
      customerPO: currentInvoice?.customerPO,
      productCode: currentInvoice?.productCode,
      poValue: currentInvoice?.poValue,
      contractNo: currentInvoice?.contractNo,
      salesPerson: currentInvoice?.salesPerson,
      deliveryDate: currentInvoice?.deliveryDate || new Date(),
      
    }),
    [currentInvoice]
  );

  const methods = useForm({
    resolver: yupResolver(NewInvoiceSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const handleCreateAndSend = handleSubmit(async (data) => {
    loadingSend.onTrue(); 
    
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      const {invoiceNumber, createDate, invoiceAmount, currency, customerCode, productCode, region, customerPO, poValue, contractNo, salesPerson, deliveryDate} = watch()
      const body = {
        invoiceNo: invoiceNumber,
        issueInvoiceDate: createDate,
        invoiceAmount,
        currency,
        customerCode,
        productCode,
        region,
        customerPO,
        poValue,
        contractNo,
        salesTakerUsername: salesPerson,
        deliveryDate
      }


      reset();
      loadingSend.onFalse();

      let redirectUrl = paths.dashboard.invoice.root
      // Send create invoice request
      
      console.log(body)
      fetch('https://invoicecollectionsystemapi.azurewebsites.net/api/Invoices', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
        Cache: 'default'
      })
      .then(res => res.json())
      .then(res => {
        console.log(res)
        
      })
      .catch(error => {
        console.log(error)
        redirectUrl = ''
      })

      if(redirectUrl) {
        router.replace(redirectUrl);
      }
      
    } catch (error) {
      console.error('Error:', error);
      loadingSend.onFalse();
    }
  });

  return (
    <FormProvider methods={methods} onSubmit={handleCreateAndSend} >
      <Card>
        <InvoiceNewEditAddress />
        <InvoiceNewEditStatusDate />

      </Card>

      <Stack justifyContent="flex-end" direction="row" spacing={2} sx={{ mt: 3 }}>
        <LoadingButton
          size="large"
          variant="contained"
          loading={loadingSend.value && isSubmitting}
          type='submit'
        >
          {currentInvoice ? Translate("update") : Translate("create")} 
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}

InvoiceNewEditForm.propTypes = {
  currentInvoice: PropTypes.object,
};
