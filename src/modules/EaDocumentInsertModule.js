import {createActions, handleActions} from 'redux-actions';

const initialState = [];

// 카테고리별 단 건에 대한 상세정보 조회 

export const POST_LEAVE_DOCUMENT = 'ea/POST_LEAVE_DOCUMENT'
export const POST_CERT_DOCUMENT = 'ea/POST_CERT_DOCUMENT'
export const POST_SALARY_DOCUMENT = 'ea/POST_SALARY_DOCUMENT'
export const POST_RETIRE_DOCUMENT = 'ea/POST_RETIRE_DOCUMENT'
export const POST_DUTY_DOCUMENT = 'ea/POST_DUTY_DOCUMENT'
export const POST_LOA_DOCUMENT = 'ea/POST_LOA_DOCUMENT'
export const POST_RNSTT_DOCUMENT = 'ea/POST_RNSTT_DOCUMENT'

const actions = createActions({

    [POST_LEAVE_DOCUMENT]: ()=> {},
    [POST_CERT_DOCUMENT]: ()=> {},
    [POST_SALARY_DOCUMENT]: ()=> {},
    [POST_RETIRE_DOCUMENT]: ()=> {},
    [POST_DUTY_DOCUMENT]: ()=> {},
    [POST_LOA_DOCUMENT]: ()=> {},
    [POST_RNSTT_DOCUMENT]: ()=> {},

});

const eaDocumentInsertReducer = handleActions({

    [POST_LEAVE_DOCUMENT]: (state, {payload}) => {
        return payload;
    },
    [POST_CERT_DOCUMENT]: (state, {payload}) => {
        return payload;
    },
    [POST_SALARY_DOCUMENT]: (state, {payload}) => {
        return payload;
    },
    [POST_RETIRE_DOCUMENT]: (state, {payload}) => {
        return payload;
    },
    [POST_DUTY_DOCUMENT]: (state, {payload}) => {
        return payload;
    },
    [POST_LOA_DOCUMENT]: (state, {payload}) => {
        return payload;
    },
    [POST_RNSTT_DOCUMENT]: (state, {payload}) => {
        return payload;
    },

},
initialState
);

export default eaDocumentInsertReducer;