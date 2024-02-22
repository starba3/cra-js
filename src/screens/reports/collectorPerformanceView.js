import { Helmet } from 'react-helmet-async';
import PerformanceListView from 'src/screens/components/reports/collectorPerformance/PerformanceListView';

// ----------------------------------------------------------------------

export default function PerformanceViewMain() {

  return (
    <>
        <Helmet>
            <title> Performance Report</title>
        </Helmet>
        <PerformanceListView />
    </>
  );
}