import { Helmet } from 'react-helmet-async';
import SoonToCollectView from 'src/screens/components/reports/soonToCollect/soonToCollectView';

// ----------------------------------------------------------------------

export default function SoonToCollectViewMain() {

  return (
    <>
        <Helmet>
            <title> Soon To Collect Report</title>
        </Helmet>
        <SoonToCollectView />
    </>
  );
}


soonToCollect