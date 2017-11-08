import React from 'react';
import { connect } from 'react-redux';
import { Bar } from 'react-chartjs-2';

const Chart = (props) => {
  const {
    chartData,
  } = props;

  const defaults = {
    global: {
      defaultFontFamily: "'Avenir'",
      barThickness: 20,
    }
  }

  const chartOption = {
    elements: {
      rectangle: {
        borderWidth: 2,
        borderColor: 'rgb(0, 255, 0)',
        borderSkipped: 'bottom'
      },
    },
    title: {
      display: true,
      text: 'Bitcoin Exchange Rates',
      fontFamily: 'Avenir',
      fontSize: 20,
      fontColor: '#fff',
    },
    legend: {
      display: true,
      position: 'right',
      labels: {
        boxWidth: 20,
        fontColor: 'white',
        fontFamily: 'Avenir',
        fontSize: 13,
      },
    },
    responsive: true,
    maintainAspectRatio: true,
  };

  return (
    <div className="chart">
      <Bar
        data={chartData}
        options={chartOption}
        defaults={defaults}
      />
    </div>
  );
};


export default Chart;
