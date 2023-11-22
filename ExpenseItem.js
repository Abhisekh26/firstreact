import React from "react";
import './ExpenseItem.css'
import ExpenseTime from "./ExpenseItemTime";
function ExpenseItem(props){
    return  (
        <div className="expense-item">
            
        <ExpenseTime date={props.date}/>

             <h2>{props.title}</h2>
             <h2>{props.City}</h2>
            <div className="expense-item__description">
            <div className="expense-item">
                    {props.Expenses}     
                    </div>
        <div className="expense-item__price"> Rs{props.Cost}</div>
    
       
        </div>
        </div>
        
    );
    
}

export default ExpenseItem;