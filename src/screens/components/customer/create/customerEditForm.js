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
import { createEditCustomer } from 'src/data-access/customers';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// components
import FormProvider from 'src/components/hook-form';

import CustomerEditInputs from './customerEditInputs';

// ----------------------------------------------------------------------



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

  const handleCreateAndSend = handleSubmit(async (data) => {
    loadingSend.onTrue(); 
    
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      const {customerCode ,customerNameEn ,customerNameAr} = watch()

      reset();
      loadingSend.onFalse();

      const redirectUrl = paths.dashboard.customers.list;
      // Send create invoice request

      const body = currentCustomer
        ? createPatchBody(customerCode ,customerNameEn ,customerNameAr)
        : createPostBody(customerCode ,customerNameEn ,customerNameAr);
      
      const method = currentCustomer ? "patch" : "post";
      const id = currentCustomer && currentCustomer.id;

      const response = await createEditCustomer(body, method, id);
      if(!response.errorMessage) {
        router.back()
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
