import axios from 'axios';

const BACKEND_URL ='http://localhost:5000';

// Tipos de acciones
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
export const FETCH_TASKS_FAILURE = 'FETCH_TASKS_FAILURE';
export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS';
export const ADD_TASK_FAILURE = 'ADD_TASK_FAILURE';
export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS';
export const DELETE_TASK_FAILURE = 'DELETE_TASK_FAILURE';
export const EDIT_TASK_SUCCESS = 'EDIT_TASK_SUCCESS';
export const EDIT_TASK_FAILURE = 'EDIT_TASK_FAILURE';

// Acción para obtener tareas
export const fetchTasks = () => async (dispatch) => {
  const token = localStorage.getItem('token');

  try {
    const response = await axios.get(`${BACKEND_URL}/api/tasks`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({
      type: FETCH_TASKS_SUCCESS,
      payload: response.data.tasks, // Tareas obtenidas
    });
  } catch (error) {
    dispatch({
      type: FETCH_TASKS_FAILURE,
      payload: error.message,
    });
  }
};

// Acción para agregar tarea
export const addTask = (taskData) => async (dispatch) => {
  const token = localStorage.getItem('token');

  try {
    const response = await axios.post(`${BACKEND_URL}/api/tasks`, taskData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({
      type: ADD_TASK_SUCCESS,
      payload: response.data.task, // Tarea agregada
    });
  } catch (error) {
    dispatch({
      type: ADD_TASK_FAILURE,
      payload: error.response?.data || error.message,
    });
  }
};

// Acción para eliminar tarea
export const deleteTask = (taskId) => async (dispatch) => {
  const token = localStorage.getItem('token');

  try {
    await axios.delete(`${BACKEND_URL}/api/tasks/${taskId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({
      type: DELETE_TASK_SUCCESS,
      payload: taskId, // ID de la tarea eliminada
    });
  } catch (error) {
    dispatch({
      type: DELETE_TASK_FAILURE,
      payload: error.message,
    });
  }
};

// Acción para editar tarea
export const editTask = (taskId, taskData) => async (dispatch) => {
  const token = localStorage.getItem('token');

  try {
    const response = await axios.patch(`${BACKEND_URL}/api/tasks/${taskId}`, taskData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({
      type: EDIT_TASK_SUCCESS,
      payload: response.data.task, // Tarea actualizada
    });
  } catch (error) {
    dispatch({
      type: EDIT_TASK_FAILURE,
      payload: error.response?.data || error.message,
    });
  }
};
