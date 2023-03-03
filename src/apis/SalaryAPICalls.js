import { GET_PAYMENT_SALARY } from '../modules/SalaryModule.js'

export const callGetPaymentSalaryAPI = ({paymentsYn}) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/v1/salary/check/${paymentsYn}`;

    console.log('requst', requestURL);
    
    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
            }
        })
        .then(response => response.json());

        console.log('[SalaryApiCalls] callGetPaymentSalaryAPI RESULT : ', result);
        if(result.status === 200) {
            console.log('[SalaryAPICalls] callGetPaymentSalaryAPI RESULT : ', result);
            dispatch({ type: GET_PAYMENT_SALARY, payload: result.data });
        }

    };
}
