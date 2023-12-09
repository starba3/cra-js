import { Helmet } from 'react-helmet-async';
import { useParams } from 'src/routes/hooks';
// sections
import  CustomerCreateView  from 'src/screens/components/customer/create/customerCreateView';

// ----------------------------------------------------------------------

export default function CustomerCreateViewMain() {
  const params = useParams();
  const { id } = params;

  return (
    <>
      <Helmet>
        <title> Customers List</title>
      </Helmet>

      <CustomerCreateView id={Number(id) }/>
    </>
  );
}
