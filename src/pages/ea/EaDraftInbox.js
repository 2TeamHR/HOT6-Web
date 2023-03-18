import { Button, Container } from "@mui/material";
import EaExtendTable from "./EaExtendTable";

function EaDraftInbox() {
    return (
        <>
            <Container>
                <h4>전자결재 기안 문서함</h4>

                <select name="" id="">
                    <option value="">이름</option>
                    <option value="">사원번호</option>
                </select><input type="text" /><Button variant="outlined">검색</Button>
                <EaExtendTable></EaExtendTable>
            </Container>
        </>
    );
}


export default EaDraftInbox;