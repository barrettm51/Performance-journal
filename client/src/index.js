import React from 'react';
import ReactDOM from 'react-dom';
import './custom.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
//Redux
import { Provider } from 'react-redux';
import store from './redux/store';
//Stytch
import { StytchProvider, initStytch } from '@stytch/stytch-react';

const stytch = initStytch(process.env.REACT_APP_PUBLIC_TOKEN_STYTCH);

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
      <StytchProvider stytch={stytch} >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StytchProvider>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


