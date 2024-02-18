import { Helmet } from 'react-helmet-async';
import InvoiceByEngineerView from 'src/screens/components/reports/invoiceByEngineer/InvoiceByEngineerView';

// ----------------------------------------------------------------------

export default function InvoiceByEngineerViewMain() {

  return (
    <>
        <Helmet>
            <title> Invoice By Engineer Report</title>
        </Helmet>
        <InvoiceByEngineerView />
    </>
  );
}


