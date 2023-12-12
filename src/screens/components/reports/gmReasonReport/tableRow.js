import PropTypes from 'prop-types';
import { useLocales } from 'src/locales';
// @mui
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
// hooks
// utils
// components

// ----------------------------------------------------------------------

export default function TableRowNew({
  row,
  selected,
}) {
  const { date,reason,totalAmount } = row;

  const { t } = useLocales()
  const Translate = (text) => t(text);
  return (
    <TableRow hover selected={selected}>
        
        <TableCell >{`${subtractDaysFromDate(new Date(date), 7)} -  ${formatDate(new Date(date))} `} </TableCell>
        <TableCell >{reason} </TableCell>
        <TableCell >{`${totalAmount.toLocaleString()} ${Translate('currencyShortcut')}`} </TableCell>

        
      </TableRow>
  );
}

const subtractDaysFromDate = (date, days) => {
  const dateCopy = new Date(date);
  dateCopy.setDate(dateCopy.getDate() - days);
  return formatDate(dateCopy);
}

const formatDate = (date) => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  return `${day}/${month}`;
}

TableRowNew.propTypes = {
  row: PropTypes.object,
  selected: PropTypes.bool,
};
