import {useState,useEffect} from 'react'
import { Sun,Moon } from 'lucide-react'

const ThemeToggle = () => {

    const [darkMode,setDarkMode]=useState<boolean>(false)

    useEffect(()=>{
         const savedTheme=localStorage.getItem("theme");

         if(savedTheme==="dark"){
            document.documentElement.classList.add("dark")
            setDarkMode(true)
         }
    },[])

    const toggleTheme=()=>{
        const html=document.documentElement;

        html.classList.toggle("dark")
        const isDark=html.classList.contains("dark");

        setDarkMode(isDark);
        localStorage.setItem('theme',isDark?"dark":"light")
    }
  return (
    <button onClick={toggleTheme}>
        {darkMode?(
            <Sun  size={20}/>
        ):(
            <Moon size={20}/>
        )}

    </button>
  )
}

export default ThemeToggle