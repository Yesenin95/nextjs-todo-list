import React from "react";
export default function Tasks() {
  const [list, setList] = React.useState([]);

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

  return (
    <>
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
    </>
  );
}
