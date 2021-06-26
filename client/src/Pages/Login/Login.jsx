import React from "react";
import "./Login.css";

export const Login = () => {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginform">
        <label>Email</label>
        <input type="text" placeholder="Enter your email" />
        <label>Password</label>
        <input type="password" placeholder="Enter your password" />

        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">Register</button>
    </div>
  );
};
