import {
    ADD_TODO,
    EDIT_TODO,
    DELETE_TODO,
    REMOVE_AND_CLEAR_STATE
} from '../actions/actionTypes';

const tasks = (state = [], action) => { 
    switch (action.type) {
        case ADD_TODO:
            state.unshift(action.item);
            return state;
        case EDIT_TODO:
            state = state.map((item) => {
                if (item === action.item) return action.item;
                return item;
            });
            return state;
        case REMOVE_AND_CLEAR_STATE:
        case DELETE_TODO:
                return state.filter( (item) => item !== action.item )
        default:
            return state;
    }
}

export default tasks;