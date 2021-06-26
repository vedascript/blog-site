import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="headerTitle">
        <span className="headerTitlesm">React & Node</span>
        <span className="headerTitlelg">Blog</span>
      </div>
      <img className="headerImg" src="https://bit.ly/3hbTNib" alt="headerImg" />
      <h1>header</h1>
    </div>
  );
};
