import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';
import { useLocales } from 'src/locales';
// @mui
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import ListItemButton, { listItemButtonClasses } from '@mui/material/ListItemButton';
// components
import Iconify from 'src/components/iconify';
import SearchNotFound from 'src/components/search-not-found';

// ----------------------------------------------------------------------

export default function EngineersListDialog({
  title = 'Address Book',
  sendAlert,
  //
  open,
  onClose,
  //
  salesTaker,
}) {
  
  const [alertMessage, setAlertMessage] = useState('')

  const { t } = useLocales()
  const Translate = (text) => t(text);

  const handleAlertMessage = (event) => {
    setAlertMessage(event.target.value)
  }





  return (
    <Dialog fullWidth maxWidth="xs" open={open} onClose={onClose}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ p: 3, pr: 1.5 }}
      >
        <Typography variant="h6"> {`${title} ${salesTaker}`} </Typography>

        
      </Stack>

      <Stack sx={{ p: 2, pt: 0 }}>
        <TextField
          value={alertMessage}
          onChange={handleAlertMessage}
          placeholder={Translate("searchCustomer")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Stack sx={{ p: 2, pt: 0 }}>
        <Button 
          variant='contained' 
          color='success'
          onClick={() => sendAlert(alertMessage)}
        >
          {Translate("sendAlert")}
        </Button>
      </Stack>
      
    </Dialog>
  );
}

EngineersListDialog.propTypes = {
  onClose: PropTypes.func,
  salesTaker: PropTypes.string,
  open: PropTypes.bool,
  sendAlert: PropTypes.func,
  title: PropTypes.string,
};

// ----------------------------------------------------------------------

function applyFilter({ inputData, query }) {
  if (query) {
    return inputData.filter(
      (engineer) =>
        engineer.firstName.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        engineer.lastName.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        engineer.email.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        engineer.username.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }

  return inputData;
}
