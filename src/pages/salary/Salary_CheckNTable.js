import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callGetPaymentSalaryAPI } from "../../apis/SalaryAPICalls";
import modalStyle from "../../resources/css/pages/hrm/organization-modal.module.css";

export function SalaryCheckModal({onClose}) {
    
    return (
      <div className={modalStyle.salaryModal}>
        <div className="modal-content">
            <button className={modalStyle.salaryclose} onClick={onClose}>
                Close
            </button>
            <p>급여 지급서</p>
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


function CheckNTable() {
    
    const member = useSelector(state => state.salaryReducer);

    console.log('member ===========', member);

    let memberList = '';

    if(member !== undefined){
        memberList = member;

        console.log('memberList=============', memberList);
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
                                <td>{memberDetail.team.teamName}</td>
                                <td>{memberDetail.rank.rankName}</td>
                                <td>{memberDetail.memberName}</td>
                                <td>{memberDetail.afterSalary}</td>
                                <td>{memberDetail.paymentsYn}</td>
                                <td style={{width:120}}>
                                    <button className="btn btn-primary">상세보기</button>
                                </td>
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>
                </div>
                <div align="center">
                    <form name="search-form" autoComplete="off" style={{ "display": "inline-block" }}>
                        <select id="searchCondition" name="searchCondition">
                            <option value="communityTitle">제목</option>
                            <option value="nickName">작성자</option>
                        </select>
                        <input type="search" id="searchValue" name="searchValue" placeholder="검색할 내용을 입력하세요." 
                        />
                        <input type="submit" id="searchList" className="btn btn-secondary" value="검색" />
                    </form>
                        {/* <button type="submit" className="btn btn-primary float:right">지급하기</button> */}
                </div>
            </div>
        </>
    )
}

export default CheckNTable;
