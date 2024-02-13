import { Helmet } from 'react-helmet-async';
import InvoiceListView from 'src/screens/components/invoice/rejecetedBySales/InvoiceListView';

// ----------------------------------------------------------------------

export default function RejectedBySalesViewMain() {

  return (
    <>
        <Helmet>
            <title> Rejected By Sales Report</title>
        </Helmet>
        <InvoiceListView />
    </>
  );
}