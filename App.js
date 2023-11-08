import React, { useState } from "react";
import "./styles.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");
  const [darkMode, setDarkMode] = useState(false);

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const deleteCompletedTasks = () => {
    const updatedTasks = tasks.filter((task) => !task.completed);
    setTasks(updatedTasks);
  };

  const completeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") {
      return !task.completed;
    } else if (filter === "completed") {
      return task.completed;
    }
    return true; // "all" filter
  });

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <div className="theme-toggle">
        <label>
          <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
          Dark Mode
        </label>
      </div>
      <h1>Todo List</h1>
      <div className="task-input">
        <input
          type="text"
          placeholder="Add a task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <div className="filters">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={deleteCompletedTasks}>Delete Completed</button>
      </div>
      <ul className="task-list">
        {filteredTasks.map((task, index) => (
          <li key={index} className={task.completed ? "completed" : ""}>
            <span>{task.text}</span>
            <div>
              <button onClick={() => completeTask(index)}>
                {task.completed ? "Undo" : "Complete"}
              </button>
              <span className="button-space" />
              <button onClick={() => deleteTask(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
