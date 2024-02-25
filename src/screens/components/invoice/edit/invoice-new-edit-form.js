import React, { useMemo, useState, useCallback } from 'react'
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
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Container from '@mui/material/Container';
// @mui Dialog
// routes
import { useRouter } from 'src/routes/hooks';
// _mock
import { addAttachment, editInvoice, sendInvoiceAlert } from 'src/data-access/invoice';
import { _departments_withoutAll } from 'src/lists/departments';
import { getUserRole } from 'src/helpers/roleHelper'
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// components
import LoadingAnimation from 'src/screens/components/utility/loadingAnimation';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import { useSettingsContext } from 'src/components/settings';
import FormProvider from 'src/components/hook-form';
import Iconify from 'src/components/iconify';
import InvoiceNewEditAddress from './invoice-new-edit-address';
import InvoiceNewEditStatusDate from './invoice-new-edit-status-date';
import SendAlertDialog from './sendAlertDialog';




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

  const settings = useSettingsContext();
  const router = useRouter();
  const showSendAlertDialog = useBoolean();
  const showAlertBox = useBoolean();    
  const loadingSend = useBoolean();
  
  const { t } = useLocales();
  const Translate = (text) => t(text);

  const ROLE = getUserRole()

  

  const NewInvoiceSchema = Yup.object().shape({
    CreateNote: Yup.string(),
    department: Yup.string(),
    acknowledgeStatus: Yup.string(),
    DeliveryDate: Yup.date().nullable(),
    installationStatus: Yup.string(),
    installationDate: Yup.date().nullable(),
    collectionSource: Yup.string(),
    daysToCollect: Yup.string(),
    claimStatus: Yup.string(),
    claimsDetailStatus: Yup.string(),
    invoiceAmount: Yup.number(),
    poValue: Yup.number(),
    contractNo: Yup.string(),
    salesTakerName: Yup.string(),
    installments: Yup.array().of(
      Yup.object().shape({
        number: Yup.string().required(),
        dueDate: Yup.date().required(),
        paymentDate: Yup.date().nullable(),
        amount: Yup.number().required(),
        installmentStatus: Yup.number().required(),
      })
    ),

  });


  // Default lists values
  const defaultValues = useMemo(
    () => ({
      CreateNote: currentInvoice?.CreateNote || '',
      department: currentInvoice?.department || '',
      acknowledgeStatus: currentInvoice?.acknowledgeStatus || '', 
      DeliveryDate: currentInvoice ? new Date(currentInvoice?.deliveryDate) : new Date(),
      installationStatus: currentInvoice?.installationStatus || '',
      installationDate: currentInvoice ? new Date(currentInvoice?.installationDate ) : new Date(), 
      collectionSource: currentInvoice?.CollectionSource || '',
      claimStatus: currentInvoice?.ClaimStatus || '',
      daysToCollect: currentInvoice?.daysToCollected || 0,
      claimsDetailStatus: currentInvoice?.ClaimsDetailStatus || '',
      invoiceAmount: currentInvoice?.invoiceAmount || 0,
      poValue: currentInvoice?.poValue || 0,
      contractNo: currentInvoice?.contractNo || '',
      salesTakerName: currentInvoice?.salesTakerName || '',
      installments: currentInvoice?.installments.length ? currentInvoice?.installments : [{
        number:  "",
        dueDate:  new Date(),
        paymentDate: null,
        amount:  0,
        installmentStatus:  1
      }],
    }),
    [currentInvoice]
  );


  const[didUpdate, setDidUpdate] = useState(false);
  const[isError, setIsError] = useState(false);
  const[errorMessage, setErrorMessage] = useState('');
  const[filters, setFilters] = useState(defaultValues);
  const[loading, setLoading] = useState(false);


  const departmentId = _departments_withoutAll()
                          .map(item => item.toLocaleLowerCase())
                          .indexOf(currentInvoice?.department.toLowerCase())

  const handleClickOpen = () => {
    setIsError(true);
  };

  const handleClose = () => {
    showAlertBox.onFalse();
  };
  
  const arrays = {
    daysToCollect: ['collection'],
    deliveryDate: ['operation'],
    invoiceAmount: ['operation'],
    poValue: ['operation'],
    contractNo: ['operation'],
    salesTakerName: ['operation'],
    department: ['operation', 'sales', 'tenderandcontracts', 'collection'],
    acknowledgeStatuses: ['operation', 'sales'],
    installationStatus: ['installation'],
    installationDate: ['installation'],
    collectionSource: ['collection'],
    claimStatus: ['collection'],
    claimsDetailStatus: ['collection'],
    headOfDepartments: ['head of engineer', 'head of sales', 'head of collectors',]
  }

  

  // Get the name of who the alert will sent to
  const getAlertTo = (role) => {
    if(role.toLowerCase() === 'head of collectors') {
      return currentInvoice?.collectorName
    }

    return currentInvoice?.salesTakerName
  }

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
      
      const {
        CreateNote,
        department,
        acknowledgeStatus,
        DeliveryDate,
        installationDate,
        installationStatus,
        collectionSource,
        daysToCollect,
        claimStatus,
        claimsDetailStatus,
        invoiceAmount,
        poValue,
        contractNo,
        salesTakerName,
        installments
      } = watch();

      let body = null;

      if (ROLE.toLowerCase() === "collection") {
        body = {
          id: currentInvoice.id,
          department,
          createNote: {
            noteText: CreateNote
          },
          collectionSource,
          claimStatus,
          claimsDetailStatus,
          daysToCollected: daysToCollect,
          installments

        }
      }
      else {
        body = []

        if(department && arrays.department.includes(currentInvoice.department.toLowerCase())) {
          body.push({
            op : "replace",
            path : "/department",
            value : `${department}`
          });
        }
  
        if(invoiceAmount && arrays.invoiceAmount.includes(currentInvoice.department.toLowerCase())) {
          body.push({
            op : "replace",
            path : "/InvoiceAmount",
            value : `${invoiceAmount}`
          });
        }
  
        if(arrays.poValue.includes(currentInvoice.department.toLowerCase())) {
          body.push({
            op : "replace",
            path : "/PoValue",
            value : `${poValue}`
          });
        }
  
        if(contractNo && arrays.contractNo.includes(currentInvoice.department.toLowerCase())) {
          body.push({
            op : "replace",
            path : "/ContractNo",
            value : `${contractNo}`
          });
        }
  
        if(salesTakerName && arrays.salesTakerName.includes(currentInvoice.department.toLowerCase())) {
          body.push({
            op : "replace",
            path : "/SalesTakerUsername",
            value : `${salesTakerName}`
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
  
        if(DeliveryDate && arrays.deliveryDate.includes(currentInvoice.department.toLowerCase())) {
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
      }

      

      // Send Edit invoice request      
      const editResponse = await editInvoice(currentInvoice.id, departmentId, body, ROLE);
      
      if (editResponse.errorMessage) {
        setErrorMessage(editResponse.errorMessage);
        showAlertBox.onToggle();
      } else {
        reset();
        setDidUpdate(true);
        loadingSend.onFalse();
        // router.replace(redirectUrl);
        router.back()
      }

    } catch (error) {
      console.error('Error:', error);
    } finally {
      loadingSend.onFalse();
    }
  });

  const handleSendAlert = async (alertText) => {
    
    let timer;
    
    const startLoading = () => {
      setLoading(true);
      timer = setTimeout(() => setLoading(false), 1500); // Set loading to false after 1.5 seconds
    };

    try {
      // Start loading animation
      startLoading()
      
      const body = {
        invoiceId: currentInvoice.id,
        note: alertText
      }

      console.log(body)
      const response = await sendInvoiceAlert(body, ROLE);

      if(response.success) {
        setErrorMessage(Translate("success"))
        clearTimeout(timer)
        
      } else {
        setErrorMessage(response.errorMessage)
      }

      setLoading(false)
      showAlertBox.onTrue()
      showSendAlertDialog.onFalse()


    } catch (error) {
      console.error('Error:', error);
      loadingSend.onFalse();
    }
  };

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
    <>
      <LoadingAnimation loading={loading} />
      <Container maxWidth={settings.themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading="Edit invoice"
          links={[
            // {
            //   name: Translate("app"),
            //   href: paths.dashboard.root,
            // },
          ]}
          sx={{
            mb: { xs: 3, md: 5 },
          }}

        />

        {
          arrays.headOfDepartments.includes(ROLE.toLowerCase())  
          ? <Stack
              direction="row"
              // justifyContent="flex-end"
              // divider={<Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />}
              sx={{ py: 2 }}
            >
              <Button 
                variant='contained' 
                color='success'
                onClick={() => showSendAlertDialog.onTrue()}
              >
                {Translate("sendAlert")}
              </Button>
            </Stack>
          : null
        }
        

          
        <FormProvider methods={methods} onSubmit={handleCreateAndSend} >
          <Card>
            <InvoiceNewEditAddress currentInvoice={currentInvoice}/>

            <InvoiceNewEditStatusDate 
              currentInvoice={currentInvoice}
              filters={filters}
              onFilters={handleFilters}
              departmentOptions={_departments_withoutAll().map((option) => option)}
              department={currentInvoice.department}
              userRole={ROLE}
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
          
          
        </FormProvider>
      </Container>
      

      <Box sx={{ position:"fixed", bottom:"1rem", right:"1rem", zIndex: "2"}}>
        <Fade in={showAlertBox.value}>
          <Alert
            severity={errorMessage === Translate("success") ? "success" : "error"}
            sx={{ m: 1 }}
            action= {
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={handleClose}
                
              >
                <Iconify icon="ic:round-close"  />
                
              </IconButton>
            }
          >
            
              { String(errorMessage)}
          </Alert>
        </Fade>
        
      </Box>
      
      {
        arrays.headOfDepartments.includes(ROLE.toLowerCase())
        ? <SendAlertDialog
            title={Translate("sendAlertTo")}
            open={showSendAlertDialog.value}
            onClose={() => showSendAlertDialog.onFalse()}
            salesTaker={getAlertTo(ROLE)}
            sendAlert={(alertMessage) => handleSendAlert(alertMessage)}
          />
        : null
      }
      
    </>
    
  );

}

InvoiceNewEditForm.propTypes = {
  currentInvoice: PropTypes.object,
};
