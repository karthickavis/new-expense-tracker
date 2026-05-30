import { useContext,useState } from "react";
import { ExpenseContext,DeleteExpenseContext,EditExpenseContext} from "../context/ExpenseContext";
import { Pencil, Trash2 } from "lucide-react";
import  type { ExpenseData } from "../types/expenseTypes";
const ShowExpense = () => {
  const expenseState = useContext(ExpenseContext);
  const deleteExpense=useContext(DeleteExpenseContext)
  const editExpense=useContext(EditExpenseContext)
  const [isModalOpen,setIsModalOpen]=useState(false)
  const [selectedExpense,setSelectedExpense]=useState<ExpenseData |null>(null)

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
            <th className="text-left px-4 py-3 font-semibold">Actions</th>
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
                  <td className="px-4 py-4">
  <div className="flex items-center gap-3">
    <button onClick={()=>{setSelectedExpense(item)
     setIsModalOpen(true) 
   }}
      className="p-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition"
    >
      <Pencil
        size={20}
        className="text-blue-600 dark:text-blue-400"
      />
    </button>

    <button
      onClick={() => deleteExpense?.(item.id)}
      className="p-2 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition"
    >
      <Trash2
        size={20}
        className="text-red-600 dark:text-red-400"
      />
    </button>
  </div>
</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {isModalOpen && selectedExpense && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">
        Edit Expense
      </h2>

      <input
        className="w-full border p-2 rounded mb-3"
        value={selectedExpense.title}
        onChange={(e) =>
          setSelectedExpense({
            ...selectedExpense,
            title: e.target.value,
          })
        }
      />

      <input
        className="w-full border p-2 rounded mb-3"
        type="number"
        value={selectedExpense.amount}
        onChange={(e) =>
          setSelectedExpense({
            ...selectedExpense,
            amount: Number(e.target.value),
          })
        }
      />
       <input
        className="w-full border p-2 rounded mb-3"
        type="text"
        value={selectedExpense.category}
        onChange={(e) =>
          setSelectedExpense({
            ...selectedExpense,
            category:(e.target.value),
          })
        }
      />
       <input
        className="w-full border p-2 rounded mb-3"
        type="date"
        value={selectedExpense.date}
        onChange={(e) =>
          setSelectedExpense({
            ...selectedExpense,
            date:(e.target.value),
          })
        }
      />

      <div className="flex justify-end gap-3">
        <button
          onClick={() => setIsModalOpen(false)}
          className="px-4 py-2 rounded bg-gray-300"
        >
          Cancel
        </button>

        <button
          onClick={() => {
            editExpense?.(selectedExpense);
            setIsModalOpen(false);
          }}
          className="px-4 py-2 rounded bg-blue-600 text-white"
        >
          Update
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default ShowExpense;