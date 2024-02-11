import { Helmet } from 'react-helmet-async';
import { json } from 'react-router';
// sections
import  OverviewAppView from 'src/screens/components/dashboard/admin/OverviewAppView';
import  OMDashboardView from  'src/screens/components/dashboard/operationManager/dashboardView';

// ----------------------------------------------------------------------

const getDashaboard = (role) => {
  if (role == "OM") {
    return <OMDashboardView /> 
  } else {
    return <OverviewAppView />
  }
}

export default function OverviewAppPage() {
  const ROLE = localStorage.getItem("role") 
    ? JSON.parse(localStorage.getItem("role")).value
    : "Admin"
  const Dashboard = getDashaboard(ROLE)


  return (
    <>
      <Helmet>
        <title> Dashboard: App</title>
      </Helmet>
      
      <Dashboard />
      
    </>
  );
}

