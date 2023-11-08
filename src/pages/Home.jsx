import { useState } from "react";
import ToDoList from "../components/ToDoList";
import TodoForm from "../components/TodoForm";
import Header from "../components/Header";

const Home = () => {
  const [toDos, setToDos] = useState([]);
  //wird die todos speichern

  return (
    <section className="max-w-[95vw] my-0 mx-auto h-screen">
      <Header />
      <TodoForm setToDos={setToDos}></TodoForm>
      <ToDoList toDos={toDos} setToDos={setToDos} />
    </section>
  );
};

export default Home;
