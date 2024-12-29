/*import { createStore } from "redux";
import rootReducer from "./reducers";  // Importa tus reducers combinados

const store = createStore(
  rootReducer, // Combina todos tus reducers
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  // Para usar Redux DevTools si está disponible
);

export default store;*/



import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';  // imortacion de 'thunk' 
import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))  // Utiliza 'thunk'
);

export default store;

