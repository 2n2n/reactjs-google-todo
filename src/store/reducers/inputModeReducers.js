import { EDIT_MODE_OFF, EDIT_MODE_ON } from '../actions/actionTypes';

const inputMode = (state = false, action) => {
    switch (action.type) {
        case EDIT_MODE_ON:
            return true;    
        case EDIT_MODE_OFF:
            return false;
        default:
            return state;
            
    }
}

export default inputMode;