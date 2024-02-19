import { Helmet } from 'react-helmet-async';
import InvoiceListView from 'src/screens/components/invoice/assignEngineer/InvoiceListView';

// ----------------------------------------------------------------------

export default function NeedToAssignViewMain() {

  return (
    <>
        <Helmet>
            <title> Need To Assign Engineer Report</title>
        </Helmet>
        <InvoiceListView />
    </>
  );
}