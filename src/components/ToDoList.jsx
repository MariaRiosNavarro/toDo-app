import ToDoItem from "./ToDoItem";

const ToDoList = ({ toDos, setToDos }) => {
  return (
    <section>
      <h2 className="text-center"> Tasks</h2>

      {toDos?.map((item, index) => (
        <ToDoItem key={index} todo={item} setToDos={setToDos} />
      ))}
    </section>
  );
};

export default ToDoList;
