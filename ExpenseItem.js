import React,{useState} from "react";
import './ExpenseItem.css'
import ExpenseTime from "./ExpenseItemTime";
const ExpenseItem=(props)=>{

    let [Cost,newCost]= useState(props.Cost);

    var xyz=()=>{
        
        newCost("100")
     
    }
    return  (
        <div className="expense-item">
            
        <ExpenseTime date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <h2>{props.City}</h2>
                 <h2> {props.Expenses}    </h2> 
                
        <div className="expense-item__price"> Rs{Cost}</div>
        </div>
        <button onClick={xyz}>Change Price</button>
       
    
        </div>
        
    );
    
}

export default ExpenseItem;