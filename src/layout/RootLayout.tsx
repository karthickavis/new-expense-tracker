import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300'>
        <Navbar/>
        
        <main className='mt-2 p-2'>
           <Outlet/>
        </main>
    </div>
  )
}

export default RootLayout