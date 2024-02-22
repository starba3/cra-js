import PropTypes from 'prop-types';
import { useLocales } from 'src/locales';

// @mui
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function InvoiceTableToolbar({
  handleOpen,
}) {

  const { t } = useLocales()
  const Translate = (text) => t(text);

  return (
    <Stack
      spacing={2}
      alignItems={{ xs: 'flex-end', md: 'center' }}
      // justifyContent="flex-end"
      direction={{
        xs: 'column',
        md: 'row',
      }}
      sx={{
        p: 2.5,
        pr: { xs: 2.5, md: 1 },
      }}
    >


    

       <Button 
        variant='contained'
        endIcon={<Iconify icon="mdi:search" />}
        onClick={handleOpen}
       >
        {Translate("searchEngineers")}
      </Button> 

  </Stack>
  );
}

InvoiceTableToolbar.propTypes = {
  // onChange: PropTypes.func,
  handleOpen: PropTypes.func,
  // users: PropTypes.array.isRequired,
  // selectedCustomers: PropTypes.array
};
