import tableStyle from '../../resources/css/components/tableComponent.module.css';
import mainTitleStyle from '../../resources/css/pages/mypage/main-title.module.css';
import {TsbDepartment, TsbEmployee, PayState, Term, EmployState, SearchBtn} from '../../components/TableSearchBox';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Paper from '@mui/material/Paper';
import { callMyAttendanceListAPI } from '../../apis/AttendanceAPICalls';
import Pagination from '@mui/material/Pagination';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { decodeJwt } from '../../utils/tokenUtils';
 
function  MypageAttendanceHistory () {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const attendanceList = useSelector(state => state.attendanceReducer);  
    const token = decodeJwt(window.localStorage.getItem("accessToken"));

    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 10;
    
    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;

    useEffect(
        () => {    
            if(token !== null) {
                dispatch(callMyAttendanceListAPI({
                    memberCode: token.sub
                }));          
            }
        }
        ,[]
    );

    let commuteTotalTimeSum = 0;
    const now = new Date();
    const month = now.getMonth() + 1;
    
    for (let i = 0; i < attendanceList.length; i++) {

    console.log('data.commuteDate.splice(7,7) === 2', attendanceList[i].commuteDate);
    const yearFirstChar = String(attendanceList[i].commuteDate).charAt(6);
    console.log('yearFirstChar', yearFirstChar);

    if (parseInt(yearFirstChar) === month) {
        commuteTotalTimeSum += attendanceList[i].commuteTotalTime;
    }
    }

    console.log("총 근무 시간 : " + commuteTotalTimeSum);

    return (
        <main className={mainTitleStyle.main}>
            <div>

                <div className={mainTitleStyle.title}>
                    <p>근태 이력</p>
                </div>

                <div className={tableStyle.boxStyle}>
                    <div className={tableStyle.searchBox}>
                        <TsbDepartment/>
                        <TsbEmployee/>
                        <PayState/>
                        <SearchBtn/>
                    </div>
                    <div className={tableStyle.searchBox}>
                        <Term/>
                        <EmployState/>
                    </div>
                </div>
                <h1>2월달 총 근무 시간 : {commuteTotalTimeSum}</h1>
                <Paper elevation={3} className="mt-5 pb-5">
                    <Table>
                        <thead>
                            <tr className="text-center">
                                <th>No</th>
                                <th>일자</th>
                                <th>근태유형</th>
                                <th>출근시간</th>
                                <th>출근입력시간</th>
                                <th>퇴근시간</th>
                                <th>퇴근입력시간</th>
                                <th>총근무시간</th>
                                <th>사유</th>
                            </tr>
                        </thead>
                        <tbody>
                            {attendanceList.slice(startIndex, endIndex).map((attendance, index) => (
                                <tr key={attendance.commuteCode} className="text-center">
                                    <td className='align-middle'>{index + 1}</td>
                                    <td className='align-middle'>{attendance.commuteDate.slice(0, 10)}</td>
                                    <td className='align-middle'>{attendance.commuteStatus}</td>
                                    <td className='align-middle'>{attendance.commuteStartTime.slice(11,19)}</td>
                                    <td className='align-middle'>{attendance.commuteScountTime.slice(11,19)}</td>
                                    <td className='align-middle'>{attendance.commuteFinishTime.slice(11,19)}</td>
                                    <td className='align-middle'>{attendance.commuteFcountTime.slice(11,19)}</td>
                                    <td className='align-middle'>{attendance.commuteTotalTime}시간</td>
                                    <td className='align-middle'>
                                        <Button>미쳤나봥</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                    {/* 페이징 처리 */}
                    <div className="d-flex justify-content-center mt-5">
                        <Pagination 
                            count={Math.ceil(attendanceList.length / perPage)} 
                            page={currentPage} 
                            onChange={handlePageChange} 
                        />
                    </div>
                </Paper>
            </div>
        </main>
    );
}

export default MypageAttendanceHistory;