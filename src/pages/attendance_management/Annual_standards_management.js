import asmStyle from '../../resources/css/pages/attendance-management/annual_standards_management.module.css';
import mainTitleStyle from '../../resources/css/pages/mypage/main-title.module.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import {
    callLeaveCategoryListAPI
} from '../../apis/LeaveAPICalls';


function AnnualStandardsManagement() {

    const dispatch = useDispatch();
    const leave = useSelector(state => state.productReducer);  

    useEffect(
        () => {
            dispatch(callLeaveCategoryListAPI(	// 상품 상세 정보 조회
            ));
        }
        ,[]
    );

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <main className={mainTitleStyle.main}>
            <div>

                <div className={mainTitleStyle.title}>
                    <p>휴가 기준 관리</p>
                </div>

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
                        <input className={asmStyle.modalInputTitle}/>
                        <p className="text-left mt-4 mb-1">기준일수</p>
                        <input className={asmStyle.modalInputTitle}/>
                        <p className="text-left mt-4 mb-1">급여 유무</p>
                        <select className={asmStyle.modalSelect}>
                            <option>유급</option>
                            <option>무급</option>
                        </select>
                        <p className={`mt-5 ${asmStyle.modelInfo}`}>법정 휴가 가이드</p>
                        <p className={`mt-5 ${asmStyle.modelInfo}`}>기본 연차 가이드</p>
                    </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        생성
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        취소
                    </Button>
                    </Modal.Footer>
                </Modal>
                <Table>
                    <thead>
                        <tr className="text-center">
                            <th>No</th>
                            <th>휴가명</th>
                            <th>일수</th>
                            <th>유급 / 무급</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leave.map((category, index) => (
                            <tr key={category.leaveCategoryCode} className="text-center">
                                <td>{index + 1}</td>
                                <td>{category.leaveCategoryName}</td>
                                <td>{category.leaveCategoryDateCount}</td>
                                <td>{category.leavePayState === 8 ? '유급' : '무급'}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </main>
    );
}

export default AnnualStandardsManagement;