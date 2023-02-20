import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import PayMentButton from './Salary_PayMentButton';

const columns = [
    { field: 'id', headerName: '사번', width: 100 },
    { field: 'team', headerName: '조직', width: 150 },
    { field: 'rank', headerName: '직급', width: 150 },
    { field: 'name', headerName: '이름', width: 150 },
    { field: 'salary', headerName: '기본급', width: 150 },
    { field: 'bonus', headerName: '상여금', width: 150 },
    { field: 'tax', headerName: '공제액', width: 150 },
    { field: 'totalSalary', headerName: '총 지급액', width: 150 },
    { field: 'paymentDate', headerName: '지급일', width: 150 },
    { field: 'paymentStatus', headerName: '지급여부', width: 100 },
    
];

const rows = [
    { id: 1, team: '인사팀', rank: '성명', name: '이', salary: 150000, bonus: 50000, tax: 20000, totalSalary: 180000, paymentDate: '2023-02-18', paymentStatus: 'N' },
    { id: 2, team: '무슨팀', rank: '성명', name: '이', salary: 150000, bonus: 50000, tax: 20000, totalSalary: 180000, paymentDate: '2023-02-18', paymentStatus: 'N' },
    { id: 3, team: '무슨팀', rank: '성명', name: '이', salary: 150000, bonus: 50000, tax: 20000, totalSalary: 180000, paymentDate: '2023-02-18', paymentStatus: 'N' },
    { id: 4, team: '무슨팀', rank: '성명', name: '이', salary: 150000, bonus: 50000, tax: 20000, totalSalary: 180000, paymentDate: '2023-02-18', paymentStatus: 'N' },
    { id: 5, team: '무슨팀', rank: '성명', name: '이', salary: 150000, bonus: 50000, tax: 20000, totalSalary: 180000, paymentDate: '2023-02-18', paymentStatus: 'N' },
    { id: 6, team: '무슨팀', rank: '성명', name: '이', salary: 150000, bonus: 50000, tax: 20000, totalSalary: 180000, paymentDate: '2023-02-18', paymentStatus: 'N' },
];

export default function SalaryDataTableN() {
    return (
        <div className="pl-5" style={{ height: 400, width: '90%' }}>
            <DataGrid
                className="pl-5"
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
            <PayMentButton style={{}} />
        </div>
    );
}