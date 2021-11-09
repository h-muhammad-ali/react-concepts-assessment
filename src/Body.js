import React, { useState } from "react";
import UserPosts from "./UserPosts";
import './App.css';

const Body = () => {
  const [userButtons, setUserButtons] = useState(null);
  const getUsers = async () => {
    let url = "https://jsonplaceholder.typicode.com/users";
    try {
      let result = await fetch(url);
      return await result.json();
    } catch (error) {
      console.log(error);
    }
  }
  const handleClick = async () => {
    let users = await getUsers();
    setUserButtons(
      users?.map(({ name, id }) => (
        <UserPosts key={id} userName={name} userId={id} />
      ))
    );
  };
  return (
    <div>
      <div className="container">
        {userButtons ?? (
          <button id="mainButton" onClick={handleClick}>
            Get Users List
          </button>
        )}
      </div>
    </div>
  );
}

export default Body;
