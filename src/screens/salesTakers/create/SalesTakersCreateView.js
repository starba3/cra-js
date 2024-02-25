import { number } from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'src/routes/hooks';
// sections
import SalesTakerCreateView from 'src/screens/components/salesTakers/create/SalesTakerCreateView';

// ----------------------------------------------------------------------

export default function SalesTakerCreateViewMain() {
  const params = useParams();
  const { id } = params;

  return (
    <>
      <Helmet>
        <title> Sales Taker Fourm</title>
      </Helmet>

      <SalesTakerCreateView id={Number(id)} />
    </>
  );
}
