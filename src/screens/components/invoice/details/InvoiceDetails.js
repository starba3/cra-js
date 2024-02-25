import PropTypes from 'prop-types';
import { useState } from 'react';
import { useLocales } from 'src/locales';
// @mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
// components
import Label from 'src/components/label';
import InvoiceToolbar from 'src/screens/components/invoice/exportPDF/invoice-toolbar';
import NotesTableView from 'src/screens/components/invoice/_common/notesTableView';
import AttachmentsTableView from 'src/screens/components/invoice/_common/attachmentsTableView';
import DetailsItemView from 'src/screens/components/invoice/_common/detailsItemView';
//

// ----------------------------------------------------------------------

export default function InvoiceDetails({ invoice }) {
  const [currentInvoice, setCurrentInvoice] = useState(invoice);
  
  const { t } = useLocales();
  const Translate = (text) => t(text);

  const renderNotes = <NotesTableView data={invoice?.notes} />
  
  const renderAttachments = <AttachmentsTableView data={invoice?.attachments}/>

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

          <DetailsItemView invoice={currentInvoice}  properity="issueInvoiceDate" isDate />
          <DetailsItemView invoice={currentInvoice}  properity="invoiceAmount" />
          <DetailsItemView invoice={currentInvoice}  properity="currency" />
          <DetailsItemView invoice={currentInvoice}  properity="customerCode" />
          <DetailsItemView invoice={currentInvoice}  properity="customerNameAr" />
          <DetailsItemView invoice={currentInvoice}  properity="customerNameEn" />
          <DetailsItemView invoice={currentInvoice}  properity="productNameEn" />
          <DetailsItemView invoice={currentInvoice}  properity="productNameAr" />
          <DetailsItemView invoice={currentInvoice}  properity="customerPO" />
          <DetailsItemView invoice={currentInvoice}  properity="poValue" />
          <DetailsItemView invoice={currentInvoice}  properity="region" />
          <DetailsItemView invoice={currentInvoice}  properity="contractNo" />
          <DetailsItemView invoice={currentInvoice}  properity="deliveryDate" isDate />
          <DetailsItemView invoice={currentInvoice}  properity="installationDate" isDate />        
          <DetailsItemView invoice={currentInvoice}  properity="department" />        
          <DetailsItemView invoice={currentInvoice}  properity="installationStatus" />
          <DetailsItemView invoice={currentInvoice}  properity="daysToCollected" />
          <DetailsItemView invoice={currentInvoice}  properity="acknowledgeStatus" />
          <DetailsItemView invoice={currentInvoice}  properity="collectionSource" />
          <DetailsItemView invoice={currentInvoice}  properity="claimStatus" />
          <DetailsItemView invoice={currentInvoice}  properity="claimsDetailStatus" />
          <DetailsItemView invoice={currentInvoice}  properity="salesConfirm" />
          <DetailsItemView invoice={currentInvoice}  properity="createdBy" />
          <DetailsItemView invoice={currentInvoice}  properity="salesTakerName" />
          <DetailsItemView invoice={currentInvoice}  properity="collectorName" />
          <DetailsItemView invoice={currentInvoice}  properity="responsibleEngineerName" marginButtom={3} />
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
