import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import expenseTotal from "../selectors/expenses-total";

numeral.locale('CH');

const ExpenseSummary = ({expenseCount, expensesTotal}) => {
    const exps = expenseCount === 1 ? "expense" : "expenses";
    return (
        <div>
            <p>Viewing {expenseCount} {exps} totalling {numeral(expensesTotal/100).format("$0,0.00")}</p>
        </div>
    );
};

const mapStateToProps = (state) => {
    const expenses = selectExpenses(state.expenses, state.filter);
    return {
        expenseCount: expenses.length,
        expensesTotal: expenseTotal(expenses)
    }
};

export default connect(mapStateToProps)(ExpenseSummary);