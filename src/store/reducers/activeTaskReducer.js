import { SELECT_TASK_ITEM } from "../actions/actionTypes";

const activeTask = (state = null, action) => {
    if (action.type === SELECT_TASK_ITEM) {
        state = action.id
    }
    
    return state;
}

export default activeTask;