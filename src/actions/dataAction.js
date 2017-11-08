import axios from 'axios';

const getExchangeRates = () => {
  return (dispatch) => {
    axios
    .get('https://blockchain.info/ticker')
    .then(response => {
      dispatch({
        type: 'GET_EXCHANGE_RATES_SUCCESS',
        payload: response.data
      })
    })
    .catch((err) => {
      console.log(err);
    });
  };
};

export default getExchangeRates;
