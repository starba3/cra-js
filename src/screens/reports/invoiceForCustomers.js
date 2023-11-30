import { Helmet } from 'react-helmet-async';
import InvoiceForCustomersView from 'src/screens/components/reports/invoiceForCustomers/invoiceForCustomersView';

// ----------------------------------------------------------------------

export default function InvoiceForCustomersViewMain() {

  return (
    <>
        <Helmet>
            <title> Invoice For Customers Report</title>
        </Helmet>
        <InvoiceForCustomersView />
    </>
  );
}


