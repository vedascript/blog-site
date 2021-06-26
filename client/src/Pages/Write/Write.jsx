import React from "react";
import "./Write.css";

export const Write = () => {
  return (
    <div className="write">
      <img className="writeImg" src="" alt="writeImg" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus-square"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Blog Title"
            className="writeInput"
            autoFocus
          />
        </div>
        <div className="writeFormGroup">
          <textArea
            placeholder="Write your thoughts"
            type="text"
            className="writeInput writeText"
          ></textArea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
};
