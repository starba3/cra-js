import { Helmet } from 'react-helmet-async';
// sections
import  CustomerListView  from 'src/screens/components/customer/all/CustomerListView';

// ----------------------------------------------------------------------

export default function CustomerListViewMain() {
  return (
    <>
      <Helmet>
        <title> Customers List</title>
      </Helmet>

      <CustomerListView />
    </>
  );
}
