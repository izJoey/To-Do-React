import { List } from "./List";
import { useState } from "react";

export function App() {
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleAddTask() {
    const newTask = {
      name: taskName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };

    setTasks((prevState) => [...prevState, newTask]);
    setTaskName("");
  }

  function handleDelete(location) {
    setTasks((prevState) => prevState.filter((task) => task.name !== location));
  }

  return (
    <div className="grid place-items-center bg-slate-700 min-h-screen">
      <div className="grid p-4 gap-4 grid-cols-5 grid-rows-4">
        <h1 className="text-3xl text-white col-span-5 text-center">
          <span>To Do List</span>
        </h1>
        <input
          placeholder="Name a task..."
          type="text"
          onChange={(e) => setTaskName(e.target.value)}
          value={taskName}
          className="h-8 col-span-4"
        />
        <button
          onClick={handleAddTask}
          className="rounded hover:rounded-lg bg-slate-500 hover:bg-slate-600
         text-xl text-white col-span-1 h-8 w-14"
        >
          <span>Add</span>
        </button>
        {tasks.map((task) => (
          <>
            <List key={task.time} name={task.name} time={task.time} />
            <button
              className="text-white font-bold rounded-lg border-1 border-white
              h-12 w-14 bg-red-800 hover:bg-red-900 hover:drop-shadow-lg
              justify-center items-center"
              onClick={() => handleDelete(task.name)}
            >
              Delete
            </button>
          </>
        ))}
      </div>
    </div>
  );
}
