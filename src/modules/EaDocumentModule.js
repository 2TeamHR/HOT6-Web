import {createActions, handleActions} from 'redux-actions';

const initialState = [];

export const GET_EADOCUMENT_LIST = 'ea/GET_EADOCUMENT_LIST'
export const GET_FINISH_LEAVE_LIST = 'ea/GET_FINISH_LEAVE_LIST'
export const GET_LEAVE_DOCUMENT = 'ea/GET_LEAVE_DOCUMENT'
// export const GET_ = 'ea/GET_'
// export const GET_ = 'ea/GET_'
// export const GET_ = 'ea/GET_'
// export const GET_ = 'ea/GET_'
// export const GET_ = 'ea/GET_'
// export const GET_ = 'ea/GET_'
// export const GET_ = 'ea/GET_'


const actions = createActions({

    [GET_EADOCUMENT_LIST]: ()=> {},
    [GET_FINISH_LEAVE_LIST]: ()=> {},
    [GET_LEAVE_DOCUMENT]: ()=> {},

});

const eaDocumentReducer = handleActions({
    [GET_EADOCUMENT_LIST]: (state, {payload}) => {
        return payload;
    },
    [GET_FINISH_LEAVE_LIST]: (state, {payload}) => {
        return payload;
    },
    [GET_LEAVE_DOCUMENT]: (state, {payload}) => {
        return payload;
    },
},
initialState
);

export default eaDocumentReducer;