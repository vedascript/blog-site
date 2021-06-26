import React from "react";
import "./Post.css";

export const Post = () => {
  return (
    <div className="post">
      <img className="postImg" src="https://bit.ly/3vVaHXz" alt="postImg" />

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">web dev</span>
          <span className="postCat">react</span>
        </div>
        <span className="postTitle">
          Lorenz lorem ipsum lorem ipsum dolor sit am
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDescription">
        Lorenz lorem ipsum lorem Lorenz lorem ipsum lorem Lorenz lorem ipsum
        lorem Lorenz lorem ipsum lorem Lorenz lorem ipsum lorem Lorenz lorem
        ipsum lorem Lorenz lorem ipsum lorem ipsum lorem Lorenz lorem ipsum
        loremipsum lorem Lorenz lorem ipsum loremipsum lorem Lorenz lorem ipsum
        loremipsum lorem Lorenz lorem ipsum loremipsum lorem Lorenz lorem ipsum
        loremipsum lorem Lorenz lorem ipsum loremipsum lorem Lorenz lorem ipsum
        loremipsum lorem Lorenz lorem ipsum loremipsum lorem Lorenz lorem ipsum
        loremipsum lorem Lorenz lorem ipsum lorem
      </p>
    </div>
  );
};
