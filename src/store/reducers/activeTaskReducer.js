import {
    EDIT_TODO,
    SELECT_TASK_ITEM,
    CLEAR_STATE,
    // REMOVE_AND_CLEAR_STATE
} from "../actions/actionTypes";

const activeTask = (state = null, action) => {
    switch (action.type) {
        case SELECT_TASK_ITEM:
        case EDIT_TODO:
            return action.item;
        case CLEAR_STATE:
            state = null;
            return state;
        default: 
            return state
    }
}

export default activeTask;