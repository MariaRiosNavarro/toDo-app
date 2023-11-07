import { useState } from "react";
import ToDoList from "../components/ToDoList";
import TodoForm from "../components/TodoForm";

const Home = () => {
  const [toDos, setToDos] = useState([]);
  //wird die todos speichern

  return (
    <section className="max-w-[95vw] my-0 mx-auto h-screen">
      <h1 className="text-center text-primary p-8 text-2xl font-bold  drop-shadow-[4px_4px_0px_rgba(246,216,96,1.00)]  rounded-xl mx-auto">
        PROPS Tasks
      </h1>
      <TodoForm setToDos={setToDos}></TodoForm>
      <ToDoList toDos={toDos} setToDos={setToDos} />
    </section>
  );
};

export default Home;
