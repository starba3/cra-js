import { Helmet } from 'react-helmet-async';
// sections
import  InvoiceListView  from '../components/invoice/InvoiceListView';

// ----------------------------------------------------------------------

export default function InvoiceListPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Invoice List</title>
      </Helmet>

      <InvoiceListView />
    </>
  );
}
