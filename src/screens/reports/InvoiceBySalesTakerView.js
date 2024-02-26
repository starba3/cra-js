import { Helmet } from 'react-helmet-async';
import InvoiceBySaleTakerView from 'src/screens/components/reports/invoiceBySalesTaker/InvoiceBySalesTakerView';

// ----------------------------------------------------------------------

export default function InvoiceBySaleTakerViewMain() {

  return (
    <>
        <Helmet>
            <title> Invoice By Sales Taker Report</title>
        </Helmet>
        <InvoiceBySaleTakerView />
    </>
  );
}


