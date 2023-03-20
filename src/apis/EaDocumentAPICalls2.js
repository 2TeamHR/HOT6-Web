import {GET_LEAVE_DOCUMENT} from '../modules/EaDocumentModule2';


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
        }
    };
}