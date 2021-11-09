import React, { useEffect, useState } from "react";
import SinglePost from "./SinglePost";
import "./App.css";

const UserPosts = (props) => {
  const [userPosts, setUserPosts] = useState(null);
  const [postsVisibility, setPostsVisibility] = useState(false);
  const getUsersPosts = async () => {
    let url = "https://jsonplaceholder.typicode.com/posts";
    try {
      let result = await fetch(url);
      return await result.json();
    } catch (error) {
      console.log(error);
    }
  }
  const togglePosts = async (id) => {
    userPosts ?? getUserPostsById(id);
    setPostsVisibility(!postsVisibility);
  };
  const getUserPostsById = async (id) => {
    let posts =  await getUsersPosts();
    setUserPosts(
      posts
        ?.filter(({ userId }) => userId === id)
        .map(({ userId, id, title, body }) => (
          <SinglePost
            key={id}
            postId={id}
            postUserId={userId}
            postTitle={title}
            postBody={body}
          />
        ))
    );
  };
  const styles = {
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    width: "50%",
  };
  return (
    <div>
      <button
        style={styles}
        className="users"
        onClick={() => togglePosts(props?.userId)}
      >
        {props?.userName}
      </button>
      {postsVisibility ? (
        <div id={`user${props?.userId}`}>{userPosts}</div>
      ) : null}
    </div>
  );
};

export default UserPosts;
