import { useState } from "react";

const TodoForm = (props) => {
  const [advanced, setAdvanced] = useState(false);
  const [category, setCategory] = useState("all");
  const [priority, setPriority] = useState("normal");
  const [task, setTask] = useState("");

  const handleAdvance = () => {
    setAdvanced(!advanced);
  };

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleTodo = (e) => {
    e.preventDefault();
    if (task.length > 3) {
      const newTask = taskBuilder(task, category, priority);
      props.setToDos((prev) => {
        return [...prev, newTask];
      });
      setTask("");
      setCategory(category);
      setPriority(priority);
    }
  };

  const taskBuilder = (inputTask, inputCategory, inputPriority) => {
    return {
      task: inputTask,
      done: false,
      category: inputCategory,
      priority: inputPriority,
    };
  };

  return (
    <form
      onSubmit={handleTodo}
      className="flex flex-col justify-center items-center p-8 border-2 border-gray-200 h-[20rem] rounded-xl"
    >
      <input
        onChange={handleInputChange}
        value={task}
        className="border-b-4 outline-none text-2xl bg-transparent"
        type="text"
        name="task"
        id="task"
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
            className="select select-primary w-full max-w-[45%]"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option disabled value="" selected>
              Category
            </option>
            <option value="all">All</option>
            <option value="personal">Personal</option>
            <option value="work">Work</option>
          </select>
          <select
            name="priority"
            className="select select-primary w-full max-w-[45%]"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option disabled value="" selected>
              Priority
            </option>
            <option value="high">High</option>
            <option value="normal">Normal</option>
            <option value="low">Low</option>
          </select>
          <input type="submit" value="＋" className="btn btn-primary" />
        </div>
      ) : null}
    </form>
  );
};

export default TodoForm;
