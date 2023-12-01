import { Helmet } from 'react-helmet-async';
import GmReasonReportView from 'src/screens/components/reports/gmReasonReport/gmReasonReportView';

// ----------------------------------------------------------------------

export default function GmReasonReportViewMain() {

  return (
    <>
        <Helmet>
            <title> Soon To Collect Report</title>
        </Helmet>
        <GmReasonReportView />
    </>
  );
}


