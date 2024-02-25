import { Helmet } from 'react-helmet-async';
import SalesPerformanceListView from '../components/reports/salesTakersPerformance/PerformanceListView';

// ----------------------------------------------------------------------

export default function PerformanceViewMain() {

  return (
    <>
        <Helmet>
            <title> Performance Report</title>
        </Helmet>
        <SalesPerformanceListView />
    </>
  );
}