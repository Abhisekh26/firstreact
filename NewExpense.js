import React from "react";
import './NewExpense.css'
import ExpenseModal from "./ExpenseModal";
// import ExpenseForm from "./ExpenseForm";
function NewExpense(props){

const SaveExpenseDataHandler=(enteredExpenseData)=>{
     const ExpenseData={
        ...enteredExpenseData,
        id:Math.random().toString()
     }
     props.OnAddExpense(ExpenseData)
}

    return(
        <div className="new-expense">
            
           {/* <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} ></ExpenseForm> */}
           <div className="new-expense">
      <ExpenseModal onOpenModal={SaveExpenseDataHandler} />
    </div>
        </div>
    )
}
export  default NewExpense