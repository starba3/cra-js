import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router';
// sections
import ProductCreateView from 'src/screens/components/products/create/productCreateView';

// ----------------------------------------------------------------------

export default function ProductCreateViewMain() {
  const params = useParams();
  const { id } = params;

  return (
    <>
      <Helmet>
        <title> Create Product</title>
      </Helmet>

      <ProductCreateView id={Number(id)} />
    </>
  );
}
