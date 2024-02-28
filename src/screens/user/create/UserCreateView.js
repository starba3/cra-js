import { Helmet } from 'react-helmet-async';
import { useParams } from 'src/routes/hooks';
// sections
import  UserCreateView  from 'src/screens/components/user/create/UserCreateView';

// ----------------------------------------------------------------------

export default function UserCreateViewMain() {
  const params = useParams();
  const { id } = params;

  return (
    <>
      <Helmet>
        <title> Create User</title>
      </Helmet>

      <UserCreateView id={Number(id) }/>
    </>
  );
}
