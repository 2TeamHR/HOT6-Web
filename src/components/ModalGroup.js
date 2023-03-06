import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalGroupStyle from '../resources/css/components/modal-group.module.css';



export function MypageAttendanceHistoryModal() {
  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className={ModalGroupStyle.sorBtn} onClick={handleShow}>
        사유신청
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>사유신청서</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <p className="text-left mt-4 mb-1">사유서 제목</p>
            <input className={ModalGroupStyle.modalInputTitle}/>
            <p className="text-left mt-4 mb-1">사유서 내용</p>
            <input className={ModalGroupStyle.modalInputContent}/>
            <p className="text-left mt-4 mb-1">첨부 파일</p>
            <input type="file" className={ModalGroupStyle.modalInputFile}/>
            <p className={`mt-5 ${ModalGroupStyle.modelInfo}`}>한번 제출하기를 클릭 시 수정 하실 수 없습니다.</p>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            제출
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            취소
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export function AnnualIncrease() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className={ModalGroupStyle.annualBtn} onClick={handleShow}>
        휴가 추가
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>휴가 추가</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <p className="text-left mt-4 mb-1">휴가 종류</p>
            <select className='w-100'>
                <option>전체</option>
                <option>기본연차</option>
                <option>보건휴가</option>
                <option>가족돌봄휴가</option>
                <option>출산휴가</option>
                <option>배우자출산휴가</option>
            </select>

            <p className="text-left mt-4 mb-1">지급 갯수</p>
            <input className={`w-100 ${ModalGroupStyle.modalTitle}`}/>

            <p className="text-left mt-4 mb-1">지급 내용</p>
            <input className={ModalGroupStyle.modalInputContent}/>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            추가
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            취소
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export function AnnualDiminish() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className={ModalGroupStyle.annualBtn} onClick={handleShow}>
        휴가 차감
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>휴가 차감</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <p className="text-left mt-4 mb-1">휴가 종류</p>
            <select className='w-100'>
                <option>전체</option>
                <option>기본연차</option>
                <option>보건휴가</option>
                <option>가족돌봄휴가</option>
                <option>출산휴가</option>
                <option>배우자출산휴가</option>
            </select>

            <p className="text-left mt-4 mb-1">차감 갯수</p>
            <input className={`w-100 ${ModalGroupStyle.modalTitle}`}/>

            <p className="text-left mt-4 mb-1">차감 내용</p>
            <input className={ModalGroupStyle.modalInputContent}/>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            차감
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            취소
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}