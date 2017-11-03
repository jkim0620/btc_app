export const INITIAL_STATE = {
  USD: {},
  KRW: {},
  JPY: {},
  EUR: {},
  HKD: {},
  AUD: {},
  GBP: {},
}

const dataReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'GET_EXCHANGE_RATES_SUCCESS':
      return {
        ...state,
        USD: action.payload.USD,
        KRW: action.payload.KRW,
        JPY: action.payload.JPY,
        EUR: action.payload.EUR,
        HKD: action.payload.HKD,
        AUD: action.payload.AUD,
        GBP: action.payload.GBP,
      };

    default:
      return state;
  };
};

export default dataReducer;
