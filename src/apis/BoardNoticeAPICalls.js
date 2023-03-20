import {GET_BOARDNOTICE, POST_BOARDNOTICE, GET_NOTICEDETAIL, PUT_NOTICE,} from '../modules/BoardNoticeModule';

export const callBoardNoticeListAPI = () => {

    let requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/v1/board/notice`;

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

/* 공지사항 상세내용 조회 API */
export const callGetNoticeAPI = ({noticeCode}) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/v1/board/notice/${noticeCode}`;

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

        console.log('[BoardNoticeAPICalls] callGetNoticeAPI RESULT : ', result);

        dispatch({ type: GET_NOTICEDETAIL,  payload: result });

    };
}

export const callBoardNoticeWriteAPI = ({form}) => {
    console.log('[ProduceAPICalls] callNoticeWriteAPI Call');

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/v1/board/notice/write`;

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


/* 공지사항 수정 */
export const callUpdateNoticeAPI = ({form, noticeCode}) => {
    console.log('[BoardNoticeAPICalls] callUpdateNoticeAPI Call');
    console.log('noticeCode', noticeCode);
    console.log('form', form);

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/v1/board/notice/${noticeCode}`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "PUT",
            headers: {
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            },
            body: form
        })
            .then(response => response.json());

        console.log('[BoardNoticeAPICalls] callUpdateNoticeAPI RESULT : ', result);

        dispatch({ type: PUT_NOTICE,  payload: result });

    };
}