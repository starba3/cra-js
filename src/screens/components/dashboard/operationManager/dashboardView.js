import PropTypes from 'prop-types'; 
import axios from 'axios';
import { useEffect, useState, lazy } from 'react';
import { useLocales } from 'src/locales';
// @mui
import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
// hooks
import { useMockedUser } from 'src/hooks/use-mocked-user';
// Data access
import { getOperationDashboardData } from 'src/data-access/dashboard';
// components
import { useSettingsContext } from 'src/components/settings';
// import AppWidgetSummary from 'src/sections/overview/app/app-widget-summary';
// import AppCurrentDownload from 'src/sections/overview/app/app-current-download';
// import ChartRadialBar from 'src/screens/components/dashboard/admin/chart-radial-bar';
// import AppNewInvoice from 'src/screens/components/dashboard/admin/AppNewInvoice';
import InvoiceCountByStatus from 'src/screens/components/dashboard/operationManager/InvoiceCountByStatus'
import { Box } from '@mui/material';

const BarChart = lazy(() => import('./barchart'));
// 


// ----------------------------------------------------------------------

export default function OMDashboardView() {
  const { user } = useMockedUser();

  const [data, setData] = useState([])
  
  // const { t, currentLang } = useLocales();
  // const translate = (text) => t(text);

  const theme = useTheme();
  const settings = useSettingsContext();

  // hit the route
  // const getInvoices = async () => {
  //   // Fetching the token from the session storage
  //   const token = localStorage.getItem('accessToken') && JSON.parse(localStorage.getItem('accessToken')).value ;
  //   if (token) {
  //     const config = {
  //       headers: {
  //         Authorization: `Bearer ${token}`, // Set the token in the "Authorization" header
  //       },
  //     };

  //     try {
  //       const res = await getDashboardData();
  //       console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>', res);



  //     } catch (error) {
  //       console.error('Error fetching chart Data:', error); 
  //     }
  //   } else {
  //     console.error('Token not found in session storage');
  //   }
  // };

  useEffect(() => {
    const getNewData = async () => {
      try {
        const newData = await getOperationDashboardData();
        setData(newData);
      } catch (error) {
        console.error('Error fetching invoice:', error);
      } 
    }
    getNewData()
  }, []);


  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Grid container spacing={3}>

      <InvoiceCountByStatus 
        title="Title"
        subheader="Subheader"
        list={data} 
        
      />

      <Box
        sx={{ 
          width: "100%"
         }}
      >
        <BarChart data={data}/>
      </Box>
        
      </Grid>
    </Container>
  );
}




