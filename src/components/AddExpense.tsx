import { useContext, useState } from "react";
import { AddExpenseContext } from "../context/ExpenseContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Plus } from "lucide-react";
import toast from "react-hot-toast";

const AddExpense = () => {
  const addExpense = useContext(AddExpenseContext);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const [date, setDate] = useState<Date | null>(new Date());
  const [category, setCategory] = useState("food");

  const handleAddExpense = () => {
    if (!addExpense || !title.trim() || !amount || !category) {
      toast.error("Please fill all fields");
      return;
    }

    addExpense({
      id: Date.now(),
      title,
      category,
      amount,
      date: date?.toISOString() || new Date().toISOString(),
    });

    toast.success("Expense added successfully");

    setTitle("");
    setAmount(0);
    setCategory("food");
    setDate(new Date());
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddExpense();
    }
  };

  return (
    <div className="w-full min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-6 md:py-10">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-8 justify-center">
          <div
            className="p-3 rounded-2xl 
            bg-black text-white 
            dark:bg-white dark:text-black"
          >
            <Plus size={22} />
          </div>

          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-black dark:text-white">
              Add Expense
            </h1>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              Track your daily spending easily
            </p>
          </div>
        </div>

        {/* Form */}
        <div
          className="border border-gray-200 dark:border-zinc-800
          bg-gray-50 dark:bg-zinc-900
          rounded-3xl p-5 md:p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* Title */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="title"
                className="text-sm font-medium text-black dark:text-white"
              >
                Title
              </label>

              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Enter expense title"
                className="w-full rounded-xl border border-gray-300 dark:border-zinc-700
                bg-white dark:bg-zinc-950
                text-black dark:text-white
                px-4 py-3 outline-none
                focus:ring-2 focus:ring-black dark:focus:ring-white"
              />
            </div>

            {/* Amount */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="amount"
                className="text-sm font-medium text-black dark:text-white"
              >
                Amount
              </label>

              <input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                onKeyDown={handleKeyDown}
                placeholder="Enter amount"
                className="w-full rounded-xl border border-gray-300 dark:border-zinc-700
                bg-white dark:bg-zinc-950
                text-black dark:text-white
                px-4 py-3 outline-none
                focus:ring-2 focus:ring-black dark:focus:ring-white"
              />
            </div>

            {/* Date */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-black dark:text-white">
                Date
              </label>

              <DatePicker
                selected={date}
                onChange={(date: Date | null) => setDate(date)}
                className="w-full rounded-xl border border-gray-300 dark:border-zinc-700
                bg-white dark:bg-zinc-950
                text-black dark:text-white
                px-4 py-3 outline-none"
                dateFormat="dd/MM/yyyy"
              />
            </div>

            {/* Category */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-black dark:text-white">
                Category
              </label>

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-xl border border-gray-300 dark:border-zinc-700
                bg-white dark:bg-zinc-950
                text-black dark:text-white
                px-4 py-3 outline-none"
              >
                <option value="food">Food</option>
                <option value="shopping">Shopping</option>
                <option value="bills">Bills</option>
                <option value="others">Others</option>
              </select>
            </div>
          </div>

          {/* Button */}
          <button
            onClick={handleAddExpense}
            className="mt-6 w-full md:w-auto
            px-6 py-3 rounded-xl
            bg-black text-white
            dark:bg-white dark:text-black
            font-medium
            hover:opacity-90 transition"
          >
            Add Expense
          </button>
        </div>

      </div>
    </div>
  );
};

export default AddExpense;