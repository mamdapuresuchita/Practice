import React from 'react'
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Login = () => {
  return (
    <>
    <div class="login-container">
    <div class="login-box">
      
      <form>
        <div class="input-group">
          <label for="email">Email Address</label>
          <input type="email" id="email" placeholder="Enter your email" required/>
        </div>

        <div class="input-group">
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" required/>
        </div>

        <button type="submit" class="login-btn">Login</button>

        <p class="signup-text">
          Don’t have an account?
          <Link to="/register">Sign Up</Link>
          
        </p>
      </form>
    </div>
  </div></>
  
  
  );
};

export default Login