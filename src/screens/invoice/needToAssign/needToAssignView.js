import { lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import { UserRoles } from 'src/helpers/constantsHelper';
import { getUserRole } from 'src/helpers/roleHelper';

const EngineerInvoiceListView = lazy(() => import ('src/screens/components/invoice/assignEngineer/InvoiceListView'))
const CollectorInvoiceListView = lazy(() => import ('src/screens/components/invoice/assignCollector/InvoiceListView'))

// ----------------------------------------------------------------------
const getListView = (role) => {
  if(role.toLowerCase() === UserRoles.headOfCollector) {
    return <CollectorInvoiceListView />
  }

  return <EngineerInvoiceListView />
}

export default function NeedToAssignViewMain() {
  const ROLE = getUserRole()

  return (
    <>
        <Helmet>
            <title> Need To Assign User Report</title>
        </Helmet>
        {getListView(ROLE)}
    </>
  );
}