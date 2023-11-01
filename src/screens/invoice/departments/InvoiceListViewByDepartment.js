import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
// sections
import  InvoiceListView  from 'src/screens/components/invoice/departments/InvoiceListView';

// ----------------------------------------------------------------------

export default function InvoiceListViewByDepartment({ id, salesStatus }) {
    console.log(id)
    const list = id 
    ? <InvoiceListView department={id} />
    : <InvoiceListView salesStatus={salesStatus} />
  return (
    <>
      <Helmet>
        <title> Dashboard: Invoice List</title>
      </Helmet>
      
      {list}
    </>
  );
}
InvoiceListViewByDepartment.propTypes = {
    id: PropTypes.number,
    salesStatus: PropTypes.number
  }