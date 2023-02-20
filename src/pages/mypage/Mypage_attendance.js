import mpAttendanceStyle from '../../resources/css/pages/mypage/mypage-attendance.module.css';
import mainTitleStyle from '../../resources/css/pages/mypage/main-title.module.css';

function MypageAttendance() {

    return (
        <>
        <main className={mainTitleStyle.main}>
            <div>

                <div className={mainTitleStyle.title}>
                    <p>근태 관리</p>
                </div>

                {/* <!-- check box --> */}
                <div className="d-flex flex-row justify-content-around">
                    <div className={mpAttendanceStyle.attendanceCheckMainBox1}>
                        <p>근태 체크</p>
                        <div className={`d-flex flex-row justify-content-around ${mpAttendanceStyle.attendanceCheckBox}`}>
                            <div className="text-center">
                                <p className="fs-4 mb-0">2023.01.31(화)</p>
                                <p className="fs-1 fw-bold">19:40:17</p>
                            </div>
                            <div className="float-right">
                                <div>
                                    <div className="ml-1 mr-1">
                                        <span className="fw-300">출근 시간</span>
                                        <span className="fw-300 float-right">08:45:19</span>
                                    </div>
                                    <div className="ml-1 mr-1 pb-3 border-bottom">
                                        <span className="fw-300">퇴근 시간</span>
                                        <span className="fw-300 float-right">미등록</span>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button className={mpAttendanceStyle.workBtn}>출근하기</button>
                                    <button className={mpAttendanceStyle.workBtn}>퇴근하기</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={mpAttendanceStyle.attendanceCheckMainBox2}>
                        <p>
                            고전 근무 
                            <span>근무시간 09:00 ~ 18:00</span>
                        </p>
                        <div className={`d-flex flex-row justify-content-around ${mpAttendanceStyle.attendanceCheckBox}`}>
                            <div className="mb-2">
                                <p className="fs-5 mb-3">
                                    이번주
                                    <span className="fs-6 ml-3 text-secondary">01.30 ~ 02.03</span>
                                </p>
                                <div className="d-flex flex-row justify-content-around">
                                    <div className="ml-3 mr-3 text-center">
                                        <p className="mb-0">총 근무 시간</p>
                                        <p className="fs-4 text-primary">16시간</p>
                                    </div>
                                    <div className="ml-3 mr-3 text-center">
                                        <p className="mb-0">남은 근무 시간</p>
                                        <p className="fs-4 text-primary">24시간</p>
                                    </div>
                                    <div className="ml-3 mr-3 text-center">
                                        <p className="mb-0">연장 근무 시간</p>
                                        <p className="fs-4 text-primary">0시간</p>
                                    </div>
                                </div>
                            </div>
                            <div className="border-end mb-3"></div>
                            <div className="mb-2">
                                <p className="fs-5 mb-3">
                                    이번달
                                    <span className="fs-6 ml-3 text-secondary">2023.01</span>
                                </p>
                                <div className="d-flex flex-row justify-content-around">
                                    <div className="ml-3 mr-3 text-center">
                                        <p className="mb-0">총 근무 시간</p>
                                        <p className="fs-4 text-primary">160시간</p>
                                    </div>
                                    <div className="ml-3 mr-3 text-center">
                                        <p className="mb-0">남은 근무 시간</p>
                                        <p className="fs-4 text-primary">0시간</p>
                                    </div>
                                    <div className="ml-3 mr-3 text-center">
                                        <p className="mb-0">연장 근무 시간</p>
                                        <p className="fs-4 text-primary">0시간</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- check box -->

                <!-- calender --> */}
                <div className="calender">
                    달력!
                </div>
                {/* <!-- calender --> */}
            </div>
        </main>
        </>
    );
}

export default MypageAttendance;