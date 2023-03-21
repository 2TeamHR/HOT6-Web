import {createActions, handleActions} from 'redux-actions';

const initialState = [];

export const GET_EADOCUMENT_LIST = 'ea/GET_EADOCUMENT_LIST'
export const GET_EADOCUMENT_WAITING_LIST = 'ea/GET_EADOCUMENT_WAITING_LIST'
export const GET_EADOCUMENT_PROCESS_LIST = 'ea/GET_EADOCUMENT_PROCESS_LIST'
export const GET_EADOCUMENT_FINISHED_LIST = 'ea/GET_EADOCUMENT_FINISHED_LIST'
export const GET_EADOCUMENT_RETURN_LIST = 'ea/GET_EADOCUMENT_RETURN_LIST'
export const GET_EADOCUMENT_DRAFT_LIST = 'ea/GET_EADOCUMENT_DRAFT_LIST'

export const GET_FINISH_LEAVE_LIST = 'ea/GET_FINISH_LEAVE_LIST'



const actions = createActions({

    [GET_EADOCUMENT_LIST]: ()=> {},

    [GET_FINISH_LEAVE_LIST]: ()=> {},

    [GET_EADOCUMENT_WAITING_LIST]: ()=> {},

    [GET_EADOCUMENT_PROCESS_LIST]: ()=> {},

    [GET_EADOCUMENT_FINISHED_LIST]: ()=> {},

    [GET_EADOCUMENT_RETURN_LIST]: ()=> {},

    [GET_EADOCUMENT_DRAFT_LIST]: ()=> {},

});

const eaDocumentReducer = handleActions({

    [GET_EADOCUMENT_LIST]: (state, {payload}) => {
        return payload;
    },
    [GET_FINISH_LEAVE_LIST]: (state, {payload}) => {
        return payload;
    },
    [GET_EADOCUMENT_WAITING_LIST]: (state, {payload}) => {
        return payload;
    },
    [GET_EADOCUMENT_PROCESS_LIST]: (state, {payload}) => {
        return payload;
    },
    [GET_EADOCUMENT_FINISHED_LIST]: (state, {payload}) => {
        return payload;
    },
    [GET_EADOCUMENT_RETURN_LIST]: (state, {payload}) => {
        return payload;
    },
    [GET_EADOCUMENT_DRAFT_LIST]: (state, {payload}) => {
        return payload;
    },

},
initialState
);

export default eaDocumentReducer;