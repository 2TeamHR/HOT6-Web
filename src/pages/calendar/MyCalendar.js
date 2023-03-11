import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import koLocale from '@fullcalendar/core/locales/ko';
import CalendarAddBtn from './CalendarAddBtn';
import { Button, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import {callMainCalendarListAPI} from '../../apis/CalendarAPICalls';

const MyCalendar = () => {

  const dispatch = useDispatch();
  const calendarList = useSelector(state => state.calendarReducer);  

  console.log('calendarList : ', calendarList);

  useEffect(
    () => {
        dispatch(callMainCalendarListAPI());
    }, []
  );

  const calendarRef = React.createRef();
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleClose = () => setShowModal(false);

  return (
    <div className="container mt-5">

      <CalendarAddBtn/>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{content}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            수정
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
                <span>{date}</span>
              </div>
            );
          }}
          eventClick={(info) => {
            setTitle(info.event.title);
            setContent(info.event.extendedProps.content);
            setShowModal(true);
          }}
          events={calendarList.map((calendar) => ({
            title: calendar.calendarTitle,
            start: calendar.calendarStartDate.toString().substring(0, 10),
            end: calendar.calendarEndDate.toString().substring(0, 10),
            borderColor: "#ffffff",
            className: "text-center",
            extendedProps: { content: calendar.calendarContent },
          }))}
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
