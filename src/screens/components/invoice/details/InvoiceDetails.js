import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';
// @mui
import { styled } from '@mui/material/styles';
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
// utils
import { fDate } from 'src/utils/format-time';
import { fCurrency } from 'src/utils/format-number';

// components
import Label from 'src/components/label';
import Scrollbar from 'src/components/scrollbar';
//
import InvoiceToolbar from 'src/sections/invoice/invoice-toolbar';

// ----------------------------------------------------------------------

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '& td': {
    textAlign: 'right',
    borderBottom: 'none',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

// ----------------------------------------------------------------------

export default function InvoiceDetails({ invoice }) {
  const [currentInvoice, setCurrentInvoice] = useState(invoice);

  



  const renderNotes = (
    <>
      <Typography variant="h6" gutterBottom>
        Notes
      </Typography>
      <TableContainer sx={{ overflow: 'unset', mt: 5 }}>
        <Scrollbar>
          <Table sx={{ minWidth: 960 }}>
            <TableHead>
              <TableRow>

                <TableCell width={40}>#</TableCell>

                <TableCell sx={{ typography: 'subtitle2' }}>Note</TableCell>

              </TableRow>
            </TableHead>

            <TableBody>
              {currentInvoice?.notes.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>

                  <TableCell>
                    {/* <Box sx={{ maxWidth: 560 }}> */}
                      <Typography variant="subtitle2">{row.noteText}</Typography>
                    {/* </Box> */}
                  </TableCell>

                  {/* <TableCell>{row.quantity}</TableCell> */}

                  
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
      Attachments
      </Typography>
      <TableContainer sx={{ overflow: 'unset', mt: 5, mb: 7 }}>
        <Scrollbar>
          <Table sx={{ minWidth: 960 }}>
            <TableHead>
              <TableRow>

                <TableCell width={40}>#</TableCell>

                <TableCell sx={{ typography: 'subtitle2' }}>Name</TableCell>

              </TableRow>
            </TableHead>

            <TableBody>
              {currentInvoice?.attachments.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>

                  <TableCell>
                    {/* <Box sx={{ maxWidth: 560 }}> */}
                      <Typography variant="subtitle2"> <a target='_blank' rel="noreferrer" href={row.attachmentPath}>{row.fileName}</a> </Typography>
                    {/* </Box> */}
                  </TableCell>

                  {/* <TableCell>{row.quantity}</TableCell> */}

                  
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
            component="img"
            alt="logo"
            src="/logo/logo_single.svg"
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
              Issue Date: 
            </Typography>
              {currentInvoice?.issueInvoiceDate }
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Amount
            </Typography>
            {currentInvoice?.invoiceAmount}
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Currency
            </Typography>
            {currentInvoice?.currency}
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Customer Code
            </Typography>
            {currentInvoice?.customerCode}
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Name English
            </Typography>
            {currentInvoice?.customerNameEn}
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Name Arabic
            </Typography>
            {currentInvoice?.customerNameEn}
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              Po Number
            </Typography>
            {currentInvoice?.customerPO}
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
            PO Value
            </Typography>
            {currentInvoice?.poValue}
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Region
            </Typography>
            {currentInvoice?.region}
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Contract Number
            </Typography>
            {currentInvoice?.contractNo}
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Delivery Date
            </Typography>
            {currentInvoice?.deliveryDate}
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Installation Date
            </Typography>
            {currentInvoice?.installationDate}
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Department
            </Typography>
            {currentInvoice?.department}
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Installation Status
            </Typography>
            {currentInvoice?.installationStatus}
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Days To Collected
            </Typography>
            {currentInvoice?.daysToCollected}
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Acknowledge Status
            </Typography>
            {currentInvoice?.acknowledgeStatus}
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Collection Source
            </Typography>
            {currentInvoice?.collectionSource}
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Claim Status
            </Typography>
            {currentInvoice?.claimStatus}
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Claims Detail Status
            </Typography>
            {currentInvoice?.claimsDetailStatus}
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Sales Confirm
            </Typography>
            {currentInvoice?.salesConfirm}
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Created By
            </Typography>
            {currentInvoice?.createdBy}
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Sales Taker
            </Typography>
            {currentInvoice?.salesTakerName}
          </Stack>

          <Stack sx={{ typography: 'body2' }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Collector Name
            </Typography>
            {currentInvoice?.collectorName}
          </Stack>

          <Stack sx={{ typography: 'body2', mb: 3}}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Responsible Engineer Name
            </Typography>
            {currentInvoice?.responsibleEngineerName}
          </Stack>
        </Box>

        {renderNotes}

        <Divider sx={{ mt: 5, borderStyle: 'dashed', mb: 3}} />
        {renderAttachments}

      </Card>
    
  );
}

InvoiceDetails.propTypes = {
  invoice: PropTypes.object,
};
