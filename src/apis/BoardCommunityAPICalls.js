import {GET_BOARDCOMMUNITY, POST_BOARDCOMMUNITY, GET_COMMUNITYDETAIL, PUT_COMMUNITY,} from '../modules/BoardCommunityModule';

export const callBoardCommunityListAPI = () => {

    let requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/v1/board/community`;

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

        console.log('[BoardCommunityAPICalls] callBoardCommunityDetailAPI RESULT : ', result);
        if (result.status === 200) {
            console.log('[BoardCommunityAPICalls] callBoardCommunityDetailAPI SUCCESS');
            dispatch({type: GET_BOARDCOMMUNITY, payload: result.data});
        }

    };
}

/* 커뮤니티 상세내용 조회 API */
export const callGetCommunityAPI = ({boardCode}) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/v1/board/community/${boardCode}`;

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

        console.log('[BoardCommunityAPICalls] callGetCommunityAPI RESULT : ', result);

        dispatch({ type: GET_COMMUNITYDETAIL,  payload: result });

    };
}

export const callBoardCommunityWriteAPI = ({form}) => {
    console.log('[ProduceAPICalls] callCommunityWriteAPI Call');

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/v1/board/community/write`;

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
                'boardTitle': form.get('boardTitle'),
                'boardContent': form.get('boardContent')
            })
        })
            .then(response => response.json());

        console.log('[ProduceAPICalls] callCommunityWriteAPI RESULT : ', result);

        dispatch({ type: POST_BOARDCOMMUNITY,  payload: result });

    };
}


/* 커뮤니티 수정 */
export const callUpdateCommunityAPI = ({form, boardCode}) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/v1/board/community/${boardCode}`;

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

        console.log('[BoardCommunityAPICalls] callUpdateCommunityAPI RESULT : ', result);

        dispatch({ type: PUT_COMMUNITY,  payload: result });

    };
}