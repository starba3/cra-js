import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// @mui
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';  
// routes
import { paths } from 'src/routes/paths';
// _mock
import { _invoices } from 'src/_mock';
import { getInvoicesById } from 'src/data-access/invoice'
// components
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import InvoiceDetails from 'src/screens/components/invoice/details/InvoiceDetails';

// ----------------------------------------------------------------------

export default function InvoiceDetailsView({ id }) {
  const settings = useSettingsContext();
  
  const [currentInvoice, setCurrentInvoice] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const invoice = await getInvoicesById(id);
        setCurrentInvoice(invoice);
      } catch (error) {
        console.error('Error fetching invoice:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if(loading || !currentInvoice) {
    return (
      <CircularProgress />
    )
  }

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading={currentInvoice?.invoiceNo}
        links={[
          {
            name: 'Dashboard',
            href: paths.dashboard.root,
          },
          {
            name: 'Invoice',
            href: paths.dashboard.invoice.root,
          },
          { name: currentInvoice?.invoiceNo },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <InvoiceDetails invoice={currentInvoice} />
    </Container>
  );
}

InvoiceDetailsView.propTypes = {
  id: PropTypes.string,
};