import React, { useState } from 'react'
import ThemeContext from './ThemeContext';


//{children} means it wraps the entire app
//ThemeContext.Provider makes darkMode and toggleTheme available to all components inside it.

const ThemeProvider = ({children}) => {

    const [darkMode,setDarkMode] = useState(false);
    const toggleTheme =()=>setDarkMode((prev)=>!prev); //This flips the current theme state. If dark mode is on, it turns it off, and vice-versa

  return (
    <ThemeContext.Provider value={{darkMode,toggleTheme}}>
    {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider