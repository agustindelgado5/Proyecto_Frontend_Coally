/*import React, { createContext, useContext, useState } from 'react';

const TaskContext = createContext();

export const useTasks = () => {
  return useContext(TaskContext);
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter(task => task.id !== id));
  };

  const editTask = (id, updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task
      )
    );
  };

  

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, editTask }}>
      {children}
    </TaskContext.Provider>
  );
};*/
import React, { createContext, useContext, useState, useEffect } from 'react';

// Crear el contexto
const TaskContext = createContext();

// Hook personalizado para usar el contexto
export const useTasks = () => {
  return useContext(TaskContext);
};

// Componente proveedor del contexto
export const TaskProvider = ({ children }) => {
  // Estado para las tareas
  const [tasks, setTasks] = useState([]);

  // Cargar tareas desde localStorage cuando el componente se monta
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));  // Cargar las tareas guardadas
    }
  }, []);

  // Guardar tareas en localStorage cada vez que cambien
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));  // Guardar tareas en localStorage
    }
  }, [tasks]);

  // Función para agregar una tarea
  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  // Función para eliminar una tarea
  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // Función para editar una tarea
  const editTask = (id, updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? updatedTask : task))
    );
  };

  // Función para actualizar el estado de la tarea (completada/pending)
  const updateTaskStatus = (id, updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? updatedTask : task))
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, editTask, updateTaskStatus }}>
      {children}
    </TaskContext.Provider>
  );
};

