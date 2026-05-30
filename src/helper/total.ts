import type { ExpenseData } from "../types/expenseTypes";

export const getTotalExpenses=(expenses:ExpenseData[]):number=>{
    return expenses.reduce(
        (total,expense)=>total+expense.amount,0
    );

};