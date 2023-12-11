import { Helmet } from 'react-helmet-async';
// sections
import  UserListView  from 'src/screens/components/user/all/userListView';

// ----------------------------------------------------------------------

export default function UserListViewMain() {
  return (
    <>
      <Helmet>
        <title> Users List</title>
      </Helmet>

      <UserListView />
    </>
  );
}
