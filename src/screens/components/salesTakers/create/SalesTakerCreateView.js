import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
// @mui
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';

import { useLocales } from 'src/locales';
// routes
import { paths } from 'src/routes/paths';

import { getCustomerById } from 'src/data-access/customers';
// components
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import CollectorEditForm from './SalesTakerEditForm';

// ----------------------------------------------------------------------

export default function SalesTakerCreateView({ id }) {
  const settings = useSettingsContext();

  const { t } = useLocales()
  const Translate = (text) => t(text);

  const [currentCollector, setCurrentCollector] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async (collectorId) => {
      setLoading(true)
      
        try {
          const invoice = await getCustomerById(collectorId);
          setCurrentCollector(invoice);
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
        heading={Translate("createNewCollector")}
        links={[
          // {
          //   name: Translate("app"),
          //   href: paths.dashboard.root,
          // },

        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <CollectorEditForm currentCustomer={currentCollector} />
    </Container>
  );
}

SalesTakerCreateView.propTypes = {
  id: PropTypes.number
};

