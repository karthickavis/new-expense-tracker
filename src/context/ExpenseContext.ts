import { createContext } from "react";
import type { ExpenseData,StateData } from "../types/expenseTypes";
export const ExpenseContext = createContext<StateData|null>(null);

export const AddExpenseContext = createContext<((expense:ExpenseData)=>void)|null>(null);

export const DeleteExpenseContext = createContext<((id:number)=>void)|null>(null);