import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import * as dataAction from '../actions/dataAction';
import Chart from './Chart';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //
    // }
  }

  componentDidMount() {
    window.scrollTo(0,0);
    this.props.dispatch(dataAction.getExchangeRates());
    // this.setState({
    //   chartData:
    // });
  }

  getChartData(data) {
    return (
      {
        labels: ['11/7/2017'],
        datasets: [
          {
            label:'Bitcoin Exchange Rates',
            data:[
              data,
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
            ]
          }
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
        chartData={this.getChartData(this.props.USD.last)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    USD,
    KRW,
    JPY,
    EUR,
    HKD,
    AUD,
    GBP,
  } = state.dataReducer;

  return {
    USD,
    KRW,
    JPY,
    EUR,
    HKD,
    AUD,
    GBP,
  }
}

// const mapStateToProps = (state) => {
//   const {
//     businessId,
//     businessName,
//     photoUri,
//     rating,
//     telephone,
//   } = state.business;
//
//   const { reviews } = state;
//   const thumbnails = _.map(Object.values(reviews));
//
//   return {
//     businessId,
//     businessName,
//     businessImage: photoUri,
//     rating,
//     telephone,
//     thumbnails,
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
