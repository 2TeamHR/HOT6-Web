import { Button, Container } from "@mui/material";
import EaRealExtendTablePrograss from "./EaRealExtendTablePrograss";

function EaPrograssInbox() {

    return (
        <>
            <Container>
                <h4>결재 진행 문서함</h4>
                <select name="" id="">
                    <option value="">이름</option>
                    <option value="">사원번호</option>
                    <option value="">문서번호</option>
                </select><input type="text" /><Button variant="outlined">검색</Button>
                <EaRealExtendTablePrograss></EaRealExtendTablePrograss>
            </Container>
        </>
    );
}

export default EaPrograssInbox;