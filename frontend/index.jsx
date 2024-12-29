/*import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";  // Importa el Provider de react-redux
import store from "./store";  // Importa tu store de Redux
import App from "./App";  // Tu componente raíz

ReactDOM.render(
  <Provider store={store}>  {/* Envuelve tu aplicación con el Provider *///}
 //   <App />
 // </Provider>,
 // document.getElementById("root")
//);


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';  // Redux provider
import App from './App';
import store from './redux/store';
import { TaskProvider } from './context/TaskContext';  // Importa el TaskProvider

ReactDOM.render(
  <Provider store={store}>
    <TaskProvider>  {/* Asegúrate de envolver toda la aplicación con el TaskProvider */}
      <App />
    </TaskProvider>
  </Provider>,
  document.getElementById('root')
);
