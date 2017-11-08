import React, { Component } from 'react';
import { connect } from 'react-redux';
import getExchangeRates from '../actions/dataAction';
import Chart from './Chart';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  setIntervalDataFetch(func, param, interval) {
    func(param);
    return setInterval(() => func(param), interval);
  }

  componentDidMount() {
    window.scrollTo(0,0);
    // func: this.props.dispatch -> a function that dispatches the action
    // parameter: getExchangeRates() -> an action, which is an axios call that fetches data from the api, is passed in as a parameter for the dispatch Function
    // interval: 900000 -> Update data every 15min
    this.setIntervalDataFetch(this.props.dispatch, getExchangeRates(), 900000);
  }

  // saveDataToLocalStorage() {
  //   store.subscribe(() => {
  //     localStorage.setItem('reduxState', JSON.stringify(store.getState()))
  //   })
  // }

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
        labels: [`Most Recent Market Price`, `Buying Rate`, `Selling Rate`],
        datasets: [
          {
            label:['Most Recent Market Price'],
            data:[
              data.last,
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
            ],
          },
          {
            label: ['Buying Rate'],
            data: [data.buy],
            backgroundColor: ['yellow']
          },
          {
            label: ['Selling Rate'],
            data: [data.sell],
            backgroundColor: ['blue']
          },
        ],
      }
    );
  }

  render() {
    return (
      <div>
        <header>
          blockchain
          <br />
          USD: {this.props.USD.symbol} {this.props.USD.last}
        </header>
        <div className="chartContainer">
          <Chart
          chartData={this.getChartData(this.props.USD)}
          />
          <div>
            Hello {`Last Updated Rate ${this.getCurrentTime()}`}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    USD,
  } = state.exchangeRates;

  return {
    USD,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
