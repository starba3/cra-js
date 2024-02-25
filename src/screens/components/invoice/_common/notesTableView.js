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

export default function NotesTableView({
    data,
  }) {
  const { t } = useLocales()
  const Translate = (text) => t(text)

  return (
    <>
      <Typography variant="h6" gutterBottom>
        {Translate("notes")}
      </Typography>
      <TableContainer sx={{ overflow: 'unset', mt: 5 }}>
        <Scrollbar>
          <Table >
            <TableHead>
              <TableRow>

                <TableCell width={40}>#</TableCell>

                <TableCell sx={{ typography: 'subtitle2' }}>{Translate("note")}</TableCell>

                <TableCell sx={{ typography: 'subtitle2' }}>{Translate("user")}</TableCell>

                <TableCell sx={{ typography: 'subtitle2' }}>{Translate("createDate")}</TableCell>

              </TableRow>
            </TableHead>

            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>

                  <TableCell>
                    {/* <Box sx={{ maxWidth: 560 }}> */}
                      <Typography variant="subtitle2">{row.noteText}</Typography>
                    {/* </Box> */}
                  </TableCell>

                  <TableCell>{row.createdBy}</TableCell>

                  <TableCell>{row.createdDate.substring(0, row.createdDate.indexOf('T'))}</TableCell>
                  
                </TableRow>
              ))} 

            </TableBody> 
          </Table>
        </Scrollbar>
      </TableContainer>
    </>  
  );
}

NotesTableView.propTypes = {
    data: PropTypes.array,
} 
