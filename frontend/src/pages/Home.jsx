
/*
import React, { useState, useEffect } from 'react';
import { useTasks } from '../context/TaskContext';  // Asegúrate de que la ruta sea correcta

const Home = () => {
  const { tasks, addTask, deleteTask, editTask } = useTasks();  // Aquí estás desestructurando las funciones
  const [newTaskName, setNewTaskName] = useState('');
  const [newTaskStatus, setNewTaskStatus] = useState(false);  // Agregamos el estado de la tarea
  const [newTaskDate, setNewTaskDate] = useState(new Date().toISOString());  // Fecha de creación
  const [editingTask, setEditingTask] = useState(null); // Para editar tarea

  useEffect(() => {
    // Aquí puedes llamar a la lógica para cargar las tareas si lo necesitas
  }, []);

  const handleAddTask = () => {
    if (newTaskName.trim()) {
      const newTask = {
        id: Date.now(),
        name: newTaskName,
        status: newTaskStatus,  // Usamos el estado del checkbox
        createdAt: newTaskDate,  // Usamos la fecha de creación seleccionada
      };
      addTask(newTask);  // Llamar a la función de agregar tarea
      resetForm();
    } else {
      alert('El nombre de la tarea no puede estar vacío');
    }
  };

  const handleEditTask = (task) => {
    setEditingTask(task); // Establece la tarea a editar
    setNewTaskName(task.name); // Prepara el nombre de la tarea para editar
    setNewTaskStatus(task.status); // Prepara el estado de la tarea
    setNewTaskDate(task.createdAt); // Prepara la fecha de creación de la tarea
  };

  const handleSaveEdit = () => {
    if (newTaskName.trim()) {
      editTask(editingTask.id, { ...editingTask, name: newTaskName, status: newTaskStatus, createdAt: newTaskDate });
      resetForm();
    } else {
      alert('El nombre de la tarea no puede estar vacío');
    }
  };

  const handleDeleteTask = (id) => {
    deleteTask(id); // Llamar a la función de eliminar tarea
  };

  const resetForm = () => {
    setNewTaskName('');
    setNewTaskStatus(false);
    setNewTaskDate(new Date().toISOString());
    setEditingTask(null);
  };

  return (
    <div>
      <h1>Tareas</h1>

      {/* Formulario para agregar o editar tareas *///}
      /*<div>
        <input
          type="text"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          placeholder="Escribe el nombre de la tarea"
        />
        <select
          value={newTaskStatus}
          onChange={(e) => setNewTaskStatus(e.target.value === 'true')}
        >
          <option value={false}>Pendiente</option>
          <option value={true}>Completada</option>
        </select>
        <input
          type="date"
          value={new Date(newTaskDate).toISOString().split('T')[0]}  // Convierte la fecha en formato compatible para el input
          onChange={(e) => setNewTaskDate(e.target.value)}
        />
        <button onClick={editingTask ? handleSaveEdit : handleAddTask}>
          {editingTask ? 'Guardar cambios' : 'Agregar tarea'}
        </button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <div>
              <strong>{task.name}</strong>
              <p>
                <span>
                  <strong>Estado:</strong> {task.status ? 'Completada' : 'Pendiente'}
                </span>
                <br />
                <span>
                  <strong>Fecha de creación:</strong> {new Date(task.createdAt).toLocaleDateString()}
                </span>
              </p>
            </div>
            <button onClick={() => handleEditTask(task)}>Editar</button>
            <button onClick={() => handleDeleteTask(task.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;*/

