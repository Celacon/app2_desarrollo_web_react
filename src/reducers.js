/*import { ADD_TASK } from './actions';

const initialState = {
  taskList: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        taskList: [...state.taskList, action.payload],
      };
    default:
      return state;
  }
}

export default rootReducer;*/

// reducer.js
import { ADD_TASK } from './actions';

// Obtener las tareas almacenadas en Local Storage al cargar la aplicación
const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

const initialState = {
  taskList: storedTasks, // Inicializa el estado con las tareas almacenadas
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      const newTaskList = [...state.taskList, action.payload];
      
      // Al agregar una nueva tarea, actualiza el Local Storage
      localStorage.setItem('tasks', JSON.stringify(newTaskList));
      
      return {
        ...state,
        taskList: newTaskList,
      };
      case 'CLEAR_LOCAL_STORAGE':
      // Limpiar el estado cuando se borra el Local Storage
      return {
        ...state,
        taskList: [],
      };
    default:
      return state;
  }
}

export default rootReducer;
