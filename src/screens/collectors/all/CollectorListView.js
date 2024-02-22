import { Helmet } from 'react-helmet-async';
// sections
import CollectorListView from 'src/screens/components/collectors/all/CollectorListView';

// ----------------------------------------------------------------------

export default function EngineersListViewMain() {
  return (
    <>
      <Helmet>
        <title> Collectors List</title>
      </Helmet>

      <CollectorListView />
    </>
  );
}
