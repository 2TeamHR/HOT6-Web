import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import koLocale from '@fullcalendar/core/locales/ko';
import CalendarAddBtn from './CalendarAddBtn';
import { Button, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import { decodeJwt } from '../../utils/tokenUtils';
import { 
  callMainCalendarListAPI 
  , callCalendarDeleteAPI
} from '../../apis/CalendarAPICalls';

const MyCalendar = () => {

  const dispatch = useDispatch();
  const calendarList = useSelector(state => state.calendarReducer);  
  const token = decodeJwt(window.localStorage.getItem("accessToken"));

  useEffect(
    () => {
        dispatch(callMainCalendarListAPI());
    }, []
  );

  const calendarRef = React.createRef();
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedCode, setSelectedCode] = useState(null);
  const handleClose = () => setShowModal(false);

  /* 일정 삭제 핸들러 */
  const onDeleteHandler = async (calendarCode) => {
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      try {
        await dispatch(callCalendarDeleteAPI({ calendarCode }));
        await dispatch(callMainCalendarListAPI());
        setShowModal(false);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="container mt-5">
      
      { (token.auth.includes("ROLE_ADMIN")) ? <CalendarAddBtn /> : <div/> }

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{content}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => onDeleteHandler(selectedCode)}>
            삭제
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            닫기
          </Button>
        </Modal.Footer>
      </Modal>
    
      <div style={{clear:"both"}}>
      </div>

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
          events={
            Array.isArray(calendarList) && calendarList.map((calendar) => ({
              title: calendar.calendarTitle,
              start: calendar.calendarStartDate,
              end: calendar.calendarEndDate,
              code: calendar.calendarCode,
              backgroundColor:"#2ECC71",
              borderColor:"#FFFFFF",
              className: "text-center",
              extendedProps: { content: calendar.calendarContent }
            }))
          }
          // events={[
          //   {
          //     title: "노재영",
          //     start: "2023-03-02",
          //     end: "2023-03-10",
          //     extendedProps: { content: "내용1" },
          //     backgroundColor: "#ff0000",
          //     borderColor: "#ffffff",
          //     className: "text-center",
          //   },
          //   {
          //     title: "최고",
          //     start: "2023-03-03",
          //     extendedProps: { content: "내용2" },
          //   },
          //   {
          //     title: "최고",
          //     start: "2023-03-03",
          //     extendedProps: { content: "내용3" },
          //   }
          // ]}
        />
      </div>
    </div>
  );
};

export default MyCalendar;
