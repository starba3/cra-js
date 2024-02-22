import { Helmet } from 'react-helmet-async';
import InvoiceByCollectorView from '../components/reports/invoiceByCollector/InvoiceByCollectorView';

// ----------------------------------------------------------------------

export default function InvoiceByEngineerViewMain() {

  return (
    <>
        <Helmet>
            <title> Invoice By Collector Report</title>
        </Helmet>
        <InvoiceByCollectorView />
    </>
  );
}


