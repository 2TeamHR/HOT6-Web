import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Button, Container } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: 200,
  height: 100
}));

function SalaryForm() {
  return (
    <>
      <Container>
        <h2>급여정정 신청서</h2>
        <ul style={{ listStyle: "none" }}>
          <li><label>결재선</label> <div>
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
            >
              <Item>기안자</Item>
              <Item>중간결재자</Item>
              <Item>최종결재자</Item>
            </Stack>
          </div></li>
          <li><label>기안문서번호</label><input type="text" /></li>
          <li><label>기안일시</label><input type="date" name="" id="" /></li>
          <li><label>제목</label><input type="text" /></li>
          <li><label>내용</label><input type="text" name="" id="" /></li>
        </ul>
        <Button>신청하기</Button><Button>취소하기</Button>
      </Container>
    </>
  );
}

export default SalaryForm;