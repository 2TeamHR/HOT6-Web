import mpAttendanceStyle from "../../resources/css/pages/mypage/mypage-attendance.module.css";
import mainTitleStyle from "../../resources/css/pages/mypage/main-title.module.css";
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FullCalendar from '@fullcalendar/react';
import koLocale from '@fullcalendar/core/locales/ko';
import { Button, Modal } from "react-bootstrap";
import dayGridPlugin from '@fullcalendar/daygrid';
import Table from 'react-bootstrap/Table';

function MypageAttendance() {

  const [date, setDate] = useState(new Date());
  const dispatch = useDispatch();
  const calendarRef = React.createRef();
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedCode, setSelectedCode] = useState(null);
  const handleClose = () => setShowModal(false);
  

  return (
    <>
      <main className={mainTitleStyle.main}>
        <div>
          <div className={mainTitleStyle.title}>
            <p>근태 관리</p>
          </div>

          <div className="d-flex flex-row justify-content-between">

            {/* 근태 체크 start */}
            <div className={mpAttendanceStyle.attendanceCheckMainBox1}>
              <p>근태 체크</p>
              <div className={`d-flex flex-row justify-content-around ${mpAttendanceStyle.attendanceCheckBox}`}>
                <div className="text-center">
                  <p className="fs-5 mb-0">{date.toLocaleString()}</p>
                  <p className="fs-2 fw-bold">19:40:17</p>
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
                    <button className={mpAttendanceStyle.workBtn}>
                      출근하기
                    </button>
                    <button className={mpAttendanceStyle.workBtn}>
                      퇴근하기
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* 근태 체크 end */}

            {/* 고정 근무 시간 start */}
            <div className={mpAttendanceStyle.attendanceCheckMainBox2}>
              <p>
                고전 근무
                <span>근무시간 09:00 ~ 18:00</span>
              </p>
              <div className={`d-flex flex-row justify-content-around ${mpAttendanceStyle.attendanceCheckBox}`}>
                <div className="mb-2">
                  <p className="fs-5 mb-3">
                    이번주
                    <span className="fs-6 ml-3 text-secondary">
                      01.30 ~ 02.03
                    </span>
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
            {/* 고정 근무 시간 end */}

          </div>
            <div className="mt-5">
              <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{content}</Modal.Body>
                <Modal.Footer>
                  <Button variant="primary"onClick={handleClose}>
                    삭제
                  </Button>
                  <Button variant="secondary" onClick={handleClose}>
                    닫기
                  </Button>
                </Modal.Footer>
              </Modal>

              {/* 캘린더 start */}
              <div>
                <FullCalendar
                  ref={calendarRef}
                  plugins={[dayGridPlugin]}
                  locale={koLocale}
                  initialView='dayGridMonth'
                  headerToolbar={{
                    start: 'prev today',
                    center: 'title',
                    end:"next"
                  }}
                  dayHeaderContent={(info) => {
                    const day = info.date.getDay();
                    const className = (day === 0) ? 'text-danger' : (day === 6) ? 'text-primary' : '';
                    return (
                      <span className={className}>
                        {info.date.toLocaleDateString('ko-KR', { weekday: 'long' })}
                      </span>
                    )
                  }}
                  dayCellContent={(info) => {
                    const date = info.date.getDate();
                    const day = info.date.getDay();
                    const className = (day === 0) ? 'text-danger' : (day === 6) ? 'text-primary' : '';
                    return (
                      <div className={className}>
                        <span>{date}일</span>
                      </div>
                    );
                  }}
                  eventClick={(info) => {
                    setTitle(info.event.title);
                    setContent(info.event.extendedProps.content);
                    setSelectedCode(info.event.extendedProps.code);
                    setShowModal(true);
                  }}
                  height='650px'
                  events={[
                    {
                      title: "노재영",
                      start: "2023-03-02",
                      end: "2023-03-10",
                      extendedProps: { content: "내용1" },
                      backgroundColor: "#ff0000",
                      borderColor: "#ffffff",
                      className: "text-center",
                    },
                    {
                      title: "최고",
                      start: "2023-03-03",
                      extendedProps: { content: "내용2" },
                    },
                    {
                      title: "최고",
                      start: "2023-03-03",
                      extendedProps: { content: "내용3" },
                    }
                  ]}
                />
              </div>
              {/* 캘린더 start */}

            </div>
        </div>
      </main>
    </>
  );
}

export default MypageAttendance;
