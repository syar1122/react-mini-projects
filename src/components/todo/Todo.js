import React, { useState } from "react";
import "./todo.css";

export default function Todo({ todo, index, comTodo, delTodo }) {
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);
  return (
    <li
      className={isCompleted ? "completed collection-item" : "collection-item"}
    >
      <div>
        <label>
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={(e) => {
              setIsCompleted(!isCompleted);
              comTodo(index);
            }}
          />
          <span></span>
        </label>
        <span>{todo.todo}</span>

        <a
          className="secondary-content"
          onClick={(e) => delTodo(index)}
          style={{ cursor: "pointer" }}
        >
          <i className="red-text material-icons">delete</i>
        </a>
      </div>
    </li>
  );
}
