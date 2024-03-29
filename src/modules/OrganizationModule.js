import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_MEMBERCHART     = 'organization/GET_MEMBERCHART';
export const GET_RETIREECHART     = 'organization/GET_RETIREECHART';
export const GET_CERTIFICATION = 'organization/GET_CERTIFICATION';


const actions = createActions({
    [GET_MEMBERCHART]: () => {},
    [GET_RETIREECHART]: () => {},
    [GET_CERTIFICATION]: () => {},
});

/* 리듀서 */
const organizationReducer = handleActions(
    {
        [GET_MEMBERCHART]: (state, { payload }) => {

            return payload;
        },
        [GET_RETIREECHART]: (state, { payload }) => {

            return payload;
        },
        [GET_CERTIFICATION]: (state, { payload }) => {

            return payload;
        }
    },
    initialState
);

export default organizationReducer;