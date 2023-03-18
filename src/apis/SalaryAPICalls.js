import { GET_PAYMENT_SALARY, 
        GET_SALARY, 
        GET_SALARY_MODAL,
        GET_SEVERANCE_SALARY, 
        GET_MEMBERCODE_SALARY,
        GET_MEMBERCODE_BONUS,
        GET_BONUS_SALARY,
        GET_BONUS_MODAL,
        POST_SALARY,
        PUT_SALARY,
        PUT_BONUS,
} from '../modules/SalaryModule.js'


/* 날짜에 해당하는 내 급여 조회 */
export const callGetMySalaryAPI = ({memberCode, year, month}) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/v1/salary/check/${memberCode}/${year}/${month}`;

    return async(dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
            },
        
        })
        .then(response => response.json());

        if(result.status === 200) {
            console.log('[SalaryAPICalls] callGetMySalaryAPI RESULT : ', result);
            dispatch({ type: GET_SALARY, payload: result.data });
        }
    }
}   

/* 지급여부와 날짜에 따른 급여 목록 조회 */
export const callGetPaymentSalaryAPI = ({year, month, paymentsYn}) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/v1/salary/check/all/${year}/${month}/${paymentsYn}`;

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
            console.log('[GetPaymentSalaryAPICalls] callGetPaymentSalaryAPI RESULT : ', result);
            dispatch({ type: GET_PAYMENT_SALARY, payload: result.data });
        }

    };
}

/* 급여번호 입력받아 해당하는 급여 상세정보 조회 */
export const callGetSalaryModalAPI = ({selectedSalaryCode}) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/v1/salary/check/detail/${selectedSalaryCode}`;

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
            console.log('[GetSalaryModalAPICalls] callSalaryModalAPI RESULT : ', result);
            dispatch({ type: GET_SALARY_MODAL, payload: result.data });
        }

    };
}

/* 사원번호 입력받아 이번 달 급여 정보 조회 */
export const callGetMemberCodeSalaryAPI = ({memberCode}) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/v1/salary/check/insert/${memberCode}`;

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
            console.log('[GetMemberCodeAPICalls] callGetPaymentSalaryAPI RESULT : ', result);
            dispatch({ type: GET_MEMBERCODE_SALARY, payload: result.data });
        }

    };
}


/* 지급여부에 따른 퇴직금 목록 조회 */
export const callGetSeverancePaymentAPI = ({severancePaymentsYN, year, month}) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/v1/salary/severance/${severancePaymentsYN}/${year}/${month}`;

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
            console.log('[GetPaymentsAPICalls] callGetPaymentSalaryAPI RESULT : ', result);
            dispatch({ type: GET_SEVERANCE_SALARY, payload: result.data });
        }

    };
}


/* memberCode로 입력받은 급여정보를 명단에 추가 */
export const callInsertSalaryAPI = (memberInfo) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/v1/salary/month/insert`;

    return async (dispatch, getState) => {
        
        const result = await fetch(requestURL, {
            method: "post",
            headers: {
                "Accept": "*/*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(memberInfo)

            
        })
        .then(response => response.json()).catch((error) => {
            console.log('error================', error);
        });

        console.log('들어와라 RESULT : ', result);
        dispatch({ type: POST_SALARY, payload: result });

    };

}

/* 년도에 따른 상여 지급 명단 조회 */
export const callGetBonusSalaryAPI = ({year, month}) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/v1/salary/bonus/${year}/${month}`;

    return async(dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
            },
        
        })
        .then(response => response.json());

        if(result.status === 200) {
            console.log('[SalaryAPICalls] callGetBonusSalaryAPI RESULT : ', result);
            dispatch({ type: GET_BONUS_SALARY, payload: result.data });
        }
    }
}   

export const callGetBonusModalAPI = ({bonusCode}) => {
    
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/v1/salary/bonus/detail/${bonusCode}`;

    return async(dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
            },
        
        })
        .then(response => response.json());

        if(result.status === 200) {
            console.log('[SalaryAPICalls] callGetBonusModalAPI RESULT : ', result);
            dispatch({ type: GET_BONUS_MODAL, payload: result.data });
        }
    }
}   




/* memberCode를 입력하여 상여 정보 조회 */
export const callGetMemberCodeBonusAPI = ({memberCode}) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/v1/salary/bonus/check/${memberCode}`;

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
            console.log('[GetMemberCodeAPICalls] callGetPaymentSalaryAPI RESULT : ', result);
            dispatch({ type: GET_MEMBERCODE_BONUS, payload: result.data });
        }

    };
}

/* 입력받은 상여정보로 명단에 추가 */
export const callInsertBonusAPI = (memberInfo, salary) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/v1/salary/bonus/insert/${salary.salaryCode}`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
            },
            body: JSON.stringify(memberInfo), 
               
        })
        .then(response => response.json());

        if(result.status === 200) {
            console.log('[GetMemberCodeAPICalls] callGetPaymentSalaryAPI RESULT : ', result);
            dispatch({ type: PUT_BONUS, payload: result.data });
        }

    };
}

/* 급여 지급하여 지급여부 변경 */
export const callPutSalaryPaymentSalaryAPI = ({selectedSalaryCode}) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/v1/salary/check/all/${selectedSalaryCode}`;

    console.log(`api selectedSalaryCode ===> `, selectedSalaryCode);

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
            }
        })
        .then(response => response.json());

        if(result.status === 200) {
            console.log('[GetMemberCodeAPICalls] callGetPaymentSalaryAPI RESULT : ', result);
            dispatch({ type: PUT_SALARY, payload: result.data });
        }

    };
}