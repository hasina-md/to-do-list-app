import React from 'react';

function Task({ task, deleteTask }) {
    return (
        <div  className="task" >
            <h3>{task.taskName}</h3>
            <p>{task.description}</p>
           
           
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            
        </div>
    );
}
export default Task;