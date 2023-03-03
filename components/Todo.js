import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

export default function Todo(){
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const deleteCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const moveTodoUp = (index) => {
    if (index > 0) {
      const newTodos = [...todos];
      const temp = newTodos[index];
      newTodos[index] = newTodos[index - 1];
      newTodos[index - 1] = temp;
      setTodos(newTodos);
    }
  };

  const moveTodoDown = (index) => {
    if (index < todos.length - 1) {
      const newTodos = [...todos];
      const temp = newTodos[index];
      newTodos[index] = newTodos[index + 1];
      newTodos[index + 1] = temp;
      setTodos(newTodos);
    }
  };
  const toggleCompleted = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div>
      
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        deleteCompleted={deleteCompleted}
        moveTodoUp={moveTodoUp}
        moveTodoDown={moveTodoDown}
        toggleCompleted={toggleCompleted}
      />
    </div>
  );
};

