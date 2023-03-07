import mypageStyle from '../../resources/css/pages/mypage/mypage.module.css';
import mainTitleStyle from '../../resources/css/pages/mypage/main-title.module.css';
import profileStyle from '../../resources/css/components/profile.module.css';
import { Link } from 'react-router-dom';
import sampleImg from '../../resources/image/hong.jpeg';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import React from 'react';
import { PieChart } from "react-minimal-pie-chart";

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { decodeJwt } from '../../utils/tokenUtils';

import { callGetMyLeaveInfoAPI } from '../../apis/LeaveAPICalls';

function MypageMain() {

    const mypageManagementHref = () => {
        document.location.href = "/mypage/management"
    }

    useEffect(
        () => {
            dispatch(callGetMyLeaveInfoAPI({
                memberCode: token.sub
            }));
        },[]
        
    );

    const navigate = useNavigate();
    const dispatch = useDispatch(); 
    const token = decodeJwt(window.localStorage.getItem("accessToken"));  
    const myLeaveInfo = useSelector(state => state.leaveReducer); 
    console.log("=======>>>>>",myLeaveInfo.data);
    console.log('token', token.sub);
    console.log('=============', myLeaveInfo.data);
    let myLeaveAll = [];
    let myLeaveLeftover = [];
    if(myLeaveInfo.data !== undefined){
        myLeaveAll =  myLeaveInfo.data[0].leavePaymentCount;
        myLeaveLeftover = myLeaveInfo.data[0].leaveLeftoverCount;
    }
    


 
    return (
        <>
            <main className={mainTitleStyle.main}>
                <div className={mainTitleStyle.mainClass}>
                    <Paper elevation={3} className={mypageStyle.module}>
                        <p className={mypageStyle.moduleTitle}>나의 정보</p>
                        <div className={profileStyle.profile}>
                            <img className={profileStyle.profileImg} alt="profile_img" src={sampleImg} />
                        </div>
                        <div className="text-center mt-4 mb-4">
                            <span className="fs-4 fw-bold"></span>
                            <span className="fs-4 fw-bold">님</span>
                        </div>
                        <div className="text-center">
                            <span>{token.sub}</span>
                        </div>
                        <div className={`${mypageStyle.infoUpdate} text-center mt-3`}>
                            <Button variant="contained" onClick={mypageManagementHref}>개인정보 변경</Button>
                        </div>
                    </Paper>

                    <Paper elevation={3} className={mypageStyle.module} style={{width: "205%"}}>
                        <p className={mypageStyle.moduleTitle}>나의 2023년도 휴가 현황</p>
                        <p className={mypageStyle.vacationPlus}>+ 휴가신청</p>
                        <div className={`text-center ${mypageStyle.myVacation}`}>
                            <div>
                            <PieChart
                                data={[
                                {
                                    value: myLeaveLeftover,
                                    color: "#43B2CA",
                                    name: "name1",
                                },
                                ]}
                                reveal={myLeaveLeftover / myLeaveAll * 100} //퍼센트 치수
                                lineWidth={25} //도넛 두께
                                background="#f3f3f3"
                                lengthAngle={360}
                                startAngle={-90}
                                rounded
                                animate
                                label={({ dataEntry }) => dataEntry.value + "일 남음"}
                                labelStyle={{
                                fontSize: "13px",
                                fill: "#33333",
                                }}
                                labelPosition={0}
                            />
                            </div>
                            <div className="mt-5 pt-5">
                                <div className="ml-5 mr-5 pb-3">
                                    <span className="fw-300 fs-5 mr-5">사용연차</span>
                                    <span className={`fw-300 fs-5 float-right ${mypageStyle.workDay}`}>{myLeaveLeftover}일</span>
                                </div>
                                <div className="ml-5 mr-5 pd-3">
                                    <span className="fw-300 fs-5 mr-5">잔여연차</span>
                                    <span className={`fw-300 fs-5 float-right ${mypageStyle.workDay}`}>{myLeaveAll - myLeaveLeftover}일</span>
                                </div>
                            </div>
                        </div>
                    </Paper>

                    <Paper elevation={3} className={mypageStyle.module}>
                        <p className={mypageStyle.moduleTitle}>근태관리</p>
                        <div className="text-lg-start ml-3 text-center time">
                            <p className="alert-light fs-5">2023년 3월 19일(목요일) 14:30:32</p>
                        </div>
                        <div className={mypageStyle.todayWorkTime}>
                            <p className="fw-bold fs-5 text-center">오늘 군무 시간</p>
                            <div className="text-center">
                                <span className="fs-1 fw-bolder">5</span>
                                <span className="fs-3 fw-bold">시간</span>
                                <span className="fs-1 fw-bolder">30</span>
                                <span className="fs-3 fw-bold">분</span>
                            </div>
                        </div>
                        <div>
                            <div className="ml-5 mr-5">
                                <span className="fw-300">출근 시간</span>
                                <span className="fw-300 float-right">08:45:19</span>
                            </div>
                            <div className="ml-5 mr-5 pb-3 border-bottom">
                                <span className="fw-300">퇴근 시간</span>
                                <span className="fw-300 float-right">미등록</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <button className={mypageStyle.workBtn}>출근하기</button>
                            <button className={mypageStyle.workBtn}>퇴근하기</button>
                        </div>
                        <div className={mypageStyle.seeMore}>
                            <p><Link to="/mypage/attendance">더보기 +</Link></p>
                        </div>
                    </Paper>
                </div>

                <div className={mainTitleStyle.mainClass}>

                    <Paper elevation={3} className={mypageStyle.module}>
                        <p className={mypageStyle.moduleTitle}>나의 메세지함</p>
                        <div className={mypageStyle.noteCount}>
                            <span>5</span>
                            <span>건</span>
                        </div>
                        <div className={`text-center ${mypageStyle.noteContent}`}>
                            <span className={mypageStyle.noteDay}>23.11.13</span>
                            <span>연차신청</span>
                            <span>이순신사원</span>
                        </div>
                        <div className={`text-center ${mypageStyle.noteContent}`}>
                            <span className={mypageStyle.noteDay}>23.11.13</span>
                            <span>연차신청</span>
                            <span>이순신사원</span>
                        </div>
                        <div className={`text-center mb-5 ${mypageStyle.noteContent}`}>
                            <span className={mypageStyle.noteDay}>23.11.13</span>
                            <span>연차신청</span>
                            <span>이순신사원</span>
                        </div>
                        <div className={mypageStyle.seeMore}>
                        <p><Link to="/messsage/receivedMessage" >더보기 +</Link></p>
                        </div>
                    </Paper>

                    <Paper elevation={3} className={mypageStyle.module}>
                        <p className={mypageStyle.moduleTitle}>나의 휴가 이력</p>
                        <div className={`ml-2 mr-2 ${mypageStyle.yearHistory}`}>
                            <div className="ml-5 mr-5 pb-3">
                                <span className="fw-300">2022년도</span>
                                <span className={`fw-300 float-right ${mypageStyle.workDay}`}>21개 사용</span>
                            </div>
                            <div className="ml-5 mr-5 pb-3">
                                <span className="fw-300">2021년도</span>
                                <span className={`fw-300 float-right ${mypageStyle.workDay}`}>18개 사용</span>
                            </div>
                            <div className="ml-5 mr-5 pd-3">
                                <span className="fw-300">2020년도</span>
                                <span className={`fw-300 float-right ${mypageStyle.workDay}`}>16개 사용</span>
                            </div>
                        </div>
                        <div className={mypageStyle.seeMore}>
                            <p><Link to="/mypage/annual/history">더보기 +</Link></p>
                        </div>
                    </Paper>

                    <Paper elevation={3} className={mypageStyle.module}>
                        <p className={mypageStyle.moduleTitle}>나의 근태</p>
                        <div className={mypageStyle.workMonth}>
                            <span>1</span>
                            <span>월</span>
                        </div>
                        <div className="mb-5">
                            <div className="ml-5 mr-5 pb-3">
                                <span className="fw-300">출근일수</span>
                                <span className={`fw-300 float-right ${mypageStyle.workDay}`}>17일</span>
                            </div>
                            <div className="ml-5 mr-5 pb-3">
                                <span className="fw-300">지각</span>
                                <span className={`fw-300 float-right ${mypageStyle.workDay}`}>2일</span>
                            </div>
                            <div className="ml-5 mr-5 pb-3">
                                <span className="fw-300">추가근무</span>
                                <span className={`fw-300 float-right ${mypageStyle.workDay}`}>6일</span>
                            </div>
                        </div>
                        <div className={mypageStyle.seeMore}>
                            <p><Link to="/mypage/attendance/history">더보기 +</Link></p>
                        </div>
                    </Paper>

                    <Paper elevation={3} className={mypageStyle.module}>
                        <p className={mypageStyle.moduleTitle}>주 근무 시간</p>
                        <div className={mypageStyle.weekTime}>
                            <span className={mypageStyle.weekMyTime}>40</span>
                            <span>/</span>
                            <span>52</span>
                            <span>시간</span>
                        </div>
                    </Paper>

                </div>
            </main>
        </>
    );
}

export default MypageMain;