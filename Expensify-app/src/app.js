import React from 'react';
import ReactDOM from 'react-dom';
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
store.dispatch(setTextFilter("bill"));
console.log(getVisibleExpenses(store.getState().expenses,store.getState().filter));

ReactDOM.render(<AppRouter />, document.getElementById('app'));