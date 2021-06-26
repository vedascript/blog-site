import React from "react";
import { Link } from "react-router-dom";

import "./Register.css";

export const Register = () => {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerform">
        <label>Username</label>
        <input type="text" placeholder="Enter your username" />
        <label>Email</label>
        <input type="text" placeholder="Enter your email" />
        <label>Password</label>
        <input type="password" placeholder="Enter your password" />

        <button className="registerButton">
          <Link className="link" to="/register">
            Register
          </Link>
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
    </div>
  );
};
