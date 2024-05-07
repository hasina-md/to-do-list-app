import React, { useState } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';
import './App.css'; 

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText, dueDate, priority) => {
    console.log('Adding Task:', { text: taskText, dueDate, priority }); // Log the input to ensure it's correct
    setTasks([...tasks, { text: taskText, dueDate, priority, id: Date.now() }]);
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
            deleteTask={deleteTask} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;
