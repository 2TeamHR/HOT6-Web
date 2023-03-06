import { GET_PAYMENT_SALARY, GET_SALARY } from '../modules/SalaryModule.js'

export const callGetMySalaryAPI = ({year}, {month}) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/v1/salary/check/${year}/${month}`;

    console.log(`request`, requestURL);

    return async(dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
            },
            body: JSON.stringify({
                year: year.paymentDate,
                month: month.paymentDate
            })
        })
        .then(response => response.json());

        if(result.status === 200) {
            console.log('[SalaryAPICalls] callGetMySalaryAPI RESULT : ', result);
            dispatch({ type: GET_SALARY, payload: result.data });
        }
    }
}   


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

        if(result.status === 200) {
            console.log('[SalaryAPICalls] callGetPaymentSalaryAPI RESULT : ', result);
            dispatch({ type: GET_PAYMENT_SALARY, payload: result.data });
        }

    };
}
