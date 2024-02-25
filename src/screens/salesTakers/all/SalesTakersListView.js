import { Helmet } from 'react-helmet-async';
// sections
import SalesTakerListView from 'src/screens/components/salesTakers/all/SalesTakerListView';

// ----------------------------------------------------------------------

export default function SalesTakerListViewMain() {
  return (
    <>
      <Helmet>
        <title> Sales Takers List</title>
      </Helmet>

      <SalesTakerListView />
    </>
  );
}
