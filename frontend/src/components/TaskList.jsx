import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, addTask, deleteTask, editTask } from "../redux/actions/tasksActions";


const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  
  const [taskInput, setTaskInput] = useState('');

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleAddTask = () => {
    const newTask = { title: taskInput };
    dispatch(addTask(newTask));
    setTaskInput('');
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleEditTask = (taskId) => {
    const updatedTask = { title: 'New Task Title' }; // Cambiar según sea necesario
    dispatch(editTask(taskId, updatedTask));
  };

  if (loading) return <p>Cargando tareas...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h3>Tareas</h3>
      <input 
        type="text" 
        value={taskInput} 
        onChange={(e) => setTaskInput(e.target.value)} 
        placeholder="Nueva tarea"
      />
      <button onClick={handleAddTask}>Agregar tarea</button>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task.title} 
            <button onClick={() => handleEditTask(task._id)}>Editar</button>
            <button onClick={() => handleDeleteTask(task._id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
