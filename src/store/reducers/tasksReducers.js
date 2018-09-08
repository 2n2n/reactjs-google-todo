import {
    ADD_TODO,
    EDIT_TODO,
    DELETE_TODO,
    TOGGLE_CHECK_TODO
} from '../actions/actionTypes';

const tasks = (state = [], action) => { 
    switch (action.type) {
        case ADD_TODO:
            state.unshift({
                id: action.id,
                text: action.text
            })
            return state;
        case EDIT_TODO:
            state = state.map((item) => {
                if (item.id === action.id) item.text = action.text;
                return item;
            });
            console.log('new state', state, action)
            return state;
        case DELETE_TODO:
                return state.filter( (item) => item.id !== action.id )
        case TOGGLE_CHECK_TODO:
            break;
        default:
            return state;
    }
}

export default tasks;