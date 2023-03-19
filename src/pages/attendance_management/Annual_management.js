import mainTitleStyle from '../../resources/css/pages/mypage/main-title.module.css';
import tableStyle from '../../resources/css/components/tableComponent.module.css';
import annualManagementStyle from '../../resources/css/pages/attendance-management/annual_management.module.css';
import {TsbDepartment, TsbEmployee, PayState, Term, SearchBtn, LeaveState} from '../../components/TableSearchBox';
import Pagination from '@mui/material/Pagination';
import Paper from '@mui/material/Paper'
import { useNavigate } from 'react-router-dom';
import { callGetMemberTotalCountAPI } from '../../apis/MemberAPICalls';
import { callLeaveAllListAPI } from '../../apis/LeaveAPICalls';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

function AnnualManagement(){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const leaveList = useSelector(state => state.leaveReducer);
    const memberCount = useSelector(state => state.memberReducer);
    const total = memberCount.data;
    const [perPage, setPerPage] = useState(10);

    // 페이징 처리
    const [currentPage, setCurrentPage] = useState(1);
    
    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const startIndex = 0;
    const endIndex = 10;

    useEffect(
        () => {
                dispatch(callGetMemberTotalCountAPI({
                }));          
        }, [currentPage]
    );

    useEffect(
        () => {
                dispatch(callLeaveAllListAPI({
                    startIndex: currentPage-1,
                    endIndex: perPage
                }));          
        }, [currentPage]
    );

    /* 상세페이지 이동 핸들러 */
    const navHandler = (memberCode, navigate) => {
        navigate(`/annual/management/detailed?memberCode=${memberCode}`);
    };

    return(
        <main className={mainTitleStyle.main}>
            <div>
                <div className={mainTitleStyle.title}>
                    <p>휴가 관리</p>
                </div>

                <div className={tableStyle.boxStyle}>
                    <div className={tableStyle.searchBox} style={{display:"flex"}}>
                        <TsbDepartment/>
                        <TsbEmployee/>
                        <PayState/>
                        <Term/>
                        <LeaveState/>
                        <SearchBtn/>
                    </div>
                </div>

                <Paper elevation={3} className="mt-4 pb-5">
                    <table className={`table ${annualManagementStyle.annualStandardTable}`}>
                        <thead>
                            <tr className={annualManagementStyle.annualStandardTableHead}>
                                <th colSpan="4" scope="col" className='text-center'>인사구분</th>
                                <th colSpan="3" scope="col" className='text-center'>집계정보</th>
                                <th colSpan="12" scope="col" className='text-center'>{new Date().getFullYear() - 1}년도</th>
                                <th colSpan="12" scope="col" className='text-center'>{new Date().getFullYear()}년도</th>
                            </tr>
                            <tr className={annualManagementStyle.annualStandardTableSubHead}>
                                <th scope="col">No</th>
                                <th scope="col">팀</th>
                                <th scope="col">직급</th>
                                <th scope="col">성명</th>
                                <th scope="col">총연차</th>
                                <th scope="col">사용</th>
                                <th scope="col">잔여</th>
                                <th scope="col">1</th>
                                <th scope="col">2</th>
                                <th scope="col">3</th>
                                <th scope="col">4</th>
                                <th scope="col">5</th>
                                <th scope="col">6</th>
                                <th scope="col">7</th>
                                <th scope="col">8</th>
                                <th scope="col">9</th>
                                <th scope="col">10</th>
                                <th scope="col">11</th>
                                <th scope="col">12</th>
                                <th scope="col">1</th>
                                <th scope="col">2</th>
                                <th scope="col">3</th>
                                <th scope="col">4</th>
                                <th scope="col">5</th>
                                <th scope="col">6</th>
                                <th scope="col">7</th>
                                <th scope="col">8</th>
                                <th scope="col">9</th>
                                <th scope="col">10</th>
                                <th scope="col">11</th>
                                <th scope="col">12</th>
                            </tr>
                        </thead>
                        <tbody>
                                {
                                leaveList.content && leaveList.content.slice(startIndex, endIndex).map((leave, index) => {
                                    const { team, rank, memberName, leavePaymentHistoryAndUseHistoryList } = leave;
                                    const { leavePaymentCount, leaveLeftoverCount, simpleleaveUseHistoryList } = leavePaymentHistoryAndUseHistoryList[0];

                                    const lastYear = (month) => {
                                        let leaveSum = 0;
                                        const currentYear = new Date().getFullYear();

                                        leave.leavePaymentHistoryAndUseHistoryList[0].simpleleaveUseHistoryList.filter((history) => {
                                          const date = new Date(history.startDate);
                                          const dateCount = history.generationCount;
                                      
                                          if (date.getFullYear() === currentYear - 1 && date.getMonth() === month) {
                                            leaveSum += dateCount;
                                          }
                                        });
                                      
                                        return leaveSum;
                                      };
                                      

                                      const thisYear = (month) => {
                                        let leaveSum = 0;
                                        const currentYear = new Date().getFullYear();

                                        leave.leavePaymentHistoryAndUseHistoryList[0].simpleleaveUseHistoryList.filter((history) => {
                                          const date = new Date(history.startDate);
                                          const dateCount = history.generationCount;
                                      
                                          if (date.getFullYear() === currentYear && date.getMonth() === month) {
                                            leaveSum += dateCount;
                                          }
                                        });
                                      
                                        return leaveSum;
                                      };

                                    return (
                                        <tr
                                        key={leave.memberCode}
                                        className={`text-center ${annualManagementStyle.annualStandardTablebody}`}
                                        onClick={() => navHandler(leave.memberCode, navigate)}
                                        >
                                            <td className='align-middle'>{index + 1}</td>
                                            <td className='align-middle'>{team.teamName}</td>
                                            <td className='align-middle'>{rank.rankName}</td>
                                            <td className='align-middle'>{memberName}</td>
                                            <td className='align-middle'>{leavePaymentCount}</td>
                                            <td className='align-middle'>{leavePaymentCount - leaveLeftoverCount}</td>
                                            <td className='align-middle'>{leaveLeftoverCount}</td>
                                            <td className='align-middle'>{lastYear(0)}</td>
                                            <td className='align-middle'>{lastYear(1)}</td>
                                            <td className='align-middle'>{lastYear(2)}</td>
                                            <td className='align-middle'>{lastYear(3)}</td>
                                            <td className='align-middle'>{lastYear(4)}</td>
                                            <td className='align-middle'>{lastYear(5)}</td>
                                            <td className='align-middle'>{lastYear(6)}</td>
                                            <td className='align-middle'>{lastYear(7)}</td>
                                            <td className='align-middle'>{lastYear(8)}</td>
                                            <td className='align-middle'>{lastYear(9)}</td>
                                            <td className='align-middle'>{lastYear(10)}</td>
                                            <td className='align-middle'>{lastYear(11)}</td>
                                            <td className='align-middle'>{thisYear(0)}</td>
                                            <td className='align-middle'>{thisYear(1)}</td>
                                            <td className='align-middle'>{thisYear(2)}</td>
                                            <td className='align-middle'>{thisYear(3)}</td>
                                            <td className='align-middle'>{thisYear(4)}</td>
                                            <td className='align-middle'>{thisYear(5)}</td>
                                            <td className='align-middle'>{thisYear(6)}</td>
                                            <td className='align-middle'>{thisYear(7)}</td>
                                            <td className='align-middle'>{thisYear(8)}</td>
                                            <td className='align-middle'>{thisYear(9)}</td>
                                            <td className='align-middle'>{thisYear(10)}</td>
                                            <td className='align-middle'>{thisYear(11)}</td>
                                        </tr>
                                    );
                                })
                                }
                        </tbody>
                    </table>     

                    <div className="d-flex justify-content-center mt-5">
                    <Pagination 
                        count={Math.ceil(total / perPage) || 1} 
                        page={currentPage} 
                        onChange={handlePageChange} 
                    />
                    </div>
                </Paper>
            </div>
        </main>
    );
}

export default AnnualManagement;