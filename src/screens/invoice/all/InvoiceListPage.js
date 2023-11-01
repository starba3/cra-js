import { Helmet } from 'react-helmet-async';
// sections
import  InvoiceListView  from 'src/screens/components/invoice/all/InvoiceListView';

// ----------------------------------------------------------------------

export default function InvoiceListViewAll() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Invoice List</title>
      </Helmet>

      <InvoiceListView />
    </>
  );
}
