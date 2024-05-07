import React, {useState} from 'react';

function TaskForm({addTask}) {
    const [taskText, setTaskText] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [priority, setPriority] = useState("later");

    function handleSubmit(e) {
        e.preventDefault();
        if (!taskText.trim()) {
            return;
          }
          addTask(taskText, dueDate, priority);
          console.log({ taskText, dueDate, priority });
          setTaskText('');
          setDueDate('');
          setPriority('later');
        };
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder='Add Task' 
            value={taskText}
             onChange={(e) => setTaskText(e.target.value)}
             required 
             />
             <input type="date" value={dueDate}
              onChange={(e) => setDueDate(e.target.value)} 
              />
              <select value={priority}
              onChange={(e) => setPriority(e.target.value)}>
               <option value="quick">Quick</option>
              <option value="important">Important</option>
              <option value="soon">Soon</option>
               <option value="later">Later</option>

              </select>
            <button type="submit">Add Task</button>
        </form>
    );

}
export default TaskForm;