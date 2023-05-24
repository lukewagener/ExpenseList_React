import Expenses from "./components/Expenses/Expenses.js";
import { NewExpense } from "./components/NewExpense/NewExpense.js";
import "./components/Expenses/ExpensesFilter.css";
import { useState } from "react";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

// Root App
const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  const [filteredYear, setFilteredYear] = useState();

  // prevExpense (prev+ArrayName) is auto-provided by React, and gives the most recent state snapshot. Correct way to update an array dynamically.
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
