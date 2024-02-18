import { number } from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'src/routes/hooks';
// sections
import EngineerCreateView from 'src/screens/components/engineers/create/EngineerCreateView';

// ----------------------------------------------------------------------

export default function EngineersCreateViewMain() {
  const params = useParams();
  const { id } = params;

  return (
    <>
      <Helmet>
        <title> Engineers Fourm</title>
      </Helmet>

      <EngineerCreateView id={Number(id)} />
    </>
  );
}
