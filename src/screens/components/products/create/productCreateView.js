// @mui
import Container from '@mui/material/Container';
import { useLocales } from 'src/locales';
// routes
import { paths } from 'src/routes/paths';
// components
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import ProductEditForm from './productEditForm';

// ----------------------------------------------------------------------

export default function ProductCreateView() {
  const settings = useSettingsContext();

  const { t } = useLocales();
  const Translate = (text) => t(text);

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading={Translate("createNewProduct")}
        links={[
          {
            name: Translate("app"),
            href: paths.dashboard.root,
          },
          {
            name: Translate("product"),
            
          },
          {
            name: Translate("newProduct"),
          },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <ProductEditForm />
    </Container>
  );
}
