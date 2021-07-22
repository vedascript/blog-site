import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import "./SinglePostComp.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export const SinglePostComp = () => {
  const id = useParams().id;
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/post/${id}`)
      .then((res) => setPost(res.data));
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete("http://localhost:5000/post/" + id, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={PF + post.photo} alt="" className="singlePostImg" />
        )}

        <h1 className="singlePostTitle">
          {post.title}
          {post.username === user.username && (
            <div className="singlePostEdit">
              <i className="singlePostIcon far fa-edit"></i>
              <i
                className="singlePostIcon far fa-trash-alt"
                onClick={handleDelete}
              ></i>
            </div>
          )}
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
