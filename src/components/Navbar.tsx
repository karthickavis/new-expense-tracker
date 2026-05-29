import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  Landmark,
  Wallet,
  Plus,
} from "lucide-react";

import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const navLinkStyle = ({ isActive }) =>
    `flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300
    ${
      isActive
        ? "bg-blue-500 text-white shadow-md"
        : "hover:bg-gray-100 dark:hover:bg-gray-800"
    }`;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-950/80 text-black dark:text-white border-b border-gray-200 dark:border-gray-800 shadow-sm">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-blue-500 text-white p-2 rounded-2xl shadow-lg">
            <Wallet size={22} />
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-bold tracking-wider">
              Expense Tracker
            </h2>

            <p className="text-xs text-gray-500 dark:text-gray-400">
              Manage your money
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-3">

          <NavLink to="/" className={navLinkStyle}>
            <Home size={20} />
            Home
          </NavLink>
           <NavLink to="/addexpense" className={navLinkStyle}>
            <Plus size={20} />
            Add Expense
          </NavLink>

          <NavLink to="/expenses" className={navLinkStyle}>
            <Landmark size={20} />
            Expenses
          </NavLink>

          {/* Theme Toggle */}
          <div className="ml-2 mt-2">
            <ThemeToggle />
          </div>

        </div>

        {/* Mobile Right Side */}
        <div className="flex items-center gap-3 md:hidden">

          <ThemeToggle />

          <button
            className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 animate-in slide-in-from-top duration-300">

          <div className="flex flex-col gap-3 bg-gray-50 dark:bg-gray-900 p-4 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800">

            <NavLink
              to="/"
              className={navLinkStyle}
              onClick={() => setOpen(false)}
            >
              <Home size={20} />
              Home
            </NavLink>
             <NavLink
              to="/addexpense"
              className={navLinkStyle}
              onClick={() => setOpen(false)}
            >
              <Plus size={20} />
              Add Expense
            </NavLink>

            <NavLink
              to="/expenses"
              className={navLinkStyle}
              onClick={() => setOpen(false)}
            >
              <Landmark size={20} />
              Expenses
            </NavLink>

          </div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;