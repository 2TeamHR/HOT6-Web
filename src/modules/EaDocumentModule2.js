import {createActions, handleActions} from 'redux-actions';

const initialState = [];


export const GET_LEAVE_DOCUMENT = 'ea/GET_LEAVE_DOCUMENT'



const actions = createActions({

    [GET_LEAVE_DOCUMENT]: ()=> {},

});

const eaDocumentReducer2 = handleActions({

    [GET_LEAVE_DOCUMENT]: (state, {payload}) => {
        return payload;
    },
},
initialState
);

export default eaDocumentReducer2;