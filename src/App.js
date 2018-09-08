import React from 'react';
import AppHeader from "./components/AppHeader/AppHeader";
import AppAddTask from './components/AppAddTask/AppAddTask';
import AppTaskList from './components/AppTaskList/AppTaskList';
import './App.css';


const App = () => (
  <div>
    <AppHeader />
    <div>
      <AppAddTask />
      <AppTaskList />
    </div>
  </div>
);

export default App;