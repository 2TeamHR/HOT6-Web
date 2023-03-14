import { GET_MYATTENDANCE } from '../modules/AttendanceModule';

export const callMyAttendanceListAPI = ({memberCode}) => {

    let requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/v1/mypage/attendance/${memberCode}`;

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

        console.log('[AttendanceAPICalls] callProductDetailAPI RESULT : ', result);
        if(result.status === 200){
            console.log('[AttendanceAPICalls] callProductDetailAPI SUCCESS');
            dispatch({ type: GET_MYATTENDANCE,  payload: result.data });
        }
        
    };
}