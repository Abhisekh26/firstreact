import React,{useState}from "react";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";
import './expense.css'
const Expense=(props)=>{
    const[filteredYear,setFilteredYear]=useState('2020')
    const filterChangeHandler= selectedYear=>{
        setFilteredYear(selectedYear)
    }
    const filteredExpenses=props.item.filter( expense=> {
        return expense.date.getFullYear().toString()=== filteredYear;})
     
    return (
        <div  className="expenses">
            <ExpensesFilter selected={filteredYear} 
            onChangeFilter={filterChangeHandler}
            ></ExpensesFilter>
            <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
            <ExpenseList items={filteredExpenses}/>
     
    </div>
    )
}
 export default Expense;