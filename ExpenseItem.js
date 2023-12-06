import React,{useState} from "react";
import './ExpenseItem.css'
import ExpenseTime from "./ExpenseItemTime";
//import ExpensesForm from "./ExpensesForm"
const ExpenseItem=(props)=>{
    let[setCost,SetNewCost]=useState("")
     let [Cost,newCost]= useState(props.Cost);

    var xyz=()=> {
        newCost(setCost)
        console.log(setCost)
    }
    var SetPrice=(event)=> SetNewCost(event.target.value)
     
    return  (
        <div className="expense-item">
              <ExpenseTime date={props.date}/>
            <div className="expense-item__description">
                <h2> {props.Expenses} </h2> 
                <div className="expense-item__price"> Rs{Cost}</div>
                 </div>
       
            <input type="text"  ></input>
            <h2>Add Expense</h2>
            <input type="text" value={setCost} onChange={SetPrice}></input>
            <h2>Price</h2>
           <input type="text"></input>
           <h2>Date</h2> 
            <button onClick={xyz}>Submit</button>  
    
      
        
    
        </div>
        
    );
    
}

export default ExpenseItem;