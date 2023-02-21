import { Container } from "@mui/material";
import EsExtendTable from "./EsExtendTable";


function EsCompleteInbox() {

    return (
        <>
            <Container>
                <h4>결재 완료 문서함</h4>
                <EsExtendTable></EsExtendTable>
            </Container>
        </>
    );
}

export default EsCompleteInbox;