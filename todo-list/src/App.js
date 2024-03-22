// App.js
import React, { useState } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';
import './App.css'; // Import your CSS file

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText, dueDate, priority) => {
    setTasks([...tasks, { text: taskText, dueDate: dueDate, priority: priority, id: Date.now() }]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} />
      <div className="task-list">
        {tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            deleteTask={deleteTask} // Ensure deleteTask is passed down
          />
        ))}
      </div>
    </div>
  );
}

export default App;
