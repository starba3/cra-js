import { Helmet } from 'react-helmet-async';
import UnderCollectionView from 'src/screens/components/reports/underCollection/underCollectionView';

// ----------------------------------------------------------------------

export default function UnderCollectionViewMain() {

  return (
    <>
        <Helmet>
            <title> Soon To Collect Report</title>
        </Helmet>
        <UnderCollectionView />
    </>
  );
}


