import { lazy, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { json } from 'react-router';
import { getUserRole } from 'src/helpers/roleHelper';
import { useRouter } from 'src/routes/hooks';
import { UserRoles } from 'src/helpers/constantsHelper';
import { paths } from 'src/routes/paths';
// sections
const OverviewAppView = lazy(() => import('src/screens/components/dashboard/admin/OverviewAppView'));
const OperationDashboardView = lazy(() => import('src/screens/components/dashboard/operationManager/dashboardView')) ;
const SalesDashboardView = lazy(() => import('src/screens/components/dashboard/sales/dashboardView')) ;
const HOEDashboardView = lazy(() => import('src/screens/components/dashboard/headOfEngineer/dashboardView'));
const InstallationDashboardView = lazy(() => import('src/screens/components/dashboard/installation/dashboardView'));
const HOCDashboardView = lazy(() => import('src/screens/components/dashboard/headOfCollectors/dashboardView'));
const HOSDashboardView = lazy(() => import('src/screens/components/dashboard/headOfSales/dashboardView'));
const CollectorDashboardView = lazy(() => import('src/screens/components/dashboard/collector/dashboardView'));


// ----------------------------------------------------------------------

const getDashaboard = (role) => {
  
  if (role === UserRoles.operation) {
    return <OperationDashboardView /> 
  }

  if (role === UserRoles.sales) {
    return <SalesDashboardView /> 
  }

  if(role === UserRoles.engineer) {
    return <InstallationDashboardView />
  }

  if(role === UserRoles.headOfEngineer) {
    return <HOEDashboardView />
  }

  if(role === UserRoles.headOfCollector) {
    return <HOCDashboardView />
  }

  if(role === UserRoles.headOfSales) {
    return <HOSDashboardView />
  }

  if(role === UserRoles.collector) {
    return <CollectorDashboardView />
  }  

  // Admin
  return <OverviewAppView />
  

} 

export default function OverviewAppPage() {
  const ROLE = getUserRole()
  const router = useRouter()

  if (!ROLE) {
    router.replace(paths.auth.jwt.login)
  }

  return (
    <>
      <Helmet>
        <title> Dashboard: App</title>
      </Helmet>
      
      {getDashaboard(ROLE)}
      
    </>
  );
}

