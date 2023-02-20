import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
function SalaryForm() {
    return (
        <>
            <h2>급여정정 신청서</h2>
            <div>
                <li><label for="">결재선</label> <div>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </div></li>
                <li><label for="">기안문서번호</label><input type="text" /></li>
                <li><label for="">기안일시</label><input type="date" name="" id="" /></li>
                <li><label for="">제목</label><input type="text" /></li>
                <li><label for="">내용</label><input type="text" name="" id="" /></li>

                <button>신청하기</button><button>취소하기</button>
            </div>
        </>
    );
}

export default SalaryForm;