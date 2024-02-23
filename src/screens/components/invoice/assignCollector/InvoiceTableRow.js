import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { useLocales } from 'src/locales';
// @mui
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// utils
// components
import Iconify from 'src/components/iconify';
import CustomPopover, { usePopover } from 'src/components/custom-popover';

// ----------------------------------------------------------------------

export default function InvoiceTableRow({
  row,
  selected,
  onViewRow,
  handleOpenAssign,
  handleOpenInquiry,
}) {
  const { id, invoiceNo, issueInvoiceDate, invoiceAmount, installationStatus, customerNameEn, customerNameAr, productNameEn, productNameAr, department } = row;

  const { t, currentLang } = useLocales()

  const customerName = currentLang.value === 'ar' ? customerNameAr : customerNameEn;
  const productName = currentLang.value === 'ar' ? productNameAr : productNameEn;

  const Translate = (text) => t(text);

  const confirm = useBoolean();

  const popover = usePopover();

  return (
    <>
      <TableRow hover selected={selected}>

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
        
        {/* <TableCell align="center" >{installationStatus}</TableCell> */}

        <TableCell >{`${invoiceAmount.toLocaleString()} ${Translate('currencyShortcut')}`}</TableCell>

        <TableCell align="center" >{productName}</TableCell>

        <TableCell align="center" >{department}</TableCell>

        <TableCell>
          <Button 
            variant='contained' 
            color='success'
            onClick={() => handleOpenAssign(id)}
          >
            {`${Translate("assign")} ${Translate("collector")}`} 
          </Button>
        </TableCell>

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

        {/* <Divider sx={{ borderStyle: 'dashed' }} /> */}

      </CustomPopover>
    </>
  );
}

InvoiceTableRow.propTypes = {

  onViewRow: PropTypes.func,
  handleOpenAssign: PropTypes.func,
  handleOpenInquiry: PropTypes.func,
  row: PropTypes.object,
  selected: PropTypes.bool,
};