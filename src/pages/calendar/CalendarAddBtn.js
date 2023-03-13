import { Modal, Button } from 'react-bootstrap';
import React, { useState } from 'react';


function CalendarAddBtn() {

    const [showModal, setShowModal] = useState(false);
    const [eventTitle, setEventTitle] = useState('');
    const [eventDate, setEventDate] = useState('');

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    const handleTitleChange = (event) => setEventTitle(event.target.value);
    const handleDateChange = (event) => setEventDate(event.target.value);

    const handleAddEvent = () => {
        const calendarApi = calendarRef.current.getApi();
        calendarApi.addEvent({
        title: eventTitle,
        start: eventDate
        });
        setShowModal(false);
    };

    const calendarRef = React.createRef();

    return (
        <div>

            <Button className="btn btn-primary mb-3" style={{float:"right"}} onClick={handleShow}>
                일정 추가
            </Button>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>일정 추가</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form-group">
                        <label className='fw-bold'>제목</label>
                        <p className='fw-light'>제목은 10글자 이하로 작성하여 주세요.</p>
                        <input type="text" className="form-control" onChange={handleTitleChange} />
                    </div>
                    <div className="form-group">
                        <label className='fw-bold'>시작 일자</label>
                        <input type="date" className="form-control" onChange={handleDateChange} />
                    </div>
                    <div className="form-group">
                        <label className='fw-bold'>종료 일자</label>
                        <input type="date" className="form-control" onChange={handleDateChange} />
                    </div>
                    <div className="form-group">
                        <label className='fw-bold'>내용</label>
                        <textarea rows="4" cols="50" className="form-control" onChange={handleDateChange}>
                        이곳에 여러 줄을 입력하세요.
                        </textarea>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={handleAddEvent}>
                    추가
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                    취소
                </Button>
                </Modal.Footer>
            </Modal>
      </div>
    );
}

export default CalendarAddBtn;