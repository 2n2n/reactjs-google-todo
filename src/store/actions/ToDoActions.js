import {
    ADD_TODO,
    EDIT_TODO,
    DELETE_TODO,
    SAVE_TODO,
    EDIT_MODE_ON,
    SELECT_TASK_ITEM
} from './actionTypes';
import { clearState } from './ToDoStateAction';

export const addToDo = (id, text = null) => { 
    let item = {
        id: id,
        text: text
    };
    
    return function (dispatch) { 
        // add an item to the list..
        dispatch({
            type: ADD_TODO,
            item: item
        });
        // select the item
        dispatch({
            type: SELECT_TASK_ITEM,
            item: item
        })
    }
};

export const saveToDo = (item) => {
    return function (dispatch) {
        // save the changes
        dispatch({
            type: SAVE_TODO,
            item: item
        });
        dispatch(clearState())
    };
}
export const editToDo = (item) => { 
    return function (dispatch) {
        dispatch({
            type: EDIT_TODO,
            item: item
        });
        dispatch({
            type: EDIT_MODE_ON
        })
    }
};

export const deleteToDo = (item) => ({
    type: DELETE_TODO,
    item: item
});

