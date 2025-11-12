import React from "react";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg   shadow-sm"
      style={{ background: "linear-gradient(90deg, #11998e 0%, #38ef7d 100%)" }}
    >
      <div className="container-fluid">
        <a
          className="navbar-brand fw-bold fs-3"
          href="#"
          style={{ color: "white" }}
        >
          Quiz App
        </a>
 
      </div>
    </nav>
  );
};

export default Navbar;
