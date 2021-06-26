import React from "react";
import "./SinglePostComp.css";

export const SinglePostComp = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="https://bit.ly/3deRABa" alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
          Lorenz lorem ipsum lorem Lorenz lorem ipsum lorem Lorenz lorem ipsum
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="author">
            Author: <b>Vedansh</b>
          </span>
          <span className="date">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit am lorem lorem ipsum Lorem ipsum dolor sit am
          Lorem ipsum dolor sit am lorem lorem ipsum Lorem ipsum dolor sit am
          Lorem ipsum dolor sit am lorem lorem ipsum lorem lorem ipsum lorem
          lorem ipsum Lorem ipsum dolor sit am lorem lorem ipsum Lorem ipsum
          dolor sit am Lorem ipsum dolor sit am lorem lorem ipsum Lorem ipsum
          dolor sit am Lorem ipsum dolor sit am lorem lorem ipsum lorem lorem
          ipsum lorem lorem ipsum Lorem ipsum dolor sit am lorem lorem ipsum
          Lorem ipsum dolor sit am Lorem ipsum dolor sit am lorem lorem ipsum
          Lorem ipsum dolor sit am Lorem ipsum dolor sit am lorem lorem ipsum
          lorem lorem ipsum lorem lorem ipsum
        </p>
      </div>
    </div>
  );
};
