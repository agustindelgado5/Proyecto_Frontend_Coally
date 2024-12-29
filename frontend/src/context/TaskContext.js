import React, { createContext, useState, useContext } from 'react';

// Crear el contexto
const TaskContext = createContext();

// Proveedor del contexto
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // Agregar una tarea
  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, { ...task, id: Date.now(), completed: false }]);
  };

  // Actualizar una tarea
  const updateTask = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  // Eliminar una tarea
  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  // Cambiar el estado de completado
  const toggleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Proveer las funciones y datos del contexto
  return (
    <TaskContext.Provider
      value={{ tasks, addTask, updateTask, deleteTask, toggleTaskCompletion }}
    >
      {children}
    </TaskContext.Provider>
  );
};

// Hook personalizado para usar el contexto de tareas
export const useTasks = () => {
  return useContext(TaskContext);
};
