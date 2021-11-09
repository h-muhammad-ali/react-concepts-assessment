import React, { useState } from "react";
import UserPosts from "./UserPosts";
import './App.css';

const Body = () => {
  const [users, setUsers] = useState(null);
  const [userButtons, setUserButtons] = useState(null);
  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  };
  const handleClick = async () => {
    users ?? getUsers();
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
