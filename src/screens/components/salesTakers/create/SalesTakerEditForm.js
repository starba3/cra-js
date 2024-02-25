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

import CustomerEditInputs from './SalesTakerEditInputs';

// ----------------------------------------------------------------------



export default function SalesTakerEditForm({ currentCustomer }) {
  const router = useRouter();

  const loadingSend = useBoolean();

  const navigate = useNavigate();

  const NewInvoiceSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email().required('Email is required'),
    username: Yup.string().required('Username is required'),
  });

  const defaultValues = useMemo(
    () => ({
      firstName: currentCustomer?.firstName,
      lastName: currentCustomer?.lastName,
      email: currentCustomer?.email, 
      username: currentCustomer?.username,
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

  const createPostBody = (firstName, lastName, email, username) => ({ firstName, lastName, email, username });

  const createPatchBody = (firstName, lastName, email, username) =>  [
    { 
      "op": "replace", 
      "path": "/FirstName",
      "value": firstName
    },
    { 
      "op": "replace", 
      "path": "/LastName",
      "value": lastName 
    },
    { 
      "op": "replace",
      "path": "/Email", 
      "value": email
    },
    { 
      "op": "replace",
      "path": "/Username", 
      "value": username
    }
  ];

  const handleCreateAndSend = handleSubmit(async (data) => {
    loadingSend.onTrue(); 
    
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      const {firstName, lastName, email, username} = watch()

      reset();
      loadingSend.onFalse();

      const redirectUrl = paths.customers.list;
      // Send create invoice request

      const body = currentCustomer
        ? createPatchBody(firstName, lastName, email, username)
        : createPostBody(firstName, lastName, email, username);
      
      const method = currentCustomer ? "patch" : "post";
      const id = currentCustomer && currentCustomer.id;

      const response = await createEditCustomer(body, method, id);
      if(!response.errorMessage) {
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

SalesTakerEditForm.propTypes = {
  currentCustomer: PropTypes.object,
};
