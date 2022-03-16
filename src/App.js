import React, { useState, useEffect } from "react";
import "./App.css";
import ToDoFooter from "./ToDoFooter";
import ToDoForm from "./ToDoForm";
import ToDoList from "./toDoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      text: "Learn JS",
      isCompleted: false,
    },
    {
      id: Math.random(),
      text: "Learn CSS",
      isCompleted: false,
    },
    {
      id: Math.random(),
      text: "Learn React",
      isCompleted: false,
    },
  ]);

  return (
    <div className="App">
      <ToDoForm
        onAdd={(text) => {
          setTodos([
            ...todos,
            {
              id: Math.random(),
              text: text,
              isCompleted: false,
            },
          ]);
        }}
      />
      <ToDoList
        todos={todos}
        onChange={(newToDo) => {
          setTodos(
            todos.map((todo) => {
              if (todo.id === newToDo.id) {
                return newToDo;
              }
              return todo;
            })
          );
        }}
        onDelete={(todo) => {
          setTodos(todos.filter((t) => t.id !== todo.id));
        }}
      />
      <ToDoFooter
        todos={todos}
        onComleted={() => {
          setTodos(todos.filter((todo) => !todo.isCompleted));
        }}
      />
    </div>
  );
}

export default App;
