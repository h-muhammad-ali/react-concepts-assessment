import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Comments from "./Comments";
import './App.css';

export default function Body() {
  const [users, setUsers] = useState([]);
  const [userButtons, setUserButtons] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  const displayUsers = async () => {
    setUserButtons(
      users.map(({ name, id }) => (
        <Comments key={id} userName={name} userId={id} />
      ))
    );
  };
  return (
    <div>
      <div className="container">
        {userButtons ?? (
          <button id="mainButton" onClick={displayUsers}>
            Get Users List
          </button>
        )}
      </div>
    </div>
  );
}
