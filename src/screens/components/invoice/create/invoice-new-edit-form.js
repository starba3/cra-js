import PropTypes from 'prop-types';
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

// lists
import { getAllCustomers, getSalesPersonList } from 'src/data-access/customers';
//
import InvoiceNewEditDetails from './invoice-new-edit-details';
import InvoiceNewEditAddress from './invoice-new-edit-address';
import InvoiceNewEditStatusDate from './invoice-new-edit-status-date';

// ----------------------------------------------------------------------

export default function InvoiceNewEditForm({ currentInvoice }) {
  const router = useRouter();

  const loadingSave = useBoolean();

  const loadingSend = useBoolean();

  const NewInvoiceSchema = Yup.object().shape({
    customerId: Yup.mixed().nullable().required('Customer is required'),
    createDate: Yup.mixed().nullable().required('Create date is required'),
    deliveryDate: Yup.mixed().nullable().required('Delivery date is required'),
    invoiceNumber: Yup.string().required('Invoice number is required'),
    invoiceAmount: Yup.date().required('Invoice amount is required'),
    currency: Yup.string().required('Currency is required'),
    customerCode: Yup.string().required('Customer code is required'),
    region: Yup.string().required('Region is required'),
    customerPO: Yup.string().required('Customer PO number is required'),
    poValue: Yup.number().required('PO value is required'),
    contractNo: Yup.string().required('contractNo is required'),
    salesPerson: Yup.string().required('salesPerson is required'),

  });

  const defaultValues = useMemo(
    () => ({
      customerObj: {},
      salesPersonObj: {},
      invoiceNumber: currentInvoice?.invoiceNumber,
      createDate: currentInvoice?.createDate || new Date(),
      invoiceAmount: currentInvoice?.invoiceAmount,
      currency: currentInvoice?.currency,
      customerId: currentInvoice?.customerId,
      customerCode: currentInvoice?.customerCode,
      region: currentInvoice?.region,
      customerPO: currentInvoice?.customerPO ,
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

  

  // const onSubmit: SubmitHandler<defaultValues> = (data) => console.log(data);

  const handleSaveAsDraft = handleSubmit(async (data) => {
    console.info('Draft DATA', JSON.stringify(data));
    loadingSave.onTrue();

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      loadingSave.onFalse();



      router.push(paths.dashboard.invoice.root);
      console.info('DATA', JSON.stringify(data, null, 2));
    } catch (error) {
      console.error(error);
      loadingSave.onFalse();
    }
  });

  const handleCreateAndSend = handleSubmit(async (data) => {
    loadingSend.onTrue(); 
    
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      const {invoiceNumber, createDate, invoiceAmount, currency, customerCode, region, customerPO, poValue, contractNo, salesPerson, deliveryDate} = watch()
      const body = {
        invoiceNo: invoiceNumber,
        issueInvoiceDate: createDate,
        invoiceAmount,
        currency,
        customerCode,
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
          'Accept': 'application.json',
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

      
      // console.info('DATA', JSON.stringify(data, null, 2));
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

        {/* <InvoiceNewEditDetails /> */}
      </Card>

      <Stack justifyContent="flex-end" direction="row" spacing={2} sx={{ mt: 3 }}>
        {/* <LoadingButton
          color="inherit"
          size="large"
          variant="outlined"
          loading={loadingSave.value && isSubmitting}
          onClick={handleSaveAsDraft}
        >
          Save as Draft
        </LoadingButton> */}

        <LoadingButton
          size="large"
          variant="contained"
          loading={loadingSend.value && isSubmitting}
          type='submit'
          // onClick={ handleSubmit(handleCreateAndSend)} 
        >
          {currentInvoice ? 'Update' : 'Create'} & Send
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}

InvoiceNewEditForm.propTypes = {
  currentInvoice: PropTypes.object,
};
