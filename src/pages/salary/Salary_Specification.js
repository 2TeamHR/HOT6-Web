// import CertificateTable from "./Organization_CertificateTable";
import modalStyle from "../../resources/css/pages/salary/salary-modal.module.css";
import BasicTable from "./Salary_BasicTable";
import TaxTable from "./Salary_TaxTable";
import salarytableStyle from "../../resources/css/pages/salary/salaryTable.module.css"

function SpecificationModal({onClose}) {
    
    return (
      <div className={modalStyle.modal}>
        <div className="modal-content">
            <button className={modalStyle.close} onClick={onClose}>
                닫기
            </button>
            <b style={{fontSize:30}}>급여명세서</b>
        </div>
        <div className="modal-text pt-5">
        <div className= {`pt-5 ${salarytableStyle.tableStyle}`}>
            <BasicTable />
            <TaxTable />
        </div>
            
        </div>
        <div className="modal-footer">
            <button 
                style={{ position: 'absolute', top: 500, left:463 }}
                onClick={() => {
                    alert("준비중입니다.");
                }}
            >
                출력하기
            </button>
        </div>
      </div>
    );
}


export default SpecificationModal;
