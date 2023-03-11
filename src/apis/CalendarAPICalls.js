import{     
    GET_CALENDAR
} from '../modules/CalendarModule';

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