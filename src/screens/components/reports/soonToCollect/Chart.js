import React from 'react';
import Chart from 'react-apexcharts';
import PropTypes from 'prop-types';

const DonutChart = ({ data }) => {
  // Extracting values for each category from the data
  const zeroToThirty = data.map(item => item.zeroToThirty);
  const thirtyOneToSixty = data.map(item => item.thirtyOneToSixty);
  const sixtyOneToNinety = data.map(item => item.sixtyOneToNinety);
  const ninetyOneToOneTwenty = data.map(item => item.ninetyOneToOneTwenty);
  const oneTwentyOnePlus = data.map(item => item.oneTwentyOnePlus);

  // Calculating the total for each category
  const totalZeroToThirty = zeroToThirty.reduce((acc, value) => acc + value, 0);
  const totalThirtyOneToSixty = thirtyOneToSixty.reduce((acc, value) => acc + value, 0);
  const totalSixtyOneToNinety = sixtyOneToNinety.reduce((acc, value) => acc + value, 0);
  const totalNinetyOneToOneTwenty = ninetyOneToOneTwenty.reduce((acc, value) => acc + value, 0);
  const totalOneTwentyOnePlus = oneTwentyOnePlus.reduce((acc, value) => acc + value, 0);

  const chartOptions = {
    labels: ['0-30', '31-60', '61-90', '91-120', '120+'],
  };

  const chartSeries = [
    totalZeroToThirty,
    totalThirtyOneToSixty,
    totalSixtyOneToNinety,
    totalNinetyOneToOneTwenty,
    totalOneTwentyOnePlus,
  ];

  return (
    <Chart
      options={chartOptions}
      series={chartSeries}
      type="donut"
      width="380"
    />
  );
};

DonutChart.propTypes = {
  data: PropTypes.array.isRequired,
};

export default DonutChart;
