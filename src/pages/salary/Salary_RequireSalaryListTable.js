
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { callGetBonusSalaryAPI } from "../../apis/SalaryAPICalls";
// import AllBonusModal from "./Salary_AllBonusModal";

// function RequireSalaryListTable() {

//     const dispatch = useDispatch();

//     function handleButtonClick(bonusDetail) {

//     }

//     useEffect(() => {    
//             dispatch(callGetRequireSalaryApi({
//             })).then((data) => {
//             });          
//     }
//     ,[bonusInfo]
//     );

   

//     return (
//         <>
//             <div className="container-fluid">
//                 <div className="table-area">
//                     <table className="table table-hover">
//                         <thead>
//                             <tr style={{ "backgroundColor": "#DDDDDD" }}>
//                                 <th>구분</th>
//                                 <th>조직</th>
//                                 <th>직급</th>
//                                 <th>이름</th>
//                                 <th>상여구분</th>
//                                 <th>금액</th>
//                                 <th></th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             { bonusList.length > 0 && bonusList.map((bonusDetail, index) => (
//                                 <tr style={{ "cursor": "pointer" }} key={ bonusDetail.bonusCode }>
//                                 <td>{ index + 1 }</td>
//                                 <td>{bonusDetail.team?.teamName}</td>
//                                 <td>{bonusDetail.rank?.rankName}</td>
//                                 <td>{bonusDetail.memberName}</td>
//                                 <td>{bonusDetail.bonus?.bonusType}</td>
//                                 <td>{bonusDetail.bonus?.bonusSalary?.toLocaleString()}</td>
//                                 <td></td>
//                                 </tr>
//                             ))
//                             }
//                             {showModal && <AllBonusModal
//                                 onClose={handleCloseModal} 
//                                 bonusDetail={ bonusInfo } 
//                                 selectedBonusCode= { selectedBonusCode }    
//                             />}
//                         </tbody>
//                     </table>
//                 </div>
//                 <div align="center">
//                     <form name="search-form" autoComplete="off" style={{ "display": "inline-block" }}>
//                         <select id="searchCondition" name="searchCondition">
//                             <option value="teamName">조직</option>
//                             <option value="rankName">직급</option>
//                             <option value="memberName">이름</option>
//                         </select>
//                         <input type="search" id="searchValue" name="searchValue" placeholder="검색할 내용을 입력하세요." 
//                         />
//                         <input type="submit" id="searchList" className="btn btn-secondary" value="검색" />
//                     </form>
//                         {/* <button type="submit" className="btn btn-primary float:right">지급하기</button> */}
//                 </div>
//             </div>
//         </>
//     )
// }

// export default RequireSalaryListTable;
