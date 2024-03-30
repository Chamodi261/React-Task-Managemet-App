import React, { useState } from "react";
import "./App.css";
import Task from "./components/Task.js";


function App() {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]); 

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskInput.trim() !== "") {
      const newTask = {
        id: tasks.length + 1,
        task: taskInput,
      };
      setTasks([...tasks, newTask]); 
      setTaskInput(""); 
    }
  };

  return (
      <div className="app">
        <form onSubmit={handleAddTask} className="task-form">
          <label className="label-form">
            Enter the task:
            <input
              className="input"
              type="text"
              value={taskInput}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit" className="submit-button">Add Task</button>

          {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
        </form>
        

      </div>
  );
}

export default App;
