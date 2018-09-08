import { ADD_TODO, EDIT_TODO, DELETE_TODO, TOGGLE_CHECK_TODO, SELECT_TASK_ITEM, EDIT_MODE_ON } from './actionTypes';
import { toggleEditMode } from './ToDoStateAction';
let itemCount = 0;

export const addToDo = (itemText = "") => { 
    let itemId = itemCount++;
    return (dispatch) => {
        dispatch(toggleEditMode(EDIT_MODE_ON));
        dispatch(selectItem(itemId));
        dispatch({
            type: ADD_TODO,
            id: itemId,
            text: itemText
        });
    }
};

export const editToDo = (itemId, itemText) => ({
    type: EDIT_TODO,
    id: itemId,
    text: itemText
});

export const deleteToDo = (itemId) => ({
    type: DELETE_TODO,
    id: itemId
});

export const toggleCheckToDo = (itemId) => ({
    type: TOGGLE_CHECK_TODO,
    id: itemId
});

export const selectItem = (itemId) => ({
    type: SELECT_TASK_ITEM,
    id: itemId
})