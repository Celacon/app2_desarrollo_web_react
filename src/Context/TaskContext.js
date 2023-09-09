import React, { createContext, useContext, useState } from 'react';

const TaskContext = createContext();

export function useTaskContext() {
  return useContext(TaskContext);
}

export function TaskProvider({ children }) {
  const [taskList, setTaskList] = useState([]);

  const addTask = (newTask) => {
    setTaskList([...taskList, newTask]);
  };

  return (
    <TaskContext.Provider value={{ taskList, addTask }}>
      {children}
    </TaskContext.Provider>
  );
}
