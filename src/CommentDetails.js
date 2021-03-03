import React from "react";

const CommentDetails = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img
            alt="avatar"
            src="https://source.unsplash.com/random"
            style={{ height: "35px", width: "35px" }}
          />
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata">
            <span className="date">Today ay 6:00PM</span>
          </div>
          <div className="text">Nice blog post!</div>
        </div>
      </div>
    </div>
  );
};

export default CommentDetails;
