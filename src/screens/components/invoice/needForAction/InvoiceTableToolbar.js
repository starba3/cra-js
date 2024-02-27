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
  serviceOptions,
  installationStatusOptions,
  role,
}) {
  const popover = usePopover();

  // const prevSelectedPaidStatus = useRef([]);
  // const prevSelectedDepartment = useRef([]);
  const prevSelectedInstallationStatus = useRef([]);

  const { t } = useLocales()

  const Translate = (text) => t(text);

  const handleFilterName = useCallback(
    (event) => {
      onFilters('name', event.target.value);
    },
    [onFilters]
  );

  const handleFilterService = useCallback(
    (value) => {
      onFilters(
        'departments',
        typeof value === 'string' ? value.split(',') : value
      );
    },
    [onFilters]
  );

  const handleFilterInstallationStatus = useCallback(
    (value) => {
      onFilters(
        'installationStatus',
        typeof value === 'string' ? value.split(',') : value
      );
    },
    [onFilters]
  );

  const handleFilterStartDate = useCallback(
    (newValue) => {
      onFilters('startDate', newValue);
    },
    [onFilters]
  );

  const handleFilterEndDate = useCallback(
    (newValue) => {
      onFilters('endDate', newValue);
    },
    [onFilters]
  );

  const installationStatusSelect = (role.toLowerCase() === "headofengineer" || role.toLowerCase() === "installation")
  ? <FormControl
      sx={{
        flexShrink: 0,
        width: { xs: 1, md: 180 },
      }}
    >
      <InputLabel>{Translate("installationStatus")}</InputLabel>
      
      <Select
        multiple
        value={filters.installationStatus}
        onChange={(event) => {
          const allItems = installationStatusOptions;
          const selected = event.target.value;
          const lastIndex = selected.length - 1;

          console.log("selected", selected);
          

          if (selected[lastIndex] === "All") { // Selected All option
            handleFilterInstallationStatus(allItems.map(item => item.value));
            prevSelectedInstallationStatus.current = allItems;
          } else if(selected[0] === "All"){ // Selected All option then deslected another option
            handleFilterInstallationStatus(selected.slice(1));
            prevSelectedInstallationStatus.current = selected.slice(1);
          } else if(prevSelectedInstallationStatus.current.length && prevSelectedInstallationStatus.current.slice()[0] === "All")  { // Selected All option then deslected All
            handleFilterInstallationStatus([]);
            prevSelectedInstallationStatus.current = [];
          } else { // Selected any option other than all
            handleFilterInstallationStatus(selected);
            prevSelectedInstallationStatus.current = selected;
          }

        }}
        input={<OutlinedInput label={Translate("installationStatus")} />}
        renderValue={(selected) => selected.map((value) => value).join(', ')}
        sx={{ textTransform: 'capitalize' }}
      >
        {installationStatusOptions.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            <Checkbox disableRipple size="small" checked={filters.installationStatus.includes(option.value)} />
            {option.text}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  : null


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
      
      {installationStatusSelect}

      <DatePicker
        label={Translate("startDate")}
        value={filters.startDate}
        onChange={handleFilterStartDate}
        slotProps={{ textField: { fullWidth: true } }}
        sx={{
          maxWidth: { md: 180 },
        }}
      />

      <DatePicker
        label={Translate("endDate")}
        value={filters.endDate}
        onChange={handleFilterEndDate}
        slotProps={{
          textField: {
            fullWidth: true,
            error: dateError,
          },
        }}
        sx={{
          maxWidth: { md: 180 },
        }}
      />

      <Stack direction="row" alignItems="center" spacing={2} flexGrow={1} sx={{ width: 1 }}>
        <TextField
          fullWidth
          value={filters.name}
          onChange={handleFilterName}
          placeholder={Translate("searchInvoiceNamePlaceHolder")}
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

      <CustomPopover
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
          {Translate("print")}
        </MenuItem>

        <MenuItem
          onClick={() => {
            popover.onClose();
          }}
        >
          <Iconify icon="solar:import-bold" />
          {Translate("import")}
        </MenuItem>

        <MenuItem
          onClick={() => {
            popover.onClose();
          }}
        >
          <Iconify icon="solar:export-bold" />
          {Translate("export")}
        </MenuItem>
      </CustomPopover>
    </>
  );
}

InvoiceTableToolbar.propTypes = {
  dateError: PropTypes.bool,
  filters: PropTypes.object,
  onFilters: PropTypes.func,
  serviceOptions: PropTypes.array,
  installationStatusOptions: PropTypes.array,
  role: PropTypes.string
};
