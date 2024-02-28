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
import LoadingAnimation from 'src/screens/components/utility/loadingAnimation';
//
import UserEditForm from './UserEditForm';

// ----------------------------------------------------------------------

export default function UserCreateView({ id }) {
  const settings = useSettingsContext();

  const { t } = useLocales()
  const Translate = (text) => t(text);

  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async (UserId) => {
      setLoading(true)
      
        try {
          const invoice = await getCustomerById(UserId);
          setCurrentUser(invoice);
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
      <LoadingAnimation loading={loading}/>
    )
  }

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading={Translate("createNewUser")}
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

      <UserEditForm currentUser={currentUser} />
    </Container>
  );
}

UserCreateView.propTypes = {
  id: PropTypes.number,
};
