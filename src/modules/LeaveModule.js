import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_ANNUAL             = 'annual/GET_ANNUAL';
export const POST_ANNUAL            = 'annual/POST_ANNUAL';
export const Delete_ANNUAL             = 'annual/Delete_ANNUAL';

const actions = createActions({
    [GET_ANNUAL]: () => {},
    [POST_ANNUAL]: () => {},
    [Delete_ANNUAL]: () => {}
});

/* 리듀서 */
const leaveReducer = handleActions(
    {
        [GET_ANNUAL]: (state, { payload }) => {
            
            return payload;
        },
        [POST_ANNUAL]: (state, { payload }) => {

            return payload;
        },
        [Delete_ANNUAL]: (state, { payload }) => {

            return payload;
        }        
    },
    initialState
);

export default leaveReducer;