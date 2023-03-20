import { Button, Container } from "@mui/material";
import EaAllListTable from "./EaAllListTable";


export default function EaAllListInsa() {
console.log("1번째 렌더");
    return (
        <>
            <Container>
                <h4>인사팀 전자결재 전체 리스트 조회</h4>
                <select name="" id="">
                    <option value="">이름</option>
                    <option value="">사원번호</option>
                    <option value="">문서번호</option>
                </select><input type="text" /><Button variant="outlined">검색</Button>
                <EaAllListTable></EaAllListTable>
            </Container>
        </>
    );
}
