import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocales } from 'src/locales';
// @mui
import Container from '@mui/material/Container';
// routes
// _mock
import { getInvoicesById } from 'src/data-access/invoice'
// components
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import LoadingAnimation from 'src/screens/components/utility/loadingAnimation';
import InvoiceDetails from 'src/screens/components/invoice/details/InvoiceDetails';
import { getUserRole } from 'src/helpers/roleHelper';

// ----------------------------------------------------------------------

export default function InvoiceDetailsView({ id }) {
  const settings = useSettingsContext();

  const { t } = useLocales();
  const Translate = (text) => t(text);
  const ROLE = getUserRole()

  const [currentInvoice, setCurrentInvoice] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const invoice = await getInvoicesById(id, ROLE);
        setCurrentInvoice(invoice);
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
      <LoadingAnimation loading={loading || !currentInvoice} />
    )
  }

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading={currentInvoice?.invoiceNo}
        links={[
          // {
          //   name: Translate("app"),
          //   href: paths.dashboard.root,
          // },
          // {
          //   name: Translate("invoice"),
          //   href: paths.dashboard.invoice,
          // },
          // { name: currentInvoice?.invoiceNo },
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
