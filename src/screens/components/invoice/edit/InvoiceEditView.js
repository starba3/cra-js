// React
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useLocales } from 'src/locales';
// @mui
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
//
// routes
import { paths } from 'src/routes/paths';
// Invoice
import { getInvoicesById } from 'src/data-access/invoice'
// components
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import InvoiceNewEditForm from 'src/screens/components/invoice/edit/invoice-new-edit-form';
import { getUserRole } from 'src/helpers/roleHelper';


// ----------------------------------------------------------------------

export default function InvoiceEditView({ id }) {
  const settings = useSettingsContext();

  const { t } = useLocales()
  const Translate = (text) => t(text);

  const ROLE = getUserRole()
  
  const [currentInvoice, setCurrentInvoice] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const invoice = await getInvoicesById(id, ROLE);
        setCurrentInvoice(invoice);
        console.log(invoice)
      } catch (error) {
        console.error('Error fetching invoice:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, ROLE]);

 
  if(loading || !currentInvoice) {
    return (
      <CircularProgress />
    )
  }

  return (
    <InvoiceNewEditForm currentInvoice={currentInvoice} />
  );
}

InvoiceEditView.propTypes = {
  id: PropTypes.number.isRequired
};

