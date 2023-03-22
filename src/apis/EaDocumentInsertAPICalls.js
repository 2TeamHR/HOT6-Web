import { Await } from 'react-router-dom';
import {POST_LEAVE_DOCUMENT, PUT_APPROVAL_DOCUMENT} from '../modules/EaDocumentInsertModule';

export const callEaLeaveInsertAPI = ({form}) => {

    let requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/ea/eaLeave/insert`;
    console.log('eaRequestUrl', requestURL);
    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
            },
            body: JSON.stringify({

            })
        })
        .then(response => response.json());

        if(result.status === 200) {
            dispatch({type: POST_LEAVE_DOCUMENT, payload:result});
            console.log(result.data);
        }
    };
}
export const callApprovalAPI = ({memberCode}) => {

    let requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/ea/eaLeave/insert`;
    console.log('eaRequestUrl', requestURL);
    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
            },
            
        })
        .then(response => response.json());

        if(result.status === 200) {
            dispatch({type: PUT_APPROVAL_DOCUMENT, payload:result});
            console.log(result.data);
        }
    };
}


