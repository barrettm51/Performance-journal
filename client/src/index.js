import React from 'react';
import ReactDOM from 'react-dom';
import './custom.scss';
import App from './App';
//Redux
import { Provider } from 'react-redux';
import store from './redux/store';
//Stytch
import { StytchProvider, initStytch } from '@stytch/stytch-react';

const stytch = initStytch("public-token-test-5685294f-b070-42ec-9658-dade94e7cb4e");

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
      <StytchProvider stytch={stytch} >
        <App />
      </StytchProvider>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


