import React from "react";
import { useNavigate } from "react-router";
import "./home.css";

export default function Home() {
  let navigate = useNavigate();
  let randomNav = () => {
    let routes = ["/dogs", "/todos", "/quotes"];
    let randIndex = Math.floor(Math.random() * (3 - 0) + 0);
    console.log(routes[randIndex]);
    navigate(routes[randIndex]);
  };
  return (
    <div className="container">
      <div>
        <h1>
          There is nothing in home page got to
          <span onClick={randomNav} style={{ cursor: "pointer" }}>
            {" "}
            RANDOM{" "}
          </span>{" "}
          page in the web
        </h1>
      </div>
    </div>
  );
}
