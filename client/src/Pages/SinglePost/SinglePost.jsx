import React from "react";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { SinglePostComp } from "../../Components/SinglePostComp/SinglePostComp";
import "./SinglePost.css";

export const SinglePost = () => {
  return (
    <div className="single">
      <SinglePostComp />
      <Sidebar />
    </div>
  );
};
