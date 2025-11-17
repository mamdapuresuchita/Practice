import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Login Clicked!\nEmail: ${email}`);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100"
         >
      
      <div className="card p-4 shadow-lg" style={{ width: "380px", borderRadius: "15px" ,background: "linear-gradient(135deg, #bc4e9c, #f80759)"}}>
        <h3 className="text-center mb-3 fw-bold">Welcome Back</h3>
        <p className="text-center text-muted mb-4">Sign in to continue</p>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className="form-control p-2"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control p-2"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-2 p-2">
            Login
          </button>

          <p className="text-center mt-3">
            Don't have an account? <Link to='/register' className="text-decoration-none fw-semibold" style={{color:"white"}}>Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
