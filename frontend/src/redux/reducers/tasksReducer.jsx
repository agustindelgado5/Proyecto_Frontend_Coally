const initialState = {
    tasks: [],        // Lista de tareas
    loading: false,   // Indicador de carga
    error: null,      // Error de la API o proceso
  };
  
  const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_TASKS_SUCCESS':
        return { 
          ...state, 
          tasks: action.payload,  // Tareas obtenidas
          loading: false 
        };
  
      case 'FETCH_TASKS_FAILURE':
        return { 
          ...state, 
          error: action.payload, 
          loading: false 
        };
  
      case 'ADD_TASK_SUCCESS':
        return {
          ...state,
          tasks: [...state.tasks, action.payload],  // Tarea agregada
          loading: false,
        };
  
      case 'ADD_TASK_FAILURE':
        return { ...state, error: action.payload, loading: false };
  
      case 'DELETE_TASK_SUCCESS':
        return {
          ...state,
          tasks: state.tasks.filter((task) => task._id !== action.payload), // Eliminando tarea
          loading: false,
        };
  
      case 'DELETE_TASK_FAILURE':
        return { ...state, error: action.payload, loading: false };
  
      case 'EDIT_TASK_SUCCESS':
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task._id === action.payload._id ? action.payload : task // Actualizando tarea
          ),
          loading: false,
        };
  
      case 'EDIT_TASK_FAILURE':
        return { ...state, error: action.payload, loading: false };
  
      default:
        return state;
    }
  };
  
  export default tasksReducer;
  