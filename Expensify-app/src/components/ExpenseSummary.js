import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import expenseTotal from "../selectors/expenses-total";

numeral.locale('CH');

const ExpenseSummary = ({expenseCount, expensesTotal}) => {
    const expw = expenseCount === 1 ? "expense" : "expenses";
    const expensesTotalFormatted = numeral(expensesTotal/100).format("$0,0.00");
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expw} totalling <span>{expensesTotalFormatted}</span></h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
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