/*
import React, { useState, useEffect } from 'react';
import { useTasks } from '../context/TaskContext';  // Asegúrate de que la ruta sea correcta

const Home = () => {
  const { tasks, addTask, deleteTask, editTask, updateTaskStatus } = useTasks();  // Aquí estamos incluyendo la función `updateTaskStatus`
  const [newTaskName, setNewTaskName] = useState('');
  const [newTaskStatus, setNewTaskStatus] = useState(false);  // Agregamos el estado de la tarea
  const [newTaskDate, setNewTaskDate] = useState(new Date().toISOString());  // Fecha de creación
  const [editingTask, setEditingTask] = useState(null); // Para editar tarea
  const [filter, setFilter] = useState('all'); // Filtro para tareas

  useEffect(() => {
    // Aquí puedes llamar a la lógica para cargar las tareas si lo necesitas
  }, []);

  const handleAddTask = () => {
    if (newTaskName.trim()) {
      const newTask = {
        id: Date.now(),
        name: newTaskName,
        status: newTaskStatus,  // Usamos el estado del checkbox
        createdAt: newTaskDate,  // Usamos la fecha de creación seleccionada
      };
      addTask(newTask);  // Llamar a la función de agregar tarea
      resetForm();
    } else {
      alert('El nombre de la tarea no puede estar vacío');
    }
  };

  const handleEditTask = (task) => {
    setEditingTask(task); // Establece la tarea a editar
    setNewTaskName(task.name); // Prepara el nombre de la tarea para editar
    setNewTaskStatus(task.status); // Prepara el estado de la tarea
    setNewTaskDate(task.createdAt); // Prepara la fecha de creación de la tarea
  };

  const handleSaveEdit = () => {
    if (newTaskName.trim()) {
      editTask(editingTask.id, { ...editingTask, name: newTaskName, status: newTaskStatus, createdAt: newTaskDate });
      resetForm();
    } else {
      alert('El nombre de la tarea no puede estar vacío');
    }
  };

  const handleDeleteTask = (id) => {
    deleteTask(id); // Llamar a la función de eliminar tarea
  };

  const handleToggleTaskStatus = (id) => {
    const task = tasks.find((task) => task.id === id);
    updateTaskStatus(id, { ...task, status: !task.status }); // Cambia el estado de la tarea
  };

  const resetForm = () => {
    setNewTaskName('');
    setNewTaskStatus(false);
    setNewTaskDate(new Date().toISOString());
    setEditingTask(null);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value); // Cambia el filtro según la opción seleccionada
  };

  // Filtrar las tareas según el estado
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') {
      return task.status === true;
    } else if (filter === 'pending') {
      return task.status === false;
    }
    return true; // Devuelve todas las tareas si el filtro es "all"
  });

  return (
    <div>
      <h1>Tareas</h1>

     
      <div>
        <select onChange={handleFilterChange} value={filter}>
          <option value="all">Todas</option>
          <option value="completed">Completadas</option>
          <option value="pending">Pendientes</option>
        </select>
      </div>

     
      <div>
        <input
          type="text"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          placeholder="Escribe el nombre de la tarea"
        />
        <select
          value={newTaskStatus}
          onChange={(e) => setNewTaskStatus(e.target.value === 'true')}
        >
          <option value={false}>Pendiente</option>
          <option value={true}>Completada</option>
        </select>
        <input
          type="date"
          value={new Date(newTaskDate).toISOString().split('T')[0]}  // Convierte la fecha en formato compatible para el input
          onChange={(e) => setNewTaskDate(e.target.value)}
        />
        <button onClick={editingTask ? handleSaveEdit : handleAddTask}>
          {editingTask ? 'Guardar cambios' : 'Agregar tarea'}
        </button>
      </div>

      
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <div>
              <strong>{task.name}</strong>
              <p>
                <span>
                  <strong>Estado:</strong> {task.status ? 'Completada' : 'Pendiente'}
                </span>
                <br />
                <span>
                  <strong>Fecha de creación:</strong> {new Date(task.createdAt).toLocaleDateString()}
                </span>
              </p>
            </div>
            <button onClick={() => handleEditTask(task)}>Editar</button>
            <button onClick={() => handleDeleteTask(task.id)}>Eliminar</button>
            <button onClick={() => handleToggleTaskStatus(task.id)}>
              {task.status ? 'Marcar como pendiente' : 'Marcar como completada'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
*/
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Importamos Axios
import { useTasks } from '../context/TaskContext'; // Asegúrate de que la ruta sea correcta

