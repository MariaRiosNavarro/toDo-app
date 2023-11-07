import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {
  return (
    <section>
      <h2 className="text-center"> Tasks</h2>

      {props.items?.map((item, key) => (
        <ToDoItem key={key + item.task} todo={item} setToDos={props.setToDos} />
      ))}
    </section>
  );
};

export default ToDoList;
