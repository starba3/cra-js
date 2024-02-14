import { lazy, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { json } from 'react-router';
import { getUserRole } from 'src/helpers/roleHelper';
// sections
const OverviewAppView = lazy(() => import('src/screens/components/dashboard/admin/OverviewAppView'));
const OperationDashboardView = lazy(() => import('src/screens/components/dashboard/operationManager/dashboardView')) ;
const SalesDashboardView = lazy(() => import('src/screens/components/dashboard/sales/dashboardView')) ;

// ----------------------------------------------------------------------

const getDashaboard = (role) => {
  
  if (role === "operation") {
    return <OperationDashboardView /> 
  }

  if (role === "Sales") {
    return <SalesDashboardView /> 
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

