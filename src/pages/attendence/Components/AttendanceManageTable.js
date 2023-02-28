import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { randomCreatedDate, randomUpdatedDate } from '@mui/x-data-grid-generator';
import dayjs from "dayjs";
import {Button, Stack} from "@mui/material";
import AttendanceModal from "./AttendanceModal";





const columns = [


    { field: 'id', headerName: 'NO', width: 70, align: 'center', headerAlign: 'center' },

    { field: 'status', headerName: '상태', width: 130, align: 'center', justifyContent:'center', headerAlign: 'center' },

    { field: 'department', headerName: '부서', width: 130, align: 'center', headerAlign: 'center' },

    { field: 'level', headerName: '직급', width: 130 ,align: 'center', headerAlign: 'center'},

    { field: 'name', headerName: '성명', width: 130,align: 'center', headerAlign: 'center' },

    { field: 'date',
        headerName: '일자',
        width: 130 ,
        align: 'center',
        headerAlign: 'center',
        valueFormatter: (params) => dayjs(params.value).format('DD/MM/YYYY'),

    },

    { field: 'originStartTime', headerName: '근무 시작 시간' ,  width: 130,align: 'center', headerAlign: 'center' },

    { field: 'startTime', headerName: '출근시간' ,  width: 130,align: 'center', headerAlign: 'center'  },

    { field: 'originEndTime', headerName: '근무 종료 시간' , align: 'center', width: 130, headerAlign: 'center'},

    { field: 'endTime', headerName: '퇴근시간' , width: 130,align: 'center', headerAlign: 'center' },

    { field: 'note',
        headerName: '수정',
        width: 130 ,
        align: 'center',
        headerAlign: 'center',
        sortable: false,
        renderCell: ()=> (

            <Stack spacing={1} sx={{ width: 1, py:1}}>
                    <React.Fragment>
                        {/*<Button variant="outlined"*/}
                        {/*        size="small"*/}
                        {/*        startIcon={<EditIcon />}*/}
                        {/*        onClick={editEventHandler}*/}
                        {/*>*/}
                        {/*    Edit*/}
                        {/*</Button>*/}
                        <AttendanceModal></AttendanceModal>
                    </React.Fragment>
            </Stack>

        ),
    }
    // {
    //     field: 'age',
    //     headerName: 'Age',
    //     type: 'number',
    //     width: 90,
    // },

    // {
    //     field: 'fullName',
    //     headerName: 'Full name',
    //     description: 'This column has a value getter and is not sortable.',
    //     sortable: false,
    //     width: 160,
    //     valueGetter: (params) =>
    //         `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },

];
//
const rows = [
    { id: 1,
      status: '정상출근',
        department:'개발부',
        level: 'Jon',
        name: '홍길동',
        date: randomCreatedDate(),
        originStartTime: '09:00',
        startTime: '08:10',
        originEndTime:'18:00',
        endTime:'08:10',
        note:'수정'
    },

    { id: 2,
        status: '정상출근',
        department:'개발부',
        level: 'Jon',
        name: '홍길동',
        date: randomCreatedDate(),
        originStartTime: '09:00',
        startTime: '08:10',
        originEndTime:'18:00',
        endTime:'08:10',
        note:'수정'
    }
];

const editEventHandler = () => {


}

export default function AttendanceManageTable() {


    return (
        <div style={{ height: 600, width: '145%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}


