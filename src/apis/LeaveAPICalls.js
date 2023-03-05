import{     GET_ANNUAL,
    } from '../modules/LeaveModule.js';

export const callLeaveCategoryListAPI = () => {
    

    
    let    requestURL = `http://localhost:8888/api/v1/annual/standardsManagement`;
   

    console.log('request', requestURL);
    return async (dispatch, getState) => {


        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
        .then(response => response.json());

        console.log('[ProduceAPICalls] callProductDetailAPI RESULT : ', result);
        if(result.status === 200){
            console.log('[ProduceAPICalls] callProductDetailAPI SUCCESS');
            dispatch({ type: GET_ANNUAL,  payload: result.data });
        }
        
    };
}