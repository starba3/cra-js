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
  isPercentage,
}) {
  const { customerNameEn,customerNameAr,zeroToThirty,thirtyOneToSixty,sixtyOneToNinety,ninetyOneToOneTwenty,oneTwentyOnePlus } = row;
  const total = zeroToThirty + thirtyOneToSixty + sixtyOneToNinety + ninetyOneToOneTwenty + oneTwentyOnePlus;

  const {t} = useLocales();
  const Translate = (text) => t(text);

  return (
    <TableRow hover selected={selected}>
        
        <TableCell >{customerNameEn}</TableCell>
        <TableCell >{customerNameAr}</TableCell>
        <TableCell >{isPercentage ? '100%' : `${total} ${Translate('currencyShortcut')}`}</TableCell>
        <TableCell >{isPercentage ? ((zeroToThirty / total) * 100).toFixed(2) : zeroToThirty} </TableCell>
        <TableCell >{isPercentage ? ((thirtyOneToSixty / total) * 100).toFixed(2) : thirtyOneToSixty} </TableCell>
        <TableCell >{isPercentage ? ((sixtyOneToNinety / total) * 100).toFixed(2) : sixtyOneToNinety} </TableCell>
        <TableCell >{isPercentage ? ((ninetyOneToOneTwenty / total) * 100).toFixed(2) : ninetyOneToOneTwenty} </TableCell>
        <TableCell >{isPercentage ? ((oneTwentyOnePlus / total) * 100).toFixed(2) : oneTwentyOnePlus} </TableCell>

        
      </TableRow>
  );
}

TableRowNew.propTypes = {
  row: PropTypes.object,
  selected: PropTypes.bool,
  isPercentage: PropTypes.bool,
};
