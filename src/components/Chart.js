import React from 'react';
import { connect } from 'react-redux';
import { HorizontalBar } from 'react-chartjs-2';

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
        borderWidth: 7,
        borderColor: '#5b7d8e',
        borderSkipped: 'top'
      },
    },
    // title: {
    //   display: true,
    //   text: 'Get the latest Bitcoin Exchange Rates every 15min',
    //   fontFamily: 'Avenir',
    //   fontSize: 18,
    //   fontColor: '#232323',
    // },
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
    scales: {
      xAxes: [{
        display: true,
        ticks: {
          steps: 5,
          stepValue: 10,
        }
      }]
    },
    responsive: true,
    maintainAspectRatio: true,
  };

  return (
    <div className="chart">
      <HorizontalBar
        fontFamily= 'Avenir'
        data={chartData}
        options={chartOption}
        defaults={defaults}
      />
    </div>
  );
};


export default Chart;
