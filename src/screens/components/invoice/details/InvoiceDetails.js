import PropTypes from 'prop-types';
import { useState } from 'react';
import { useLocales } from 'src/locales';
// @mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import Link from '@mui/material/Link';
// components
import Label from 'src/components/label';
import Scrollbar from 'src/components/scrollbar';
import InvoiceToolbar from 'src/screens/components/invoice/exportPDF/invoice-toolbar';
//

// ----------------------------------------------------------------------

export default function InvoiceDetails({ invoice }) {
  const [currentInvoice, setCurrentInvoice] = useState(invoice);
  
  const { t } = useLocales();
  const Translate = (text) => t(text);

  const renderNotes = (
    <>
      {/* <Typography variant="h6" gutterBottom>
        {Translate("notes")}
      </Typography> */}
      <TableContainer sx={{ overflow: 'unset', mt: 5 }}>
        <Scrollbar>
          <Table sx={{ minWidth: 960 }}>
            <TableHead>
              <TableRow>

                <TableCell width={40}>
                    <Typography width={40}>#</Typography>
                </TableCell>

                <TableCell sx={{ typography: 'subtitle2' }}>
                  <Typography>{Translate("note")}</Typography>
                </TableCell>

                <TableCell sx={{ typography: 'subtitle2' }}>
                  <Typography>{Translate("user")}</Typography>
                </TableCell>

                <TableCell sx={{ typography: 'subtitle2' }}>
                  <Typography>{Translate("createDate")}</Typography>
                </TableCell>

              </TableRow>
            </TableHead>

            <TableBody>
              {currentInvoice?.notes.map((row, index) => ( 
                <TableRow key={index}>
                  <TableCell>
                    <Typography>{index + 1}</Typography>
                  </TableCell>

                  <TableCell>
                      <Typography variant="subtitle2">{row.noteText}</Typography>
                  </TableCell>

                  <TableCell>
                    <Typography>{row.createdBy}</Typography>
                  </TableCell>

                  <TableCell>
                    <Typography>{row.createdDate.substring(0, row.createdDate.indexOf('T'))}</Typography>
                  </TableCell>

                  
                </TableRow>
              ))} 

            </TableBody> 
          </Table>
        </Scrollbar>
      </TableContainer>
    </>  
  );
  
  const renderAttachments = (
    <>
      <Typography variant="h6" gutterBottom>
        {Translate("attachments")}
      </Typography>
      <TableContainer sx={{ overflow: 'unset', mt: 5, mb: 7 }}>
        <Scrollbar>
          <Table sx={{ minWidth: 960 }}>
            <TableHead>
              <TableRow>
                <TableCell>
                    <Typography width={40}>#</Typography>
                </TableCell>

                <TableCell sx={{ typography: 'subtitle2' }}>
                  <Typography>{Translate("name")}</Typography>
                </TableCell>

                <TableCell sx={{ typography: 'subtitle2' }}>
                  <Typography>{Translate("user")}</Typography>
                </TableCell>

                <TableCell sx={{ typography: 'subtitle2' }}>
                  <Typography>{Translate("createDate")}</Typography>
                </TableCell>

              </TableRow>
            </TableHead>

            <TableBody>
              {currentInvoice?.attachments.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Typography>{index + 1}</Typography>
                  </TableCell>

                  <TableCell>
                    <Link href={row.attachmentPath} target="_blank" variant='subtitle2' rel="noreferrer">{row.fileName}</Link>  
                  </TableCell>

                  <TableCell>
                    <Typography>{row.createdBy}</Typography>
                  </TableCell>

                  <TableCell>
                    <Typography>{row.createdDate.substring(0, row.createdDate.indexOf('T'))}</Typography>
                  </TableCell>

                  
                </TableRow>
              ))} 

            </TableBody> 
          </Table>
        </Scrollbar>
      </TableContainer>
    </>
  );

  const renderFooter = (
    <Grid container>
      <Grid xs={12} md={9} sx={{ py: 3 }}>
        <Typography variant="subtitle2">NOTES</Typography>

        <Typography variant="body2">
          We appreciate your business. Should you need us to add VAT or extra notes let us know!
        </Typography>
      </Grid>

      <Grid xs={12} md={3} sx={{ py: 3, textAlign: 'right' }}>
        <Typography variant="subtitle2">Have a Question?</Typography>

        <Typography variant="body2">support@minimals.cc</Typography>
      </Grid>
    </Grid>
  );


  return (
    <>
     <InvoiceToolbar
        invoice={invoice}
        
      />
      
      <Card sx={{ pt: 5, px: 5 }}>
        <Box
          rowGap={5}
          display="grid"
          alignItems="center"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
          }}
        >
          <Box
            // component="img"
            // alt="logo"
            // src="/logo/logo_single.svg"
            sx={{ width: 48, height: 48 }}
          />

           <Stack spacing={1} alignItems={{ xs: 'flex-start', md: 'flex-end' }}>
            <Label
              variant="soft"
              color= 'default'
            >
              <Typography>{currentInvoice.department}</Typography> 
            </Label>

          </Stack> 

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("issueDate")} 
            </Typography>
              <Typography>{currentInvoice?.issueInvoiceDate }</Typography> 
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("amount")}
            </Typography>
            <Typography>{currentInvoice?.invoiceAmount}</Typography> 
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("currency")}
            </Typography>
            <Typography>{currentInvoice?.currency}</Typography> 
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("customerCode")}
            </Typography>
            <Typography>{currentInvoice?.customerCode}</Typography> 
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("nameEnglish")}
            </Typography>
            <Typography>{currentInvoice?.customerNameEn}</Typography> 
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("nameArabic")}
            </Typography>
            <Typography>{currentInvoice?.customerNameAr}</Typography> 
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("productNameEn")}
            </Typography>
            <Typography>{currentInvoice?.productNameEn}</Typography> 
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("productNameAr")}
            </Typography>
            <Typography>{currentInvoice?.productNameAr}</Typography> 
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("PoNumber")}
            </Typography>
            <Typography>{currentInvoice?.customerPO}</Typography> 
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("POValue")}
            </Typography>
              <Typography>{currentInvoice?.poValue}</Typography> 
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("region")}
            </Typography>
            <Typography>{currentInvoice?.region}</Typography> 
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("contractNumber")}
            </Typography>
            <Typography>{currentInvoice?.contractNo}</Typography> 
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("deliveryDate")}
            </Typography>
            <Typography>{currentInvoice?.deliveryDate}</Typography> 
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("installationDate")}
            </Typography>
            <Typography>{currentInvoice?.installationDate && currentInvoice?.installationDate.substring(0, currentInvoice?.installationDate.indexOf("T"))}</Typography> 
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("department")}
            </Typography>
            <Typography>{currentInvoice?.department}</Typography> 
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("installationStatus")}
            </Typography>
            <Typography>{currentInvoice?.installationStatus}</Typography> 
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("daysToCollected")}
            </Typography>
            <Typography>{currentInvoice?.daysToCollected}</Typography> 
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("acknowledgeStatus")}
            </Typography>
            <Typography>{currentInvoice?.acknowledgeStatus}</Typography> 
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("collectionSource")}
            </Typography>
            <Typography>{currentInvoice?.collectionSource}</Typography> 
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("claimStatus")}
            </Typography>
            <Typography>{currentInvoice?.claimStatus}</Typography> 
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("claimsDetailStatus")}
            </Typography>
            <Typography>{currentInvoice?.claimsDetailStatus}</Typography> 
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("salesConfirm")}
            </Typography>
            <Typography>{currentInvoice?.salesConfirm}</Typography> 
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("createdBy")}
            </Typography>
            <Typography>{currentInvoice?.createdBy}</Typography> 
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("salesTaker")}
            </Typography>
            <Typography>{currentInvoice?.salesTakerName}</Typography> 
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("collectorName")}
            </Typography>
            <Typography>{currentInvoice?.collectorName}</Typography> 
          </Stack>

          <Stack sx={{ typography: 'body2', mb: 3}}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("responsibleEngineerName")}
            </Typography>
            <Typography>{currentInvoice?.responsibleEngineerName}</Typography> 
          </Stack>
        </Box>

        {renderNotes}

        <Divider sx={{ mt: 5, borderStyle: 'dashed', mb: 3}} />
        {renderAttachments}

      </Card>
    </>
      
    
  );
}


InvoiceDetails.propTypes = {
  invoice: PropTypes.object,
};
