import { Helmet } from 'react-helmet-async';
import SoonToCollectView from 'src/screens/components/reports/gmReport/gmReportView';

// ----------------------------------------------------------------------

export default function GmReportViewViewMain() {

  return (
    <>
        <Helmet>
            <title> Soon To Collect Report</title>
        </Helmet>
        <SoonToCollectView />
    </>
  );
}