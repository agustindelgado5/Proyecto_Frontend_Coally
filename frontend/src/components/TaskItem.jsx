import React from 'react';

const TaskItem = ({ task }) => {
  return (
    <li style={{ border: '1px solid #ccc', marginBottom: '1rem', padding: '1rem' }}>
      <h3>{task.title}</h3>
      <p>Estado: {task.status ? 'Completada' : 'Pendiente'}</p>
      <p>Fecha de creación: {new Date(task.createdAt).toLocaleDateString()}</p>
    </li>
  );
};

export default TaskItem;
