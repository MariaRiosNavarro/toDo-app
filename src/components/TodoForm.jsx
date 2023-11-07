import { useState } from "react";

const TodoForm = (props) => {
  const [advanced, setAdvanced] = useState(false);
  const [category, setCategory] = useState("all");
  const [priority, setPriority] = useState("normal");
  // const [customCategory, setCustomCategory] = useState("");

  const handleAdvance = () => {
    setAdvanced(!advanced);
  };

  function addTodoSimple(e) {
    const selectedPriority = advanced ? priority : "normal";
    const selectedCategory = advanced ? category : "all";
    // simple imput
    if (e.key === "Enter" && e.target.value.length > 3) {
      const task = taskBuilder(
        e.target.value,
        selectedCategory,
        selectedPriority
      );
      // console.log(task);
      props.setToDos((prev) => {
        return [...prev, task];
      });
      e.target.value = "";
    }
  }

  const handleTodo = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const task = taskBuilder(data.task, data.category, data.priority);
    props.setToDos((prev) => {
      return [...prev, task];
    });
    console.log("here", task);
  };

  function taskBuilder(inputTask, inputCategory, inputPriority) {
    return {
      task: inputTask,
      done: false,
      category: inputCategory,
      priority: inputPriority,
    };
  }

  return (
    <form
      onSubmit={handleTodo}
      className="flex flex-col justify-center items-center p-8 border-2 border-gray-200 h-[20rem] rounded-xl"
    >
      <input
        onKeyDown={addTodoSimple}
        className="border-b-4 outline-none  text-2xl bg-transparent"
        type="text"
        name="task"
        id=""
      />
      <div className="form-control w-52">
        <label htmlFor="advanced" className="cursor-pointer label">
          <span className="label-text">Advanced Settings</span>
          <input
            onChange={handleAdvance}
            type="checkbox"
            name="advanced"
            id="advanced"
            className="toggle toggle-primary"
          />
        </label>
      </div>

      {advanced ? (
        <div className="flex gap-4 pt-4 flex-wrap justify-center items-center">
          <select
            name="category"
            className="select select-primary w-full  max-w-[45%]"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option name="category" disabled selected>
              Category
            </option>
            <option name="category" value={"all"}>
              All
            </option>
            <option name="category" value={"personal"}>
              Personal
            </option>
            <option name="category" value={"work"}>
              Work
            </option>
          </select>
          <select
            name="priority"
            className="select select-primary w-full max-w-[45%]"
            onChange={(e) => setPriority(e.target.value)}
          >
            <option name="priority" disabled selected>
              Priority
            </option>
            <option name="priority" value={"hight"}>
              Hight
            </option>
            <option name="priority" value={"normal"}>
              Medium
            </option>
            <option name="priority" value={"low"}>
              Low
            </option>
          </select>
          <input
            type="text"
            placeholder="add Category"
            className="input input-bordered input-primary w-full max-w-[95%]"
          />
          <input type="submit" value="＋" className="btn btn-primary" />
        </div>
      ) : (
        ""
      )}
    </form>
  );
};

export default TodoForm;
