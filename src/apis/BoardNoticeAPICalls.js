import {
    GET_BOARDNOTICE,
    POST_BOARDNOTICE,
    PUT_BOARDNOTICE
} from '../modules/BoardNoticeModule';

export const callBoardNoticeListAPI = () => {

    let requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/v2/board/notice`;

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

        console.log('[BoardNoticeAPICalls] callBoardNoticeDetailAPI RESULT : ', result);
        if (result.status === 200) {
            console.log('[BoardNoticeAPICalls] callBoardNoticeDetailAPI SUCCESS');
            dispatch({type: GET_BOARDNOTICE, payload: result.data});
        }

    };
}

export const callBoardNoticeWriteAPI = ({form}) => {
    console.log('[ProduceAPICalls] callNoticeWriteAPI Call');

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/v2/board/notice/write`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-type":"application/json",
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
            },
            body: JSON.stringify({
                'memberCode': form.get('memberCode'),
                'noticeTitle': form.get('noticeTitle'),
                'noticeContent': form.get('noticeContent')
            })
        })
        .then(response => response.json());

        console.log('[ProduceAPICalls] callNoticeWriteAPI RESULT : ', result);

        dispatch({ type: POST_BOARDNOTICE,  payload: result });

    };
}