import mpahStyle from '../../resources/css/pages/mypage/mypage-annual-history.module.css';
import mainTitleStyle from '../../resources/css/pages/mypage/main-title.module.css';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { decodeJwt } from '../../utils/tokenUtils';
import { callGetMyLeaveInfoAPI } from '../../apis/LeaveAPICalls';
import amdStyle from '../../resources/css/pages/attendance-management/annual-management-detailed.module.css'

function MypageAnnualHistory() {

    const dispatch = useDispatch(); 
    const token = decodeJwt(window.localStorage.getItem("accessToken"));
    const memberLeaveList = useSelector(state => state.leaveReducer);

    console.log('memberLeaveList  =======', memberLeaveList );

    useEffect(
        () => {
            dispatch(callGetMyLeaveInfoAPI({
                memberCode: token.sub
            }));
        },[]
    );

    return (
        <main className={mainTitleStyle.main}>
            <div>
                <div className={mainTitleStyle.title}>
                    <p>나의 휴가 이력</p>
                </div>


                <Paper elevation={3} className="d-flex flex-row pt-5 pb-3 justify-content-around">
                    <div className={mpahStyle.annualMainBox}>
                        <div className={mpahStyle.annualMainBoxTitle}>
                            <p className='fs-3 fw-bold'>2022년도</p>
                        </div>
                        <div className='d-flex flex-row justify-content-around'>
                            {Array.isArray(memberLeaveList.data) && memberLeaveList?.data.map((item) => {
                                if (item.leaveCategoryCode === "LC1" && item.leavePaymentDate.slice(0,4) === '2022') {
                                    const total = item.leavePaymentCount;
                                    const Leftover = item.leaveLeftoverCount;
                                    const remaining = total - Leftover;
                                    return (
                                        <div>
                                            <p>총 연차</p>
                                            <p className="fs-3">{total}</p>
                                        </div>
                                    );
                                } else if((item.leaveCategoryCode === "LC1" && item.leavePaymentDate.slice(0,4) !== '2022')) {
                                    return (
                                        <div>
                                            <p>총 연차</p>
                                            <p className="fs-3">-</p>
                                        </div>
                                    );
                                }
                            })}
                            {Array.isArray(memberLeaveList.data) && memberLeaveList?.data.map((item) => {
                                if (item.leaveCategoryCode === "LC1" && item.leavePaymentDate.slice(0,4) === '2022') {
                                    const total = item.leavePaymentCount;
                                    const Leftover = item.leaveLeftoverCount;
                                    const remaining = total - Leftover;
                                    return (
                                        <div>
                                            <p>사용</p>
                                            <p className="fs-3">{remaining}</p>
                                        </div>
                                    );
                                } else if((item.leaveCategoryCode === "LC1" && item.leavePaymentDate.slice(0,4) !== '2022')) {
                                    return (
                                        <div>
                                            <p>사용</p>
                                            <p className="fs-3">-</p>
                                        </div>
                                    );
                                }
                            })}
                            {Array.isArray(memberLeaveList.data) && memberLeaveList?.data.map((item) => {
                                if (item.leaveCategoryCode === "LC1" && item.leavePaymentDate.slice(0,4) === '2022') {
                                    const total = item.leavePaymentCount;
                                    const Leftover = item.leaveLeftoverCount;
                                    const remaining = total - Leftover;
                                    return (
                                        <div>
                                            <p>잔여</p>
                                            <p className="fs-3">{Leftover}</p>
                                        </div>
                                    );
                                } else if((item.leaveCategoryCode === "LC1" && item.leavePaymentDate.slice(0,4) !== '2022')) {
                                    return (
                                        <div>
                                            <p>잔여</p>
                                            <p className="fs-3">-</p>
                                        </div>
                                    );
                                }
                            })}
                        </div>
                    </div>
                    <div className={`text-success ${mpahStyle.annualMainBox}`}>
                        <div className={mpahStyle.annualMainBoxTitle}>
                            <p className='fs-3 fw-bold'>2023년도</p>
                        </div>
                        <div className='d-flex flex-row justify-content-around'>
                        {Array.isArray(memberLeaveList.data) && memberLeaveList?.data.map((item) => {
                                if (item.leaveCategoryCode === "LC1" && item.leavePaymentDate.slice(0,4) === '2023') {
                                    const total = item.leavePaymentCount;
                                    const Leftover = item.leaveLeftoverCount;
                                    const remaining = total - Leftover;
                                    return (
                                        <div>
                                            <p>총 연차</p>
                                            <p className="fs-3">{total}</p>
                                        </div>
                                    );
                                } else if((item.leaveCategoryCode === "LC1" && item.leavePaymentDate.slice(0,4) !== '2023')) {
                                    return (
                                        <div>
                                            <p>총 연차</p>
                                            <p className="fs-3">-</p>
                                        </div>
                                    );
                                }
                            })}
                            {Array.isArray(memberLeaveList.data) && memberLeaveList?.data.map((item) => {
                                if (item.leaveCategoryCode === "LC1" && item.leavePaymentDate.slice(0,4) === '2023') {
                                    const total = item.leavePaymentCount;
                                    const Leftover = item.leaveLeftoverCount;
                                    const remaining = total - Leftover;
                                    return (
                                        <div>
                                            <p>사용</p>
                                            <p className="fs-3">{remaining}</p>
                                        </div>
                                    );
                                } else if((item.leaveCategoryCode === "LC1" && item.leavePaymentDate.slice(0,4) !== '2023')) {
                                    return (
                                        <div>
                                            <p>사용</p>
                                            <p className="fs-3">-</p>
                                        </div>
                                    );
                                }
                            })}
                            {Array.isArray(memberLeaveList.data) && memberLeaveList?.data.map((item) => {
                                if (item.leaveCategoryCode === "LC1" && item.leavePaymentDate.slice(0,4) === '2023') {
                                    const total = item.leavePaymentCount;
                                    const Leftover = item.leaveLeftoverCount;
                                    const remaining = total - Leftover;
                                    return (
                                        <div>
                                            <p>잔여</p>
                                            <p className="fs-3">{Leftover}</p>
                                        </div>
                                    );
                                } else if((item.leaveCategoryCode === "LC1" && item.leavePaymentDate.slice(0,4) !== '2023')) {
                                    return (
                                        <div>
                                            <p>잔여</p>
                                            <p className="fs-3">-</p>
                                        </div>
                                    );
                                }
                            })}
                        </div>
                    </div>
                </Paper>
            </div>

            <div className={mpahStyle.annualSelectBox}>
                <span className='float-left fs-4 fw-bold'>휴가 발생 내역</span>
                <select className='float-right'>
                    <option>발생 내역</option>
                    <option>사용 내역</option>
                </select>
            </div>

            <Paper elevation={3} className={amdStyle.tableMargin}>
                <table className="table">
                    <thead>
                        <tr className={amdStyle.annualMainContentTitle}>
                            <th colSpan="4">구분</th>
                            <th colSpan="3">정산</th>
                        </tr>
                        <tr className={amdStyle.annualMainContentSubTitle}>
                            <th scope="col">발생구분</th>
                            <th scope="col">휴가구분</th>
                            <th scope="col">시작/발생일</th>
                            <th scope="col">종료일</th>
                            <th scope="col">대상일</th>
                            <th scope="col">적용일</th>
                            <th scope="col">잔여일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {memberLeaveList?.data?.map((leave) => {
                            return (
                                <tr key={leave.leavePaymentHistoryCode} className='mt-3'>
                                    <td className='text-center'>지급</td>
                                    <td className='text-center'>{leave.leaveCategoryCode}</td>
                                    <td className='text-center'>{leave.leavePaymentDate.slice(0, 10)}</td>
                                    <td className='text-center'>-</td>
                                    <td className='text-center'>{leave.leavePaymentCount}</td>
                                    <td className='text-center'>{leave.leavePaymentCount}</td>
                                    <td className='text-center'>{leave.leaveLeftoverCount}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Paper>
        </main>
    );
}

export default MypageAnnualHistory;