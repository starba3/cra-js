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
import { _installationStatus } from 'src/lists/installation';
import { _daysToCollectList } from 'src/lists/collectionSource';
import { _installmentStatus } from 'src/lists/installmentStatus';
// components
import Scrollbar from 'src/components/scrollbar';



// ----------------------------------------------------------------------

export default function AttachmentsTableView({
    data,
  }) {

  const { t } = useLocales()
  const Translate = (text) => t(text)

  return (
    <>
      <Typography variant="h6" gutterBottom>
        {Translate("attachments")}
      </Typography>
      <TableContainer sx={{ overflow: 'unset', mt: 5, mb: 7 }}>
        <Scrollbar>
          <Table sx={{ minWidth: 960 }}>
            <TableHead>
              <TableRow>

                <TableCell width={40}>#</TableCell>

                <TableCell sx={{ typography: 'subtitle2' }}>{Translate("name")}</TableCell>

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
                      <Typography variant="subtitle2"> <a target='_blank' rel="noreferrer" href={row.attachmentPath}>{row.fileName}</a> </Typography>
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

AttachmentsTableView.propTypes = {
    data: PropTypes.array,
} 
