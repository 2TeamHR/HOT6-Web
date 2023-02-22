import CertificationTable from "./Organization_CertificationTable";

function OrganiCertification() {

    return (
        <>
        <div style={{margin:"1px"}}>
            <div>
                <h1 className="fs-1 mt-5">증명서 신청 현황</h1>
            </div>
        </div>

        <div className="pt-5 pl-5">
            <CertificationTable />
        </div>
        </>
    );
}

export default OrganiCertification;