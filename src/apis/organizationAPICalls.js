import {
    GET_MEMBERCHART,
    GET_RETIREECHART,
    GET_CERTIFICATION
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

/* 퇴직 사원 리스트 조회 API */
export const callGetRetireeMemberAPI = () => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/v1/organization/retireeChart`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
            }
        })
            .then(response => response.json());

        dispatch({ type: GET_RETIREECHART,  payload: result.data });

    };
}

/* 증명서 리스트 조회 */
export const callGetCertificationList = ({memberCode}) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/ea/eaList/cert/${memberCode}`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
            }
        })
            .then(response => response.json());

        if(result.status === 200) {
            console.log('[callGetCertificationAPI] callGetCertificationAPI RESULT : ', result);
            dispatch({ type: GET_CERTIFICATION, payload: result.data });
        }

    };
}