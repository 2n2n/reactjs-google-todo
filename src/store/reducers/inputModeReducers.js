import {
    // EDIT_TODO,
    EDIT_MODE_ON,
    SAVE_TODO,
    CLEAR_STATE
} from '../actions/actionTypes';

const inputMode = (state = false, action) => {
    switch (action.type) {
        case EDIT_MODE_ON:
            return true;  
        case SAVE_TODO:
            return false;
        case CLEAR_STATE:
            return false;
        default:
            return state;
            
    }
}

export default inputMode;