const Home = () => {
  const { tasks, addTask, deleteTask, editTask, updateTaskStatus } = useTasks(); // Aquí estamos incluyendo la función `updateTaskStatus`
  const [newTaskName, setNewTaskName] = useState('');
  const [newTaskStatus, setNewTaskStatus] = useState(false); // Agregamos el estado de la tarea
  const [newTaskDate, setNewTaskDate] = useState(new Date().toISOString()); // Fecha de creación
  const [editingTask, setEditingTask] = useState(null); // Para editar tarea
  const [filter, setFilter] = useState('all'); // Filtro para tareas

  useEffect(() => {
    // Cargar las tareas al iniciar la aplicación desde el backend
    axios.get('http://localhost:5000/api/tasks')
      .then((response) => {
        const data = response.data;
        if (Array.isArray(data)) {
          setTasks(data);
        }
      })
      .catch((error) => console.error('Error fetching tasks:', error));
  }, []);

  const handleAddTask = () => {
    if (newTaskName.trim()) {
      const newTask = {
        name: newTaskName,
        status: newTaskStatus,  // Usamos el estado del checkbox
        createdAt: newTaskDate,  // Usamos la fecha de creación seleccionada
      };

      // Enviar la nueva tarea al backend
      axios.post('http://localhost:5000/api/tasks', newTask)
        .then((response) => {
          addTask(response.data); // Llamar a la función de agregar tarea en el contexto
          resetForm(); // Limpiar el formulario después de agregar la tarea
        })
        .catch((error) => console.error('Error adding task:', error));
    } else {
      alert('El nombre de la tarea no puede estar vacío');
    }
  };

  const handleEditTask = (task) => {
    setEditingTask(task); // Establece la tarea a editar
    setNewTaskName(task.name); // Prepara el nombre de la tarea para editar
    setNewTaskStatus(task.status); // Prepara el estado de la tarea
    setNewTaskDate(task.createdAt); // Prepara la fecha de creación de la tarea
  };

  const handleSaveEdit = () => {
    if (newTaskName.trim()) {
      const updatedTask = { ...editingTask, name: newTaskName, status: newTaskStatus, createdAt: newTaskDate };
      
      // Actualizar la tarea en el backend
      axios.put(`http://localhost:5000/api/tasks/${editingTask.id}`, updatedTask)
        .then((response) => {
          editTask(editingTask.id, response.data); // Llamar a la función de editar tarea en el contexto
          resetForm(); // Limpiar el formulario después de guardar cambios
        })
        .catch((error) => console.error('Error editing task:', error));
    } else {
      alert('El nombre de la tarea no puede estar vacío');
    }
  };

  const handleDeleteTask = (id) => {
    // Eliminar la tarea en el backend
    axios.delete(`http://localhost:5000/api/tasks/${id}`)
      .then(() => {
        deleteTask(id); // Llamar a la función de eliminar tarea en el contexto
      })
      .catch((error) => console.error('Error deleting task:', error));
  };

  const handleToggleTaskStatus = (id) => {
    const task = tasks.find((task) => task.id === id);
    const updatedTask = { ...task, status: !task.status };

    // Actualizar el estado de la tarea en el backend
    axios.put(`http://localhost:5000/api/tasks/${id}`, updatedTask)
      .then((response) => {
        updateTaskStatus(id, response.data); // Llamar a la función de actualizar estado en el contexto
      })
      .catch((error) => console.error('Error updating task status:', error));
  };

  const resetForm = () => {
    setNewTaskName('');
    setNewTaskStatus(false);
    setNewTaskDate(new Date().toISOString());
    setEditingTask(null);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value); // Cambia el filtro según la opción seleccionada
  };

  // Filtrar las tareas según el estado
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') {
      return task.status === true;
    } else if (filter === 'pending') {
      return task.status === false;
    }
    return true; // Devuelve todas las tareas si el filtro es "all"
  });

  return (
    <div>
      <h1>Tareas</h1>

      {/* Filtro de tareas */}
      <div>
        <select onChange={handleFilterChange} value={filter}>
          <option value="all">Todas</option>
          <option value="completed">Completadas</option>
          <option value="pending">Pendientes</option>
        </select>
      </div>

      {/* Formulario de tareas */}
      <div>
        <input
          type="text"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          placeholder="Escribe el nombre de la tarea"
        />
        <select
          value={newTaskStatus}
          onChange={(e) => setNewTaskStatus(e.target.value === 'true')}
        >
          <option value={false}>Pendiente</option>
          <option value={true}>Completada</option>
        </select>
        <input
          type="date"
          value={new Date(newTaskDate).toISOString().split('T')[0]}  // Convierte la fecha en formato compatible para el input
          onChange={(e) => setNewTaskDate(e.target.value)}
        />
        <button onClick={editingTask ? handleSaveEdit : handleAddTask}>
          {editingTask ? 'Guardar cambios' : 'Agregar tarea'}
        </button>
      </div>

      {/* Lista de tareas */}
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <div>
              <strong>{task.name}</strong>
              <p>
                <span>
                  <strong>Estado:</strong> {task.status ? 'Completada' : 'Pendiente'}
                </span>
                <br />
                <span>
                  <strong>Fecha de creación:</strong> {new Date(task.createdAt).toLocaleDateString()}
                </span>
              </p>
            </div>
            <button onClick={() => handleEditTask(task)}>Editar</button>
            <button onClick={() => handleDeleteTask(task.id)}>Eliminar</button>
            <button onClick={() => handleToggleTaskStatus(task.id)}>
              {task.status ? 'Marcar como pendiente' : 'Marcar como completada'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

