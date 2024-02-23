import { lazy, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { json } from 'react-router';
import { getUserRole } from 'src/helpers/roleHelper';
// sections
const OverviewAppView = lazy(() => import('src/screens/components/dashboard/admin/OverviewAppView'));
const OperationDashboardView = lazy(() => import('src/screens/components/dashboard/operationManager/dashboardView')) ;
const SalesDashboardView = lazy(() => import('src/screens/components/dashboard/sales/dashboardView')) ;
const HOEDashboardView = lazy(() => import('src/screens/components/dashboard/headOfEngineer/dashboardView'));
const InstallationDashboardView = lazy(() => import('src/screens/components/dashboard/installation/dashboardView'));
const HOCDashboardView = lazy(() => import('src/screens/components/dashboard/headOfCollectors/dashboardView'));


// ----------------------------------------------------------------------

const getDashaboard = (role) => {
  
  if (role.toLowerCase() === "operation") {
    return <OperationDashboardView /> 
  }

  if (role.toLowerCase() === "sales") {
    return <SalesDashboardView /> 
  }

  if(role.toLowerCase() === "head of engineer") {
    return <HOEDashboardView />
  }

  if(role.toLowerCase() === "head of collectors") {
    return <HOCDashboardView />
  }

  if(role.toLowerCase() === "installation") {
    return <InstallationDashboardView />
  }

  return <OverviewAppView />
} 

export default function OverviewAppPage() {
  const ROLE = getUserRole()

  return (
    <>
      <Helmet>
        <title> Dashboard: App</title>
      </Helmet>
      
      {getDashaboard(ROLE)}
      
    </>
  );
}

