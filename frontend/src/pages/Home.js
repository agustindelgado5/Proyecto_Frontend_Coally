import React from 'react';
import { useTasks } from '../context/TaskContext';
import TaskList from '../components/TaskList';

const Home = () => {
  const { addTask } = useTasks();

  const handleAddTask = () => {
    addTask({ title: 'Nueva tarea', description: 'Descripción de ejemplo' });
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <button onClick={handleAddTask}>Agregar Tarea</button>
      <TaskList />
    </div>
  );
};

export default Home;
