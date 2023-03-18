import {createActions, handleActions} from 'redux-actions';

const initialState = [];

export const GET_EADOCUMENT = 'ea/GET_EADOCUMENT'


const actions = createActions({
    [GET_EADOCUMENT]: ()=> {}
});

const eaDocumentReducer = handleActions({
    [GET_EADOCUMENT]: (state, {payload}) => {
        return payload;
    },
},
initialState
);

export default eaDocumentReducer;