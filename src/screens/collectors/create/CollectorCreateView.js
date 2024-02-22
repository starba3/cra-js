import { number } from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'src/routes/hooks';
// sections
import CollectorCreateView from 'src/screens/components/collectors/create/CollectorCreateView';

// ----------------------------------------------------------------------

export default function EngineersCreateViewMain() {
  const params = useParams();
  const { id } = params;

  return (
    <>
      <Helmet>
        <title> Engineers Fourm</title>
      </Helmet>

      <CollectorCreateView id={Number(id)} />
    </>
  );
}
