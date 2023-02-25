import CertificateTable from "./Organization_CertificateTable";

function OrganiCertificate() {

    return (
        <>
        <div style={{margin:"1px"}}>
            <div>
                <h1 className="fs-1 mt-5">증명서 신청 현황</h1>
            </div>
        </div>

        <div className="pt-5 pl-5">
            <CertificateTable />
        </div>
        </>
    );
}

export default OrganiCertificate;