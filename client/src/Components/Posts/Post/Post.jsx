import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";

export const Post = ({ post }) => {
  return (
    <div className="post">
      {post.photo && (
        <img className="postImg" src="https://bit.ly/3vVaHXz" alt="postImg" />
      )}

      <div className="postInfo">
        <div className="postCats">
          {post?.categories.map((cat) => (
            <span className="postCat">{cat}</span>
          ))}
        </div>
        <Link to={`post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toLocaleString()}
        </span>
      </div>
      <p className="postDescription">{post.desc}</p>
    </div>
  );
};
