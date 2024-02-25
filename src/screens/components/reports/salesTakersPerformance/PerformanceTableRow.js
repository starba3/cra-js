import PropTypes from 'prop-types';
import { useLocales } from 'src/locales';
// @mui
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
// hooks
// utils
// components

// ----------------------------------------------------------------------

export default function PerformanceTableRow({
  row,
  selected,
}) {

  const { id, name, email, acknowledged, tempAcknowledged, notAcknowledged } = row;
  
  const { t, currentLang } = useLocales()
  const Translate = (text) => t(text);

  return (
    <TableRow hover selected={selected}>
        {/* <TableCell padding="checkbox">
          <Checkbox checked={selected} onClick={onSelectRow} />
        </TableCell> */}

        
        <TableCell >{name}</TableCell>

        <TableCell >{email}</TableCell>
        
        <TableCell align="center" >{acknowledged}</TableCell>

        <TableCell align="center" >{tempAcknowledged}</TableCell>

        <TableCell align="center" >{notAcknowledged}</TableCell>
      </TableRow>
  );
}

PerformanceTableRow.propTypes = {
  row: PropTypes.object,
  selected: PropTypes.bool,
};
