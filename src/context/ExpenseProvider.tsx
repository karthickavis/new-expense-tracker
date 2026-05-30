import {useReducer,useEffect} from "react";
import type { ReactNode } from "react";
import {expenseReducer} from '../reducer/ExpenseReducer';
// import { ADD_EXPENSE,DELETE_EXPENSE } from "../types/expenseTypes";
import { ExpenseContext,AddExpenseContext,DeleteExpenseContext,EditExpenseContext } from "./ExpenseContext";
import type { ExpenseData,StateData} from "../types/expenseTypes";

const storedExpenses=localStorage.getItem("expenses");
const initialState:StateData={
    expenses:storedExpenses?JSON.parse(storedExpenses):[],
}
type ExpenseProviderProps={
    children:ReactNode
}

export const ExpenseProvider=({children}:ExpenseProviderProps)=>{

    const[state,dispatch]=useReducer(expenseReducer,initialState)

    useEffect(()=>{
     localStorage.setItem("expenses",JSON.stringify(state.expenses))
    },[state.expenses])

    const addExpense=(expense:ExpenseData)=>{
        dispatch({
            type:"ADD_EXPENSE",
            payload:expense,
        });
    };

      const deleteExpense=(id:number)=>{
        dispatch({
            type:"DELETE_EXPENSE",
            payload:id,
        });
      };

      const editExpense=(expense:ExpenseData)=>{
        dispatch({
            type :"EDIT_EXPENSE",
            payload:expense,
        })
      }

      return(
        <ExpenseContext.Provider value={state}>
           <AddExpenseContext.Provider value={addExpense}>
            <DeleteExpenseContext.Provider value={deleteExpense}>
                <EditExpenseContext.Provider value={editExpense}>
                   {children}
                </EditExpenseContext.Provider>
              
            </DeleteExpenseContext.Provider>
           </AddExpenseContext.Provider>
        </ExpenseContext.Provider>
        
      )
}
