import { combineReducers, createStore } from 'redux';
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'

export default () => {
  // store creation
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filter: filtersReducer
    })
  );
  return store;
};

