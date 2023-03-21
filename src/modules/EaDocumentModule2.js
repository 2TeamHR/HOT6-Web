import {createActions, handleActions} from 'redux-actions';

const initialState = [];

// 카테고리별 단 건에 대한 상세정보 조회 

export const GET_LEAVE_DOCUMENT = 'ea/GET_LEAVE_DOCUMENT'
export const GET_CERT_DOCUMENT = 'ea/GET_CERT_DOCUMENT'
export const GET_SALARY_DOCUMENT = 'ea/GET_SALARY_DOCUMENT'
export const GET_RETIRE_DOCUMENT = 'ea/GET_RETIRE_DOCUMENT'
export const GET_DUTY_DOCUMENT = 'ea/GET_DUTY_DOCUMENT'
export const GET_LOA_DOCUMENT = 'ea/GET_LOA_DOCUMENT'
export const GET_RNSTT_DOCUMENT = 'ea/GET_RNSTT_DOCUMENT'

const actions = createActions({

    [GET_LEAVE_DOCUMENT]: ()=> {},
    [GET_CERT_DOCUMENT]: ()=> {},
    [GET_SALARY_DOCUMENT]: ()=> {},
    [GET_RETIRE_DOCUMENT]: ()=> {},
    [GET_DUTY_DOCUMENT]: ()=> {},
    [GET_LOA_DOCUMENT]: ()=> {},
    [GET_RNSTT_DOCUMENT]: ()=> {},

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
    [GET_RETIRE_DOCUMENT]: (state, {payload}) => {
        return payload;
    },
    [GET_DUTY_DOCUMENT]: (state, {payload}) => {
        return payload;
    },
    [GET_LOA_DOCUMENT]: (state, {payload}) => {
        return payload;
    },
    [GET_RNSTT_DOCUMENT]: (state, {payload}) => {
        return payload;
    },

},
initialState
);

export default eaDocumentReducer2;