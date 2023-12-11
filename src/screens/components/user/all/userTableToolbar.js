import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { useLocales } from 'src/locales';
// @mui
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';

// components
import Iconify from 'src/components/iconify';
import { usePopover } from 'src/components/custom-popover';

// ----------------------------------------------------------------------
export default function UserTableToolbar({
  filters,
  onFilters,
  departmentOptions,
}) {
  const popover = usePopover();

  const handleFilterDepartment = useCallback(
    (value) => {
      onFilters('departments', value);
    },
    [onFilters]
  );

  const handleFilterName = useCallback(
    (event) => {
      onFilters('name', event.target.value);
    },
    [onFilters]
  );

  const { t } = useLocales();
  const Translate = (text) => t(text);

  return (
    <>
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
      

        <Stack direction="row" alignItems="center" spacing={2} flexGrow={1} sx={{ width: 1 }}>
          <FormControl
            sx={{
              flexShrink: 0,
              width: { xs: 1, md: 180 },
            }}
          >
            <InputLabel>{Translate("departments")}</InputLabel>

            <Select
              multiple
              value={filters.departments}
              onChange={(event) => {
                  const allItems = departmentOptions;
                  const selected = event.target.value;
                  const lastIndex = selected.length - 1;
                  const lastSelectedItem = selected[lastIndex];

                  console.log(selected);

                  if (selected[lastIndex] === "All") { // Selected All
                    handleFilterDepartment(allItems);
                  } else if(selected[0] === "All"){ // Selected All previously then deselected other value
                    handleFilterDepartment(selected.slice(1));
                  } else if(selected === allItems.slice(1)){ // Selected All previously then deselected All
                    handleFilterDepartment([]);
                  } else  {
                    handleFilterDepartment(selected);
                  }
                  // handleFilterDepartment(event);
                }
              }
              input={<OutlinedInput label={Translate("departments")} />}
              renderValue={(selected) => selected.map((value) => value).join(', ')}
              sx={{ textTransform: 'capitalize' }}
            >
              {departmentOptions.map((option, index) => (
                <MenuItem key={index} value={option}>
                  <Checkbox disableRipple size="small" checked={filters.departments.includes(option)} />
                  {index === 0 ? Translate('all') : option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            fullWidth
            value={filters.name}
            onChange={handleFilterName}
            placeholder={Translate("searchCustomerName")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
                </InputAdornment>
              ),
            }}
          />

          {/* <IconButton onClick={popover.onOpen}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton> */}
        </Stack>
      </Stack>

      {/* <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        arrow="right-top"
        sx={{ width: 140 }}
      >
        <MenuItem
          onClick={() => {
            popover.onClose();
          }}
        >
          <Iconify icon="solar:printer-minimalistic-bold" />
          Print
        </MenuItem>

        <MenuItem
          onClick={() => {
            popover.onClose();
          }}
        >
          <Iconify icon="solar:import-bold" />
          Import
        </MenuItem>

        <MenuItem
          onClick={() => {
            popover.onClose();
          }}
        >
          <Iconify icon="solar:export-bold" />
          Export
        </MenuItem>
      </CustomPopover> */}
    </>
  );
}

UserTableToolbar.propTypes = {
  filters: PropTypes.object,
  onFilters: PropTypes.func,
  departmentOptions: PropTypes.array,
};
