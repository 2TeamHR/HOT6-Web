import {
  Container,
  Grid,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { callEaDocumentListAPI } from "../../apis/EaDocumentAPICalls";
import { useEffect } from "react";
import Row from "./Row";





export default function EaAllListTable() {

  const dispatch = useDispatch();
  const documentList = useSelector(state => state.eaDocumentReducer);

  console.log("documentList{}", documentList);

  useEffect(() => {
    dispatch(callEaDocumentListAPI());
  }, []);
  console.log("2번째 렌더");
  return (
    <>
      <Container>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">문서번호</TableCell>
                  <TableCell align="center">문서유형</TableCell>
                  <TableCell align="center">제목</TableCell>
                  <TableCell align="center">부서명</TableCell>
                  <TableCell align="center">직급</TableCell>
                  <TableCell align="center">기안자</TableCell>
                  <TableCell align="center">신청일</TableCell>
                  <TableCell align="center">상태</TableCell>
                  <TableCell align="center">상세보기</TableCell>
                  <TableCell align="center">진행상태보기</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {documentList && documentList?.map((row) => (
                  <Row key={row.eaCode} docu={row} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Container >
    </>
  );
}