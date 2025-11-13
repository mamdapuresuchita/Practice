import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <div className="navLogo">
       <Link to="/"> <img src={logo} alt="" style={{ height: "45px" ,marginLeft:"20px" }}></img></Link>
      </div>

      <ul className="navMenu">
        <li
          onClick={() => {
            setMenu("home");
          }}
        >
          <Link to="/" style={{ color: "black" }}>
            Home
          </Link>
          {menu === "home" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link to="/men" style={{ color: "black" }}>
            Men
          </Link>
          {menu === "men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link to="/women" style={{ color: "black" }}>
            Women
          </Link>
          {menu === "women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids" style={{ color: "black" }}>
            Kids
          </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>

      <div className="rightNav">
        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/cart">
          <FaShoppingCart size={26} color="black" />
        </Link>
        <div className="navCartCount">0</div>
      </div>
    </div>
  );
};

export default Navbar;
