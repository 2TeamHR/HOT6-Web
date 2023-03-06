import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_ANNUAL             = 'annual/GET_ANNUAL';
export const GET_PRODUCTS           = 'product/GET_PRODUCTS';
export const GET_PRODUCTS_MEAL      = 'product/GET_PRODUCTS_MEAL';
export const GET_PRODUCTS_DESSERT   = 'product/GET_PRODUCTS_DESSERT';
export const GET_PRODUCTS_BEVERAGE  = 'product/GET_PRODUCTS_BEVERAGE';
export const POST_ANNUAL             = 'annual/POST_ANNUAL';
export const PUT_PRODUCT            = 'product/PUT_PRODUCT';

const actions = createActions({
    [GET_ANNUAL]: () => {},
    [GET_PRODUCTS]: () => {},
    [GET_PRODUCTS_MEAL]: () => {},
    [GET_PRODUCTS_DESSERT]: () => {},
    [GET_PRODUCTS_BEVERAGE]: () => {},
    [POST_ANNUAL]: () => {},
    [PUT_PRODUCT]: () => {}
});

/* 리듀서 */
const leaveReducer = handleActions(
    {
        [GET_ANNUAL]: (state, { payload }) => {
            
            return payload;
        },
        [GET_PRODUCTS]: (state, { payload }) => {
            
            return payload;
        },
        [GET_PRODUCTS_MEAL]: (state, { payload }) => {
            
            return payload;
        },
        [GET_PRODUCTS_DESSERT]: (state, { payload }) => {
            
            return payload;
        },
        [GET_PRODUCTS_BEVERAGE]: (state, { payload }) => {
            
            return payload;
        },
        [POST_ANNUAL]: (state, { payload }) => {

            return payload;
        },
        [PUT_PRODUCT]: (state, { payload }) => {

            return payload;
        }        
    },
    initialState
);

export default leaveReducer;