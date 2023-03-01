import React from "react";
import Tasks from "./Tasks";
import Title from "./Title";

export default function Todo() {
  const [text, setText] = React.useState("");
  const [list, setList] = React.useState([]);
  const [counter, setCounter] = React.useState(0);

  function inputValue(evt) {
    setText(evt.target.value);
  }

  function addTask() {
    setList((old) => [...old, { id: counter, checked: false, str: text }]);
    setText("");
    setCounter((old) => old + 1);
  }

  function deleteChecked() {
    setList((old) => old.filter((item) => !item.checked));
  }

  return (
    <>
      <main className="main">
        <Title />
        <div>
          <input
            className="input"
            value={text}
            onInput={inputValue}
            placeholder="Введите задачу"
          />

          <button className="btnAdd" onClick={addTask}>
            Добавить
          </button>
        </div>
        <Tasks />
        <button onClick={deleteChecked}>Удалить выполненные</button>
      </main>
    </>
  );
}
