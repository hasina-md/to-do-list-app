import React, {useState} from 'react';

function TaskForm({addTask}) {
    const [newTask, setNewTask] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        addTask(newTask);
        setNewTask("");
    }
    const handleChange = (e) => {
        setNewTask(e.target.value);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Add Task' value={newTask} onChange={handleChange} />
            <button type="submit">Add Task</button>
        </form>
    );

}
export default TaskForm;