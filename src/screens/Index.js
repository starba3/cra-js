import { lazy, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { json } from 'react-router';
// sections
const OverviewAppView = lazy(() => import('src/screens/components/dashboard/admin/OverviewAppView'));
const OMDashboardView = lazy(() => import('src/screens/components/dashboard/operationManager/dashboardView')) ;
const SalesDashboardView = lazy(() => import('src/screens/components/dashboard/sales/dashboardView')) ;

// ----------------------------------------------------------------------

const getDashaboard = (role) => {
  
  if (role === "OM") {
    return <OMDashboardView /> 
  }

  if (role === "Sales") {
    return <SalesDashboardView /> 
  }

  return <OverviewAppView />
} 

export default function OverviewAppPage() {
  const ROLE = useMemo(() => localStorage.getItem("role") 
  ? JSON.parse(localStorage.getItem("role")).value
  : "OM", [])
  

  return (
    <>
      <Helmet>
        <title> Dashboard: App</title>
      </Helmet>
      
      {getDashaboard(ROLE)}
      
    </>
  );
}

