import React from "react";
import { Header } from "../../Components/Header/Header";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { Posts } from "../../Components/Posts/Posts";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
};
