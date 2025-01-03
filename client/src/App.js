import { useState } from 'react';
import { IoTrashOutline } from "react-icons/io5";
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
   const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };
  const handleCompleteTask = (index) => {
    const newTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(newTasks);
  };

  return (
<>
<h1>To-Do List</h1>
<input type="text" placeholder='Add Task' onChange={handleInputChange}/><button onClick={handleAddTask}>+</button>
<div>

 <ul> {tasks.map((task, index) =><li key={index} ><div onClick={()=>handleCompleteTask(index)} className={task.completed ? "completed" : "inline-block"}>{task.text} </div><button onClick={()=>handleDeleteTask(index)}> <IoTrashOutline /></button></li>)}
 </ul>
</div>
</>
  );
}

export default App;
