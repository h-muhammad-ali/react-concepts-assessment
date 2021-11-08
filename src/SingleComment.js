import React from "react";
import './App.css';

export default function (props) {
  return (
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          width: "50%",
        }}
        id={`postByUser${props.id}`}
        className="posts"
      >
        <pre>
          Post ID: {props.postId}       User ID: {props.postUserId}
        </pre>
        <p>Post Title: {props.postTitle}</p>
        <p>Post Body: {props.postBody}</p>
        <hr/>
      </div>
  );
}
