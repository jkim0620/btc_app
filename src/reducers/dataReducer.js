export const INITIAL_STATE = {
  USD: {},
}

const dataReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'GET_EXCHANGE_RATES_SUCCESS':
      return {
        ...state,
        USD: action.payload.USD,
      };

    default:
      return state;
  };
};

export default dataReducer;
