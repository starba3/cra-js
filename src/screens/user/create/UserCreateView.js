import { Helmet } from 'react-helmet-async';
import { useParams } from 'src/routes/hooks';
// sections
import  UserCreateView  from 'src/screens/components/customer/create/customerCreateView';

// ----------------------------------------------------------------------

export default function UserCreateViewMain() {
  const params = useParams();
  const { id } = params;

  return (
    <>
      <Helmet>
        <title> Users List</title>
      </Helmet>

      <UserCreateView id={Number(id) }/>
    </>
  );
}
