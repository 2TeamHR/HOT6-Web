import {
    GET_MEMBERCHART
} from '../modules/OrganizationModule';

/* 전체 사원 리스트 조회 API */
export const callGetMemberAPI = () => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/v1/organization/chart`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
            }
        })
            .then(response => response.json());

        dispatch({ type: GET_MEMBERCHART,  payload: result.data });

    };
}