import { Helmet } from 'react-helmet-async';
// sections
import EngineerListView from 'src/screens/components/engineers/all/EngineerListView';

// ----------------------------------------------------------------------

export default function EngineersListViewMain() {
  return (
    <>
      <Helmet>
        <title> Engineers List</title>
      </Helmet>

      <EngineerListView />
    </>
  );
}
