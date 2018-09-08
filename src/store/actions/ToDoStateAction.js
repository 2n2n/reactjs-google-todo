import { EDIT_MODE_OFF } from './actionTypes';
/*
Everything about the state of the to do app is declared here.
*/

export const toggleEditMode = (type = EDIT_MODE_OFF) => ({
    type: type
})