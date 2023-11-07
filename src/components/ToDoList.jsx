import ToDoItem from "./ToDoItem";

const ToDoList = ({ toDos, setToDos }) => {
  return (
    <section>
      <h2 className="text-center text-primary p-8 text-2xl font-bold rounded-xl mx-auto">
        {" "}
        Tasks
      </h2>

      {toDos?.map((item, index) => (
        <ToDoItem key={index} todo={item} setToDos={setToDos} />
      ))}
    </section>
  );
};

export default ToDoList;
