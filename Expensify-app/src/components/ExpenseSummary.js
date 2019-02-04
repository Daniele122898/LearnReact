import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import expenseTotal from "../selectors/expenses-total";

numeral.locale('CH');

const ExpenseSummary = (props) => {
    const amount = expenseTotal(props.expenses);
    const exps = props.expenses.length === 1 ? "expense" : "expenses";
    return (
        <div>
            <p>Viewing {props.expenses.length} {exps} totalling {numeral(amount/100).format("$0,0.00")}</p>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filter)
    }
};

export default connect(mapStateToProps)(ExpenseSummary);