import ExpenseItem from "./Components/ExpenseItem";
import React from "react";
function App() {
  var Expense=[
    {Date:"3 Novemeber",Exp1:"Food",Exp1Cost:10,Exp2:"Petrol",Exp2Price:100,City:"Patna"},
    {Date:"15 Novemeber",Exp1:"Food",Exp1Cost:103,Exp2:"Petrol",Exp2Price:500,City:"Lucknow"},
    {Date:"20 Novemeber",Exp1:"Food",Exp1Cost:105,Exp2:"Diesel",Exp2Price:600,City:"Ranchi"}
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem Date={Expense[0].Date} 
      City={Expense[0].City} 
      Food={Expense[0].Exp1} 
      Cost={Expense[0].Exp1Cost} 
      Fuel={Expense[0].Exp2} 
      FuelCost={Expense[0].Exp2Price}>

      </ExpenseItem>
      <ExpenseItem Date={Expense[1].Date} 
      City={Expense[1].City}
       Food={Expense[1].Exp1} 
       Cost={Expense[1].Exp1Cost} 
       Fuel={Expense[1].Exp2} 
       FuelCost={Expense[1].Exp2Price}>

      </ExpenseItem>
    </div>
  );
}

export default App;
