import React from 'react';
//import { useTaskContext } from '../Context/TaskContext'; 
import { useSelector, useDispatch } from 'react-redux';
import { clearLocalStorage } from '../actions'; 
import { Link } from 'react-router-dom';

function TaskList() {
  //const { taskList } = useTaskContext(); // Obtén el arreglo taskList del contexto
  const taskList = useSelector((state) => state.taskList);
  const dispatch = useDispatch();

  const handleClearLocalStorage = () => {
    dispatch(clearLocalStorage());
  };

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <button onClick={handleClearLocalStorage}>Limpiar Local Storage</button>
      <Link to="/">
        <button>Ingresar</button>
      </Link>
      <ul>
        {taskList.map((task, index) => (
          <li key={index}>
            <strong>Tarea:</strong> {task.task}<br />
            <strong>Fecha:</strong> {task.date}<br />
            <strong>Hora de inicio:</strong> {task.startTime}<br />
            <strong>Hora de finalización:</strong> {task.endTime}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
