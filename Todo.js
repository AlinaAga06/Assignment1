import React, { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  return (
    <div className="todo-container">
      <div className="todo-content">
        <h1>TODO</h1>
        <div className="task-input">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter New Task"
          />
          <button onClick={addTask}>ADD</button>
        </div>
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id} className={task.completed ? "completed" : ""}>
              <span>{task.text}</span>
              <button onClick={() => toggleComplete(task.id)}>
                {task.completed ? "Incomplete" : "Complete"}
              </button>
              <button onClick={() => deleteTask(task.id)}>
                 <span role="img" aria-label="Delete">🗑️</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="footer">
          <p>Total tasks: {tasks.length}</p>
          <button onClick={clearCompleted}>Clear Completed</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;



