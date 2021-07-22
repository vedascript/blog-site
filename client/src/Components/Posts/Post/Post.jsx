import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";

export const Post = ({ post }) => {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      {post.photo && (
        <img className="postImg" src={PF + post.photo} alt="postImg" />
      )}

      <div className="postInfo">
        <Link to={`post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <div className="postCats">
          {post?.categories.map((cat) => (
            <span key={cat} className="postCat">
              {cat}
            </span>
          ))}
        </div>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toLocaleString()}
        </span>
      </div>
      <p className="postDescription">{post.desc}</p>
    </div>
  );
};
