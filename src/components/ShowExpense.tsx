import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const ShowExpense = () => {
  const expenseState = useContext(ExpenseContext);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-black dark:text-white text-center">
        Expense History
      </h1>

      <div
        className="overflow-x-auto rounded-2xl border 
        border-gray-200 dark:border-zinc-700
        bg-white dark:bg-zinc-900"
      >
        <table className="w-full min-w-[600px] border-collapse">
          <thead
            className="bg-gray-100 dark:bg-zinc-800 
            text-gray-700 dark:text-gray-300"
          >
            <tr>
              <th className="text-left px-4 py-3 font-semibold">Title</th>
              <th className="text-left px-4 py-3 font-semibold">Amount</th>
              <th className="text-left px-4 py-3 font-semibold">Category</th>
              <th className="text-left px-4 py-3 font-semibold">Date</th>
            </tr>
          </thead>

          <tbody>
            {expenseState?.expenses.length === 0 ? (
              <tr>
                <td
                  colSpan={4}
                  className="text-center py-10 text-gray-500 dark:text-gray-400"
                >
                  No expenses added yet
                </td>
              </tr>
            ) : (
              expenseState?.expenses.map((item, index) => (
                <tr
                  key={item.id}
                  className={`
                    border-t border-gray-200 dark:border-zinc-700
                    hover:bg-gray-50 dark:hover:bg-zinc-800
                    transition-colors
                    ${
                      index % 2 === 0
                        ? "bg-white dark:bg-zinc-900"
                        : "bg-gray-50/50 dark:bg-zinc-950"
                    }
                  `}
                >
                  <td className="px-4 py-4 text-black dark:text-white">
                    {item.title}
                  </td>

                  <td className="px-4 py-4 font-medium text-black dark:text-white">
                    ₹{item.amount}
                  </td>

                  <td className="px-4 py-4">
                    <span
                      className="px-3 py-1 rounded-full text-xs
                      bg-gray-200 dark:bg-zinc-700
                      text-gray-700 dark:text-gray-300"
                    >
                      {item.category}
                    </span>
                  </td>

                  <td className="px-4 py-4 text-gray-600 dark:text-gray-400">
                    {new Date(item.date).toLocaleDateString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowExpense;