import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
// REMOVE_EXPENSE
const removeExpense = (id) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// ADD_EXPENSE
const addExpense = (
{
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense)=>{
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDAte: undefined
};
const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    default:
      return state;
  }
};

// store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filter: filterReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

const exp1 = store.dispatch(addExpense({ description: "rent", amount: 100 }));
const exp2 = store.dispatch(addExpense({ description: "COFEFEEEE", amount: 300 }));

store.dispatch(removeExpense(exp1.expense.id));

store.dispatch(editExpense(exp2.expense.id, { amount: 23 }));

store.dispatch(setTextFilter('rent'));

const demoState = {
  expenses: [{
    id: 'akjsn',
    description: 'January Rent',
    note: 'Final payment of that address',
    amount: 23400,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
  }
};

const user = {
  name: 'Jen',
  age: 24
};