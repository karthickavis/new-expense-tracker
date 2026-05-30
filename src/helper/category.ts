import type { ExpenseData } from "../types/expenseTypes";

export const getHighestCategoryThisMonth = (
  expenses: ExpenseData[]
) => {
  const today = new Date();

  const currentMonthExpenses = expenses.filter((expense) => {
    const expenseDate = new Date(expense.date);

    return (
      expenseDate.getMonth() === today.getMonth() &&
      expenseDate.getFullYear() === today.getFullYear()
    );
  });

  const categoryTotals: Record<string, number> = {};

  currentMonthExpenses.forEach((expense) => {
    categoryTotals[expense.category] =
      (categoryTotals[expense.category] || 0) +
      expense.amount;
  });

  let highestCategory = "";
  let highestAmount = 0;

  for (const category in categoryTotals) {
    if (categoryTotals[category] > highestAmount) {
      highestAmount = categoryTotals[category];
      highestCategory = category;
    }
  }

  return {
    category: highestCategory,
    amount: highestAmount,
  };
};