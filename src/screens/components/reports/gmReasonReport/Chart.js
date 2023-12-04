import React from 'react';
import { useLocales } from 'src/locales';
import Chart from 'react-apexcharts';
import PropTypes from 'prop-types';


const BarChart = ({ data }) => {

  const { t } = useLocales()
  const Translate = (text) => t(text);

  // Extracting values for each category from the data
  const dates = data.map(item => `${subtractDaysFromDate(new Date(item.date), 7)} -  ${formatDate(new Date(item.date))} `);
  const reason = data.map(item => item.reason);
  const totalAmount = data.map(item => item.totalAmount);

  const chartOptions = {
    xaxis: {
      categories: reason,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    legend: {
      offsetY: -10,
    },
  };

  const chartSeries = [
    {
      name: Translate("amount") ,
      data: totalAmount,
    },
  ];

  return (
    <Chart
      options={chartOptions}
      series={chartSeries}
      type="bar"
      height="350"
    />
  );
};

const subtractDaysFromDate = (date, days) => {
  const dateCopy = new Date(date);
  dateCopy.setDate(dateCopy.getDate() - days);
  return formatDate(dateCopy);
}

const formatDate = (date) => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  return `${day}/${month}`;
}

BarChart.propTypes = {
  data: PropTypes.array.isRequired,
};

export default BarChart;
