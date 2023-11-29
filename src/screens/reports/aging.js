import { Helmet } from 'react-helmet-async';
import AgingView from 'src/screens/components/reports/aging/agingView';

// ----------------------------------------------------------------------

export default function AgingViewMain() {

  return (
    <>
        <Helmet>
            <title> Aging Report</title>
        </Helmet>
        <AgingView />
    </>
  );
}
