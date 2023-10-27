import { Helmet } from 'react-helmet-async';
// sections
import  InvoiceCreateView  from '../components/invoice/edit/InvoiceCreateView';

// ----------------------------------------------------------------------

export default function InvoiceCreatePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Create a new invoice</title>
      </Helmet>

      <InvoiceCreateView />
    </>
  );
}
