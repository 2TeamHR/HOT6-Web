import{     
    GET_ANNUAL, 
    POST_ANNUAL,
    DELETE_ANNUAL,
    GET_MYLEAVEINFO
    } from '../modules/LeaveModule.js';

export const callLeaveCategoryListAPI = () => {
    
    let requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/v1/annual/standardsManagement`;

    console.log('request', requestURL);

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
        .then(response => response.json());

        console.log('[ProduceAPICalls] callProductDetailAPI RESULT : ', result);
        if(result.status === 200){
            console.log('[ProduceAPICalls] callProductDetailAPI SUCCESS');
            dispatch({ type: GET_ANNUAL,  payload: result.data });
        }
        
    };
}

export const callLeaveRegistAPI = ({form}) => {
    
    console.log('[LeaveAPICalls] callLeaveRegistAPI Call');

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/v1/annual/standardsManagement`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            },
            body: form
        })
        .then(response => response.json());

        console.log('[LeaveAPICalls] callLeaveRegistAPI RESULT : ', result);

        dispatch({ type: POST_ANNUAL,  payload: result });
        
    };    
}

export const callLeaveDeleteAPI = ({leaveCategoryCode}) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/v1/annual/standardsManagement/${leaveCategoryCode}`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "Delete",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
        .then(response => response.json());

        dispatch({ type: DELETE_ANNUAL,  payload: result.data });        
    };
}

/* 마이페이지 내 휴가 정보 조회 API */
export const callGetMyLeaveInfoAPI = ({memberCode}) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/v1/mypage/main/${memberCode}`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
        .then(response => response.json());

        console.log('[LeaveAPICalls] callGetMemberAPI RESULT : ', result);

        dispatch({ type: GET_MYLEAVEINFO,  payload: result });

    };
}