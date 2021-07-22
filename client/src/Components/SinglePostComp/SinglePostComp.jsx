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
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:5000/post/${id}`).then((res) => {
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    });
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

  const handleUpdate = async () => {
    try {
      await axios.put("http://localhost:5000/post/" + id, {
        username: user.username,
        title,
        desc,
      });
      window.location.reload("/");
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

        {updateMode ? (
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="singlePostTitleInput"
            autoFocus={true}
          />
        ) : (
          <h1 className="singlePostTitle">
            {post.title}
            {post.username === user.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}

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
        {updateMode ? (
          <textarea
            value={desc}
            className="singlePostDescInput"
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{post.desc}</p>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
};
