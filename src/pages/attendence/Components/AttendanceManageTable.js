import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { randomCreatedDate, randomUpdatedDate } from '@mui/x-data-grid-generator';
import dayjs from "dayjs";
import {Button, Stack} from "@mui/material";
import AttendanceModal from "./AttendanceModal";








export default function AttendanceManageTable(props) {

    console.log("props 테스트",props.data);

    // if (!props.data) {
    //     return null; // 혹은 로딩 중임을 나타내는 다른 컴포넌트를 반환할 수도 있습니다.
    //   }

    const rows = Object.entries(props.data).map(([key, attendanceList], index) => (
        { id: index + 1,
          status: attendanceList.commuteStatus,
            department:attendanceList.member.teamName,
            level: attendanceList.member.rankName,
            name: attendanceList.member.memberName,
            date: attendanceList.commuteDate,
            originStartTime: attendanceList.commuteStartTime,
            startTime: attendanceList.commuteScountTime,
            originEndTime:attendanceList.commuteFinishTime,
            endTime:attendanceList.commuteFcountTime,
            note:'수정',
            commuteCode : attendanceList.commuteCode,
        }));
    
    


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
                valueFormatter: (params) => dayjs(params.value).format('YYYY-MM-DD'),
        
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
                renderCell: (props)=> (
        
                    <Stack spacing={1} sx={{ width: 1, py:1}}>
                            <React.Fragment>
                                {/*<Button variant="outlined"*/}
                                {/*        size="small"*/}
                                {/*        startIcon={<EditIcon />}*/}
                                {/*        onClick={editEventHandler}*/}
                                {/*>*/}
                                {/*    Edit*/}
                                {/*</Button>*/}
                                <AttendanceModal data={props.row}></AttendanceModal>
                            </React.Fragment>
                    </Stack>
        
                ),
            }
        
        
        ];

    return (
        <div style={{ height: 600, width: '165%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5]}
                // checkboxSelection
            />
        </div>
    );
}


