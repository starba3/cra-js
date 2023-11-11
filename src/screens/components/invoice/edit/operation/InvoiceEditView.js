// React
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
// @mui
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
// routes
import { paths } from 'src/routes/paths';
// Invoice
import { getInvoicesById } from 'src/data-access/invoice'
// components
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import InvoiceNewEditForm from 'src/screens/components/invoice/edit/operation/invoice-new-edit-form';

// ----------------------------------------------------------------------

export default function InvoiceEditView({ id }) {
  const settings = useSettingsContext();

  
  
  const [currentInvoice, setCurrentInvoice] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const invoice = await getInvoicesById(id);
        setCurrentInvoice(invoice);
        console.log(invoice)
      } catch (error) {
        console.error('Error fetching invoice:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

 

  if (loading || !currentInvoice) {
    return (<Container maxWidth={settings.themeStretch ? false : 'lg'}>
    <CustomBreadcrumbs
      heading="Edit invoice"
      links={[
        {
          name: 'Dashboard',
          href: paths.dashboard.root,
        },
        {
          name: 'Invoice',
          href: paths.dashboard.invoice.root,
        },
        {
          name: 'New Invoice',
        },
      ]}
      sx={{
        mb: { xs: 3, md: 5 },
      }}
    />
  </Container>);
  }

  // if ( !currentInvoice ) {
  //   return (<CircularProgress />);
  // }
  // 

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Edit invoice"
        links={[
          {
            name: 'Dashboard',
            href: paths.dashboard.root,
          },
          {
            name: 'Invoice',
            href: paths.dashboard.invoice.root,
          },
          {
            name: 'New Invoice',
          },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />
      <InvoiceNewEditForm currentInvoice={currentInvoice} />
    </Container>
  );
}

InvoiceEditView.propTypes = {
  id: PropTypes.number.isRequired
};

