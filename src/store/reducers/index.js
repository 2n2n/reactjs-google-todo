import { combineReducers } from 'redux';
import tasks from './tasksReducers';
import inputMode from './inputModeReducers';
import activeTask from './activeTaskReducer';

export default combineReducers({
    tasks,
    inputMode,
    activeTask
});