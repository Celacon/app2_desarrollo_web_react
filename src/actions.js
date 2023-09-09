/*
// actions.js
import { ADD_TASK } from './actionTypes';

export const addTask = (task) => async (dispatch) => {
  // Agregar la tarea al Local Storage
  const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const updatedTasks = [...storedTasks, task];
  localStorage.setItem('tasks', JSON.stringify(updatedTasks));

  // Actualizar el estado de Redux
  dispatch({
    type: ADD_TASK,
    payload: task,
  });
};*/

export const ADD_TASK = 'ADD_TASK';

export function addTask(task) {
  return {
    type: ADD_TASK,
    payload: task,
  };
}

export const clearLocalStorage = () => {
  // Borra los datos del Local Storage
  localStorage.removeItem('tasks');

  return {
    type: 'CLEAR_LOCAL_STORAGE',
  };
};