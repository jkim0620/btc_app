import axios from 'axios';

export const getExchangeRates = () => {
  return (dispatch) => {
    axios
    .get('https://blockchain.info/ticker')
    .then((response) => {
      dispatch({
        type: 'GET_EXCHANGE_RATES_SUCCESS',
        payload: response.data
      });
    })
    .catch(() => {
      dispatch({
        type: 'GET_EXCHANGE_RATES_ERROR',
      });
    });
  };
};
