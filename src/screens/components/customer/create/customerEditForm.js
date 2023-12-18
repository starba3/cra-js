import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { useLocales } from 'src/locales';
import * as Yup from 'yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import LoadingButton from '@mui/lab/LoadingButton';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
// routes
import { useNavigate } from 'react-router-dom';
import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
// Data access
import { createCustomer, editCustomer } from 'src/data-access/customers';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// components
import FormProvider from 'src/components/hook-form';

import CustomerEditInputs from './customerEditInputs';

// ----------------------------------------------------------------------

const createPostBody = (customerCode, customerNameEn, customerNameAr) => ({ customerCode, customerNameEn, customerNameAr });
const createPatchBody = (customerCode, customerNameEn, customerNameAr) =>  [
  { 
    "op": "replace", 
    "path": "/CustomerNameEn",
    "value": customerNameEn
  },
  { 
    "op": "replace", 
    "path": "/CustomerNameAr",
    "value": customerNameAr 
  },
  { 
    "op": "replace",
    "path": "/CustomerCode", 
    "value": customerCode
  }
];

export default function CustomerEditForm({ currentCustomer }) {
  const router = useRouter();

  const loadingSend = useBoolean();

  const navigate = useNavigate();

  const NewInvoiceSchema = Yup.object().shape({
    customerCode: Yup.string().required('Customer Code is required'),
    customerNameEn: Yup.string().required('English Name code is required'),
    customerNameAr: Yup.string().required('Arabic Name is required'),
  });

  const defaultValues = useMemo(
    () => ({
      customerCode: currentCustomer?.customerCode,
      customerNameEn: currentCustomer?.customerNameEn,
      customerNameAr: currentCustomer?.customerNameAr, 
    }),
    [currentCustomer]
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

  const { t } = useLocales();

  const Translate = (text) => t(text);

  const handleCreateAndSend = handleSubmit(async (data) => {
    loadingSend.onTrue(); 
    
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      let requestSuccess = true;
      const {customerCode ,customerNameEn ,customerNameAr} = watch()

      reset();
      loadingSend.onFalse();

      const redirectUrl = paths.customers.list;
      // Send create invoice request

      if (currentCustomer) {
        const body = createPatchBody(customerCode, customerNameEn, customerNameAr);
        const responseError = await editCustomer(currentCustomer.id, body);
        if(responseError) {
          requestSuccess = false;
        }
      } else {
        const body = createPostBody(customerCode, customerNameEn, customerNameAr)
        requestSuccess = await createCustomer(body);
      }
      
      if(requestSuccess) {
        navigate(redirectUrl);
      }

    } catch (error) {
      console.error('Error:', error);
      loadingSend.onFalse();
    }
  });

  return (
    <FormProvider methods={methods} onSubmit={handleCreateAndSend} >
      <Card>
        <CustomerEditInputs />
      </Card>

      <Stack justifyContent="flex-end" direction="row" spacing={2} sx={{ mt: 3 }}>
        <LoadingButton
          size="large"
          variant="contained"
          loading={loadingSend.value && isSubmitting}
          type='submit'
        >
          {currentCustomer ? Translate('update') : Translate('create')} 
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}

CustomerEditForm.propTypes = {
  currentCustomer: PropTypes.object,
};
