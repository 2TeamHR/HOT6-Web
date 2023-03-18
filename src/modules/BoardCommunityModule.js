import {createActions, handleActions} from 'redux-actions';

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_BOARDCOMMUNITY = 'boardCommunity/GET_BOARDCOMMUNITY';
export const POST_BOARDCOMMUNITY = 'boardCommunity/POST_BOARDCOMMUNITY';
export const PUT_BOARDCOMMUNITY = 'boardCommunity/PUT_BOARDCOMMUNITY';

const actions = createActions({
    [GET_BOARDCOMMUNITY]: () => {},
    [POST_BOARDCOMMUNITY]: () => {},
    [PUT_BOARDCOMMUNITY]: () => {}
});

/* 리듀서 */
const boardCommunityReducer = handleActions(
    {
        [GET_BOARDCOMMUNITY]: (state, {payload}) => {

            return payload;
        },
        [POST_BOARDCOMMUNITY]: (state, {payload}) => {

            return payload;
        },
        [PUT_BOARDCOMMUNITY]: (state, {payload}) => {

            return payload;
        },
    },
    initialState
);

export default boardCommunityReducer;