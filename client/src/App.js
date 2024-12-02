import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState('');

  const handleInputChange = (e) => {
    setTask(e.target.value);
  }

  const handleAddTask = (e) => {
    e.preventDefault();
    if (task.trim() === '') {
      return;
    }
    setTasks([...tasks, {text:task, completed: false}]);
    setTask('');
  }
  const handleCompleteTask = (index) => {
    const newTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(newTasks);
  };

console.log(tasks)
  return (
<>
<h1>To-Do List</h1>
<input type="text" placeholder='Add Task' onChange={handleInputChange}/><button onClick={handleAddTask}>+</button>
<div>

  {tasks.map((task, index) =><ul><li key={index} onClick={()=>handleCompleteTask(index)} className={task.completed ? "completed" : ""}>{task.text}</li></ul>)}
</div>
</>
  );
}

export default App;
