import PropTypes from 'prop-types'; 
import axios from 'axios';
import { useEffect, useState } from 'react';
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
// _mock
import { _appFeatured, _appAuthors, _appInstalled, _appRelated, _appInvoices } from 'src/_mock';
// components
import { useSettingsContext } from 'src/components/settings';
import AppWidgetSummary from 'src/sections/overview/app/app-widget-summary';
import AppCurrentDownload from 'src/sections/overview/app/app-current-download';
import ChartRadialBar from 'src/screens/components/dashboard/chart-radial-bar';
import AppNewInvoice from 'src/screens/components/dashboard/AppNewInvoice';
// 


// ----------------------------------------------------------------------

export default function OverviewAppView() {
  const { user } = useMockedUser();

  const [unpaidInvoicesCount, setUnpaidInvoicesCount] = useState(0);
  const [paidInvoicesCount, setPaidInvoicesCount] = useState(0);
  const [unpaidInvoicesTotalAmmount, setUnpaidInvoicesTotalAmmount] = useState(0);
  const [paidInvoicesTotalAmmount, setPaidInvoicesTotalAmmount] = useState(0);
  const [departmentInvoicesCount, setDepartmentInvoicesCount] = useState({});
  const [lastestCreatedInvoices, setLastestCreatedInvoices] = useState([]);

  const { t } = useLocales()
  const Translate = (text) => t(text);

  const theme = useTheme();
  const settings = useSettingsContext();

  // hit the route
  const getInvoices = async () => {
    // Fetching the token from the session storage
    const token = sessionStorage.getItem('accessToken');
    if (token) {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Set the token in the "Authorization" header
        },
      };

      try {
        const res = await axios.get(`https://invoicecollectionsystemapi.azurewebsites.net/api/Dashboard`);
        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>', res.data);

        setUnpaidInvoicesCount(res.data.unpaidInvoicesCount);
        setPaidInvoicesCount(res.data.paidInvoicesCount);
        setUnpaidInvoicesTotalAmmount(res.data.unpaidInvoicesTotalAmmount);
        setPaidInvoicesTotalAmmount(res.data.paidInvoicesTotalAmmount);
        setDepartmentInvoicesCount(res.data.departmentInvoicesCount);
        setLastestCreatedInvoices(res.data.lastestCreatedInvoices);

      } catch (error) {
        console.error('Error fetching chart Data:', error);
      }
    } else {
      console.error('Token not found in session storage');
    }
  };

  useEffect(() => {
    getInvoices();
  }, []);


  const unpaidInvoicesCountPrecentage = (unpaidInvoicesCount / (unpaidInvoicesCount + paidInvoicesCount)) * 100;
  const paidInvoicesCountPrecentage = (paidInvoicesCount / (unpaidInvoicesCount + paidInvoicesCount)) * 100;

  const paidToUnpaidInvoicesCountPrecentage = (paidInvoicesCount / unpaidInvoicesCount) * 100;
  const unpaidToPaidInvoicesCountPrecentage = (unpaidInvoicesCount / paidInvoicesCount) * 100;

  const sum = paidInvoicesTotalAmmount + unpaidInvoicesTotalAmmount;
  const paidInvoicesTotalAmmountPrecentage = ((paidInvoicesTotalAmmount / sum) * 100).toFixed(2);

  const unpaidInvoicesTotalAmmountPrecentage = ((unpaidInvoicesTotalAmmount / sum) * 100).toFixed(2);

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Grid container spacing={3}>

        <Grid item="true" xs={12} md={6} lg={3}>
          <AppWidgetSummary
            title= {Translate("unpaidInvoicesCount")}
            percent={unpaidInvoicesCountPrecentage}
            total={unpaidInvoicesCount}
            chart={{
              series: [5, 18, 12, 51, 68, 11, 39, 37, 27, 20],
            }}
          />
        </Grid>

        <Grid item="true" xs={12} md={6} lg={3}>
          <AppWidgetSummary
            title={Translate("paidInvoicesCount")}
            percent={paidInvoicesCountPrecentage}
            total={paidInvoicesCount}
            chart={{
              colors: [theme.palette.info.light, theme.palette.info.main],
              series: [20, 41, 63, 33, 28, 35, 50, 46, 11, 26],
            }}
          />
        </Grid>

        <Grid item="true" xs={12} md={6} lg={3}>
          <AppWidgetSummary
            title={Translate("unpaidInvoicesTotal")}
            percent={paidToUnpaidInvoicesCountPrecentage}
            total={unpaidInvoicesTotalAmmount}
            chart={{
              colors: [theme.palette.warning.light, theme.palette.warning.main],
              series: [8, 9, 31, 8, 16, 37, 8, 33, 46, 31],
            }}
          />
        </Grid>

        <Grid item="true" xs={12} md={6} lg={3}>
          <AppWidgetSummary
            title={Translate("paidInvoicesTotal")}
            percent={unpaidToPaidInvoicesCountPrecentage}
            total={paidInvoicesTotalAmmount}
            chart={{
              colors: [theme.palette.warning.light, theme.palette.warning.main],
              series: [8, 9, 31, 8, 16, 37, 8, 33, 46, 31],
            }}
          />
        </Grid>

        <Grid item="true" xs={12}>
          <FlexBox>
            <Grid item="true" xs={12} md={6} lg={4}>
              <AppCurrentDownload
                title={Translate("departmentInvoicesCount")}
                chart={{
                  series: Object.keys(departmentInvoicesCount).map((key) => {
                    let label = '';
                    if (key === '0') {
                      label = Translate("operation");
                    } else if (key === '1') {
                      label = Translate("installation");
                    } else if (key === '2') {
                      label = Translate("sales");
                    } else if (key === '3') {
                      label = Translate("collection");
                    } else {
                      label = Translate("tender_and_contract");
                    }

                    return {
                      label,
                      value: departmentInvoicesCount[key],
                    };
                  }),
                }}
              />
            </Grid>




            <Grid item="true" xs={12} md={6} lg={4}>
              <Card>
                <CardHeader title={Translate("unpaidToPaidInvoices")} sx={{ mb: 5 }} />
                <ChartRadialBar series={[paidInvoicesTotalAmmountPrecentage, unpaidInvoicesTotalAmmountPrecentage]} outsideNumber={sum} />
              </Card>
            </Grid>
          </FlexBox>
        </Grid>

        <Grid item="true" xs={12}>
        <FlexBox>
          <Grid xs={12} lg={8}>

            <AppNewInvoice
              title={Translate("invoices")}
              tableData={lastestCreatedInvoices}
              tableLabels={[
                { id: 'invoiceNo', label:Translate("invoiceNumber") },
                { id: 'invoiceAmount', label: Translate("invoiceAmount") },
                { id: 'createdBy', label: Translate("createdBy") }
              ]}
            />
          </Grid>
          </FlexBox>
        </Grid>
        
      </Grid>
    </Container>
  );
}

// Define a FlexBox component with prop validation
const FlexBox = ({ children }) => (
  <Stack direction="row" spacing={3} sx={{ flexWrap: 'wrap', justifyContent: 'space-around' }}>
    {children}
  </Stack>
);

// Add prop validation using PropTypes
FlexBox.propTypes = {
  children: PropTypes.node.isRequired,
};


