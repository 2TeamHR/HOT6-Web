import { createActions, handleActions } from 'redux-actions';

const initialState = [
    {
        
    }
]

export const GET_SALARY = 'salarycheck/GET_SALARY';
 
const actions = createActions({
    [GET_SALARY]: () => {}
})

const salaryReducer = handleActions(
    {
        [GET_SALARY]: (state, { payload }) => {
            console.log(`payload : `, payload);

            return payload;
        }
    },
    initialState
);

export default salaryReducer;