import {
    GET_BOARDCOMMUNITY,
    POST_BOARDCOMMUNITY,
    PUT_BOARDCOMMUNITY
} from '../modules/BoardCommunityModule';

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
