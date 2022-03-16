import React, { useState, useEffect } from "react";
import ToDoItem from "./ToDoImte";

function ToDoList({todos, onDelete, onChange}) {
  return (
    <div>
      {
      todos.map((todo) => {
       return <ToDoItem  
       key={todo.id} 
       todo={todo}
       onChange={onChange}
       onDelete={onDelete}
       />
      })}
    </div>
  );
}

export default ToDoList;
