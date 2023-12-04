import React from 'react';
import useLocales from 'src/locales';
import Chart from 'react-apexcharts';
import PropTypes from 'prop-types';
import { useLocales } from 'src/locales';


const BarChart = ({ data }) => {

  const { t } = useLocales()
  const Translate = (text) => t(text);
  // Extracting values for each category from the data
  const dates = data.map(item => `${subtractDaysFromDate(new Date(item.date), 7)} -  ${formatDate(new Date(item.date))} `);
  const ready = data.map(item => item.ready);
  const notReady = data.map(item => item.notReady);
  const reject = data.map(item => item.reject);

  const chartOptions = {
    xaxis: {
      categories: dates,
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
      name: Translate("ready"),
      data: ready,
    },
    {
      name: Translate("notReady"),
      data: notReady,
    },
    {
      name: Translate("reject"),
      data: reject,
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
