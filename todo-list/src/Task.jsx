import React from 'react';

function Task({ task, deleteTask }) {
    const handleDelete = () => {
        deleteTask(task.id);
    }
    return (
        <div  className="task" > 
        <span>Task: {task.text}</span>
        <span>Due Date: {task.dueDate || "N/A"}</span>
        <span>Priority: {task.priority}</span>       
           
            <button onClick={handleDelete}>Delete</button>
            
        </div>
    );
}
export default Task;