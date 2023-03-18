import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callGetPaymentSalaryAPI } from "../../apis/SalaryAPICalls";
import AllSalaryModal from "./Salary_AllSalaryModal";


function CheckNTable() {
    

    const [showModal, setShowModal] = useState(false);
    const [selectedSalaryCode, setSelectedSalaryCode] = useState("");
    const [memberInfo, setMemberInfo] = useState({});
    const [memberData, setMemberData] = useState([]);
    const member = useSelector(state => state.salaryReducer);
    const dispatch = useDispatch();
    
    function handleButtonClick(memberDetail) {

        setMemberInfo(memberDetail);
        setShowModal(true);
        setSelectedSalaryCode(memberDetail.salaryCode);
    }

    useEffect(() => {    
            dispatch(callGetPaymentSalaryAPI({
                year: "2023",
                month: "02",
                paymentsYn: "N"
            })).then((data) => {
                setMemberData(data);
            });          
    }
    ,[memberInfo]
    );

    function handleCloseModal() {
        setMemberInfo({});
        setShowModal(false);
    }



    let memberList = '';

    if(member !== undefined){
        memberList = member;

    } else {
        memberList = {
            team: {
                teamName: ''
            },
            rank: {
                rankName: ''
            },
            memberName: '',
            salary: {
                afterSalary: 0,
                paymentsYn: ''
            },
            salaryCode: ''
        };
    }

    return (
        <>
            <div className="container-fluid">
                <div className="table-area">
                    <table className="table table-hover">
                        <thead>
                            <tr style={{ "backgroundColor": "#DDDDDD" }}>
                                <th>구분</th>
                                <th>조직</th>
                                <th>직급</th>
                                <th>이름</th>
                                <th>세후 지급액</th>
                                <th>지급여부</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            { memberList.length > 0 && memberList.map((memberDetail, index) => (
                                <tr style={{ "cursor": "pointer" }} key={ memberDetail.salaryCode }>
                                <td>{ index + 1 }</td>
                                <td>{memberDetail.team?.teamName}</td>
                                <td>{memberDetail.rank?.rankName}</td>
                                <td>{memberDetail.memberName}</td>
                                <td>{memberDetail.afterSalary}</td>
                                <td>{memberDetail.paymentsYn}</td>
                                <td style={{width:120}}>
                                    <button 
                                        className="btn btn-primary" 
                                        onClick={() => handleButtonClick(memberDetail)}
                                        onClose={handleCloseModal}
                                    >
                                        상세보기
                                    </button>
                                       
                                    
                                </td>
                                </tr>
                            ))
                            }
                            {showModal && <AllSalaryModal 
                                onClose={handleCloseModal} 
                                memberDetail={ memberInfo } 
                                selectedSalaryCode= { selectedSalaryCode }    
                                />}
                        </tbody>
                    </table>
                </div>
                <div align="center">
                    <form name="search-form" autoComplete="off" style={{ "display": "inline-block" }}>
                        <select id="searchCondition" name="searchCondition">
                            <option value="teamName">조직</option>
                            <option value="rankName">직급</option>
                            <option value="memberName">이름</option>
                        </select>
                        <input type="search" id="searchValue" name="searchValue" placeholder="검색할 내용을 입력하세요." 
                        />
                        <input type="submit" id="searchList" className="btn btn-secondary" value="검색" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default CheckNTable;
