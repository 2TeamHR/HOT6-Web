import modalStyle from "../../resources/css/pages/hrm/organization-modal.module.css";

export function SalaryCModal({onClose}) {
    
    return (
      <div className={modalStyle.modal}>
        <div className="modal-content">
            <button className={modalStyle.close} onClick={onClose}>
                Close
            </button>
            <p>경력증명서</p>
        </div>
        <div className="modal-text pt-5">
            <p>야ㅕ야야</p>
            <p>안녕하세용</p>
            <p>내용이에용 ㅋㅋㅋ</p>
        </div>
        <button 
            style={{ position: 'absolute', top: 390, left:215 }}
            onClick={() => {
                alert("준비중입니다.");
            }}
        >
            출력하기
        </button>
      </div>
    );
}