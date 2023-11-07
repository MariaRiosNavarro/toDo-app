import { useState } from "react";
import ToDoList from "../components/ToDoList";
import TodoForm from "../components/TodoForm";

const Home = () => {
  const [toDos, setToDos] = useState([]);
  //wird die todos speichern

  return (
    <div>
      <h1>Home</h1>
      <TodoForm setToDos={setToDos}></TodoForm>
      <ToDoList items={toDos} />
    </div>
  );
};

export default Home;
