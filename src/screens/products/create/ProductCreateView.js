import { Helmet } from 'react-helmet-async';
// sections
import ProductCreateView from 'src/screens/components/products/create/productCreateView';

// ----------------------------------------------------------------------

export default function ProductCreateViewMain() {
  return (
    <>
      <Helmet>
        <title> Create Product</title>
      </Helmet>

      <ProductCreateView />
    </>
  );
}
