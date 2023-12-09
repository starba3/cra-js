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
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// components
import FormProvider from 'src/components/hook-form';
import ProductEditInputs from './productEditInputs';


// ----------------------------------------------------------------------

export default function ProductEditForm({ currentProduct }) {
  const router = useRouter();

  const loadingSend = useBoolean();

  const navigate = useNavigate();

  console.log(currentProduct)

  const NewProductSchema = Yup.object().shape({
    code: Yup.string().required('Product Code is required'),
    nameEn: Yup.string().required('English Name code is required'),
    nameAr: Yup.string().required('Arabic Name is required'),
  });

  const defaultValues = useMemo(
    () => ({
      code: currentProduct?.code,
      nameEn: currentProduct?.nameEn,
      nameAr: currentProduct?.nameAr, 
    }),
    [currentProduct]
  );

  const methods = useForm({
    resolver: yupResolver(NewProductSchema),
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
      
      const {code ,nameEn ,nameAr} = watch()
      const body = {
        code,
        nameEn,
        nameAr
      }


      reset();
      loadingSend.onFalse();

      let redirectUrl = paths.products.list;
      // Send create invoice request
      
      console.log(body)
      fetch('https://invoicecollectionsystemapi.azurewebsites.net/Product', {
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
        navigate(redirectUrl);
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
        <ProductEditInputs />
      </Card>

      <Stack justifyContent="flex-end" direction="row" spacing={2} sx={{ mt: 3 }}>
        <LoadingButton
          size="large"
          variant="contained"
          loading={loadingSend.value && isSubmitting}
          type='submit'
        >
          {currentProduct ? Translate('Update') : Translate('Create')} 
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}

ProductEditForm.propTypes = {
  currentProduct: PropTypes.object,
};
