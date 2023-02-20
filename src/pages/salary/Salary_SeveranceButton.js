import React, { useState } from "react";

function PayMentButton({ status }) {

    // const [paymentStatus, setPaymentStatus] = useState["status"];

    // const onClickHandler = () => {

    //     if(paymentStatus === 'N') {

    //         setPaymentStatus('Y');
    //     }
    // }

    return (
        <>
            <button 
                type="submit" 
                className="mt-3" 
                style={{float:"right"}}
                // onCLick={onClickHandler}
            >
                지급하기
            </button>
        </>
    );
}

export default PayMentButton;