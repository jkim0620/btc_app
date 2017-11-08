import { combineReducers } from 'redux';

import exchangeRates from './dataReducer';

export default combineReducers({
    exchangeRates: exchangeRates
});
