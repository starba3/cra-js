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
  onChange,
  customers,
  handleOpen,
  selectedCustomers,
}) {

  const { t } = useLocales()
  const Translate = (text) => t(text);

  return (
    <Stack
      spacing={2}
      alignItems={{ xs: 'flex-end', md: 'center' }}
      justifyContent="flex-end"
      direction={{
        xs: 'column',
        md: 'row',
      }}
      sx={{
        p: 2.5,
        pr: { xs: 2.5, md: 1 },
      }}
    >


    <FormControl
      sx={{
        flexShrink: 0,
        width: { xs: 1, md: 180 },
      }}
    >
      <InputLabel>Customers List</InputLabel>

        <Select
          multiple
          value={selectedCustomers}  // Ensure that the initial value is set correctly
          onChange={(event) => {
            console.log(event.target.value);
            // setSelectedValue(event.target.value);
            onChange(event.target.value);
          }}  // Use event.target.value to get the selected value
          input={<OutlinedInput label="Customers List" />}
          renderValue={(selected) => selected}
          sx={{ textTransform: 'capitalize' }}
        >
          {customers.map((option, index) => (
            <MenuItem key={index} value={option.id} selected>
              {/* Use Typography inside MenuItem */}
              <Checkbox disableRipple size="small" checked={selectedCustomers.includes(option.id)} />
              {/* <Typography> */}
                {index === 0 ? Translate("all") : option.customerNameAr}
              {/* </Typography> */}
            </MenuItem>
          ))}
        </Select>
    </FormControl>

      {/* <Button >
        <Iconify icon="mdi:search" />
      </Button> */}

  </Stack>
  );
}

InvoiceTableToolbar.propTypes = {
  onChange: PropTypes.func,
  handleOpen: PropTypes.func,
  customers: PropTypes.array.isRequired,
  selectedCustomers: PropTypes.array
};
