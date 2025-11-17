import React, { useContext, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";

// import logo from "../assets/logo.png"
import ThemeContext from "../hooks/ThemeContext";
import { Link } from "react-router-dom";
import CartContext from "../hooks/CartContext";
import "./Navbar.css"


const Navbar = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [menu, setMenu] = useState("home");
  const { cart } = useContext(CartContext);
const numberOfItems = cart.reduce((sum, item) => sum + item.qty, 0);
// const { addToCart } = useContext(CartContext);
// // addToCart(product);



  const gradientStyle = {
    background: darkMode
      ? "linear-gradient(90deg, #0f2027, #203a43, #2c5364)"
      : "linear-gradient(90deg, #654ea3, #eaafc8)",
    color: darkMode ? "white" : "black",
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={gradientStyle}>
      <div className="container-fluid d-flex ">
        {/* <img src={logo} style={{width:"120px"}}></img> */}
        <div className="logo d-flex justify-content-between gap-3">
          <GiClothes size={35} style={{ color: "#FFD54F" }} />
          <p style={{ color: "#FFD54F", fontSize: "25px" }}>StyleCart</p>
        </div>
        <div className="menu d-flex align-content-center mt-3 ">
          <ul className="d-flex justify-content-around gap-5 ">
            <li
              onClick={() => {
                setMenu("home");
              }}
            >
              <Link to="/" className="navLink">
                Home
              </Link>
              {menu === "home" ? <hr /> : <></>}
            </li>
            <li
              onClick={() => {
                setMenu("men");
              }}
            >
              <Link to="/" className="navLink">
                Men
              </Link>
              {menu === "men" ? <hr /> : <></>}
            </li>
            <li
              onClick={() => {
                setMenu("women");
              }}
            >
              <Link to="/" className="navLink">
                Women
              </Link>
              {menu === "women" ? <hr /> : <></>}
            </li>
            <li
              onClick={() => {
                setMenu("kids");
              }}
            >
              <Link to="/" className="navLink">
                Kids
              </Link>
              {menu === "kids" ? <hr /> : <></>}
            </li>
          </ul>
        </div>
        <div className="rightNav d-flex gap-4 align-content-center">
          <Link to="/login"><button className="btn btn-warning rounded-pill">Login</button></Link>
          <div className="position-relative">
  <Link to='/cart'>
    <FaShoppingCart style={{color:"black"}} size={28} className="mt-1" />
    {numberOfItems > 0 && (
      <span className="cartNumber">{numberOfItems}</span>
    )}
  </Link>
</div>
          <div
            className="themeToggle btn btn-warning rounded-5 "
            onClick={toggleTheme}
          >
            {darkMode ? "☀️ " : "🌙 "}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
