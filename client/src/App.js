import { useState } from 'react';
import { IoTrashOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (task.trim() === '') {
      return;
    }

    if (editIndex !== null) {
      const updatedTasks = tasks.map((t, i) =>
        i === editIndex ? { ...t, text: task } : t
      );
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      setTasks([...tasks, { text: task, completed: false }]);
    }

    setTask('');
  };

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

  const handleEditTask = (index) => {
    setTask(tasks[index].text); 
    setEditIndex(index); 
  };

  return (
    <>
      <h1>To-Do List</h1>
      <input
        type="text"
        placeholder="Add Task"
        value={task}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTask}>{editIndex !== null ? 'Update' : '+'}</button>
      <div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <div
                onClick={() => handleCompleteTask(index)}
                className={task.completed ? 'completed' : 'inline-block'}
              >
                {task.text}
              </div>
              <button onClick={() => handleEditTask(index)}><CiEdit /></button>
              <button onClick={() => handleDeleteTask(index)}><IoTrashOutline /></button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
