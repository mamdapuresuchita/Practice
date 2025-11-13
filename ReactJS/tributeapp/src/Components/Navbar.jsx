import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

const Navbar = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);


  const gradientStyle ={
    background : darkMode ? "linear-gradient(90deg, #0f2027, #203a43, #2c5364)":  "linear-gradient(90deg, #3a7bd5, #3a6073)",
    color: darkMode? "white" :"black"
    
  }
  return (
    <div>
      <nav className="navbar shadow-lg p-3 mb-5 " style={gradientStyle} >
        <div className="container-fluid d-flex align-items-center ">
          <div className="name mx-auto">
          <h3 style={{fontSize:"40px"}}>Dr. A.P.J. Abdul Kalam</h3>
          <p className="text-center" style={{fontSize:"20px"}}>"Missile Man of India"</p>
          </div>
          <div/>
            
         <button className="btn btn-outline-warning" onClick={toggleTheme}>
            {darkMode?"Light Mode": "Dark Mode"}
         </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
