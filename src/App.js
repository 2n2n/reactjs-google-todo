import React from 'react';
import './App.css';


import Divider from '@material-ui/core/Divider';

import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import TaskListComponent from './components/TaskListComponent/TaskListComponent';
import AddButtonComponent from './components/AddButtonComponent/AddButtonComponent';

const App = () => (
  <div>
    <HeaderComponent />
      <Divider />
      <AddButtonComponent />
      <TaskListComponent />
  </div>
);

export default App;