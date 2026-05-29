
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import Home from './pages/Home'
import Expenses from './pages/Expenses'
import NotFound from './pages/NotFound'
import { ExpenseProvider } from './context/ExpenseProvider'
import { Toaster } from 'react-hot-toast'
import AddExpense from './components/AddExpense'


const router=createBrowserRouter([
  {
    path:"/",
    element:<RootLayout/>,
    children:[
      {
        index:true,
        element:<Home/>,
      },
      {
        path:"expenses",
        element:<Expenses/>,
      },
      {
        path:"addexpense",
        element:<AddExpense/>
      },
      {
        path:"*",
        element:<NotFound/>
      }
    ]

  }
])
function App() {
 
    return (
      <ExpenseProvider>
        <Toaster position="top-right"/>
 <RouterProvider router={router}/>
      </ExpenseProvider>
   
  )
}

export default App
