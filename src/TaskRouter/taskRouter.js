import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskForm from '../TaskForm/taskForm';
import TaskList from '../TaskList/taskList';
//import { TaskProvider } from '../Context/TaskContext';
import { Provider } from 'react-redux'; 
import store from '../store';

function AppRouter() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route  path="/" element={<><TaskForm /><TaskList /></>} />
          <Route path="/task" Component={TaskList} />
        </Routes>
      </Router>
      </Provider>
  
  );
}

export default AppRouter;
