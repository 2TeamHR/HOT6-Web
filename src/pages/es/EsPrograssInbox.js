import { Container } from "@mui/material";
import EsExtendTable from "./EsExtendTable";

function EsPrograssInbox() {

    return (
        <>
            <Container>
                <h4>결재 진행 문서함</h4>
                <EsExtendTable></EsExtendTable>
            </Container>
        </>
    );
}

export default EsPrograssInbox;