import { Await } from 'react-router-dom';
import {POST_LEAVE_DOCUMENT} from '../modules/EaDocumentInsertModule';

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

