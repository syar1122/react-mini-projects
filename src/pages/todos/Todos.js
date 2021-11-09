import React, { useState } from "react";
import Todo from "../../components/todo/Todo";
import "./todos.css";

export default function Todos() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    { todo: "reading books", isCompleted: false },
  ]);

  let toggleTodo = (index) => {
    let updateTodo = todos[index];
    updateTodo.isCompleted = !updateTodo.isCompleted;
  };

  let deleteTodo = (index) => {
    todos.splice(index, 1);
    setTodos([...todos]);
  };

  let addTodo = () => {
    let newTodo = { todo: todo, isCompleted: false };
    let newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todo) addTodo();
    else {
      alert("empty");
    }

    setTodo("");
  };
  return (
    <div className="container">
      <ul className="collection with-header hoverable">
        <li className="collection-header">
          <form className="row" onSubmit={handleSubmit}>
            <div className="input-field col s12">
              <input
                id="todos"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
              ></input>
              <label forhtml="todos">Todos</label>
              <span
                className="helper-text"
                data-error="wrong"
                data-success="right"
              >
                Enter to add
              </span>
            </div>
          </form>
        </li>
        {todos.map((todo, index) => {
          return (
            <Todo
              todo={todo}
              index={index}
              key={index}
              comTodo={toggleTodo}
              delTodo={deleteTodo}
            />
          );
        })}
      </ul>
    </div>
  );
}
