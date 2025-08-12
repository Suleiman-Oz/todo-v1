import React, { useState } from "react";
import TodoItems from './todoItems'

const Todos = () => {
    const [todos, setTodos] = useState([])
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const handleAddTodo = () => {
      if (title.trim() && desc.trim()) {
        setTodos([
          ...todos,
          {
            id: Date.now(),
            title: title.trim(),
            desc: desc.trim(),
            done: false,
          },
        ]);

        setTitle("");
        setDesc("");
      } else {
        alert("Title and description are required"); // Show an alert if either field is missing.
      }
    };

    const handleDeleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
    const handleToggleDone = (id) => {
        setTodos(todos.map((todo) => (todo.id === id ? {...todo, done: !todo.done} : todo)));
    }
  return (
    <div>
      <h1>ToDo App</h1>
      <input
        style={{ width: "100%" }}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Add Title"
      />
      <input
        style={{ width: "100%", margin: "10px 0", }}
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        type="text"
        placeholder="Add Description"
      />
      <button onClick={handleAddTodo}>Add Task</button>
      {todos.length === 0 ? (
        <p>No Todos Here</p>
      ) : (
        todos.map((todo) => (
          <TodoItems
            key={todo.id}
            todo={todo}
            onDelete={handleDeleteTodo}
            onToggleDone={handleToggleDone}
          />
        ))
      )}
    </div>
  );
}

export default Todos