import { createActions, handleActions} from "redux-actions";


const initialState=[];


export const GET_MESSAGELIST                = 'message/GET_MESSAGELIST';
export const POST_MESSAGE                   = 'message/POST_MESSAGE';
export const GET_MESSAGE_RECEIVE_LIST       = 'message/GET_MESSAGE_SENT_LIST'
export const GET_MESSAGE_RECEIVER_COUNT     = 'message/GET_MESSAGE_RECEIVER_COUNT'
export const GET_MESSAGE_SENT_COUNT         = 'message/GET_MESSAGE_SENT_COUNT'     


const actions = createActions({

    [GET_MESSAGELIST] :                 () => {},
    [POST_MESSAGE] :                    () => {},
    [GET_MESSAGE_RECEIVE_LIST] :        () => {},
    [GET_MESSAGE_RECEIVER_COUNT] :      () => {},
    [GET_MESSAGE_SENT_COUNT] :          () => {}
})

const messageReducer = handleActions(

    {

        [GET_MESSAGELIST]: (state, {payload}) => {

            return payload;

        },

        [POST_MESSAGE]: (state, {payload}) => {

            return payload;

        },

        [GET_MESSAGE_RECEIVE_LIST]: (state, {payload}) => {

            return payload;

        },

        [GET_MESSAGE_RECEIVER_COUNT]: (state, {payload}) => {

            return payload;

        },

        [GET_MESSAGE_SENT_COUNT]: (state, {payload}) => {

            return payload;

        },



    },
    initialState
);

export default messageReducer;