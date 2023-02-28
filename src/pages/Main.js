import mainStyle from '../resources/css/components/main.module.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MyCalendar from './calendar/MyCalendar';


function Main() {

    const [value, onChange] = useState(new Date());

    return (
        <>
            <main className={`${mainStyle.main} mt-4 m`}>
            
            {/* 캘린더 */}
            <div className={mainStyle.mainClass}>

                <MyCalendar />
       
            </div>

            <div className={`${mainStyle.mainClass} container`}>
                
                {/* 공지사항 */}
                <div className={mainStyle.module} style={{width: "100%", height:400}}>
                    <p className={`${mainStyle.notice} mt-3 ms-3`}>공지사항</p>
                    <p className={mainStyle.vacationPlus}>+ 더보기</p>
                    <div className={mainStyle.myVacation}>
                        <div>
                            <div className={mainStyle.noticeTitle}>
                                <Link to="board/notice">
                                        <img src="" alt="첨부파일" />
                                    <p><b>업무가 서툰 신입사원에게 추천하는 직장생활 안내서!</b></p>
                                </Link>
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className={`${ mainStyle.noticeDate} fw-bold pl-1 `}>2022.02.17</div>
                        </div>
                    </div>

                    <Link to="board/notice">
                    <div className="mt-4">
                        <div className={mainStyle.noticeList}>사내 공지 소식입니다.</div>
                        <div className={`${ mainStyle.noticeDate} float-end mr-3 `}>2022.02.17</div>
                    </div>
                    </Link>

                    <Link to="board/notice">
                    <div className="mt-4">
                        <div className={mainStyle.noticeList}>사내 공지 소식입니다.</div>
                        <div className={`${ mainStyle.noticeDate} float-end mr-3 `}>2022.02.17</div>
                    </div>
                    </Link>
                    
                </div>

                <div className={mainStyle.module} style={{width: "30%", height:400}}>
                    <p className={`${mainStyle.mainApproval} fs-2 mt-5 text-center`}>승인된 결재</p>
                    <div className={mainStyle.noteCount}>
                        <span>5</span>
                        <span>건</span>
                    </div>
                </div>
                <div className={mainStyle.module} style={{width: "30%", height:400}}>
                    <p className={`${mainStyle.mainApproval} fs-2 mt-5 text-center`}>반려된 결재</p>
                    <div className={mainStyle.noteCount}>
                        <span>5</span>
                        <span>건</span>
                    </div>
                </div>

            </div>
        </main>
        </>
    );
}

export default Main;