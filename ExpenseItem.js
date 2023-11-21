import React from "react";
import './ExpenseItem.css'
function ExpenseItem(props){
    // var date="November 19"
    // const LocationofExpenditure= "Patna"
    // var exp1="Food"
    // var exp1Price=10
    // var exp2="Petrol"
    // var exp2Price=100
    // var exp3="Movies"
    // var exp3Price=200

    return  (
        <div className="expense-item">
            <div>{props.Date}</div>
             <h2>Expense item</h2>
             <h2>{props.City}</h2>
        <div className="expense-item__description">
        <div className="expense-item">
                    {props.Food}     </div>
        <div className="expense-item__price"> Rs{props.Cost}</div>
        <div className="expense-item">
                    {props.Fuel}      </div>
        <div className="expense-item__price">Rs{props.FuelCost}</div>
        
        </div>
        </div>
    );
    
}

export default ExpenseItem;