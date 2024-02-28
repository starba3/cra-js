import PropTypes from 'prop-types';
import { useCallback, useRef } from 'react';
import { useLocales } from 'src/locales';
// @mui
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
// components
import Iconify from 'src/components/iconify';
import CustomPopover, { usePopover } from 'src/components/custom-popover';

// ----------------------------------------------------------------------

export default function InvoiceTableToolbar({
  filters,
  onFilters,
  dateError,
  acknowleadgmentOptions,
}) {

  // const prevSelectedPaidStatus = useRef([]);
  const prevSelectedAckStatus = useRef([]);

  const { t } = useLocales()

  const Translate = (text) => t(text);

  const handleFilterAckStatus = useCallback(
    (value) => {
      onFilters(
        'acknowleadgmentStatus',
        typeof value === 'string' ? value.split(',') : value
      );
    },
    [onFilters]
  );

  return (
    <Stack
        spacing={2}
        alignItems={{ xs: 'flex-end', md: 'center' }}
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
          <InputLabel>{Translate("acknowledgment")}</InputLabel>
          
          <Select
            multiple
            value={filters.acknowleadgmentStatus}
            onChange={(event) => {
              const allItems = acknowleadgmentOptions;
              const selected = event.target.value;
              const lastIndex = selected.length - 1;

              console.log("selected", selected);
              // console.log("prevSelectedAckStatus", prevSelectedAckStatus.current.slice());

              if (selected[lastIndex] === "All") { // Selected All option
                handleFilterAckStatus(allItems.map(item => item.value));
                prevSelectedAckStatus.current = allItems;
              } else if(selected[0] === "All"){ // Selected All option then deslected another option
                handleFilterAckStatus(selected.slice(1));
                prevSelectedAckStatus.current = selected.slice(1);
              } else if(prevSelectedAckStatus.current.length && prevSelectedAckStatus.current.slice()[0].value === "All")  { // Selected All option then deslected All
                handleFilterAckStatus([]);
                prevSelectedAckStatus.current = [];
              } else { // Selected any option other than all
                handleFilterAckStatus(selected);
                prevSelectedAckStatus.current = selected;
              }

            }}
            input={<OutlinedInput label={Translate("acknowledgment")} />}
            renderValue={(selected) => selected.map((value) => value).join(', ')}
            sx={{ textTransform: 'capitalize' }}
          >
            {acknowleadgmentOptions.map((option, index) => (
              <MenuItem key={index} value={option.value}>
                <Checkbox disableRipple size="small" checked={filters.acknowleadgmentStatus.includes(option.value)} />
                {option.text}
              </MenuItem>
            ))}
          </Select>
        </FormControl>





      </Stack>
  );
}

InvoiceTableToolbar.propTypes = {
  dateError: PropTypes.bool,
  filters: PropTypes.object,
  onFilters: PropTypes.func,
  acknowleadgmentOptions: PropTypes.array,
};
