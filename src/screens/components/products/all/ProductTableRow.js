import PropTypes from 'prop-types';
// @mui
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// utils
// components
import { usePopover } from 'src/components/custom-popover';

// ----------------------------------------------------------------------

export default function ProductTableRow({
  row,
  selected,
  onSelectRow,
  onViewRow,
  onEditRow,
  onDeleteRow,
  handleOpenInquiry,
}) {
  const { id, code, nameEn, nameAr } = row;

  const confirm = useBoolean();

  const popover = usePopover();

  return (
    <>
      <TableRow hover >
        
        <TableCell >{code}</TableCell>
        
        <TableCell >{nameEn}</TableCell>

        <TableCell >{nameAr}</TableCell>

        {/* <IconButton onClick={popover.onOpen}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton> */}

      </TableRow>

      {/* <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        arrow="right-top"
        sx={{ width: 160 }}
      >
        <MenuItem
          onClick={() => {
            onViewRow();
            popover.onClose();
          }}
        >
          <Iconify icon="solar:eye-bold" />
          View
        </MenuItem>

        <Divider sx={{ borderStyle: 'solid' }} />

        <MenuItem
          onClick={() => {
            handleOpenInquiry();
            // confirm.onTrue();
            popover.onClose();
          }}
        >
          <Iconify icon="bx:file" />
          Inquiry
        </MenuItem>
      </CustomPopover>

      <ConfirmDialog
        open={confirm.value}
        onClose={confirm.onFalse}
        title="Delete"
        content="Are you sure want to delete?"
        action={
          <Button variant="contained" color="error" onClick={onDeleteRow}>
            Delete
          </Button>
        }
      /> */}
    </>
  );
}

ProductTableRow.propTypes = {
  onDeleteRow: PropTypes.func,
  onEditRow: PropTypes.func,
  onSelectRow: PropTypes.func,
  onViewRow: PropTypes.func,
  handleOpenInquiry: PropTypes.func,
  row: PropTypes.object,
  selected: PropTypes.bool,
};
