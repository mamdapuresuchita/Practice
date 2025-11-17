import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center p-3"
      
    >
      <div className="card p-4 shadow-lg " style={{ width: "360px", borderRadius: "15px" ,
        background:"#f9baeaff",
     }}>
        <h3 className="text-center mb-3 fw-bold">Create Account</h3>
        <p className="text-center text-muted">Join StyleCart and start shopping!</p>

        <form>
          {/* Full Name */}
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Create password"
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm password"
            />
          </div>

          <button className="btn btn-dark w-100 mt-2">Register</button>
        </form>

        <p className="text-center mt-3">
          Already have an account?{" "}
          <Link to="/login" className="text-decoration-none fw-bold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
