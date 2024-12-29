import axios from 'axios';

// Configura la base URL de tu API backend
const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Cambia esta URL según tu backend
});

export default api;
