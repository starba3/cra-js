import { Helmet } from 'react-helmet-async';
import { useParams } from 'src/routes/hooks';
import PropTypes from 'prop-types';
// sections
import  InvoiceEditView  from 'src/screens/components/invoice/edit/operation/InvoiceEditView';

// ----------------------------------------------------------------------

export default function InvoiceEditPage() {
  const params = useParams();

  const { id } = params;
  console.log(params);
  return (
    <>
      <Helmet>
        <title> Edit invoice</title>
      </Helmet>

      <InvoiceEditView id={id}/>
    </>
  );
}
