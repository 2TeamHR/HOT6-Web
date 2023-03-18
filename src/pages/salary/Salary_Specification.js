// import CertificateTable from "./Organization_CertificateTable";
import modalStyle from "../../resources/css/pages/salary/salary-modal.module.css";
import salarytableStyle from "../../resources/css/pages/salary/salaryTable.module.css"
import SpecificationTable from "./Salary_SpecificationTable";

function SpecificationModal({onClose, salaryDetail, memberDetail}) {
    
    return (
      <div className={modalStyle.modal}>
        <div className="modal-content">
            <button className={modalStyle.close} onClick={onClose}>
                닫기
            </button>
            <b style={{fontSize:30}}>2023년 03월 급여명세서</b>
        </div>
        <div className="modal-text">
        <div className= {` ${salarytableStyle.tableStyle4}`}>
            <table style={{display:"flex", justifyContent:"space-between"}}
            >
                <thead style={{marginRight: "100px"}}>
                    <tr style={{fontSize: "20px"}}>
                        <td>성명 : </td>
                        <td>{memberDetail.memberName}</td>
                    </tr>
                    <tr style={{fontSize: "20px"}}>
                        <td>소속 : </td>
                        <td>{memberDetail.teamName}</td>
                    </tr>
                    <tr style={{fontSize: "20px"}}>
                        <td>직책 : </td>
                        <td>{memberDetail.rankName}</td>
                    </tr>
                </thead>
                <thead style={{marginLeft: "100px"}}>
                    <tr style={{fontSize: "20px"}}>
                        <td>생년월일 : </td>
                        <td>{memberDetail.memberBirth}</td>
                    </tr>
                    <tr style={{fontSize: "20px"}}>
                        <td>입사일 : </td>
                        <td>{memberDetail.joinDate}</td>
                    </tr>
                    <tr style={{fontSize: "20px"}}>
                        <td>통상 시급 : </td>
                        {/* <td>{memberDetail}</td> */}
                    </tr>
                </thead>
            </table>
            <div>
            </div>
        </div>
        <SpecificationTable salaryDetail={salaryDetail}/>
            
        </div>
        <div className="modal-footer">
            <button 
                style={{ position: 'absolute', top: 700, left:700 }}
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
