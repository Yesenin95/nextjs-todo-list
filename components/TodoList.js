import React, { useCallback } from "react";

export default function TodoList({
  todos,
  deleteTodo,
  deleteCompleted,
  moveTodoUp,
  moveTodoDown,
  toggleCompleted,
}) {
  const handleDeleteTodo = useCallback(
    (index) => {
      deleteTodo(index);
    },
    [deleteTodo]
  );

  const handleDeleteCompleted = useCallback(() => {
    deleteCompleted();
  }, [deleteCompleted]);

  const handleMoveTodoUp = useCallback(
    (index) => {
      moveTodoUp(index);
    },
    [moveTodoUp]
  );

  const handleMoveTodoDown = useCallback(
    (index) => {
      moveTodoDown(index);
    },
    [moveTodoDown]
  );

  const handleToggleCompleted = useCallback(
    (index) => {
      toggleCompleted(index);
    },
    [toggleCompleted]
  );
  console.count("TodoList re-renders");
  return (
    <div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              className="complete-todo"
              checked={todo.completed}
              onChange={() => handleToggleCompleted(index)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.title}
            </span>
            <div className="buttons">
              <button
                className="delete-todo"
                onClick={() => handleDeleteTodo(index)}
              >
                Delete
              </button>
              <button
                className="move-up"
                onClick={() => handleMoveTodoUp(index)}
              >
                Move Up
              </button>
              <button
                className="move-down"
                onClick={() => handleMoveTodoDown(index)}
              >
                Move Down
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button className="delete-selected" onClick={handleDeleteCompleted}>
        Delete Completed
      </button>
    </div>
  );
}
