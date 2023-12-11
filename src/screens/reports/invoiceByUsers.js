import { Helmet } from 'react-helmet-async';
import InvoiceByUserView from '../components/reports/invoiceByUsers/invoiceByUserView';

// ----------------------------------------------------------------------

export default function InvoiceByUsersViewMain() {

  return (
    <>
        <Helmet>
            <title> Invoice By Users Report</title>
        </Helmet>
        <InvoiceByUserView />
    </>
  );
}


