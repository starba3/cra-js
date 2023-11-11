import { Helmet } from 'react-helmet-async';
// sections
import  OverviewAppView from 'src/screens/components/dashboard/OverviewAppView';

// ----------------------------------------------------------------------

export default function OverviewAppPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: App</title>
      </Helmet>

      <OverviewAppView />
    </>
  );
}