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

export default function ProductsListDialog({
  title = 'Address Book',
  list,
  action,
  //
  open,
  onClose,
  //
  selected,
  onSelect,
}) {

  const { t } = useLocales()

  const Translate = (text) => t(text);

  const [searchAddress, setSearchAddress] = useState('');

  const dataFiltered = applyFilter({
    inputData: list,
    query: searchAddress,
  });

  const notFound = !dataFiltered.length && !!searchAddress;

  const handleSearchAddress = useCallback((event) => {
    setSearchAddress(event.target.value);
  }, []);

  const handleSelectAddress = useCallback(
    (product) => {
      onSelect(product);
      setSearchAddress('');
      onClose();
    },
    [onClose, onSelect]
  );

  const renderList = (
    <Stack
      spacing={0.5}
      sx={{
        p: 0.5,
        maxHeight: 80 * 8,
        overflowX: 'hidden',
      }}
    >
      {dataFiltered.map((address) => (
        <Stack
          key={address.id}
          spacing={0.5}
          component={ListItemButton}
          selected={selected(`${address.id}`)}
          onClick={() => handleSelectAddress(address)}
          sx={{
            py: 1,
            px: 1.5,
            borderRadius: 1,
            flexDirection: 'column',
            alignItems: 'flex-start',
            [`&.${listItemButtonClasses.selected}`]: {
              bgcolor: 'action.selected',
              '&:hover': {
                bgcolor: 'action.selected',
              },
            },
          }}
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="subtitle2">{Translate("code")}: {address.code}</Typography>
          </Stack>

          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {Translate("nameEnglish")}: {address.nameEn}
          </Typography>

          
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {Translate("nameArabic")}: {address.nameAr}
          </Typography>
          
        </Stack>
      ))}
    </Stack>
  );

  return (
    <Dialog fullWidth maxWidth="xs" open={open} onClose={onClose}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ p: 3, pr: 1.5 }}
      >
        <Typography variant="h6"> {title} </Typography>

        {action && action}
      </Stack>

      <Stack sx={{ p: 2, pt: 0 }}>
        <TextField
          value={searchAddress}
          onChange={handleSearchAddress}
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

      {notFound ? (
        <SearchNotFound query={searchAddress} sx={{ px: 3, pt: 5, pb: 10 }} />
      ) : (
        renderList
      )}
    </Dialog>
  );
}

ProductsListDialog.propTypes = {
  action: PropTypes.node,
  list: PropTypes.array,
  onClose: PropTypes.func,
  onSelect: PropTypes.func,
  open: PropTypes.bool,
  selected: PropTypes.func,
  title: PropTypes.string,
};

// ----------------------------------------------------------------------

function applyFilter({ inputData, query }) {
  if (query) {
    return inputData.filter(
      (address) =>
        address.code.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        address.nameEn.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        address.nameAr.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }

  return inputData;
}
