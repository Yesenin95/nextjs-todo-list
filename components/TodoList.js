import React from "react";

export default function TodoList({
  todos,
  deleteTodo,
  deleteCompleted,
  moveTodoUp,
  moveTodoDown,
  toggleCompleted,
}) {
  return (
    <div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              className="complete-todo"
              checked={todo.completed}
              onChange={() => toggleCompleted(index)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.title}
            </span>
            <div className="buttons">
              <button className="delete-todo" onClick={() => deleteTodo(index)}>
                Delete
              </button>
              <button className="move-up" onClick={() => moveTodoUp(index)}>
                Move Up
              </button>
              <button className="move-down" onClick={() => moveTodoDown(index)}>
                Move Down
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button className="delete-selected" onClick={() => deleteCompleted()}>
        Delete Completed
      </button>
    </div>
  );
}
