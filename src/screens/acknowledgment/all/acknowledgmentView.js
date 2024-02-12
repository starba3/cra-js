import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet-async';
import InvoiceListView from 'src/screens/components/acknowleadgment/InvoiceListView';

// ----------------------------------------------------------------------

export default function AcknowledgmentViewMain({ title }) {

  return (
    <>
        <Helmet>
            <title> Acknowledgment Report</title>
        </Helmet>
        <InvoiceListView title={title}/>
    </>
  );
}

AcknowledgmentViewMain.propTypes = {
  title: PropTypes.string.isRequired
}