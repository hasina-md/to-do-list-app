import React, { useState } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';
import './App.css';

export default function App() {
  const [taskItems, setTaskItems] = useState([]);

  const addTask = (newTask) => {
    setTaskItems([...taskItems, newTask]);
  }

  const completeTask =(id) => {
    setTaskItems(taskItems.filter((task) => task.id !== id));
  }
  return (
    <div className="App">
      <h1>My To Do List</h1>
      <TaskForm addTask={addTask} />
      <div>
     
      {taskItems.map((task) => (
        <Task key={task.id} task={task} completeTask={completeTask} />
      ))}
      </div>
    </div>
  );
}