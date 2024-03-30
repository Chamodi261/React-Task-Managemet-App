import React, { useState } from "react";
import "./Task.css";

const Task = (props) => { 
    const [task, setTask] = useState(props.task);
    const [isCompleted, setIsCompleted] = useState(false);

  const buttonClick = () => {
    setIsCompleted(true);
  };

  const handleDelete = () => {
    setTask(null);
  };

  return (
    <>
      {task && (
        <div className="task-card">
          <p style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>{task.task}</p>
          <button onClick={buttonClick} className="task-button done-button">
            Done
          </button>
          <button onClick={handleDelete} className="task-button delete-button">
            Delete
          </button>
        </div>
      )}
    </>
  );
};

export default Task;
