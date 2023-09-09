import React, { useState } from 'react';
import {
  FormContainer,
  Title,
  StyledForm,
  StyledInput,
  StyledButton,
} from './taskFormStyles'; // Ajusta la ruta de importación según la ubicación de tu archivo de estilos
import { Link } from 'react-router-dom';
//import { useTaskContext } from '../Context/TaskContext'; 
import { useDispatch } from 'react-redux'; 
import { addTask } from '../actions';

function TaskForm() {
  //const { addTask } = useTaskContext();
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'task') {
      setTask(value);
    } else if (name === 'date') {
      setDate(value);
    } else if (name === 'startTime') {
      setStartTime(value);
    } else if (name === 'endTime') {
      setEndTime(value);
    }
  };
/*
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      const newTask = {
        task,
        date,
        startTime,
        endTime,
      };
      addTask(newTask); // Agrega la tarea al contexto
      setTask('');
      setDate('');
      setStartTime('');
      setEndTime('');
    }
  };*/
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      const newTask = {
        task,
        date,
        startTime,
        endTime,
      };
      dispatch(addTask(newTask));
      setTask('');
      setDate('');
      setStartTime('');
      setEndTime('');
    }
  };

  return (
      <FormContainer>
        <Title>Agregar Nueva Tarea</Title>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            name="task"
            placeholder="Escribe una nueva tarea"
            value={task}
            onChange={handleInputChange}
          />
          <StyledInput
            type="date"
            name="date"
            placeholder="Fecha"
            value={date}
            onChange={handleInputChange}
          />
          <StyledInput
            type="time"
            name="startTime"
            placeholder="Hora de inicio"
            value={startTime}
            onChange={handleInputChange}
          />
          <StyledInput
            type="time"
            name="endTime"
            placeholder="Hora de finalización"
            value={endTime}
            onChange={handleInputChange}
          />
          <StyledButton type="submit">Agregar</StyledButton>
        </StyledForm>
        <Link to="/task">
          <StyledButton type="button">Ir a TaskList</StyledButton>
        </Link>
      </FormContainer>
  );
}

export default TaskForm;
