import React from "react";
import "./App.css";

const SinglePost = (props) => {
  const styles = {
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%",
  };
  return (
    <div style={styles} id={`postByUser${props?.id}`} className="posts">
      <pre>
        Post ID: {props?.postId} User ID: {props?.postUserId}
      </pre>
      <p>Post Title: {props?.postTitle}</p>
      <p>Post Body: {props?.postBody}</p>
      <hr />
    </div>
  );
};
export default SinglePost;
