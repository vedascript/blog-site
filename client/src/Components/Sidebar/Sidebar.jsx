import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Sidebar.css";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/cat")
      .then((res) => setCats(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          className="sidebarImg"
          src="https://bit.ly/3qum5sd"
          alt="sidebarImg"
        />
        <p className="text">
          lorem ipsum dolor sit am lorem lorem ipsum lorem ipsum dolor sit am
          lorem lorem ipsum lorem ipsum dolor sit am lorem lorem ipsum lorem
          ipsum dolor sit am lorem lorem ipsum
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((cat) => (
            <Link to={`/?cat=${cat}`} className="link">
              <li className="sideBarListItem">{cat}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="socialContainer">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
};
