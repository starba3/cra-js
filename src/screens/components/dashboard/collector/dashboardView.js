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
import { getDashboardData } from 'src/data-access/dashboard';
// components
import { useSettingsContext } from 'src/components/settings';
// import AppWidgetSummary from 'src/sections/overview/app/app-widget-summary';
import AppCurrentDownload from 'src/sections/overview/app/app-current-download';
import ChartRadialBar from 'src/screens/components/dashboard/admin/chart-radial-bar';
// import AppNewInvoice from 'src/screens/components/dashboard/admin/AppNewInvoice';
import InvoiceCountByStatus from 'src/screens/components/dashboard/installation/InvoiceCountByStatus'
import { getUserRole } from 'src/helpers/roleHelper';
import { Box } from '@mui/material';

// 


// ----------------------------------------------------------------------

export default function CollectorDashboardView() {
  const { user } = useMockedUser();

  const [statusCount, setStatusCount] = useState([])
  // const [needToActionCount, setNeedToActionCount] = useState(0)
  
  // const { t, currentLang } = useLocales();
  // const translate = (text) => t(text);
  const ROLE = getUserRole()

  const theme = useTheme();
  const settings = useSettingsContext();

  const { t } = useLocales()
  const translate = (text) => t(text);

  useEffect(() => {
    const getNewData = async () => {
      try {
        const newStatusCount = await getDashboardData(ROLE)
        // const newNeedToActionCount = await getNeedToActionCount(ROLE)

        const statusCountArray = Object.entries(newStatusCount)
          .map((arr) => ({ status: arr[0], count: arr[1] }))

        setStatusCount(statusCountArray)
        // setNeedToActionCount(newNeedToActionCount)
      } catch (error) {
        console.error('Error fetching invoice:', error);
      } 
    }
    getNewData()
  }, [ROLE]);


  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Grid container spacing={3}>

        {/* <Grid item="true" xs={12}>
          <InvoiceCountByStatus 
            title="Title"
            subheader="Subheader"
            list={statusCount} 
            
          />
        </Grid> */}
      
        <Grid item="true" xs={12}>
          <FlexBox>
            <Grid item="true" xs={12} md={6} lg={6} sx={{  }}>
              <InvoiceCountByStatus 
                title="Title"
                subheader="Subheader"
                list={statusCount} 
                
              />
            </Grid>

            <Grid item="true" xs={12} md={6} lg={4} sx={{  }}>
              <AppCurrentDownload
                title={translate("installtionStatusCount")}
                chart={{
                  series: statusCount.map((item) => ({
                      label: translate(item.status),
                      value: item.count,  
                    })),
                }}
              />
            </Grid>
            
            {/* <Grid item="true" xs={12} md={6} lg={4} sx={{  }}>
              <AppCurrentDownload
                title={translate("needToActionCount")}
                chart= {{
                  series: [
                    {
                      label: translate("needToAction"),
                      value: needToActionCount,
                    }
                  ]
                }}
              />
            </Grid>    */}

            

            {/* <Grid item="true" xs={12} md={6} lg={4}>
              <Card>
                <CardHeader title={Translate("unpaidToPaidInvoices")} sx={{ mb: 5 }} />
                <ChartRadialBar series={[paidInvoicesTotalAmmountPrecentage, unpaidInvoicesTotalAmmountPrecentage]} outsideNumber={sum} />
              </Card>
            </Grid> */}
          </FlexBox>
        </Grid>
        
      </Grid>
    </Container>
  );
}

// Define a FlexBox component with prop validation
const FlexBox = ({ children }) => (
  <Stack direction="row" spacing={3} sx={{ flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
    {children}
  </Stack>
);

// Add prop validation using PropTypes
FlexBox.propTypes = {
  children: PropTypes.node.isRequired,
};




