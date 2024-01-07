import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
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

  const [selectedValue, setSelectedValue] = useState([]);
  const prevSelected = useRef(selectedValue);

  const { t, currentLang } = useLocales()
  const Translate = (text) => t(text);

  const getSelectRenderValue = (list) => {
    let renderValue = (list.length && list[0] === 0 ) ? `,${Translate("all")} ` : "";
    renderValue += customers.filter((item) => list.includes(item.id))
      .reduce((acc, item) => `${acc}, ${item.customerNameAr}`, "")
    return renderValue && renderValue.substring(1);
  }

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


    <FormControl
      sx={{
        flexShrink: 0,
        width: { xs: 1, md: 180 },
      }}
    >
      <InputLabel>{Translate("customersList")}</InputLabel>

        <Select
          multiple
          value={selectedCustomers}  // Ensure that the initial value is set correctly
          onChange={(event) => {

            const allItems = customers.map((option) => option.id);
            const selected = event.target.value;
            const lastIndex = selected.length - 1;

            console.log(selected);

            if (selected[lastIndex] === "0") { // Selected All option
              setSelectedValue(allItems);
              onChange(allItems);
              prevSelected.current = allItems;
            } else if(selected[0] === "0"){ // Selected All option then deslected another option
              setSelectedValue(selected.slice(1));
              onChange(selected.slice(1));
              prevSelected.current = selected.slice(1);
            } else if(prevSelected.current.length && prevSelected.current.slice()[0] === "0")  { // Selected All option then deslected All
              setSelectedValue([]);
              onChange([]);
              prevSelected.current = [];
            } else { // Selected any option other than all
              setSelectedValue(selected);
              onChange(selected);
              prevSelected.current = selected;
            }
          }}  // Use event.target.value to get the selected value
          input={<OutlinedInput label={Translate("customersList")} />}
          renderValue={(selected) => getSelectRenderValue(selected)}
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
