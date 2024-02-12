import React from 'react';
import { useLocales } from 'src/locales';

import Chart from 'react-apexcharts';
import PropTypes from 'prop-types';

const BarChart = ({ data }) => {

    const { t } = useLocales()
    const translate = (text) => t(text)
    console.log("Data: ", data)
    // Assuming data is an array of objects with properties { name, count }
    const categories = data.map(item => item.status);
    const counts = data.map(item => item.count);

    const options = {
        chart: {
        type: 'bar'
        },
        xaxis: {
            categories,
        },
    };

    const series = [
        {
        name: translate("count"),
        data: counts,
        },
    ];

    return (
        <Chart options={options} series={series} type="bar" height={350} />
    );
};

BarChart.propTypes = {
  data: PropTypes.array.isRequired,
};

export default BarChart;
