import React from "react";
import "./Sidebar.css";

export const Sidebar = () => {
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
          <li className="sideBarListItem">Javascript</li>
          <li className="sideBarListItem">Html</li>
          <li className="sideBarListItem">React</li>
          <li className="sideBarListItem">Node</li>
          <li className="sideBarListItem">Mongodb</li>
          <li className="sideBarListItem">Nextjs</li>
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
