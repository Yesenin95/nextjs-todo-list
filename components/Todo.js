import React from "react";
import Title from "./Title";

export default function Todo() {
  const [text, setText] = React.useState("");
  const [list, setList] = React.useState([]);
  const [counter, setCounter] = React.useState(0);

  function delItembyID(id) {
    setList((old) => {
      const index = old.findIndex((item) => id === item.id);
      old.splice(index, 1);
      return [...old];
    });
  }

  function toggleCheckById(id) {
    setList((old) => {
      const index = old.findIndex((item) => id === item.id);
      old[index].checked = !old[index].checked;
      return [...old];
    });
  }

  function inputValue(evt) {
    setText(evt.target.value);
  }

  function addTask() {
    setList((old) => [...old, { id: counter, checked: false, str: text }]);
    setText("");
    setCounter((old) => old + 1);
  }

  function moveUp(id) {
    setList((old) => {
      const index = old.findIndex((item) => id === item.id);
      if (index === 0) {
        return old;
      } else {
        const item = old[index];
        old.splice(index, 1);
        old.splice(index - 1, 0, item);
        return [...old];
      }
    });
  }

  function moveDown(id) {
    setList((old) => {
      const index = old.findIndex((item) => id === item.id);
      if (index === old.length - 1) {
        return old;
      } else {
        const item = old[index];
        old.splice(index, 1);
        old.splice(index + 1, 0, item);
        return [...old];
      }
    });
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
      </main>
      <ol
        onClick={(evt) => {
          const redx = evt.target.closest(".red-x");
          if (redx?.dataset?.id) delItembyID(+redx.dataset.id);
          const checkbox = evt.target.closest("input[type=checkbox]");
          if (checkbox?.dataset?.id) toggleCheckById(+checkbox?.dataset?.id);
        }}
      >
        {list.map((el) => (
          <li key={el.id}>
            <div className="text">
              <input type="checkbox" checked={el.checked} data-id={el.id} />
              {el.str}
            </div>
            <div className="btns">
              <span data-id={el.id} className="red-x">
                x
              </span>
              <button className="moveUp" onClick={() => moveUp(el.id)}>
                Up
              </button>
              <button className="moveDown" onClick={() => moveDown(el.id)}>
                Down
              </button>
            </div>
          </li>
        ))}
      </ol>
      <button onClick={deleteChecked}>Удалить выполненые</button>
    </>
  );
}
