import React from 'react';
//import { useTaskContext } from '../Context/TaskContext'; 
import { useSelector, useDispatch } from 'react-redux';
import { clearLocalStorage } from '../actions'; 
import { Link } from 'react-router-dom';
import { Button, ButtonI} from '../UI/Button/Button';
import { Iqcard } from '../UI/Card/Card';

function TaskList() {
  //const { taskList } = useTaskContext(); // Obtén el arreglo taskList del contexto
  const taskList = useSelector((state) => state.taskList);
  const dispatch = useDispatch();

  const handleClearLocalStorage = () => {
    dispatch(clearLocalStorage());
  };

  return (
    <Iqcard>
      <h2>Lista de Tareas</h2>
      <Button onClick={handleClearLocalStorage}>Limpiar Local Storage</Button>
      <Link to="/">
        <ButtonI>Ingresar</ButtonI>
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
    </Iqcard>
  );
}

export default TaskList;
