import React, { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "../../Components/Header/Header";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { Posts } from "../../Components/Posts/Posts";
import "./Home.css";

export const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/post").then((res) => setPosts(res.data));
  }, []);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
};
