import React, { useState } from 'react';

const TaskForm = ({ onSubmit, initialData = {} }) => {
  const [title, setTitle] = useState(initialData.title || '');
  const [status, setStatus] = useState(initialData.status || false);
  const [createdAt, setCreatedAt] = useState(initialData.createdAt || new Date().toISOString());

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert('El título es obligatorio');
      return;
    }
    onSubmit({ title, status, createdAt });
    setTitle('');
    setStatus(false);
    setCreatedAt(new Date().toISOString());
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="title" style={{ display: 'block', marginBottom: '.5rem' }}>
          Título:
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: '100%', padding: '.5rem' }}
          placeholder="Escribe el título de la tarea"
        />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="status" style={{ display: 'block', marginBottom: '.5rem' }}>
          Estado:
        </label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value === 'true')}
          style={{ width: '100%', padding: '.5rem' }}
        >
          <option value="false">Pendiente</option>
          <option value="true">Completada</option>
        </select>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="createdAt" style={{ display: 'block', marginBottom: '.5rem' }}>
          Fecha de creación:
        </label>
        <input
          type="text"
          id="createdAt"
          value={new Date(createdAt).toLocaleDateString()}
          disabled
          style={{ width: '100%', padding: '.5rem', backgroundColor: '#f0f0f0' }}
        />
      </div>
      <button type="submit" style={{ padding: '.5rem 1rem', backgroundColor: 'blue', color: '#fff' }}>
        Guardar Tarea
      </button>
    </form>
  );
};

export default TaskForm;
