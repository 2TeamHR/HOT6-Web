import { Await } from 'react-router-dom';
import {GET_EADOCUMENT_DRAFT_LIST, GET_EADOCUMENT_FINISHED_LIST, GET_EADOCUMENT_LIST, GET_EADOCUMENT_PROCESS_LIST, GET_EADOCUMENT_RETURN_LIST, GET_EADOCUMENT_WAITING_LIST, GET_FINISH_LEAVE_LIST} from '../modules/EaDocumentModule';

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
        }else{
            alert("데이터가 존재하지 않습니다.");
        }
    };
}

export const callEaDocumentWaitingListAPI = ({memberCode}) => {

    let requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/ea/status/EA_STATUS_WAITING/${memberCode}`;
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
            dispatch({type: GET_EADOCUMENT_WAITING_LIST, payload:result.data});
            console.log(result.data);
        }else{
            alert("데이터가 존재하지 않습니다.");
        }
    };
}

export const callEaDocumentProcessingListAPI = ({memberCode}) => {

    let requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/ea/status/EA_STATUS_PROCESS/${memberCode}`;
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
            dispatch({type: GET_EADOCUMENT_PROCESS_LIST, payload:result.data});
            console.log(result.data);
        }else{
            alert("데이터가 존재하지 않습니다.");
        }
    };
}

export const callEaDocumentFinishedListAPI = ({memberCode}) => {

    let requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/ea/status/EA_STATUS_FINISH/${memberCode}`;
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
            dispatch({type: GET_EADOCUMENT_FINISHED_LIST, payload:result.data});
            console.log(result.data);
        }else{
            alert("데이터가 존재하지 않습니다.");
        }
    };
}

export const callEaDocumentReturnListAPI = ({memberCode}) => {

    let requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/ea/eaList/EA_STATUS_RETURN/${memberCode}`;
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
            dispatch({type: GET_EADOCUMENT_RETURN_LIST, payload:result.data});
            console.log(result.data);
        }else{
            alert("데이터가 존재하지 않습니다.");
        }
    };
}

export const callEaDocumentDraftListAPI = ({memberCode}) => {

    let requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/ea/eaList/draft/${memberCode}`;
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
            dispatch({type: GET_EADOCUMENT_DRAFT_LIST, payload:result.data});
            console.log(result.data);
        }else{
            alert("데이터가 존재하지 않습니다.");
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
        }else{
            alert("데이터가 존재하지 않습니다.");
        }
    };
}
