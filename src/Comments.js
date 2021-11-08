import React, { useEffect, useState } from "react";
import SingleComment from "./SingleComment";
import $ from 'jquery';
import './App.css';

export default function Comments(props) {
  const [posts, setPosts] = useState([]);
  const [userPosts, setUserPosts] = useState(null);
  const [postsVisibility, setPostsVisibility] = useState(false);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);
  const togglePosts = async (id) => {
    userPosts ?? getUserPostsById(id);
    postsVisibility?setPostsVisibility(false):setPostsVisibility(true);
  };
  const getUserPostsById = async (id) => {
    setUserPosts(
      posts
        .filter(({ userId }) => userId === id)
        .map(({ userId, id, title, body }) => (
          <SingleComment
            key={id}
            postId={id}
            postUserId={userId}
            postTitle={title}
            postBody={body}
          />
        ))
    );
  };
  return (
    <div>
      <button
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          display: "block",
          width: "50%",
        }}
        className="users"
        onClick={() => togglePosts(props.userId)}
      >
        {props.userName}
      </button>
      {postsVisibility?<div id={`user${props.userId}`}>{userPosts}</div>:null}
    </div>
  );
}
