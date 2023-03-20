import tableStyle from '../../resources/css/components/tableComponent.module.css';
import mainTitleStyle from '../../resources/css/pages/mypage/main-title.module.css';
import {TsbDepartment, TsbEmployee, PayState, Term, SearchBtn} from '../../components/TableSearchBox';
import { Modal, Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Paper from '@mui/material/Paper';
import { 
    callMyAttendanceListAPI
    , callCreateReasonAPI
} from '../../apis/AttendanceAPICalls';
import { useNavigate } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { decodeJwt } from '../../utils/tokenUtils';
 
function  MypageAttendanceHistory () {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const attendanceList = useSelector(state => state.attendanceReducer);  
    const token = decodeJwt(window.localStorage.getItem("accessToken"));

    console.log('attendanceList ', attendanceList);

    /* 모달창 */
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [file, setFile] = useState(null);

    const [form, setForm] = useState({
        reasonTitle: '',
        reasonDetail: '',
        commuteCode: '',
        reasonStatus: ''
    });

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    /* 사유서 등록 핸들러 */
    const onClickReasonCreateHandler = (attendance) => {

        const formData = new FormData();

        formData.append("reasonTitle", form.reasonTitle);
        formData.append("reasonDetail", form.reasonDetail);
        formData.append("commuteCode", attendance.commuteCode);
        formData.append("reasonStatus", attendance.reasonStatus);

        if(file) {
            formData.append("reasonFile", file);
        }

        dispatch(callCreateReasonAPI({
            form: formData
        }));        
        
        // alert('나의 근태 이력 페이지로 이동합니다.');
        // navigate('/mypage/attendance/history', { replace: true});
        // window.location.reload();
    }

    const onChangeFileUpload = (e) => {

        const file = e.target.files[0];

        setFile(file);
    };
    
    /* 페이징 처리 */
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 10;
    
    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const startIndex = 0;
    const endIndex = 10;

    useEffect(
        () => {    
            if(token !== null) {
                dispatch(callMyAttendanceListAPI({
                    memberCode: token.sub,
                    startIndex: currentPage-1,
                    endIndex: perPage
                }));          
            }
        }
        ,[currentPage]
    );

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
                        <Term/>
                        <SearchBtn/>
                    </div>
                </div>

                <Paper elevation={3} className="mt-4 pb-5">
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
                            {Array.isArray(attendanceList.content) && attendanceList.content.slice(startIndex, endIndex).map((attendance, index) => (
                                <tr key={attendance.commuteNo} className="text-center">
                                    <td className='align-middle'>{index + 1}</td>
                                    <td className='align-middle'>{attendance.commuteDate.slice(0, 10)}</td>
                                    <td className='align-middle'>{attendance.reasonStatus}</td>
                                    <td className='align-middle'>{attendance.commuteStartTime.slice(11,19)}</td>
                                    <td className='align-middle'>{attendance.commuteScountTime.slice(11,19)}</td>
                                    <td className='align-middle'>{attendance.commuteFinishTime.slice(11,19)}</td>
                                    <td className='align-middle'>{attendance.commuteFcountTime.slice(11,19)}</td>
                                    <td className='align-middle'>{attendance.commuteTotalTime}시간</td>
                                    <td className='align-middle'>
                                        <Button onClick={handleShow} className={tableStyle.documentsSubmit}>
                                        사유서 제출
                                        </Button>

                                        <Modal show={show} onHide={handleClose}>
                                            <Modal.Header closeButton>
                                            <Modal.Title>사유서제출</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <div className="text-center">
                                                    <p className="text-left mt-4 mb-1">사유서 제목</p>
                                                    <input type='hidden' name='commuteCode' value={attendance.commuteCode}/>
                                                    <input type='hidden' name='reasonStatus' value={attendance.reasonStatus}/>
                                                    <input className='w-100 rounded rounded-lg' name='reasonTitle' onChange={onChangeHandler}/>
                                                    <p className="text-left mt-4 mb-1">사유서 내용</p>
                                                    <textarea rows="4" cols="50" className="form-control rounded rounded-lg" name='reasonDetail' onChange={onChangeHandler} defaultValue='이곳에 사유서 내용을 간략하게 적어주세요.'/>
                                                    <p className="text-left mt-4 mb-1">첨부 파일</p>
                                                    <input 
                                                        className='w-100 rounded rounded-lg'
                                                        name='reasonFile'
                                                        accept='file/pdf, file/word, file/png, file/jpg, file/jpeg'
                                                        onChange={onChangeFileUpload}
                                                        type="file"
                                                    />
                                                </div>
                                            </Modal.Body>
                                            <Modal.Footer>
                                            <Button variant="primary" onClick={() => onClickReasonCreateHandler(attendance)}>
                                                전송
                                            </Button>
                                            <Button variant="secondary" onClick={handleClose}>
                                                닫기
                                            </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                    {/* 페이징 처리 */}
                    <div className="d-flex justify-content-center mt-5">
                        <Pagination 
                            count={Math.ceil(attendanceList.totalElements / perPage)} 
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