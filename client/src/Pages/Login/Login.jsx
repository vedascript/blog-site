import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Context } from "../../context/Context";
import "./Login.css";

export const Login = () => {
  const userRef = useRef(null);
  const passRef = useRef(null);
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:5000/auth/login", {
        username: userRef.current.value,
        password: passRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginform">
        <label>Username</label>
        <input type="text" placeholder="Enter your username" ref={userRef} />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          ref={passRef}
        />

        <button
          className="loginButton"
          type="submit"
          onClick={handleSubmit}
          disabled={isFetching}
        >
          Login
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
};
