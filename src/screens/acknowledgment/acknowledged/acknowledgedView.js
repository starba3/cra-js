import { Helmet } from 'react-helmet-async';
import InvoiceListView from 'src/screens/components/acknowleadgment/InvoiceListView';

// ----------------------------------------------------------------------

export default function AcknowledgedViewMain() {

  return (
    <>
        <Helmet>
            <title> Acknowledgment Report</title>
        </Helmet>
        <InvoiceListView />
    </>
  );
}