import { useState } from 'react';
import React  from 'react'
import ThemeContext from './ThemeContext';

const ThemeProvider = ({children}) => {

    
    const [darkMode, setDarkMode] =useState(false);

    const toggleTheme =()=> setDarkMode((prev) =>!prev);

  return (
    <ThemeContext.Provider value={{darkMode,toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider