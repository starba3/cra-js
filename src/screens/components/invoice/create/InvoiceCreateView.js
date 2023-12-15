// @mui
import Container from '@mui/material/Container';
// routes
import { paths } from 'src/routes/paths';
// components
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import { useLocales } from 'src/locales';
import InvoiceNewEditForm from './invoice-new-edit-form';

// ----------------------------------------------------------------------

export default function InvoiceCreateView() {
  const settings = useSettingsContext();

  const { t } = useLocales()
  const Translate = (text) => t(text);

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Create a new invoice"
        links={[
          // {
          //   name: Translate("app"),
          //   href: paths.dashboard.root,
          // },
          // {
          //   name: Translate("invoice"),
          //   href: paths.dashboard.invoice.root,
          // },
          // {
          //   name: Translate("newInvoice"),
          // },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <InvoiceNewEditForm />
    </Container>
  );
}
