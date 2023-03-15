import mainStyle from '../resources/css/components/main.module.css';
// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MyCalendar from './calendar/MyCalendar';
import Paper from '@mui/material/Paper';

function Main() {

    // const [value, onChange] = useState(new Date());

    return (
        <main className={`${mainStyle.main} mt-4 m row`}>
            
            {/* 캘린더 */}
            <div className={`col-md-7 ${mainStyle.mainClass}`}>
                <MyCalendar />
            </div>
            <div className='col-md-5'>
                <div className="row justify-content-center">
                    <Paper elevation={3} className={`col-md-11 ${mainStyle.noticeBox}`}>
                        <div className={mainStyle.module}>
                            <p className={`${mainStyle.notice} mt-3 ms-3`}>공지사항</p>
                            <p className={mainStyle.vacationPlus}>+ 더보기</p>
                            <div className={mainStyle.myVacation}>
                                <div className={mainStyle.noticeTitle}>
                                    <Link to="board/notice">
                                    <img src="" alt="첨부파일" />
                                    <p><b>업무가 서툰 신입사원에게 추천하는 직장생활 안내서!</b></p>
                                    </Link>
                                </div>
                                <div className="mt-3">
                                    <div className={`${ mainStyle.noticeDate} fw-bold pl-1 `}>2022.02.17</div>
                                </div>
                            </div>
                            <Link to="board/notice" className="mt-4">
                                <div className={mainStyle.noticeList}>사내 공지 소식입니다.</div>
                                <div className={`${ mainStyle.noticeDate} float-end mr-3 `}>2022.02.17</div>
                            </Link>
                            <Link to="board/notice" className="mt-4">
                                <div className={mainStyle.noticeList}>사내 공지 소식입니다.</div>
                                <div className={`${ mainStyle.noticeDate} float-end mr-3 `}>2022.02.17</div>
                            </Link>
                        </div>
                    </Paper>
                    <div className="col-md-12">
                        <div className="row justify-content-center">
                            <Paper elevation={3} className="col-md-5">
                                <p className={`${mainStyle.mainApproval} fs-2 mt-5 text-center`}>승인된 결재</p>
                                <div className={mainStyle.noteCount}>
                                    <span>5</span>
                                    <span>건</span>
                                </div>
                            </Paper>
                            <div className='col-md-1'></div>
                            <Paper elevation={3} className="col-md-5">
                                <p className={`${mainStyle.mainApproval} fs-2 mt-5 text-center`}>반려된 결재</p>
                                <div className={mainStyle.noteCount}>
                                    <span>5</span>
                                    <span>건</span>
                                </div>
                            </Paper>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;