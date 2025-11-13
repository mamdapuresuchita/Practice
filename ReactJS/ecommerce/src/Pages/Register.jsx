import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
      <div class="login-container">
    <div class="login-box">
      <h2>Create Account 🛍️</h2>
      <form>
        <div class="input-group">
          <label for="name">Full Name</label>
          <input type="text" id="name" placeholder="Enter your full name" required />
        </div>

        <div class="input-group">
          <label for="email">Email Address</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>

        <div class="input-group">
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="Create a password" required />
        </div>

        <div class="input-group">
          <label for="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" placeholder="Confirm your password" required />
        </div>

        <button type="submit" class="login-btn">Sign Up</button>

        <p class="signup-text">
          Already have an account?
          <Link to="/login">Login</Link>
          
        </p>
      </form>
    </div>
  </div></>
  )
}

export default Register