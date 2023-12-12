import Expense from "./Components/Componennt/Expense";
import React,{useState} from "react";

import NewExpense from "./Components/Componennt/NewExpense";

var DUMMY_EXPENSES=[
  {id:"e1",date:new Date(2020,7,12) ,title:"Food",amount:110},
  {id:"e2",date:new Date(2022,8,12) ,title:"Movie",amount:103},
  
]


const App=()=> {
  const [item,Setexpenses]=useState(DUMMY_EXPENSES)
  
  const AddExpenseHandler= (expense)=>{
   Setexpenses((prevExpenses)=>{
    return [expense, ...prevExpenses]
   })
  }

  return (
    <div>
      <NewExpense OnAddExpense={AddExpenseHandler}></NewExpense>
      < Expense item={item}/>
    </div>

  );
}

export default App;
