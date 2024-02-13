import { Helmet } from 'react-helmet-async';
import InvoiceListView from 'src/screens/components/invoiceAcceptence/InvoiceListView';

// ----------------------------------------------------------------------

export default function InvoiceAcceptenceViewMain() {

  return (
    <>
        <Helmet>
            <title> Invoice Acceptence Report</title>
        </Helmet>
        <InvoiceListView />
    </>
  );
}