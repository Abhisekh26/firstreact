import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpenseItem.css'
const Expense=(props)=>{
    return (
        <div className="expenses">
       <ExpenseItem date={props.item[1].date} 
      title={props.item[0].title}
      City={props.item[1].City} 
      Expenses={props.item[1].Exp1} 
      Cost={props.item[1].Exp1Cost}>
     </ExpenseItem>
      <ExpenseItem date={props.item[2].date} 
      title={props.item[0].title}
       City={props.item[2].City}
       Expenses={props.item[2].Exp1} 
       Cost={props.item[2].Exp1Cost}>
    </ExpenseItem>
    </div>
    )
}
 export default Expense;