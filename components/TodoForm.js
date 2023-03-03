import React, { useState } from "react";
import Title from "./Title";

export default function TodoForm({ addTodo }) {
  const [title, setTitle] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAddTodo = () => {
    if (title) {
      addTodo({
        title,
        completed: false,
      });
      setTitle("");
    }
  };

  return (
    <>
      <Title/>

      <div className="todo-form">
        <input type="text" value={title} onChange={handleTitleChange} />
        <button className="add-todo" type="submit" onClick={handleAddTodo}>
          Add
        </button>
      </div>
    </>
  );
}
