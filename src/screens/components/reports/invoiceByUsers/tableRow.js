import PropTypes from 'prop-types';
import { useLocales } from 'src/locales';
import { format } from 'date-fns';
// @mui
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';



// hooks
// utils
// components

// ----------------------------------------------------------------------

export default function TableRowNew({
  row,
  selected,
  isPercentage,
}) {
  const { id, invoiceNo, issueInvoiceDate, invoiceAmount, daysToCollected, customerNameEn, customerNameAr, productNameEn, productNameAr, paidStatus, department } = row;

  const { currentLang } = useLocales();

  const customerName = currentLang.value === 'ar' ? customerNameAr : customerNameEn;
  const productName = currentLang.value === 'ar' ? productNameAr : productNameEn;


  return (
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
            // secondary={
            //   <Link
            //     noWrap
            //     variant="body2"
            //     onClick={onViewRow}
            //     sx={{ color: 'text.disabled', cursor: 'pointer' }}
            //   >
            //     {invoiceNo}
            //   </Link>
            // }
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

        <TableCell >{daysToCollected}</TableCell>
        
        <TableCell >${invoiceAmount}</TableCell>


        <TableCell >{productName}</TableCell>

        <TableCell align="center" >{paidStatus}</TableCell>

        <TableCell align="center" >{department}</TableCell>
        {/* <TableCell>{fCurrency(department)}</TableCell> */}

        
      </TableRow>
  );
}

TableRowNew.propTypes = {
  row: PropTypes.object,
  selected: PropTypes.bool,
  isPercentage: PropTypes.bool,
};
