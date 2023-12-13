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

                <TableCell width={40}>#</TableCell>

                <TableCell sx={{ typography: 'subtitle2' }}>{Translate("note")}</TableCell>

                <TableCell sx={{ typography: 'subtitle2' }}>{Translate("user")}</TableCell>

                <TableCell sx={{ typography: 'subtitle2' }}>{Translate("createDate")}</TableCell>

              </TableRow>
            </TableHead>

            <TableBody>
              {currentInvoice?.notes.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>

                  <TableCell>
                      <Typography variant="subtitle2">{row.noteText}</Typography>
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

                <TableCell width={40}>#</TableCell>

                <TableCell sx={{ typography: 'subtitle2' }}>{Translate("name")}</TableCell>

                <TableCell sx={{ typography: 'subtitle2' }}>{Translate("user")}</TableCell>

                <TableCell sx={{ typography: 'subtitle2' }}>{Translate("createDate")}</TableCell>

              </TableRow>
            </TableHead>

            <TableBody>
              {currentInvoice?.attachments.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>

                  <TableCell>
                      <Typography variant="subtitle2"> <a target='_blank' rel="noreferrer" href={row.attachmentPath}>{row.fileName}</a> </Typography>
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
              {currentInvoice.department}
            </Label>

          </Stack> 

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("issueDate")} 
            </Typography>
              {currentInvoice?.issueInvoiceDate }
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("amount")}
            </Typography>
            {currentInvoice?.invoiceAmount}
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("currency")}
            </Typography>
            {currentInvoice?.currency}
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("customerCode")}
            </Typography>
            {currentInvoice?.customerCode}
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("nameEnglish")}
            </Typography>
            {currentInvoice?.customerNameEn}
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("nameArabic")}
            </Typography>
            {currentInvoice?.customerNameAr}
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("productNameEn")}
            </Typography>
            {currentInvoice?.productNameEn}
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("productNameAr")}
            </Typography>
            {currentInvoice?.productNameAr}
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("PoNumber")}
            </Typography>
            {currentInvoice?.customerPO}
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("POValue")}
            </Typography>
              {currentInvoice?.poValue}
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("region")}
            </Typography>
            {currentInvoice?.region}
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("contractNumber")}
            </Typography>
            {currentInvoice?.contractNo}
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("deliveryDate")}
            </Typography>
            {currentInvoice?.deliveryDate}
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("installationDate")}
            </Typography>
            {currentInvoice?.installationDate && currentInvoice?.installationDate.substring(0, currentInvoice?.installationDate.indexOf("T"))}
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("department")}
            </Typography>
            {currentInvoice?.department}
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("installationStatus")}
            </Typography>
            {currentInvoice?.installationStatus}
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("daysToCollected")}
            </Typography>
            {currentInvoice?.daysToCollected}
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("acknowledgeStatus")}
            </Typography>
            {currentInvoice?.acknowledgeStatus}
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("collectionSource")}
            </Typography>
            {currentInvoice?.collectionSource}
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("claimStatus")}
            </Typography>
            {currentInvoice?.claimStatus}
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("claimsDetailStatus")}
            </Typography>
            {currentInvoice?.claimsDetailStatus}
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("salesConfirm")}
            </Typography>
            {currentInvoice?.salesConfirm}
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("createdBy")}
            </Typography>
            {currentInvoice?.createdBy}
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("salesTaker")}
            </Typography>
            {currentInvoice?.salesTakerName}
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("collectorName")}
            </Typography>
            {currentInvoice?.collectorName}
          </Stack>

          <Stack sx={{ typography: 'body2', mb: 3}}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {Translate("responsibleEngineerName")}
            </Typography>
            {currentInvoice?.responsibleEngineerName}
          </Stack>
        </Box>

        {renderNotes}

        <Divider sx={{ mt: 5, borderStyle: 'dashed', mb: 3}} />
        {renderAttachments}

      </Card>
    </>
      
    
  );
}

const formateDate = (date) => {
   date.substring(0, date.indexOf('T'))
}

InvoiceDetails.propTypes = {
  invoice: PropTypes.object,
};
