
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import Home from './pages/Home'
import Expenses from './pages/Expenses'
import NotFound from './pages/NotFound'

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
        path:"*",
        element:<NotFound/>
      }
    ]

  }
])
function App() {
 
    return (
    <RouterProvider router={router}/>
  )
}

export default App
