import React, { useMemo, useState, useCallback, useEffect } from 'react'
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
import { getInvoiceEditUrl, getInvoiceRedirectUrl, getAddAttachmentUrl } from 'src/data-access/invoice';
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
    deliveryDate: ['operation'],
    department: ['operation', 'sales', 'tenderandcontracts'],
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
    claimStatus: Yup.string(),
    claimsDetailStatus: Yup.string(),

  });

  // Default lists values
  const selectSource = Translate("selectSource");
  const selectStatus = Translate("selectStatus");
  const selectDetails = Translate("selectDetails");

  const defaultValues = useMemo(
    () => ({
      CreateNote: currentInvoice?.CreateNote || '',
      department: currentInvoice?.department || '',
      acknowledgeStatus: currentInvoice?.acknowledgeStatus || '',
      DeliveryDate: currentInvoice?.DeliveryDate || new Date(),
      installationStatus: currentInvoice?.installationStatus || '',
      installationDate: currentInvoice?.installationDate || new Date(),
      collectionSource: currentInvoice?.CollectionSource || selectSource,
      claimStatus: currentInvoice?.ClaimStatus || selectStatus,
      claimsDetailStatus: currentInvoice?.ClaimsDetailStatus || selectDetails,
    }),
    [currentInvoice, selectSource, selectStatus, selectDetails]
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
      
      const {CreateNote,department,acknowledgeStatus,DeliveryDate, installationDate, installationStatus, collectionSource, claimStatus, claimsDetailStatus} = watch();

      const body = [];

      if(department && arrays.department.includes(currentInvoice.department.toLowerCase())) {
        body.push({
          op : "replace",
          path : "/department",
          value : `${department}`
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

      const redirectUrl = getInvoiceRedirectUrl(departmentId)
      // Send create invoice request
      
      console.log('Body', JSON.stringify(body) )
      const url = getInvoiceEditUrl(departmentId, currentInvoice.id)
      console.log('Url', url )
      fetch(url, {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
        Cache: 'default'  
      })
      .then(response => {
        if (!response.ok) {
          if (response.status === 400) {
            // If status code is 400, log the error message
            return response.text().then(error => {
              setErrorMessage(error);
              setIsError(true);
              throw new Error(`Bad Request: ${error}`);
            });
          } 
          // For other error status codes, throw a generic error
          throw new Error('Network response was not ok');
          
        }
        return response.text(); // Use text() instead of json()
        
      })
      .then(res => {
        setDidUpdate(true)  
        loadingSend.onFalse();
        router.replace(redirectUrl);
        // Handle the non-JSON error message
        console.log('res:', res);
      })
      .catch(error => {
        console.error('Fetch Error:', error);
      });

    } catch (error) {
      console.error('Error:', error);
      loadingSend.onFalse();
    }
  });

  const handleFileUpload = () => {

    
    const formData = new FormData();
    
    const fileInput = document.querySelector("#file").files[0];      
    
    if(fileInput) {
      formData.append('file', fileInput);

      try {
        // Send Add Attachment request
        
        const url = getAddAttachmentUrl(currentInvoice.id)
        console.log('Url', url )
        fetch(url, {
          mode: 'cors',
          method: 'POST',
          headers: {
            'Accept': 'application/json',
          },
          body: formData,
          Cache: 'default'  
        })
        .then(async response => {
          await new Promise(resolve => setTimeout(resolve, 3000));
          
          if (!response.ok) {
            if (response.status === 400 || response.status === 415) {

              const error = await response.text();

              throw new Error(`Bad Request: ${error}`);
            } 
            // For other error status codes, throw a generic error
            throw new Error('Network response was not ok');
            
          }
          return response.text(); // Use text() instead of json()
          
        })
        .then(res => {

        })
        .catch(error => {
          console.error('Fetch Error:', error);
          
        })
         
      } catch (error) {
        console.log(error)
      } 
    }
    else {
      // setIsEmportError(true)
      // setAlertMessage('No file selecetd.')
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
