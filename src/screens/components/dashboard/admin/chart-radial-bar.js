import PropTypes from 'prop-types';
import { useLocales } from 'src/locales';
// @mui
import { styled } from '@mui/material/styles';
// utils
import { fNumber } from 'src/utils/format-number';
// components
import Chart, { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

const CHART_HEIGHT = 400;

const LEGEND_HEIGHT = 72;

const StyledChart = styled(Chart)(({ theme }) => ({
  height: CHART_HEIGHT,
  '& .apexcharts-canvas, .apexcharts-inner, svg, foreignObject': {
    height: `100% !important`,
  },
  '& .apexcharts-legend': {
    height: LEGEND_HEIGHT,
    marginBottom: theme.spacing(3),
    borderTop: `dashed 1px ${theme.palette.divider}`,
    top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`,
  },
}));

// ----------------------------------------------------------------------

export default function ChartRadialBar({ series , outsideNumber }) {

  const { t } = useLocales()
  const Translate = (text) => t(text);
  
  const chartOptions = useChart({
    chart: {
      sparkline: {
        enabled: true,
      },
    },
    labels: [Translate('paid'), Translate('unPaid')],
    legend: {
      floating: true,
      position: 'bottom',
      horizontalAlign: 'center',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '68%',
        },
        dataLabels: {
          value: {
            offsetY: 16,
          },
          total: {
            formatter: () => fNumber(outsideNumber),
          },
        },
      },
    },
  });

  return (
    <StyledChart dir="ltr" type="radialBar" series={series} options={chartOptions} height={280} />
  );
}

ChartRadialBar.propTypes = {
  series: PropTypes.array,
  outsideNumber: PropTypes.number,
};
