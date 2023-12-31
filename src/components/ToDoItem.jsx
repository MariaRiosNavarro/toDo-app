import DeleteSvg from "./DeleteSvg";

const ToDoItem = ({ todo, setToDos }) => {
  function changeDone() {
    setToDos((prev) => {
      return prev.map((item) => {
        if (item.task === todo.task) {
          return { ...item, done: !item.done };
        }
        return item;
      });
    });
  }

  function deleteTask() {
    setToDos((prev) => {
      return prev.filter((item) => item.task !== todo.task);
    });
  }

  const dynamicalClassesArticle = `border-2 my-2 rounded-xl flex p-4 h-18 ${
    todo.done ? "bg-[#CDFAD5]" : ""
  } ${
    todo.priority === "high"
      ? todo.done
        ? "border-2 border-secondary"
        : "border-2 border-secondary"
      : todo.priority === "normal"
      ? todo.done
        ? "border-2 border-accent"
        : "border-2 border-accent"
      : todo.done
      ? "border-2 border-primary"
      : "border-2 border-primary"
  }`;

  const dynamicalClassesTaskText = `font-bold text-lg pl-[1rem] pb-4 
  ${todo.done ? "line-through" : ""} 
  ${todo.priority === "high" ? "text-secondary" : ""}
  ${todo.priority === "low" ? "text-primary" : ""}
  ${todo.priority === "normal" ? "text-accent" : ""} 
  }`;

  const dynamicalClassesBadge = `badge badge-outline 
  ${todo.priority === "high" ? "badge-secondary" : ""} 
  ${todo.priority === "low" ? "badge-primary" : ""}
  ${todo.priority === "normal" ? "badge-accent" : ""} `;

  return (
    <article onClick={changeDone} className={dynamicalClassesArticle}>
      <div className="flex flex-col w-[100%] ">
        <p className={dynamicalClassesTaskText}>{todo.task}</p>
        <div className="flex pl-[1rem] gap-[5rem]">
          <div
            className={
              todo.done ? "line-through text-gray-500" : "text-gray-500"
            }
          >
            <span className="block">Category: </span>
            <p className="badge badge-outline">{todo.category}</p>
          </div>
          <div
            className={
              todo.done ? "line-through text-gray-500" : "text-gray-500"
            }
          >
            <span className="block">Priority:</span>
            <p className={dynamicalClassesBadge}>{todo.priority}</p>
          </div>
        </div>
      </div>
      {todo.done && (
        <button onClick={deleteTask} className="fill-accent rounded-xl ml-auto">
          <DeleteSvg />
        </button>
      )}
    </article>
  );
};

export default ToDoItem;
