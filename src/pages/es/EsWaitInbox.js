import { Container } from "@mui/material";
import EsExtendTable from "./EsExtendTable";


function EsWaitInbox() {

    return (
        <>
            <Container>
                <h4>결재 대기 문서함</h4>
                <EsExtendTable></EsExtendTable>
            </Container>
        </>
    );
}

export default EsWaitInbox;