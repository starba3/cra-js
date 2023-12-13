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

  const {t, currentLang} = useLocales();
  const Translate = (text) => t(text);

  const customerName = currentLang.value === 'ar' ? customerNameAr : customerNameEn;

  return (
    <TableRow hover selected={selected}>
        
        <TableCell >{customerName}</TableCell>
        <TableCell >{isPercentage ? '100%' : `${total.toLocaleString()} ${Translate('currencyShortcut')}`}</TableCell>
        <TableCell >{isPercentage ? `${((zeroToThirty / total) * 100).toFixed(2)}%` : `${zeroToThirty.toLocaleString()} ${Translate('currencyShortcut')}`  } </TableCell>
        <TableCell >{isPercentage ? `${((thirtyOneToSixty / total) * 100).toFixed(2)}%` : `${thirtyOneToSixty.toLocaleString()} ${Translate('currencyShortcut')}`  } </TableCell>
        <TableCell >{isPercentage ? `${((sixtyOneToNinety / total) * 100).toFixed(2)}%` : `${sixtyOneToNinety.toLocaleString()} ${Translate('currencyShortcut')}`  } </TableCell>
        <TableCell >{isPercentage ? `${((ninetyOneToOneTwenty / total) * 100).toFixed(2)}%` : `${ninetyOneToOneTwenty.toLocaleString()} ${Translate('currencyShortcut')}`  } </TableCell>
        <TableCell >{isPercentage ? `${((oneTwentyOnePlus / total) * 100).toFixed(2)}%` : `${oneTwentyOnePlus.toLocaleString()} ${Translate('currencyShortcut')}`  } </TableCell>

        
      </TableRow>
  );
}

TableRowNew.propTypes = {
  row: PropTypes.object,
  selected: PropTypes.bool,
  isPercentage: PropTypes.bool,
};
