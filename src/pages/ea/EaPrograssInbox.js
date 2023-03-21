import { Button, Container } from "@mui/material";
import EaPrograssInboxTable from "./EaPrograssInboxTable";


function EaPrograssInbox() {

    return (
        <>
            <Container>
                <h4>결재 진행 문서함</h4>
                <h5>결재가 진행중인 문서가 여기에 표시됩니다.</h5>
                <select name="" id="">
                    <option value="">이름</option>
                    <option value="">사원번호</option>
                    <option value="">문서번호</option>
                </select><input type="text" /><Button variant="outlined">검색</Button>
                <EaPrograssInboxTable></EaPrograssInboxTable>
            </Container>
        </>
    );
}

export default EaPrograssInbox;