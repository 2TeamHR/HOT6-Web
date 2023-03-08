import { createActions, handleActions} from "redux-actions";


const initialState=[];


export const GET_MESSAGELIST       = 'message/GET_MESSAGELIST';
export const POST_MESSAGE          = 'message/POST_MESSAGE';


const actions = createActions({

    [GET_MESSAGELIST] : () => {},
    [POST_MESSAGE] : () => {},


})

const messageReducer = handleActions(

    {

        [GET_MESSAGELIST]: (state, {payload}) => {

            return payload;

        },

        [POST_MESSAGE]: (state, {payload}) => {

            return payload;

        },

    },
    initialState
);

export default messageReducer;