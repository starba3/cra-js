import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
// @mui
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import { useLocales } from 'src/locales';
// routes
import { paths } from 'src/routes/paths';
// Data access
import { getProductById } from 'src/data-access/products';
// components
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import ProductEditForm from './productEditForm';

// ----------------------------------------------------------------------

export default function ProductCreateView({ id }) {
  const settings = useSettingsContext();

  const { t } = useLocales();
  const Translate = (text) => t(text);

  const [currentProduct, setCurrentProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async (productId) => {
      setLoading(true)
      
        try {
          const invoice = await getProductById(productId);
          setCurrentProduct(invoice);
        } catch (error) {
          console.error('Error fetching invoice:', error);
        } finally {
          setLoading(false);
        }
      
    }
      
    if(id > 0) {
      fetchData(id);
    }
    
  }, [id]);

  if(loading) {
    return (
      <CircularProgress />
    )
  }

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading={Translate("createNewProduct")}
        links={[
          // {
          //   name: Translate("app"),
          //   href: paths.dashboard.root,
          // },
          // {
          //   name: Translate("product"),
          //   href: paths.products.list,
          // },
          // {
          //   name: Translate("newProduct"),
          // },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <ProductEditForm currentProduct={currentProduct} />
    </Container>
  );
}

ProductCreateView.propTypes = {
  id: PropTypes.number
};
