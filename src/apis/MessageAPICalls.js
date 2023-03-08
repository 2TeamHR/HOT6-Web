import { GET_MESSAGELIST, POST_MESSAGE } from "../modules/MessageModule";


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

            
            console.log('[MessageAPICalls] callRegistMessage Result: ' , result);

            dispatch({ type: POST_MESSAGE, payload: result});
    };
}