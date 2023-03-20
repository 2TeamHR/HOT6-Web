import {createActions, handleActions} from 'redux-actions';

const initialState = [];

export const GET_EADOCUMENT_LIST = 'ea/GET_EADOCUMENT_LIST'
export const GET_FINISH_LEAVE_LIST = 'ea/GET_FINISH_LEAVE_LIST'



const actions = createActions({

    [GET_EADOCUMENT_LIST]: ()=> {},
    [GET_FINISH_LEAVE_LIST]: ()=> {},


});

const eaDocumentReducer = handleActions({
    [GET_EADOCUMENT_LIST]: (state, {payload}) => {
        return payload;
    },
    [GET_FINISH_LEAVE_LIST]: (state, {payload}) => {
        return payload;
    },
},
initialState
);

export default eaDocumentReducer;