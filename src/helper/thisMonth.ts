import type { ExpenseData } from "../types/expenseTypes";

export const getCurrentMonthExpense=(expenses:ExpenseData[]):number=>{
    const today=new Date();

    return expenses
    .filter((expense)=>{
         const expenseDate=new Date(expense.date);
         return(
            expenseDate.getMonth()===today.getMonth() && 
            expenseDate.getFullYear()===today.getFullYear()
         );
    })
    .reduce((total,expense)=>total+expense.amount,0);
}