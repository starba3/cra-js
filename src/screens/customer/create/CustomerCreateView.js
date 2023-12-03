import { Helmet } from 'react-helmet-async';
// sections
import  CustomerCreateView  from 'src/screens/components/customer/create/customerCreateView';

// ----------------------------------------------------------------------

export default function CustomerCreateViewMain() {
  return (
    <>
      <Helmet>
        <title> Customers List</title>
      </Helmet>

      <CustomerCreateView />
    </>
  );
}
