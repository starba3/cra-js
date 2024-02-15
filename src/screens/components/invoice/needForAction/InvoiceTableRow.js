import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { useLocales } from 'src/locales';
// @mui
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// utils
// components
import Iconify from 'src/components/iconify';
import { ConfirmDialog } from 'src/components/custom-dialog';
import CustomPopover, { usePopover } from 'src/components/custom-popover';

// ----------------------------------------------------------------------

export default function InvoiceTableRow({
  row,
  selected,
  onSelectRow,
  onViewRow,
  onEditRow,
  onDeleteRow,
  handleOpenInquiry,
  userRole,
}) {

  const sample = {
    id: 64,
    invoiceNo: "INV03323",
    issueInvoiceDate: "2023-09-09T00:00:00",
    invoiceAmount: 3333,
    daysToCollected: 0,
    customerNameEn: "Dmmam Hospital",
    customerNameAr: "مستشفى الدمام",
    productNameEn: "ًMedical Device",
    productNameAr: "جهاز طبي",
    department: "Operation",
    paidStatus: "unpaid"
  }
  const { id, invoiceNo, issueInvoiceDate, invoiceAmount, daysToCollected, customerNameAr, customerNameEn, productNameEn, productNameAr, paidStatus, department } = row;
  
  const { t, currentLang } = useLocales()
  const customerName = currentLang.value === 'ar' ? customerNameAr : customerNameEn;
  const productName = currentLang.value === 'ar' ? productNameAr : productNameEn;
  
  const Translate = (text) => t(text);
  const confirm = useBoolean();

  const popover = usePopover();

  const editMenuItem = userRole === "operation" ?
       <MenuItem
          onClick={() => {
            onEditRow();
            popover.onClose();
          }}
        >
          <Iconify icon="solar:pen-bold" />
          {Translate("edit")}
        </MenuItem>
    :  null;


  return (
    <>
      <TableRow hover selected={selected}>
        {/* <TableCell padding="checkbox">
          <Checkbox checked={selected} onClick={onSelectRow} />
        </TableCell> */}

        <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar alt={customerName} sx={{ mr: 2 }}>
            {customerName.charAt(0).toUpperCase()}
          </Avatar>

          <ListItemText
            disableTypography
            primary={
              <Typography variant="body2" noWrap>
                {customerName}
              </Typography>
            }
            secondary={
              <Link
                noWrap
                variant="body2"
                onClick={onViewRow}
                sx={{ color: 'text.disabled', cursor: 'pointer' }}
              >
                {invoiceNo}
              </Link>
            }
          />
        </TableCell>

        <TableCell>
          <ListItemText
            primary={format(new Date(issueInvoiceDate), 'dd MMM yyyy')}
            secondary={format(new Date(issueInvoiceDate), 'p')}
            primaryTypographyProps={{ typography: 'body2', noWrap: true }}
            secondaryTypographyProps={{
              mt: 0.5,
              component: 'span',
              typography: 'caption',
            }}
          />
        </TableCell>

        {/* <TableCell >{daysToCollected}</TableCell> */}
        
        <TableCell >{`${invoiceAmount.toLocaleString()} ${Translate('currencyShortcut')}`}</TableCell>

        <TableCell align="center" >{productName}</TableCell>

        <TableCell align="center" >{paidStatus}</TableCell>

        <TableCell align="center" >{department}</TableCell>

        <TableCell align="right" sx={{ px: 1 }}>
          <IconButton color={popover.open ? 'inherit' : 'default'} onClick={popover.onOpen}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>

      <CustomPopover
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
          {Translate("view")}
        </MenuItem>

        

        <MenuItem
          onClick={() => {
            handleOpenInquiry();
            // confirm.onTrue();
            popover.onClose();
          }}
        >
          <Iconify icon="bx:file" />
          {Translate("inquiry")}
        </MenuItem>

        {editMenuItem}

        {/* <Divider sx={{ borderStyle: 'solid' }} /> */}
        
        {/* <MenuItem
          onClick={() => {
            confirm.onTrue();
            popover.onClose();
          }}
          sx={{ color: 'error.main' }}
        >
          <Iconify icon="solar:trash-bin-trash-bold" />
          {Translate("delete")}
        </MenuItem> */}
      </CustomPopover>

      <ConfirmDialog
        open={confirm.value}
        onClose={confirm.onFalse}
        title={Translate("delete")}
        content={Translate("deleteComfirmationMessage")}
        action={
          <Button variant="contained" color="error" onClick={() => {
            console.log("Delete clicked");
            onDeleteRow();
            confirm.onFalse()
          }}>
            {Translate("delete")}
          </Button>
        }
      />
    </>
  );
}

InvoiceTableRow.propTypes = {
  onDeleteRow: PropTypes.func,
  onEditRow: PropTypes.func,
  onSelectRow: PropTypes.func,
  onViewRow: PropTypes.func,
  handleOpenInquiry: PropTypes.func,
  row: PropTypes.object,
  selected: PropTypes.bool,
  userRole: PropTypes.string,
};
