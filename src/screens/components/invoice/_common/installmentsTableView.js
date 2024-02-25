// react
import PropTypes from 'prop-types';
import { useLocales } from 'src/locales';
// @mui
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';

import { _installmentStatus } from 'src/lists/installmentStatus';
// components
import Scrollbar from 'src/components/scrollbar';



// ----------------------------------------------------------------------

export default function InstallmentTableView({
    data,
  }) {
  const { t } = useLocales()
  const Translate = (text) => t(text)

  const installmentStatusList = _installmentStatus()

  return (
    <>
      <Typography variant="h6" gutterBottom>
      {Translate("installments")}
      </Typography>
      <TableContainer sx={{ overflow: 'unset', mt: 5, mb: 7 }}>
        <Scrollbar>
          <Table >
            <TableHead>
              <TableRow>

                <TableCell sx={{ typography: 'subtitle2' }}>{Translate("number")}</TableCell>

                <TableCell sx={{ typography: 'subtitle2' }}>{Translate("dueDate")}</TableCell>

                <TableCell sx={{ typography: 'subtitle2' }}>{Translate("paymentDate")}</TableCell>

                <TableCell sx={{ typography: 'subtitle2' }}>{Translate("amount")}</TableCell>

                <TableCell sx={{ typography: 'subtitle2' }}>{Translate("installmentStatus")}</TableCell>

              </TableRow>
            </TableHead>

            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index}>
                  {/* <TableCell>
                      <Typography variant="subtitle2">{row.noteText}</Typography>
                  </TableCell> */}
                  <TableCell>{row.number}</TableCell>
                  <TableCell>{row.dueDate.substring(0, row.dueDate.indexOf('T'))}</TableCell>
                  <TableCell>{row.paymentDate.substring(0, row.paymentDate.indexOf('T'))}</TableCell>
                  <TableCell>{row.amount}</TableCell>
                  <TableCell>{installmentStatusList[row.installmentStatus]}</TableCell>
                  
                </TableRow>
              ))} 

            </TableBody> 
          </Table>
        </Scrollbar>
      </TableContainer>
    </>   
  );
}

InstallmentTableView.propTypes = {
    data: PropTypes.array,
} 
