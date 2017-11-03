import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./store/configureStore";
import Dashboard from './components/Dashboard';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store()}>
    <Dashboard />
  </Provider>
, document.getElementById('root')
);
registerServiceWorker();
