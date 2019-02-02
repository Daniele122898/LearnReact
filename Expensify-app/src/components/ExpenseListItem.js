import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
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

// switch between locales
numeral.locale('CH');

const ExpenseListItem =  ({description, amount, createdAt, id}) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {numeral(amount/100).format("$0,0.00")}
      -
      {moment(createdAt).format('MMMM Do, YYYY')}
    </p>
  </div>
);

export default ExpenseListItem;

