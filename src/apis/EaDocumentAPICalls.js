import {
    GET_EADOCUMENT_LIST
    , GET_FINISH_LEAVE_LIST
    , GET_LEAVEPAYMENTLIST
} from '../modules/EaDocumentModule';

export const callEaDocumentListAPI = () => {

    let requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/ea/eaList`;
    console.log('eaRequestUrl', requestURL);
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
            dispatch({type: GET_EADOCUMENT_LIST, payload:result.data});
            console.log(result.data);
        }
    };
}

export const callEaLeaveFinishListAPI = () => {

    let requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/ea/eaList`;
    console.log('eaRequestUrl', requestURL);
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
            dispatch({type: GET_FINISH_LEAVE_LIST, payload:result.data});
            console.log(result.data);
        }
    };
}

export const callLeavePaymentListAPI = () => {

    let requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/ea/eaList/leave?status=EA_STATUS_FINISH`;

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

            dispatch({type: GET_LEAVEPAYMENTLIST, payload:result.data});
        }
    };
}