import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import "./SinglePostComp.css";
import { Link } from "react-router-dom";

export const SinglePostComp = () => {
  const id = useParams().id;
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";

  useEffect(() => {
    axios
      .get(`http://localhost:5000/post/${id}`)
      .then((res) => setPost(res.data));
  }, [id]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={PF + post.photo} alt="" className="singlePostImg" />
        )}

        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="author">
            Author : &nbsp;
            <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>{" "}
            </Link>
          </span>
          <span className="date">
            {new Date(post.createdAt).toLocaleString()}
          </span>
        </div>
        <p className="singlePostDesc">{post.desc}</p>
      </div>
    </div>
  );
};
