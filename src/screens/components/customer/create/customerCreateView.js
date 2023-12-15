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
import CustomerEditForm from './customerEditForm';

// ----------------------------------------------------------------------

export default function CustomerCreateView({ id }) {
  const settings = useSettingsContext();

  const { t } = useLocales()
  const Translate = (text) => t(text);

  const [currentCustomer, setCurrentCustomer] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async (customerId) => {
      setLoading(true)
      
        try {
          const invoice = await getCustomerById(customerId);
          setCurrentCustomer(invoice);
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
        heading={Translate("createNewCustomer")}
        links={[
          // {
          //   name: Translate("app"),
          //   href: paths.dashboard.root,
          // },
          // {
          //   name: Translate("customer"),
            
          // },
          // {
          //   name: Translate("newCustomer"),
          // },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <CustomerEditForm currentCustomer={currentCustomer} />
    </Container>
  );
}

CustomerCreateView.propTypes = {
  id: PropTypes.number
};

