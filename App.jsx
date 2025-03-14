import React, { useState } from "react";
{/*import header from './header.jsx';*/}
import "./TodoList.css";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [editedText, setEditedText] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask }]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (task) => {
    setEditingTask(task.id);
    setEditedText(task.text);
  };

  const saveEditedTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, text: editedText } : task));
    setEditingTask(null);
    setEditedText("");
  };

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">To Do List by Lakssh</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Add</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Edit</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Delete</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Display</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    <div className="todo-container">
      <h2>To-Do List</h2>
      <div className="input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            {editingTask === task.id ? (
              <div className="edit-container">
                <input
                  type="text"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                />
                <button onClick={() => saveEditedTask(task.id)}>Save</button>
              </div>
            ) : (
              <div className="task-content">
                <span className="task-text">{task.text}</span>
                <div className="buttons">
                  <button className="edit-btn" onClick={() => editTask(task)}>Edit</button>
                  <button className="delete-btn" onClick={() => deleteTask(task.id)}>Delete</button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>Email: laksshgoeldtu26@gmail.com</p>
            <p>Phone: +91 9718502814</p>
          </div>
          <div className="footer-section">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Help Center</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Menu</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Tasks</a></li>
              <li><a href="#">Settings</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Categories</h4>
            <ul>
              <li><a href="#">Work</a></li>
              <li><a href="#">Personal</a></li>
              <li><a href="#">Shopping</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>About Me</h4>
            <p>A simple to-do app to help manage your daily tasks efficiently. Made by Lakssh Goel, 3rd year B.Tech student at DTU.</p>
          </div>
        </div>
        <p className="footer-bottom">&copy; {new Date().getFullYear()} To-Do App. All rights reserved.</p>
      </footer>
    </div>
    </>
  );
};

export default TodoList;