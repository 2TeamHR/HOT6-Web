import { Button, Container, Paper } from "@mui/material";
import EaExtendTable from "./EaExtendTable";


function EaCompleteInbox() {

    return (
        <>
            <Container>
                <Paper elevation={5}>
                    <h4>결재 완료 문서함</h4>
                    <select name="" id="">
                        <option value="">이름</option>
                        <option value="">사원번호</option>
                        <option value="">문서번호</option>
                    </select><input type="text" /><Button variant="outlined">검색</Button>
                    <EaExtendTable></EaExtendTable>
                </Paper>
            </Container>
        </>
    );
}

export default EaCompleteInbox;