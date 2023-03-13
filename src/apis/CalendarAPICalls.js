import{     
    GET_CALENDAR
    , POST_CALENDAR
    // , PUT_CALENDAR
    , DELETE_CALENDAR
} from '../modules/CalendarModule';

/* 메인 캘린더 조회 API */
export const callMainCalendarListAPI = () => {

    let requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/v1/calendar/main`;

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

        console.log('[calendarAPICalls] callCalendarAPI RESULT : ', result);
        if(result.status === 200){
            console.log('[calendarAPICalls] callCalendarAPI SUCCESS');
            dispatch({ type: GET_CALENDAR,  payload: result.data });
        }
    };
}

/* 메인 캘린더 일정 추가 API */
export const callCalendarInsertAPI = ({form}) => {
    

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/v1/calendar/addSchedule`;

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

        if(result.status === 200){
            console.log('[callCalendarInsertAPICalls] callCalendarInsertAPI SUCCESS');
            dispatch({ type: POST_CALENDAR,  payload: result });
        } 
    };    
}

/* 메인 캘린더 일정 삭제 API */
export const callCalendarDeleteAPI = ({calendarCode}) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/v1/calendar/delete/${calendarCode}`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
        .then(response => response.json());

        if(result.status === 200){
            console.log('[callCalendarDeleteAPICalls] callCalendarDeleteAPI SUCCESS');
            dispatch({ type: DELETE_CALENDAR,  payload: result.data });      
        } 
    };
}