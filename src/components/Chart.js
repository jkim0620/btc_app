import React from 'react';
import { connect } from 'react-redux';
import { Bar } from 'react-chartjs-2';

const Chart = (props) => {
  const {
    chartData,
  } = props;

    return (
      <div className="chart">
        <Bar
          data={chartData}
          options={{
            Display: false,
            maintainAspectRatio: false,
          }}
        />
      </div>
    );

};


export default Chart;
