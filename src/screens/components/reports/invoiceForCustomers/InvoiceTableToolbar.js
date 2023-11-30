import PropTypes from 'prop-types';
import { useCallback } from 'react';
// @mui
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
// components
import Iconify from 'src/components/iconify';
import { usePopover } from 'src/components/custom-popover';

// ----------------------------------------------------------------------

export default function InvoiceTableToolbar({
  onChange,
  customers,
  handleOpen,
}) {


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


        <Button onClick={handleOpen}>
          <Iconify icon="ic:twotone-list" />
          Select User
        </Button>

        {/* <Button >
          <Iconify icon="mdi:search" />
        </Button> */}

      </Stack>
  );
}

InvoiceTableToolbar.propTypes = {
  onChange: PropTypes.func,
  handleOpen: PropTypes.func,
  customers: PropTypes.array,
};
