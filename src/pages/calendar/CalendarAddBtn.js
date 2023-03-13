import { Modal, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { callMainCalendarListAPI , callCalendarInsertAPI } from '../../apis/CalendarAPICalls';
import { decodeJwt } from '../../utils/tokenUtils';
import { useDispatch } from 'react-redux';

function CalendarAddBtn() {

    const token = decodeJwt(window.localStorage.getItem("accessToken"));
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const [form, setForm] = useState({
        calendarTile: '',
        calendarContent: '',
        calendarStartDate: '',
        calendarEndDate: '',
        memberCode:'',
        calendarYn:''
      });

    const onChangeTitleHandler = (e) => {

        const maxLength = 10; // 최대 길이

        if(e.target.value.length > maxLength) {
            alert(`제목은 ${maxLength}글자 이내로 입력해주세요.`);   
            e.target.value = '';    // 빈칸으로 되돌리기
        } else {
            setForm({
                ...form,
                [e.target.name]: e.target.value
            });
        }
    };

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    /* 일정 등록 핸들러 */
    const onClickCalendarSchedule = async () => {

        const formData = new FormData();

        formData.append("memberCode", token.sub);
        formData.append("calendarTitle", form.calendarTitle);
        formData.append("calendarContent", form.calendarContent);
        formData.append("calendarStartDate", form.calendarStartDate);
        formData.append("calendarEndDate", form.calendarEndDate);
        formData.append("calendarYn", 'N')

        const entries = formData.entries();
        for (const [key, value] of entries) {
        console.log(`${key}: ${value}`);
        }

        await dispatch(callCalendarInsertAPI({
            form: formData
        }));        
        await dispatch(callMainCalendarListAPI());
        setShowModal(false);
    }

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
                        <input type="text" className="form-control" name="calendarTitle" onChange={onChangeTitleHandler} />
                    </div>
                    <div className="form-group">
                        <label className='fw-bold'>시작 일자</label>
                        <input type="date" className="form-control" name="calendarStartDate" onChange={onChangeHandler} />
                    </div>
                    <div className="form-group">
                        <label className='fw-bold'>종료 일자</label>
                        <input type="date" className="form-control" name="calendarEndDate" onChange={onChangeHandler} />
                    </div>
                    <div className="form-group">
                        <label className='fw-bold'>내용</label>
                        <textarea rows="4" cols="50" className="form-control" name="calendarContent" onChange={onChangeHandler} defaultValue='이곳에 여러 줄을 입력하세요.'></textarea>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={onClickCalendarSchedule}>
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