import React, {useState} from 'react';
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const yearFilterHandler = (data) =>{
    setFilteredYear(data);
  }
  const filteredExpenses = props.items.filter(expense=>expense.date.getFullYear().toString()===filteredYear);

  let expensesContent = <p>No expenses found.</p>;
  if(filteredExpenses.length>0){
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
    ));
  }

  return (
    <div>
      <Card  className="expenses">
        <ExpensesFilter yearSelected={filteredYear}  onChangeYear={yearFilterHandler}  />
        {expensesContent}  
      </Card>
    </div>
  );
}

export default Expenses;
