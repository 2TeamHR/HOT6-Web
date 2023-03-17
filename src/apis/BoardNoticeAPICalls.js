import {GET_BOARDNOTICE, GET_NOTICEDETAIL,} from '../modules/BoardNoticeModule';

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

/* 공지사항 상세내용 조회 API */
export const callGetNoticeAPI = ({noticeCode}) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/v2/board/notice/detail/${noticeCode}`;

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
