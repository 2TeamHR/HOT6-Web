import {GET_CERT_DOCUMENT, GET_LEAVE_DOCUMENT, GET_SALARY_DOCUMENT} from '../modules/EaDocumentModule2';


export const callEaLeaveDocumentAPI = ({eaCode}) => {

    let requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/ea/eaDocument/leave/${eaCode}`;
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
        console.log("leaveDocument API data ======================= ", result);
        if(result.status === 200) {
            dispatch({type: GET_LEAVE_DOCUMENT, payload:result.data});
            console.log(result.data);
        }else{
            alert("데이터가 존재하지 않습니다.");
        }
    };
}


export const callEaCertDocumentAPI = ({eaCode}) => {

    let requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/ea/eaDocument/cert/${eaCode}`;
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
        console.log("leaveDocument API data ======================= ", result);
        if(result.status === 200) {
            dispatch({type: GET_CERT_DOCUMENT, payload:result.data});
            console.log(result.data);
        }else{
            alert("데이터가 존재하지 않습니다.");
        }
    };
}


export const callEaSalaryDocumentAPI = ({eaCode}) => {

    let requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/ea/eaDocument/salary/${eaCode}`;
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
        console.log("leaveDocument API data ======================= ", result);
        if(result.status === 200) {
            dispatch({type: GET_SALARY_DOCUMENT, payload:result.data});
            console.log(result.data);
        }else{
            alert("데이터가 존재하지 않습니다.");
        }
    };
}



export const callApproverListAPI = ({memberSpl}) => {

    let requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/v1/message/search/${memberName1}`;
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
        console.log("leaveDocument API data ======================= ", result);
        if(result.status === 200) {
            dispatch({type: GET_APPROVER_LIST, payload:result.data});
            console.log(result.data);
        }else{
            alert("데이터가 존재하지 않습니다.");
        }
    };
}