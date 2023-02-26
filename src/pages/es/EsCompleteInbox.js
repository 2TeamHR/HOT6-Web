import { Button, Container } from "@mui/material";
import EsExtendTable from "./EsExtendTable";


function EsCompleteInbox() {

    return (
        <>
            <Container>
                <h4>결재 완료 문서함</h4>
                <select name="" id="">
                    <option value="">이름</option>
                    <option value="">사원번호</option>
                </select><input type="text" /><Button variant="outlined">검색</Button>
                <EsExtendTable></EsExtendTable>
            </Container>
        </>
    );
}

export default EsCompleteInbox;