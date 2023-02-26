import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';



const columns = [
    { field: 'id', headerName: '구분', width: 300 },
    { field: 'type', headerName: '증명서', width: 350 },
    { field: 'date', headerName: '신청일', width: 350 },
    { field: 'status', headerName: '결재 상태', width: 300 },
    
];

const rows = [
    { id: 1, type:"경력증명서", date: '2023-02-18', status: '승인' },
    { id: 2, type:"재직증명서", date: '2023-02-18', status: '승인' },
    { id: 3, type:"경력증명서", date: '2023-02-18', status: '승인' }
];


export default function CertificationTable() {

    const navigate = useNavigate();

    return (
        <div className="pl-5" style={{ height: 400, width: '90%' }}>
            <DataGrid 
                className="p-5"
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                onClick={() => { // 승인된 증명서 리스트 클릭시 상세페이지 띄우기
                    
                }}
            />
            <button 
                type="submit" 
                className="mt-3" 
                style={{float:"right"}}
                onClick={() => {
                    navigate('/es/certificationFrom')
                }}
            >
                증명서 신청
            </button>
        </div>
    );
}