import React, { useMemo, useState, useCallback } from 'react'
import axios from 'axios';
import PropTypes from 'prop-types';
import { useLocales } from 'src/locales';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import LoadingButton from '@mui/lab/LoadingButton';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
// @mui Dialog
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
// routes
import { useRouter } from 'src/routes/hooks';
// _mock
import { getInvoiceRedirectUrl, getAddAttachmentUrl, addAttachment, editInvoice } from 'src/data-access/invoice';
import { _departments_withoutAll } from 'src/lists/departments';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// components
import FormProvider from 'src/components/hook-form';
import InvoiceNewEditAddress from './invoice-new-edit-address';
import InvoiceNewEditStatusDate from './invoice-new-edit-status-date';

// ----------------------------------------------------------------------

const formatDate = (date) => {
  const year = date.toLocaleString('default', {year: 'numeric'});
  const month = date.toLocaleString('default', {
    month: '2-digit',
  });
  const day = date.toLocaleString('default', {day: '2-digit'});

  return [year, month, day].join('-');
}

export default function InvoiceNewEditForm({ currentInvoice }) {

  const router = useRouter();
  const loadingSave = useBoolean();
  const loadingSend = useBoolean();
  
  const { t } = useLocales();
  const Translate = (text) => t(text);

  const[didUpdate, setDidUpdate] = useState(false);
  const[isError, setIsError] = useState(false);
  const[errorMessage, setErrorMessage] = useState('');


  const departmentId = _departments_withoutAll()
                          .map(item => item.toLocaleLowerCase())
                          .indexOf(currentInvoice?.department.toLowerCase())

  const handleClickOpen = () => {
    setIsError(true);
  };

  const handleClose = () => {
    setIsError(false);
  };
  
  const arrays = {
    daysToCollect: ['collection'],
    deliveryDate: ['operation'],
    department: ['operation', 'sales', 'tenderandcontracts', 'collection'],
    acknowledgeStatuses: ['operation', 'sales'],
    installationStatus: ['installation'],
    installationDate: ['installation'],
    collectionSource: ['collection'],
    claimStatus: ['collection'],
    claimsDetailStatus: ['collection'],
  }

  const NewInvoiceSchema = Yup.object().shape({
    CreateNote: Yup.string(),
    department: Yup.string(),
    acknowledgeStatus: Yup.string(),
    DeliveryDate: Yup.mixed().nullable(),
    installationStatus: Yup.string(),
    installationDate: Yup.mixed().nullable(),
    collectionSource: Yup.string(),
    daysToCollect: Yup.string(),
    claimStatus: Yup.string(),
    claimsDetailStatus: Yup.string(),

  });

  // Default lists values
  

  const defaultValues = useMemo(
    () => ({
      CreateNote: currentInvoice?.CreateNote || '',
      department: currentInvoice?.department || '',
      acknowledgeStatus: currentInvoice?.acknowledgeStatus || '',
      DeliveryDate: currentInvoice ? new Date(currentInvoice?.DeliveryDate ) : new Date(),
      installationStatus: currentInvoice?.installationStatus || '',
      installationDate: currentInvoice ? new Date(currentInvoice?.installationDate ) : new Date(), 
      collectionSource: currentInvoice?.CollectionSource || '',
      claimStatus: currentInvoice?.ClaimStatus || '',
      daysToCollect: currentInvoice?.daysToCollected || 0,
      claimsDetailStatus: currentInvoice?.ClaimsDetailStatus || '',
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


  const handleCreateAndSend = handleSubmit(async (data) => {

    handleFileUpload();

    loadingSend.onTrue(); 
    
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      const {CreateNote,department,acknowledgeStatus,DeliveryDate, installationDate, installationStatus, collectionSource, daysToCollect, claimStatus, claimsDetailStatus} = watch();

      const body = [];

      if(department && arrays.department.includes(currentInvoice.department.toLowerCase())) {
        body.push({
          op : "replace",
          path : "/department",
          value : `${department}`
        });
      }

      if(daysToCollect && arrays.daysToCollect.includes(currentInvoice.department.toLowerCase())) {
        body.push({
          op: "replace",
          path: "/daysToCollected",
          value: `${daysToCollect}`
        });
      }

      if(acknowledgeStatus && arrays.acknowledgeStatuses.includes(currentInvoice.department.toLowerCase())) {
        body.push({
          op : "replace",
          path : "/acknowledgeStatus",
          value : `${acknowledgeStatus}`
        });
      }

      if(DeliveryDate&& arrays.deliveryDate.includes(currentInvoice.department.toLowerCase())) {
        body.push({
          op : "replace",
          path : "/DeliveryDate",
          value : `${formatDate(DeliveryDate)}`
        });
      }

      if(installationDate && arrays.installationDate.includes(currentInvoice.department.toLowerCase())) {
        body.push({
          op : "replace",
          path : "/InstallationDate",
          value : `${formatDate(installationDate)}`
        });
      }

      if(installationStatus && arrays.installationStatus.includes(currentInvoice.department.toLowerCase())) {
        body.push({
          op : "replace",
          path : "/installationStatus",
          value : `${installationStatus}`
        });
      }

      if(collectionSource && arrays.collectionSource.includes(currentInvoice.department.toLowerCase())) {
        body.push({
          op : "replace",
          path : "/CollectionSource",
          value : `${collectionSource}`
        });
      }

      if(claimStatus && arrays.claimStatus.includes(currentInvoice.department.toLowerCase())) {
        body.push({
          op : "replace",
          path : "/ClaimStatus",
          value : `${claimStatus}`
        });
      }

      if(claimsDetailStatus && arrays.claimsDetailStatus.includes(currentInvoice.department.toLowerCase())) {
        body.push({
          op : "replace",
          path : "/ClaimsDetailStatus",
          value : `${claimsDetailStatus}`
        });
      }

      body.push({
        op : "add",
        path : "/CreateNote",
        value : {
          NoteText : `${CreateNote}`
        }
      });
      
       reset();
      // loadingSend.onFalse();

      const redirectUrl = getInvoiceRedirectUrl(departmentId);

      // Send Edit invoice request      

      const editResponse = await editInvoice(currentInvoice.id, departmentId, body);

      if (editResponse.errorMessage) {
        setErrorMessage(editResponse.errorMessage);
        setIsError(true);
      } else {
        setDidUpdate(true)  
        loadingSend.onFalse();
        router.replace(redirectUrl);
      }

    } catch (error) {
      console.error('Error:', error);
      loadingSend.onFalse();
    }
  });

  const handleFileUpload = async () => {

    
    const formData = new FormData();
    
    const fileInput = document.querySelector("#file").files[0];      
    
    if(fileInput) {
      formData.append('file', fileInput);
      const addResult = await addAttachment(currentInvoice.id, formData);
    }
  }


  // Components


  return (
    <FormProvider methods={methods} onSubmit={handleCreateAndSend} >
        <Card>
          <InvoiceNewEditAddress currentInvoice={currentInvoice}/>

          <InvoiceNewEditStatusDate 
            currentInvoice={currentInvoice}
            filters={filters}
            onFilters={handleFilters}
            departmentOptions={_departments_withoutAll().map((option) => option)}
            department={currentInvoice.department}
          />

        </Card>

        <Stack justifyContent="flex-end" direction="row" spacing={2} sx={{ mt: 3 }}>


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
        <Dialog
          open={isError}
          color="#ef5350"
          // TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
          className="dialog-error"
        >
          <DialogTitle>Error</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              { String(errorMessage)} 
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Ok</Button>
            {/* <Button onClick={handleClose}>Agree</Button> */}
          </DialogActions>
        </Dialog>
      </FormProvider>
    
  );

}

InvoiceNewEditForm.propTypes = {
  currentInvoice: PropTypes.object,
};
