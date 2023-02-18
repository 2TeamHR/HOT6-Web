import mypageStyle from '../../resources/css/pages/mypage/mypage.module.css';
import mainTitleStyle from '../../resources/css/pages/mypage/main-title.module.css';

function MypageMain() {

    return (
        <>
            <main className={mainTitleStyle.main}>
            <div className={mainTitleStyle.mainClass}>
                <div className={mypageStyle.module}>
                    <p className={mypageStyle.moduleTitle}>나의 정보</p>
                    <div className={mypageStyle.profileImage}>
                        <img className="center" src="" width="150px"/>
                    </div>
                    <div className="text-center mt-4 mb-4">
                        <span className="fs-4 fw-bold">홍길동</span>
                        <span className="fs-4 fw-bold">님</span>
                    </div>
                    <div className="text-center">
                        <span>내선번호</span>
                        <span>712</span>
                    </div>
                    <div className="text-center">
                        <span>5DO001</span>
                    </div>
                    <div className={`${mypageStyle.infoUpdate} text-center mt-3`}>
                        <button>개인정보 변경</button>
                    </div>
                </div>

                <div className={mypageStyle.module} style={{width: "205%"}}>
                    <p className={mypageStyle.moduleTitle}>나의 2023년도 휴가 현황</p>
                    <p className={mypageStyle.vacationPlus}>+ 휴가신청</p>
                    <div className={`text-center ${mypageStyle.myVacation}`}>
                        <div className={mypageStyle.chart}>
                            <div className={mypageStyle.chartBar}></div>
                        </div>
                        <div className="mt-5 pt-5">
                            <div className="ml-5 mr-5 pb-3">
                                <span className="fw-300 fs-5 mr-5">사용연차</span>
                                <span className={`fw-300 fs-5 float-right ${mypageStyle.workDay}`}>5일</span>
                            </div>
                            <div className="ml-5 mr-5 pd-3">
                                <span className="fw-300 fs-5 mr-5">잔여연차</span>
                                <span className={`fw-300 fs-5 float-right ${mypageStyle.workDay}`}>11일</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={mypageStyle.module}>
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
                    <div className="">
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
                        <p><a href="#!">더보기 +</a></p>
                    </div>
                </div>
            </div>

            <div className={mainTitleStyle.mainClass}>

                <div className={mypageStyle.module}>
                    <p className={`${mypageStyle.moduleTitle} fs-1 mt-5`}>쪽지함</p>
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
                        <p>더보기 +</p>
                    </div>
                </div>

                <div className={mypageStyle.module}>
                    <p className={mypageStyle.moduleTitle}>연차 이력</p>
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
                            <span className="fw-300">202년도</span>
                            <span className={`fw-300 float-right ${mypageStyle.workDay}`}>16개 사용</span>
                        </div>
                    </div>
                    <div className={mypageStyle.seeMore}>
                        <p>더보기 +</p>
                    </div>
                </div>

                <div className={mypageStyle.module}>
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
                        <p>더보기 +</p>
                    </div>
                </div>

                <div className={mypageStyle.module}>
                    <p className={mypageStyle.moduleTitle}>주 근무 시간</p>
                    <div className={mypageStyle.weekTime}>
                        <span className={mypageStyle.weekMyTime}>40</span>
                        <span>/</span>
                        <span>52</span>
                        <span>시간</span>
                    </div>
                </div>

            </div>
        </main>
        </>
    );
}

export default MypageMain;