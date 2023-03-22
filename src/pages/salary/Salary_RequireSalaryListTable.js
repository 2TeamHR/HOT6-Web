import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route, useNavigate, Routes, useLocation } from "react-router-dom";

function RequireSalaryListTable({requireSalary}) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    
    return (
        <>
            <div className="container-fluid">
                <div className="table-area">
                    <table className="table table-hover">
                        <thead>
                            <tr style={{ "backgroundColor": "#DDDDDD" }}>
                                <th style={{width: 100}}>번호</th>
                                <th style={{width: 120}}>조직</th>
                                <th style={{width: 120}}>직급</th>
                                <th style={{width: 120}}>이름</th>
                                <th style={{width: 120}}>신청일</th>
                                <th style={{width: 120}}>결재여부</th>
                                <th style={{width: 120}}>최종승인자</th>
                                <th style={{width: 150}}></th>
                            </tr>
                        </thead>
                        <tbody>
                            { requireSalary.length > 0 && requireSalary.map((salary, index) => (
                                <tr style={{ "cursor": "pointer" }} key={ salary.eaCode }>
                                <td>{ index + 1 }</td>
                                <td>{salary.member?.teamName}</td>
                                <td>{salary.member?.rankName}</td>
                                <td>{salary.member?.memberName}</td>
                                <td>{salary.eaDate}</td>
                                <td>{salary.eaStatusCategory?.eaStatusName}</td>
                                <td>{salary.eaApproverInfoList && salary.eaApproverInfoList[1].eaMember.memberName}</td>
                                <td>
                                {salary.eaStatusCategory.eaStatusName === "결재완료" &&
                                <button>
                                <Link to={{ pathname: `/salary/require/detail/${salary.salaryCode}`, state: { salaryCode: salary.salaryCode }} }>상세 보기</Link>
                                </button>
                                }
                                </td>
                                        
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>
                </div>
                
            </div>
        </>
    )
}

export default RequireSalaryListTable;
 