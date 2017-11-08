const INITIAL_STATE = {
  USD: {},
}

const exchangeRates = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'GET_EXCHANGE_RATES_SUCCESS':
      return {
        USD: action.payload.USD,
      };

    default:
      return state;
  };
};

export default exchangeRates;
