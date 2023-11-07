import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {
  return (
    <section>
      <h2>ToDoList</h2>
      {props.items?.map((item, index) => (
        <ToDoItem key={index} todo={item} />
      ))}
    </section>
  );
};

export default ToDoList;
