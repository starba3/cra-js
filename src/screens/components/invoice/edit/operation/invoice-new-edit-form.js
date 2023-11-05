import PropTypes from 'prop-types';
import { useMemo, useState, useCallback } from 'react';
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
import { _departments_withoutAll } from 'src/lists/departments';
import {_acknowledgeStatuses } from 'src/lists/acknowledgeStatus';



// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// components
import FormProvider from 'src/components/hook-form';

// lists
import { getAllCustomers, getSalesPersonList } from 'src/data-access/customers';
//
import InvoiceNewEditAddress from './invoice-new-edit-address';
import InvoiceNewEditStatusDate from './invoice-new-edit-status-date';

// ----------------------------------------------------------------------

export default function InvoiceNewEditForm({ currentInvoice }) {
  const router = useRouter();

  const loadingSave = useBoolean();

  const loadingSend = useBoolean();

  

  const NewInvoiceSchema = Yup.object().shape({
    CreateNote: Yup.string(),
    department: Yup.string(),
    acknowledgeStatus: Yup.string(),
    DeliveryDate: Yup.mixed().nullable(),

  });

  const defaultValues = useMemo(
    () => ({
      CreateNote: currentInvoice?.CreateNote || '',
      department: currentInvoice?.department || '',
      acknowledgeStatus: currentInvoice?.acknowledgeStatus || '',
      DeliveryDate: currentInvoice?.DeliveryDate || new Date(),
    }),
    [currentInvoice]
  );

  // const {notes} = currentInvoice;

  const [filters, setFilters] = useState(defaultValues);

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

  const handleFilters = useCallback(
    (name, value) => {
      setFilters((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    []
  );

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
    console.log('Data:', data)
    loadingSend.onTrue(); 
    
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      const {CreateNote,department,acknowledgeStatus,DeliveryDate} = watch()

      const body = [

      ]

      if(department) {
        body.push({
          op : "replace",
          path : "/department",
          value : {department}
        })
      }

      if(acknowledgeStatus) {
        body.push({
          op : "replace",
          path : "/acknowledgeStatus",
          value : {acknowledgeStatus}
        })
      }

      if(DeliveryDate) {
        body.push({
          op : "replace",
          path : "/DeliveryDate",
          value : {DeliveryDate}
        })
      }

      if(CreateNote) {
        body.push({
          op : "add",
          path : "/CreateNote",
          value : {
            NoteText : {CreateNote}
        }})
      }


      reset();
      loadingSend.onFalse();

      let redirectUrl = paths.dashboard.invoice.root
      // Send create invoice request
      
      console.log(body)
      fetch(`https://invoicecollectionsystemapi.azurewebsites.net/api/Invoices/${currentInvoice.id}/Edit/Operation`, {
        method: 'PATCH',
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
        <InvoiceNewEditAddress currentInvoice={currentInvoice}/>

        <InvoiceNewEditStatusDate 
          filters={filters}
          onFilters={handleFilters}
          departmentOptions={_departments_withoutAll().map((option) => option)}
          acknowledgeOptions={_acknowledgeStatuses().map((option) => option)}
          />

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
