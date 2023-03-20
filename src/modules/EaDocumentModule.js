import {createActions, handleActions} from 'redux-actions';

const initialState = [];

export const GET_EADOCUMENT_LIST = 'ea/GET_EADOCUMENT_LIST'
export const GET_FINISH_LEAVE_LIST = 'ea/GET_FINISH_LEAVE_LIST'
export const GET_LEAVEPAYMENTLIST = 'ea/GGET_LEAVEPAYMENTLIST'


const actions = createActions({

    [GET_EADOCUMENT_LIST]: ()=> {},
    [GET_FINISH_LEAVE_LIST]: ()=> {},
    [GET_LEAVEPAYMENTLIST]: ()=> {}
});

const eaDocumentReducer = handleActions({
    [GET_EADOCUMENT_LIST]: (state, {payload}) => {
        return payload;
    },
    [GET_FINISH_LEAVE_LIST]: (state, {payload}) => {
        return payload;
    },
    [GET_LEAVEPAYMENTLIST]: (state, {payload}) => {
        return payload;
    },
},
initialState
);

export default eaDocumentReducer;