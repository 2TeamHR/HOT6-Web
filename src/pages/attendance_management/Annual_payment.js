import mainTitleStyle from '../../resources/css/pages/mypage/main-title.module.css';
import tableStyle from '../../resources/css/components/tableComponent.module.css';
import {TsbDepartment, TsbEmployee, Term, SearchBtn} from '../../components/TableSearchBox';
import Paper from '@mui/material/Paper';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { callLeavePaymentListAPI } from '../../apis/EaDocumentAPICalls';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

function AnnualPayment(){

    const dispatch = useDispatch();
    const leavePaymentList = useSelector(state => state.eaDocumentReducer);

    console.log('leavePatmentList :::', leavePaymentList);

    useEffect(
        () => {
                dispatch(callLeavePaymentListAPI({status:"EA_STATUS_FINISH"
                }));          
        }, []
    );

    return(
        <main className={mainTitleStyle.main}>
            <div>

                <div className={mainTitleStyle.title}>
                    <p>휴가 결제 완료 리스트</p>
                </div>

                <Paper elevation={3}>
                    <div className={tableStyle.boxStyle}>
                        <div className={tableStyle.searchBox}>
                            <TsbDepartment/>
                            <TsbEmployee/>
                            <Term/>
                            <SearchBtn/>
                        </div>
                    </div>
                </Paper>

                <Paper elevation={3}>
                    <Table className='mt-5'>
                        <thead>
                            <tr className="text-center">
                                <th>No</th>
                                <th>팀</th>
                                <th>직급</th>
                                <th>성명</th>
                                <th>휴가구분</th>
                                <th>기안날짜</th>
                                {/* <th>증빙서류</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {leavePaymentList.map((leave, index) => (
                                <tr key={leave.eaCode} className="text-center">
                                    <td className='align-middle'>{index + 1}</td>
                                    <td className='align-middle'>{leave.eaMember.team.teamName}</td>
                                    <td className='align-middle'>{leave.eaMember.rank.rankName}</td>
                                    <td className='align-middle'>{leave.eaMember.memberName}</td>
                                    <td className='align-middle'>{leave.leaveCategory.leaveCategoryName}</td>
                                    <td className='align-middle'>{leave.eaDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Paper>
            </div>
        </main>
    );
}

export default AnnualPayment;