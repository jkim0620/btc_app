import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as dataAction from '../actions/dataAction';
import Chart from './Chart';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  setIntervalDataFetch(func, interval, param) {
    func(param);
    return setInterval(() => func(param), interval);
  }

  componentDidMount() {
    window.scrollTo(0,0);
    this.setIntervalDataFetch(this.props.dispatch, 900000, dataAction.getExchangeRates())
  }

  // Function to get current time
  // Reference code: https://gist.github.com/hurjas/2660489
  getCurrentTime() {
      let now = new Date();
      let date = [ now.getMonth() + 1, now.getDate(), now.getFullYear() ];
      let time = [ now.getHours(), now.getMinutes(), now.getSeconds() ];

      let suffix = ( time[0] < 12 ) ? "AM" : "PM";

      time[0] = ( time[0] < 12 ) ? time[0] : time[0] - 12;

      time[0] = time[0] || 12;

      for (let i = 1; i < 3; i++) {
        if (time[i] < 10) {
          time[i] = "0" + time[i];
        }
      }

      return `${time.join(":")} ${suffix} ${date.join("/")}`;
  }

  getChartData(data) {
    return (
      {
        labels: [`Last Updated Rate ${this.getCurrentTime()} (${data.symbol} ${data.last})`, `Buy (${data.symbol} ${data.buy})`, `Sell (${data.symbol} ${data.sell})`],
        datasets: [
          {
            label:['Bitcoin Exchange Rates'],
            data:[
              data.last,
              data.buy,
              data.sell,
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'blue',
              'yellow',
            ]
          },
        ]
      }
    )
  }

  render() {
    return (
      <div>
        blockchain
        <br />
        USD: {this.props.USD.symbol} {this.props.USD.last}
        <br />
        KRW: {this.props.KRW.symbol} {this.props.KRW.last}
        <Chart
        chartData={this.getChartData(this.props.USD)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    USD,
    KRW,
  } = state.dataReducer;

  return {
    USD,
    KRW,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
