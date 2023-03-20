import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callGetCertificationList } from "../../apis/organizationAPICalls";
import { decodeJwt } from "../../utils/tokenUtils";
import CertificateTable from "./Organization_CertificateTable";

function OrganiCertificate() {

    const dispatch = useDispatch();
    const certificate = useSelector(state => state.organizationReducer);
    const token = decodeJwt(window.localStorage.getItem("accessToken"));

    console.log(`certificate =====`, certificate);
    
    useEffect(() => {

        dispatch(callGetCertificationList({
            memberCode: token.sub,
        }));
    }, []
    );
    

    return (
        <>
        <div style={{margin:"1px"}}>
            <div>
                <h1 className="fs-1 mt-5">증명서 신청 현황</h1>
            </div>
        </div>

        <div className="pt-5 pl-5">
            <CertificateTable certificate={certificate} />
        </div>
        </>
    );
}

export default OrganiCertificate;