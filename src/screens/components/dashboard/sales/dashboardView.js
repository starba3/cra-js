import { useEffect, useState, lazy } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
// hooks
import { useMockedUser } from 'src/hooks/use-mocked-user';
// Data access
import { getDashboardData } from 'src/data-access/dashboard';
// components
import { useSettingsContext } from 'src/components/settings';
// import AppWidgetSummary from 'src/sections/overview/app/app-widget-summary';
// import AppCurrentDownload from 'src/sections/overview/app/app-current-download';
// import ChartRadialBar from 'src/screens/components/dashboard/admin/chart-radial-bar';
// import AppNewInvoice from 'src/screens/components/dashboard/admin/AppNewInvoice';
import InvoiceCountByStatus from 'src/screens/components/dashboard/operationManager/InvoiceCountByStatus'
import { getUserRole } from 'src/helpers/roleHelper';
import { Box } from '@mui/material';

const BarChart = lazy(() => import('./barchart'));
// 


// ----------------------------------------------------------------------

export default function SalesDashboardView() {
  const { user } = useMockedUser();

  const [data, setData] = useState([])
  
  // const { t, currentLang } = useLocales();
  // const translate = (text) => t(text);
  const ROLE = getUserRole()

  const theme = useTheme();
  const settings = useSettingsContext();

  useEffect(() => {
    const getNewData = async () => {
      try {
        const newData = await getDashboardData(ROLE);
        setData(newData);
      } catch (error) {
        console.error('Error fetching invoice:', error);
      } 
    }
    getNewData()
  }, [ROLE]);


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




