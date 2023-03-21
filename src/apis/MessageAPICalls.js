import { GET_MESSAGELIST,
         POST_MESSAGE,
         GET_MESSAGE_RECEIVE_LIST,
         GET_MESSAGE_RECEIVER_COUNT,   
         GET_MESSAGE_SENT_COUNT} from "../modules/MessageModule";
import {decodeJwt} from "../utils/tokenUtils";


/*리스트 가져오기 */
export const callGetMessageListAPI = ({memberName}) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/v1/message/search/${memberName}`;

    return async (dispatch, getState) => {
        try {
            const response = await fetch(requestURL, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*",
                    "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
                }
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            if (!result || !result.data) {
                throw new Error('No data found');
            }
            const memberData = result.data.map(member => ({name: member.memberName, email: member.memberEmail}));
            dispatch({ type: GET_MESSAGELIST, payload: result });
            return memberData;
        } catch (error) {
            console.log(error);
            throw error;
        }
    };
}


/*메세지 등록하기*/
export const callRegistMessageListAPI = ({payload}) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/v1/message/`;

    return async (dispatch, getState) => {

            const result = await fetch(requestURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*",
                    "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
                },
                body: JSON.stringify(payload)
            })
            .then(response => response.json());
                alert("메세지 전송이 완료되었습니다.");
                window.location.reload();
            
                console.log('[MessageAPICalls] callRegistMessage Result: ' , result);

            dispatch({ type: POST_MESSAGE, payload: result});
    };
}



/*받은 편지함 가져오기 */
export const callGetMessageReceiveListAPI = () => {
    const token = decodeJwt(window.localStorage.getItem("accessToken"));
    const memberCode = token.sub;
    console.log("토큰섭의 값",memberCode);
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/v1/messageReceived`;

    return async (dispatch, getState) => {

        const payload ={
            memberCode : token.sub,
        }

        try {
            const response = await fetch(requestURL, {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*",
                    "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
                },
                body: JSON.stringify(payload)
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            if (!result || !result.data) {
                throw new Error('No data found');
            }
            console.log(result.data);
            const receivedData = result.data.map(receivedEmail=>({
                name:receivedEmail.memberName, 
                title:receivedEmail.messageTitle, 
                date:receivedEmail.messageSendDate,
                content:receivedEmail.messageContent,
                email:receivedEmail.memberEmail,
                code:receivedEmail.messageCode
                }))
            dispatch({ type: GET_MESSAGE_RECEIVE_LIST, payload: receivedData });
            return receivedData;
        } catch (error) {
            console.log(error);
            throw error;
        }                                      
    };
}


/*휴지통 가져오기 */
export const callGetMessageTrashListAPI = () => {
    const token = decodeJwt(window.localStorage.getItem("accessToken"));
    const memberCode = token.sub;
    console.log("토큰섭의 값",memberCode);
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/v1/messageTrash`;

    return async (dispatch, getState) => {

        const payload ={
            memberCode : token.sub,
        }

        try {
            const response = await fetch(requestURL, {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*",
                    "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
                },
                body: JSON.stringify(payload)
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            if (!result || !result.data) {
                throw new Error('No data found');
            }
            console.log(result.data);
            const receivedData = result.data.map(receivedEmail=>({
                name:receivedEmail.memberName,
                title:receivedEmail.messageTitle,
                date:receivedEmail.messageSendDate,
                content:receivedEmail.messageContent,
                email:receivedEmail.memberEmail,

            }))
            dispatch({ type: GET_MESSAGE_RECEIVE_LIST, payload: receivedData });
            return receivedData;
        } catch (error) {
            console.log(error);
            throw error;
        }
    };
}




export const callGetMessageReceiveCountAPI = () => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/v1/messageReceivedCount`;

    return async (dispatch, getState) => {
        try {
            const response = await fetch(requestURL, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*",
                    "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
                }
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log("response=========");
            const result = await response.json();
            if (!result || !result.data) {
                throw new Error('No data found');
            }

            console.log("==========" + result.data);
            dispatch({ type: GET_MESSAGE_RECEIVER_COUNT, payload: result.data });
        } catch (error) {
            
            console.log(error);
            console.log("api 문제");
            throw error;
        }
    };
}


export const callGetMessageSentCountAPI = () => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/v1/messageSentCount`;

    return async (dispatch, getState) => {
        try {
            const response = await fetch(requestURL, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*",
                    "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
                }
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            if (!result || !result.data) {
                throw new Error('No data found');
            }
            dispatch({ type: GET_MESSAGE_SENT_COUNT, payload: result });
        } catch (error) {
            console.log(error);
            throw error;
        }
    };
}