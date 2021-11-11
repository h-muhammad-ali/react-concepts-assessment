import React from "react";
import "./App.css";

export default function Header() {
  const styles = {
    textDecoration: "none",
    color: "black",
  };
  return (
    <div>
      <h1>
        <a style={styles} href="index.html">
          React Concepts Assesment
        </a>
      </h1>
    </div>
  );
}
