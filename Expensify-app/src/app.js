import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import numeral from 'numeral';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from "./actions/expenses";
import { login, logout } from "./actions/auth";
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';

// load a locale
numeral.register('locale', 'CH', {
    delimiters: {
        thousands: "'",
        decimal: '.'
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    currency: {
        symbol: 'CHF'
    }
});

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<p>Loading ...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user)=> {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(()=> {
      renderApp();
      // to not redirect when you refresh another page while logged in
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});

