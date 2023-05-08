import React from "react";
import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

// New Expense container.
export const NewExpense = (props) => {
  // Data to be passed upwards to Parent
  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData)
  };
  return (
    <div className="new-expense">
      {/* passUpData represents props to be passed upward to parent component, in this case, the expense data submitted through the form. */}
      <ExpenseForm onSaveExpenseData={saveExpenseHandler} />
    </div>
  );
};
