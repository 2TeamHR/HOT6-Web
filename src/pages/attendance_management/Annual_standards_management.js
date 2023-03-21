import asmStyle from '../../resources/css/pages/attendance-management/annual_standards_management.module.css';
import mainTitleStyle from '../../resources/css/pages/mypage/main-title.module.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
    callLeaveCategoryListAPI
    , callLeaveRegistAPI
    , callLeaveDeleteAPI
} from '../../apis/LeaveAPICalls';

function AnnualStandardsManagement() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const leave = useSelector(state => state.leaveReducer);
    
    console.log('leave : ', leave);

    useEffect(
        () => {
            dispatch(callLeaveCategoryListAPI());
        }
        ,[]
    );

    const [form, setForm] = useState({
        leaveCategoryName: '',
        leaveCategoryDateCount: 0,
        leavePayState: 0,
    });

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    /* 휴가 기준 등록 핸들러 */
    const onClickLeaveRegistrationHandler = () => {

        console.log('[LeaveRegistration] onClickLeaveRegistrationHandler');

        const formData = new FormData();

        formData.append("leaveCategoryName", form.leaveCategoryName);
        formData.append("leaveCategoryDateCount", form.leaveCategoryDateCount);
        formData.append("leavePayState", form.leavePayState);

        dispatch(callLeaveRegistAPI({
            form: formData
        }));        
        
        alert('휴가 기준페이지로 이동합니다.');
        navigate('/annual/standardsManagement', { replace: true});
        window.location.reload();
    }

    /* 휴가 기준 삭제 핸들러 */
    const onDeleteHandler = (leaveCategoryCode) => {
        
        const categoryCodeNumber = leaveCategoryCode.substring(2);
        console.log(categoryCodeNumber);
        if (categoryCodeNumber >= 1 && categoryCodeNumber <= 7) {
            alert("삭제할 수 없는 기준입니다.");
            return;
        }
    
        if (window.confirm('정말로 삭제하시겠습니까?')) {
            dispatch(callLeaveDeleteAPI({ leaveCategoryCode }));
        }
        navigate('/annual/standardsManagement', { replace: true});
        window.location.reload();
    };
    

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <main className={mainTitleStyle.main}>
            <div>

                <div className={mainTitleStyle.title}>
                    <p>휴가 기준 관리</p>
                    
                </div>
                
                <div>
                    <Button className={asmStyle.sorBtn} onClick={handleShow}>
                        기준등록
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>휴가 기준 등록</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="text-center">
                                <p className="text-left mt-4 mb-1">휴가명</p>
                                <input 
                                    name='leaveCategoryName'
                                    onChange={ onChangeHandler } 
                                    className={asmStyle.modalInputTitle}
                                />
                                <p className="text-left mt-4 mb-1">기준일수</p>
                                <input 
                                    name='leaveCategoryDateCount'
                                    onChange={ onChangeHandler } 
                                    className={asmStyle.modalInputTitle}
                                />
                                <p className="text-left mt-4 mb-1">급여 유무</p>
                                <div className='w-100 text-left'>
                                    <label className='mr-3'>
                                    <input type="radio" name="leavePayState" value="8" onChange={ onChangeHandler }/>유급</label>
                                    <label>
                                    <input type="radio" name="leavePayState" value="1" onChange={ onChangeHandler }/>무급</label>
                                </div>
                                <div className='w-100'>
                                    <p className={asmStyle.modelInfo}>법정 휴가 가이드</p>
                                    <p className={asmStyle.modelInfo}>기본 연차 가이드</p>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="primary" onClick={onClickLeaveRegistrationHandler}>
                            생성
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>
                            취소
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </div>

                <Paper elevation={3} className={asmStyle.leaveTable}>
                    <Table>
                        <thead>
                            <tr className="text-center">
                                <th>No</th>
                                <th>휴가명</th>
                                <th>일수</th>
                                <th>유급 / 무급</th>
                                <th>삭제</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leave && leave.map((category, index) => (
                                <tr key={category.leaveCategoryCode} className="text-center">
                                    <td className='align-middle'>{index + 1}</td>
                                    <td className='align-middle'>{category.leaveCategoryName}</td>
                                    <td className='align-middle'>{category.leaveCategoryDateCount}</td>
                                    <td className='align-middle'>{category.leavePayState === 8 ? '유급' : '무급'}</td>
                                    <td className='align-middle'>
                                        <Button className={asmStyle.deleteBtn} onClick={() => onDeleteHandler(category.leaveCategoryCode)}>
                                            삭제
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Paper>
            </div>
        </main>
    );
}

export default AnnualStandardsManagement;