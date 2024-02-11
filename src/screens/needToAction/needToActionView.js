import { Helmet } from 'react-helmet-async';
import InvoiceListView from 'src/screens/components/needForAction/InvoiceListView';

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