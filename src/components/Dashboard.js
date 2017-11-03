import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as dataAction from '../actions/dataAction';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0,0);
    this.props.dispatch(dataAction.getExchangeRates());
  }

  render() {
    return (
      <div>
        blockchain
        USD: {this.props.USD.last}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    USD,
  } = state.dataReducer;

  return {
    USD,
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
