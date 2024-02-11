import { Helmet } from 'react-helmet-async';
import InvoiceListView from 'src/screens/components/reports/forDeliveryDate/InvoiceListView';

// ----------------------------------------------------------------------

export default function ForDeliveryDataViewMain() {

  return (
    <>
        <Helmet>
            <title> Deivery Date Report</title>
        </Helmet>
        <InvoiceListView />
    </>
  );
}