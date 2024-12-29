import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TaskProvider } from './context/TaskContext'; // Importa el TaskProvider
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <TaskProvider>  {/* Aquí puedes envolver solo las rutas que necesiten el contexto */}
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TaskProvider>
    </Router>
  );
}

export default App;

