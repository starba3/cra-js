import { Helmet } from 'react-helmet-async';
// sections
import ProductListView from 'src/screens/components/products/all/ProductListView';

// ----------------------------------------------------------------------

export default function ProductListViewMain() {
  return (
    <>
      <Helmet>
        <title> Product List</title>
      </Helmet>

      <ProductListView />
    </>
  );
}
