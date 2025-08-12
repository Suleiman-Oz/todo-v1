import React from 'react'
import './todoitem.css'

const TodoItems = ({todo, onDelete, onToggleDone}) => {
  return (
    <div>
      <ul
        style={{
          margin: "10px 0",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          listStyleType: "none",
          textDecoration: todo.done ? "line-through" : "none",
        }}
      >
        <li>{todo.title}</li>
        <li>{todo.desc}</li>
      </ul>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
      <button onClick={() => onToggleDone(todo.id)}>
        Mark as
        {todo.done ? "Undone" : "Done"}{" "}
      </button>
    </div>
  );
}

export default TodoItems