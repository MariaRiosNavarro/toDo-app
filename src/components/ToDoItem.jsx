import { useState } from "react";

const ToDoItem = ({ todo, setToDos }) => {
  const [done, setDone] = useState(todo.done);

  function changeDone() {
    todo.done = !todo.done;
    setDone(todo.done);
  }

  function deleteTask() {
    setToDos((prev) => {
      return prev.filter((item) => item.task !== todo.task);
    });
  }

  return (
    <article
      onClick={changeDone}
      className={"border border-green-500 p-4 h-16 my-2 rounded-xl flex"}
    >
      <p className={todo.done ? "line-through" : ""}>{todo.task}</p>

      {done && (
        <button
          onClick={deleteTask}
          className="bg-red-500 color-white rounded-xl ml-auto w-14 "
        >
          X
        </button>
      )}
    </article>
  );
};

export default ToDoItem;
