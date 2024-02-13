import { Helmet } from 'react-helmet-async';
import InvoiceListView from 'src/screens/components/invoice/needForAction/InvoiceListView';

// ----------------------------------------------------------------------

export default function NeedToActionViewMain() {

  return (
    <>
        <Helmet>
            <title> Need To Action Report</title>
        </Helmet>
        <InvoiceListView />
    </>
  );
}