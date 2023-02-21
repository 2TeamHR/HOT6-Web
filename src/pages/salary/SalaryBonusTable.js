import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: '구분', width: 100 },
    { field: 'team', headerName: '조직', width: 150 },
    { field: 'rank', headerName: '직급', width: 150 },
    { field: 'name', headerName: '이름', width: 150 },
    { field: 'bonusType', headerName: '상여구분', width: 150 },
    { field: 'bonus', headerName: '상여금액', width: 150 },
    { field: 'paymentDate', headerName: '지급일', width: 150 },
    
];

const rows = [
    { id: 1, team: '인사팀', rank: '부장', name: '이상목', bonusType: "연말 보너스", bonus: 50000, paymentDate: '2023-02-18' },
];

export default function SalaryBonusTable() {
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
            <button 
                type="submit" 
                className="mt-3" 
                style={{float:"right"}}
                // onCLick={onClickHandler}
            >
                지급하기
            </button>
        </div>
        
    );
}