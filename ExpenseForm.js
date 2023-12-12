
import React,{useState} from "react";
import './ExpenseForm.css'
var ExpenseForm=(props)=>{
    var [oldTitle,newTitle]=useState("")
    var [oldAmount,newAmount]=useState("")
    var [oldDate,newDate]=useState("")
    var Titlechange=(event)=>{
        newTitle(event.target.value)
    }
    var AmountChanger=(event)=>{
        newAmount(event.target.value)
    }
    var DateChanger=(event)=>{
        newDate(event.target.value)
    }


        var submitHandler=(event)=>{
            event.preventDefault()
            const ExpenseData ={
                title:oldTitle,
                amount:oldAmount,
                date:new Date(oldDate)
            }

            
            props.onSaveExpenseData(ExpenseData)
            newTitle('')
            newAmount('')
            newDate('')
        }
    return ( 
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls"></div>
        <div className="new-expense__control "></div>
        <label>Title</label>
        <input type="text" value={oldTitle}onChange={Titlechange}></input>
        <div className="new-expense__control "></div>
        <label>Amount</label>
        <input type="number" value={oldAmount} onChange={AmountChanger}></input>
        <div className="new-expense__control "></div>
        <label>Date</label>
        <input type="date" value={oldDate} onChange={DateChanger}></input>
        <div className="new-expense__actions">
        <button>Submit</button>
        <button onClick={props.onCancelHandler}>Cancel</button>
        </div>
    </form>

    )
 }

 export default ExpenseForm