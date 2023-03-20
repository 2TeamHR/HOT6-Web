import {createActions, handleActions} from 'redux-actions';

const initialState = [];


export const GET_LEAVE_DOCUMENT = 'ea/GET_LEAVE_DOCUMENT'
export const GET_CERT_DOCUMENT = 'ea/GET_CERT_DOCUMENT'
export const GET_SALARY_DOCUMENT = 'ea/GET_SALARY_DOCUMENT'



const actions = createActions({

    [GET_LEAVE_DOCUMENT]: ()=> {},
    [GET_CERT_DOCUMENT]: ()=> {},
    [GET_SALARY_DOCUMENT]: ()=> {},

});

const eaDocumentReducer2 = handleActions({

    [GET_LEAVE_DOCUMENT]: (state, {payload}) => {
        return payload;
    },
    [GET_CERT_DOCUMENT]: (state, {payload}) => {
        return payload;
    },
    [GET_SALARY_DOCUMENT]: (state, {payload}) => {
        return payload;
    },
},
initialState
);

export default eaDocumentReducer2;