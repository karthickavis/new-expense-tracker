import React from 'react'
import { useContext } from 'react'
import { ExpenseContext } from '../context/ExpenseContext'
import { getTotalExpenses } from '../helper/total'
import { getCurrentMonthExpense } from '../helper/thisMonth'
import { getHighestCategoryThisMonth } from '../helper/category'
const Dashboard = () => {

    const expensestate=useContext(ExpenseContext);
    const totalExpense=getTotalExpenses(expensestate?.expenses??[])
    const currentMonthExpense=getCurrentMonthExpense(expensestate?.expenses??[])
    const highestCategory=getHighestCategoryThisMonth(expensestate?.expenses??[])
  return (
    <div>
               <h1>Total: ₹{totalExpense}</h1>
<h1>This Month: ₹{currentMonthExpense}</h1>
<div className="p-5 rounded-xl border">
  <h3>Top Category This Month</h3>

  <p className="text-xl font-bold">
    {highestCategory.category || "No Expenses"}
  </p>

  <p>₹{highestCategory.amount}</p>
</div>
    </div>
  )
}

export default Dashboard