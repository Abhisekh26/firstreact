import React,{useState}from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
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
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}
            ></ExpensesFilter>
            {filteredExpenses.map((expense)=>(<ExpenseItem 
            key={expense.id}
            title ={expense.title} 
            amount={expense.amount} 
            date={expense.date}/>
            ))}  
     {/* <ExpenseItem date={props.item[0].date} 
      title={props.item[0].title} 
      amount={props.item[0].amount}>
     </ExpenseItem>
      <ExpenseItem date={props.item[1].date} 
      
      title={props.item[1].title} 
       amount={props.item[1].amount}>
    </ExpenseItem>  */}
    </div>
    )
}
 export default Expense;