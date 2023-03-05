import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CollapsibleTableStyle from'../resources/css/components/collapsibleTable.module.css';

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: '2023-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2023-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="center">{row.calories}</TableCell>
        <TableCell align="center">{row.fat}</TableCell>
        <TableCell align="center">{row.carbs}</TableCell>
        <TableCell align="center">{row.protein}</TableCell>
        <TableCell align="center">{row.protein}</TableCell>
        <TableCell align="center">{row.protein}</TableCell>
        <TableCell align="center">{row.protein}</TableCell>
        <TableCell>
          <IconButton
            className='float-right'
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <div className={CollapsibleTableStyle.payContent}>
                <span className='mr-3'>제목</span>
                <span>제목입니다.</span>
              </div>
              <div className={CollapsibleTableStyle.payContent}>
                <span className='mr-3'>내용</span>
                <p>휴가 결제 내용입니다</p>
              </div>
              <div className={CollapsibleTableStyle.payContent}>
                <span className='mr-3'>기간</span>
                <span>시작일 날짜 출력</span>
                <span> ~ </span>
                
              </div>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData(1,'경영관리부','영업1팀','대리','홍길동','기본연차','2023-01-01',<button>증빙성류보기</button>),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99, 123, 123, 123),
];

export function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell align="center">부서</TableCell>
            <TableCell align="center">팀</TableCell>
            <TableCell align="center">직급</TableCell>
            <TableCell align="center">성명</TableCell>
            <TableCell align="center">휴가구분</TableCell>
            <TableCell align="center">결제완료날짜</TableCell>
            <TableCell align="center">증빙서류</TableCell>
            <TableCell className="float-right">자세히보기</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
