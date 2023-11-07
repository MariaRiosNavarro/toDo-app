// import DeleteSvg from "./DeleteSvg";

// const ToDoItem = ({ todo, setToDos }) => {
//   function changeDone() {
//     setToDos((prev) => {
//       return prev.map((item) => {
//         if (item.task === todo.task) {
//           return { ...item, done: !item.done };
//         }
//         return item;
//       });
//     });
//   }

//   function deleteTask() {
//     setToDos((prev) => {
//       return prev.filter((item) => item.task !== todo.task);
//     });
//   }

//   return (
//     <article
//       onClick={changeDone}
//       className={
//         (todo.priority === "normal" && todo.done
//           ? "bg-green-300 border-2 border-accent my-2 rounded-xl flex p-4 h-18"
//           : "border-2 border-accent my-2 rounded-xl flex p-4 h-18") +
//         (todo.priority === "hight" && todo.done
//           ? "border-2 border-secundary my-2 rounded-xl flex p-4 h-18"
//           : "border-2 border-secundary my-2 rounded-xl flex p-4 h-18") +
//         (todo.priority === "low" && todo.done
//           ? "border-2 border-primary my-2 rounded-xl flex p-4 h-18"
//           : "border-2 border-primary my-2 rounded-xl flex p-4 h-18")
//       }
//     >
//       <div className="flex flex-col  w-[100%] ">
//         <p
//           className={
//             todo.done ? "line-through text-center" : "text-center font-bold "
//           }
//         >
//           {todo.task}
//         </p>
//         <div className={"flex pl-[1rem] gap-[5rem] "}>
//           <p
//             className={
//               todo.done ? "line-through text-gray-500 " : " text-gray-500"
//             }
//           >
//             Category:
//             {todo.category}
//           </p>
//           <p
//             className={
//               todo.done ? "line-through  text-gray-500" : " text-gray-500"
//             }
//           >
//             Priority:
//             {todo.priority}
//           </p>
//         </div>
//       </div>
//       {todo.done && (
//         <button
//           onClick={deleteTask}
//           className="fill-accent rounded-xl ml-auto "
//         >
//           <DeleteSvg />
//         </button>
//       )}
//     </article>
//   );
// };

// export default ToDoItem;

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

  const itemClasses = `border-2 my-2 rounded-xl flex p-4 h-18 ${
    todo.done ? "bg-green-300" : ""
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

  return (
    <article onClick={changeDone} className={itemClasses}>
      <div className="flex flex-col w-[100%]">
        <p
          className={
            todo.done ? "line-through text-center" : "text-center font-bold"
          }
        >
          {todo.task}
        </p>
        <div className="flex pl-[1rem] gap-[5rem]">
          <p
            className={
              todo.done ? "line-through text-gray-500" : "text-gray-500"
            }
          >
            Category: {todo.category}
          </p>
          <p
            className={
              todo.done ? "line-through text-gray-500" : "text-gray-500"
            }
          >
            Priority: {todo.priority}
          </p>
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
