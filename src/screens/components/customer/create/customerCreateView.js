// @mui
import Container from '@mui/material/Container';
import { useLocales } from 'src/locales';
// routes
import { paths } from 'src/routes/paths';
// components
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import CustomerEditForm from './customerEditForm';

// ----------------------------------------------------------------------

export default function CustomerCreateView() {
  const settings = useSettingsContext();

  const { t } = useLocales()

  const Translate = (text) => t(text);

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading={Translate("createNewCustomer")}
        links={[
          {
            name: Translate("app"),
            href: paths.dashboard.root,
          },
          {
            name: Translate("customer"),
            
          },
          {
            name: Translate("newCustomer"),
          },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <CustomerEditForm />
    </Container>
  );
}
