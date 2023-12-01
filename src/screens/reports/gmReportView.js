import { Helmet } from 'react-helmet-async';
import GmReportView from 'src/screens/components/reports/gmReport/gmReportView';

// ----------------------------------------------------------------------

export default function GmReportViewViewMain() {

  return (
    <>
        <Helmet>
            <title> Soon To Collect Report</title>
        </Helmet>
        <GmReportView />
    </>
  );
}