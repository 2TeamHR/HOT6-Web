import { 
    GET_MYATTENDANCE
    , GET_MYPAGESELECTATTENDANCE
    , GET_REASONFILE, POST_REASON
 } from '../modules/AttendanceModule';


/* 마이페이지 내 내 근태 이력 조회 */
export const callMyAttendanceListAPI = ({memberCode, startIndex, endIndex}) => {

    let requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/v1/attendance/mypage/history/${memberCode}/${startIndex}/${endIndex}`;

    console.log('request', requestURL);

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            }
        })
        .then(response => response.json());

        if(result.status === 200){
            console.log('');
            dispatch({ type: GET_MYATTENDANCE,  payload: result.data });
        }
    };
}

export const callCreateReasonAPI = ({form}) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/v1/attendance/mypage/history/reason/create`;

    const entries = form.entries();
        for (const [key, value] of entries) {
        console.log(`${key}: ${value}`);
        }

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

        console.log('[AttendanceAPICalls] callCreateReasonAPI RESULT : ', result);

        dispatch({ type: POST_REASON,  payload: result });
    };
}

export const callGetReasonFileAPI = ({commuteNo}) => {
    let requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/v1/attendance/mypage/history/reason/${commuteNo}`;

    console.log('request', requestURL);

    return async (dispatch, getState) => {

        try {
        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                // "Content-Type": "multipart/form-data",
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            }
        })
        .then(response => response.json())
        console.log(result.data);
        if (result.status === 200) {
            console.log('[AttendanceAPICalls] callGetReasonFileAPI RESULT : ', result.data);
            dispatch({ type: GET_REASONFILE, payload: result.data });
            return result.data;
        }
    } catch(error) {
            console.log('Error downloading file:', error);
            return false;
        };
    };
}

/* 마이페이지 내 캘린더 근태 보기 */
export const callMyPageSelectAttendanceListAPI = ({memberCode}) => {

    let requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/v1/attendance/myPageSelectAttendance/${memberCode}`;

    console.log('request', requestURL);

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            }
        })
            .then(response => response.json());

        console.log('[AttendanceAPICalls] callMyPageSelectAttendanceListAPI RESULT : ', result);
        if(result.status === 200){
            console.log('[AttendanceAPICalls] callMyPageSelectAttendanceListAPI SUCCESS');
            dispatch({ type: GET_MYPAGESELECTATTENDANCE,  payload: result.data });
        }
    };
}