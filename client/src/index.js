import React from 'react';
import ReactDOM from 'react-dom';
import './custom.scss';
import App from './App';
//Redux
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
      <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


