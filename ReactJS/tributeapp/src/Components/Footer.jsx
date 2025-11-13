import React, { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext'

const Footer = () => {

  const{ darkMode} =useContext(ThemeContext);

    const gradientStyle ={
    background : darkMode ? "linear-gradient(90deg, #0f2027, #203a43, #2c5364)":  "linear-gradient(90deg, #7aa6e8ff, #5b869cff)",
    color: darkMode? "white" :"black"
    
  }

  return (
    <footer className="text-center p-3 " style={gradientStyle}>
    <p>Made with ❤️ in memory of Dr. A.P.J. Abdul Kalam | React Tribute App</p>
  </footer>
  )
}

export default Footer