import mypageStyle from '../../resources/css/pages/mypage/mypage.module.css';
import mainTitleStyle from '../../resources/css/pages/mypage/main-title.module.css';
import profileStyle from '../../resources/css/components/profile.module.css';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import React from 'react';
import { PieChart } from "react-minimal-pie-chart";
import moment from 'moment';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { decodeJwt } from '../../utils/tokenUtils';

import { callGetMyLeaveInfoAPI } from '../../apis/LeaveAPICalls';
import { callGetMemberAPI } from '../../apis/MemberAPICalls';

import axios from 'axios';
import {callGetMessageReceiveListAPI} from "../../apis/MessageAPICalls";


function MypageMain() {

    const [date, setDate] = useState(new Date());
    const [startTimeStamp, setStartTimeStamp] = useState('');

    const [startTimeStampRecord, setStartTimeStampRecord] = useState(null);
    const [finishTimeStampRecord, setFinishTimeStampRecord] = useState(null);
    const [TotalWorkTime, setTotalWorkTime] = useState(null);
    const [prevStartTimeStampRecord, setPrevStartTimeStampRecord] = useState(null);
    const [finishTimeStore, setFinishTimeStore] = useState(null);
    const [endTimeStamp, setEndTimeStamp] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch(); 
    const token = decodeJwt(window.localStorage.getItem("accessToken"));
    const member = useSelector(state => state.memberReducer);  
    const memberDetail = member.data;
    const myLeaveInfo = useSelector(state => state.leaveReducer);
    const [startTime, setStartTime] = useState("");
    const [count , setCount] = useState('');
    const [emailSelect, setEmailSelect] = useState('');
    const [thisMonth, setThisMonth] = useState('');
    const [countOnTime, setCountOnTime] = useState('');
    const [countLate, setCountLate] = useState('');
    const [thisWeekTotalTime, setThisWeekTotalTime] = useState('');

    const payload ={
        memberCode: token.sub,
    }
    // hs
    const [hrForm, setHrForm] = useState({commuteStartTime: ''});

    useEffect(
        () => {
            dispatch(callGetMemberAPI({ 
                memberCode: token.sub 
            }));
        }, []
    );

    useEffect(
        () => {
            dispatch(callGetMyLeaveInfoAPI({
                memberCode: token.sub
            }));
        },[]
    );

    // useEffect(
    //     () => {
    //         const timerID = setInterval(() => tick(), 1000);
    //         return () => {
    //             clearInterval(timerID);
    //         };
    //     }
    // );

    // hs
    useEffect(() => {
        console.log("저장된 값 확인: " + startTimeStamp);
      }, [startTimeStamp]);

    // hs
    useEffect(() => {
        console.log("저장된 값 확인: " + finishTimeStore);
      }, [finishTimeStore]);

    // hs
    useEffect(() => {
        console.log("저장된 값 확인: " + hrForm);
      }, [hrForm]);

    // hs
    useEffect(() => {
        console.log("저장된 시간값 확인 " + startTimeStampRecord);
      }, [startTimeStampRecord]);

    // hs
    /*등록한 출퇴근이 조회된다*/
    useEffect(() => {
          axios
            .get(`http://localhost:8888/api/v1/attendance/mypageAregistSelect`, {
              params: {
                commuteStartTime: moment(date).format('YYYY-MM-DDTHH:mm:ss'),
                memberCode: token.sub,
              },
              headers: {
                "Content-Type": "application/json",
                Accept: "*/*",
                Authorization: `Bearer ${window.localStorage.getItem(
                  "accessToken"
                )}`,
              },
            })
            .then((response) => {
                const commuteFinishTime = response.data.data[0].commuteFinishTime;
                const formattedFinishTime = commuteFinishTime ? moment(commuteFinishTime, "YYYY-MM-DDTHH:mm:ss.SSSZ").format("HH:mm:ss") : '';


                console.log("출근 시간 데이터 나오기 전");
              console.log(response.data); // 응답 데이터를 콘솔에 출력
              setStartTimeStampRecord(moment(response.data.data[0].commuteStartTime).format("HH:mm:ss"));
              setFinishTimeStampRecord(formattedFinishTime);
              setTotalWorkTime(response.data.data[0].commuteTotalTime);
            })
            .catch((error) => {
              console.error(error);
              console.log("출근시간 결과값 못 불러옴");
              console.log(moment.utc(date).local().format('YYYY-MM-DDTHH:mm:ss'));
            });

      },[])

    /*받은 편지함의 내용을 가져온다.*/
    useEffect(()=>{

        dispatch(callGetMessageReceiveListAPI())
            .then((receivedData) => {
                console.log("메세지 받아온 값 확인" , receivedData);
                setEmailSelect(receivedData);
                console.log("api에서 받은 값 출력",emailSelect);
            }).catch(error => console.log(error))

    }, []);


    useEffect(() => {
        console.log("api에서 받은 값 출력", emailSelect);
      }, [emailSelect])

    /*나의 메세지함 카운트*/
    useEffect(() => {
        axios.post(`http://localhost:8888/api/v1/messageReceivedCount`,payload, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Authorization": `Bearer ${window.localStorage.getItem('accessToken')}`
            }
        }).then(response => {
            console.log(response.data); // 응답 데이터를 콘솔에 출력
            setCount(response.data.data);
        })
            .catch(error => {
                console.error(error);
            });
    }, []);


    /*나의 근태 정보 출력*/
    useEffect(() => {
        axios.post(`http://localhost:8888/api/v1/attendance/myPageAttendanceMonth`,payload, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Authorization": `Bearer ${window.localStorage.getItem('accessToken')}`
            }
        }).then(response => {
            console.log("근태정보출력",response.data); // 응답 데이터를 콘솔에 출력
            setThisMonth(response.data.data.thisMonth);
            setCountOnTime(response.data.data.countOnTime);
            setCountLate(response.data.data.countLate);
            setThisWeekTotalTime(response.data.data.thisWeekTotalTime);

        })
            .catch(error => {
                console.error(error);
            });
    }, []);

    if (!memberDetail || Object.keys(memberDetail).length === 0) {
        return <div>Loading...</div>;
    };

    if (!myLeaveInfo || Object.keys(myLeaveInfo).length === 0) {
        return <div>Loading...</div>;
    };

     /* 임시로 리액트 에러 수정 */
     let myLeaveAll = 1;
     let myLeaveLeftover = 1;
 
     if (myLeaveInfo !== undefined) {
        const currentYear = new Date().getFullYear();
        const matchingLeave = myLeaveInfo.find(item => 
          item.leaveCategoryCode === 'LC1' && new Date(item.leavePaymentDate).getFullYear() === currentYear
        );
        if (matchingLeave !== undefined) {
          myLeaveAll = matchingLeave.leavePaymentCount;
          myLeaveLeftover = matchingLeave.leaveLeftoverCount;
        }
      }

    function tick() {
        setDate(new Date());
    }

    /* 개인정보 수정 페이지로 이동 */
    const mypageManagementHref = () => {
        navigate("/mypage/management", { replace: true })
    }



    // hs
    /* 출근하기 버튼 핸들러 */
    const onClickStartTimeHandler = () => {

        if(!startTimeStampRecord) {

            setStartTimeStamp(moment(date).format('HH:mm:ss'));

            const payload = {
                commuteStartTime: date,
              };

              axios
                .get(`http://localhost:8888/api/v1/attendance/mypageAregist`, {
                    params : {
                        commuteStartTime: date,
                        memberCode: token.sub,
                    },
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "*/*",
                    Authorization: `Bearer ${window.localStorage.getItem(
                      "accessToken"
                    )}`,
                  },
                })

                .then((response) => {
                  console.log("데이터 나오기 전");
                  console.log(response.data); // 응답 데이터를 콘솔에 출력
                  setStartTimeStamp(moment(response.data.date).format('HH:mm:ss'));
                  alert(response.data.data)
                  window.location.reload();
                })
                .catch((error) => {
                  console.error(error);
                  console.log("마이페이지 결과값 못 불러옴");
                });
        } else {

            alert('이미 출근하셨습니다.');
        }
    }

    // hs
    /* 퇴근하기 버튼 핸들러 */
    const onClickEndTimeHandler = () => {

        if(!finishTimeStampRecord) {

            if (!startTimeStampRecord) {

                alert('출근 시간이 설정되지 않았습니다.');
            } else if(window.confirm('현재 서버 시간은 ' + date.toLocaleString() + " 입니다.\n정말로 퇴근하시겠습니까?")){
    
                setFinishTimeStore(date.toLocaleString());
                setEndTimeStamp(moment(date).format('HH:mm:ss'));

                const payload = {
                    commuteFinishTime: finishTimeStore,
                  };

                axios
                .get(`http://localhost:8888/api/v1/attendance/mypageAfinishRegist`, {
                    params : {
                        commuteFinishTime: date,
                        memberCode: token.sub,
                    },
                    headers: {
                    "Content-Type": "application/json",
                    Accept: "*/*",
                    Authorization: `Bearer ${window.localStorage.getItem(
                        "accessToken"
                    )}`,
                    },
                })


                    .then((response) => {
                      console.log("데이터 나오기 전");
                      console.log(response.data); // 응답 데이터를 콘솔에 출력
                      setEndTimeStamp(moment(response.data.date).format('HH:mm:ss'));
                      window.location.reload();
                    })
                    .catch((error) => {
                      console.error(error);
                      console.log("마이페이지 결과값 못 불러옴");
                    });


            }
        } else {
            alert('이미 퇴근을 하셨습니다.');
        }
    }

    return (
        <>
            <main className={mainTitleStyle.main}>
                <div className={mainTitleStyle.mainClass}>
                    <Paper elevation={3} className={mypageStyle.module}>
                        <p className={mypageStyle.moduleTitle}>나의 정보</p>
                        <div className={profileStyle.profile}>
                            <img className={profileStyle.mpmProfileImg} alt="profile_img" src={memberDetail?.profileImageList?.[0]?.profileImageLocation ?? 'default-profile-image.png'} />
                        </div>
                        <div className="text-center mt-4 mb-4">
                            <span className="fs-4 fw-bold">{memberDetail.memberName}</span>
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
                        <p className={mypageStyle.moduleTitle}>나의 {new Date().getFullYear()}년도 휴가 현황</p>
                        <p className={mypageStyle.vacationPlus}>+ 휴가신청</p>
                        <div className={`text-center ${mypageStyle.myVacation}`}>
                            <div>
                            <PieChart
                                data={[
                                {
                                    value: myLeaveLeftover,
                                    color: "#FFA07A",
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
                                    <span className="fw-300 fs-3 mr-5">사용연차</span>
                                    <span className={`fw-300 fs-3 float-right ${mypageStyle.workDay}`}>{myLeaveAll - myLeaveLeftover}일</span>
                                </div>
                                <div className="ml-5 mr-5 pd-3">
                                    <span className="fw-300 fs-3 mr-5">잔여연차</span>
                                    <span className={`fw-300 fs-3 float-right ${mypageStyle.workDay}`}>{myLeaveLeftover}일</span>
                                </div>
                            </div>
                        </div>
                    </Paper>

                    <Paper elevation={3} className={mypageStyle.module}>
                        <p className={mypageStyle.moduleTitle}>근태관리</p>
                        <div className="text-lg-start ml-3 text-center time">
                            {/* <p className="alert-light fs-5 fw-bold text-dark">{date.toLocaleString()}</p> */}
                        </div>
                        <div className={mypageStyle.todayWorkTime}>
                            <p className="fw-bold fs-5 text-center">오늘 근무 시간</p>
                            <div className="text-center">
                                <span className="fs-1 fw-bolder">{TotalWorkTime}</span>
                                <span className="fs-3 fw-bold">시간</span>

                            </div>
                        </div>
                        <div>
                            <div className="ml-5 mr-5">
                                <span className="fw-300">출근 시간</span>
                                <span className="fw-300 float-right">{startTimeStampRecord}</span>
                            </div>
                            <div className="ml-5 mr-5 pb-3 border-bottom">
                                <span className="fw-300">퇴근 시간</span>
                                <span className="fw-300 float-right">{finishTimeStampRecord}</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <button className={mypageStyle.workBtn} onClick={onClickStartTimeHandler}>출근하기</button>
                            <button className={mypageStyle.workBtn} onClick={onClickEndTimeHandler}>퇴근하기</button>
                        </div>
                        <div className={mypageStyle.seeMore}>
                            <p><Link to="/mypage/attendance">더보기 ➢</Link></p>
                        </div>
                    </Paper>
                </div>

                <div className={`mb-5 ${mainTitleStyle.mainClass}`}>

                    <Paper elevation={3} className={mypageStyle.module}>
                        <p className={mypageStyle.moduleTitle}>나의 메세지함</p>
                        <div className={mypageStyle.noteCount}>
                            <span>{count}</span>
                            <span>건</span>
                       </div>

                         {[...emailSelect].slice(0, 3).map((receivedEmail,index) => {
                            return (
                            <table key={index} className={`text-center ${mypageStyle.noteContent}`}>
                            <tbody>
                            <tr>
                            <td className={mypageStyle.noteDay}>{moment(receivedEmail.date).format('YY-MM-DD')}</td>
                            <td className={mypageStyle.titleStyle}>{receivedEmail.title}</td>
                            <td>{receivedEmail.name}</td>
                            </tr>
                            </tbody>
                             </table>
                            );
                        })}   

                        <div className={mypageStyle.seeMore}>
                        <br/>
                        <p><Link to="/messsage/receivedMessage" >더보기 ➢</Link></p>
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
                            <p><Link to="/mypage/annual/history">더보기 ➢</Link></p>
                        </div>
                    </Paper>

                    <Paper elevation={3} className={mypageStyle.module}>
                        <p className={mypageStyle.moduleTitle}>나의 근태</p>
                        <div className={mypageStyle.workMonth}>
                            <span>{date.toLocaleString('default', { month: 'short' })}</span>
                        </div>
                        <div className="mb-5">
                            <div className="ml-5 mr-5 pb-3">
                                <span className="fw-300">출근일수</span>
                                <span className={`fw-300 float-right ${mypageStyle.workDay}`}>{countOnTime}일</span>
                            </div>
                            <div className="ml-5 mr-5 pb-3">
                                <span className="fw-300">지각</span>
                                <span className={`fw-300 float-right ${mypageStyle.workDay}`}>{countLate}일</span>
                            </div>
                            {/*<div className="ml-5 mr-5 pb-3">*/}
                            {/*    <span className="fw-300">추가근무</span>*/}
                            {/*    <span className={`fw-300 float-right ${mypageStyle.workDay}`}>6일</span>*/}
                            {/*</div>*/}
                        </div>
                        <div className={mypageStyle.seeMore}>
                            <p><Link to="/mypage/attendance/history">더보기 ➢</Link></p>
                        </div>
                    </Paper>

                    <Paper elevation={3} className={mypageStyle.module}>
                        <p className={mypageStyle.moduleTitle}>주 근무 시간</p>
                        <div className={mypageStyle.weekTime}>
                            <span className={mypageStyle.weekMyTime}>{thisWeekTotalTime}</span>
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