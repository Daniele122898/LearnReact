import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

// addExpense -> Water bill
store.dispatch(addExpense({description: 'water bill', amount: 1000, createdAt: 10}));
// addExpense -> gas bill
store.dispatch(addExpense({description: 'gas bill', amount: 500, createdAt: 100}));
// setTextFilter -> bill --> water
store.dispatch(setTextFilter("water"));
setTimeout(() => {
  store.dispatch(setTextFilter("bill"));
},3000);

console.log(getVisibleExpenses(store.getState().expenses,store.getState().filter));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));