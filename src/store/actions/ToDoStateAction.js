import {
    EDIT_MODE_ON,
    CLEAR_STATE,
    REMOVE_AND_CLEAR_STATE
} from './actionTypes';
/*
Everything about the state of the to do app is declared here.
*/


export const selectAndEditItem = (id) => {
    return function (dispatch) {
        dispatch({
            type: EDIT_MODE_ON
        });
    }
};

export const clearState = () => {
    return { type: CLEAR_STATE }
}

export const removeItemAndClearSelected = (id) => {
    return {
        type: REMOVE_AND_CLEAR_STATE,
        id: id
    }
}
