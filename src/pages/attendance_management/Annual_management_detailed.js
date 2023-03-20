import amdStyle from '../../resources/css/pages/attendance-management/annual-management-detailed.module.css'
import mainTitleStyle from '../../resources/css/pages/mypage/main-title.module.css';
import { AnnualIncrease, AnnualDiminish } from '../../components/ModalGroup';
import { useLocation } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import { callGetMemberDetailAPI } from '../../apis/MemberAPICalls';
import { callmemberLeaveAPI } from '../../apis/LeaveAPICalls';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

function AnnualManagementDetailed() {

    const dispatch = useDispatch();
    const location = useLocation();
    const memberDetailCode = new URLSearchParams(location.search).get('memberCode');
    
    const memberLeaveList = useSelector(state => state.leaveReducer);
    const memberInfo = useSelector(state => state.memberReducer);
    const memberDetail = memberInfo?.data;
    
    console.log('memberCode =====', memberDetailCode);
    console.log('memberInfo =====', memberInfo);
    console.log('memberleaveList =====', memberLeaveList);

    /* 차감 내역 */
    const leaveUseHistoryCodes = [];

    if (memberLeaveList) {
        memberLeaveList.forEach((leave) => {
            leave.leaveUseHistoryList.forEach((use) => {
                leaveUseHistoryCodes.push(use);
            });
        });
    }

    /* 특별연차 더하기 */
    const sumLeavePaymentCount = memberLeaveList?.reduce((accumulator, currentValue) => {
        if (currentValue.leaveCategoryCode !== "LC1") {
          return accumulator + currentValue.leavePaymentCount;
        }
        return accumulator;
      }, 0);

    useEffect(() => {
            dispatch(callGetMemberDetailAPI({ memberCode: memberDetailCode }));
            dispatch(callmemberLeaveAPI({ memberCode: memberDetailCode }));
    }, []);

    useEffect(() => {
        handleSelectChange({ target: { value: 'payment' }});
      }, []);

    const [isPaymentSelected, setIsPaymentSelected] = useState(false);

    const handleSelectChange = (event) => {
        if (event.target.value === 'payment') {
            setIsPaymentSelected(true);
          } else {
            setIsPaymentSelected(false);
          }
    }

    function sortByDateDescending(a, b) {
        const aDate = new Date(a.leavePaymentDate || a.endDate);
        const bDate = new Date(b.leavePaymentDate || b.endDate);
        return bDate - aDate;
    }

    return(
        <main className={mainTitleStyle.main}>
            <div>

                <div className={mainTitleStyle.title}>
                    <p>휴가 관리 - 상세페이지</p>
                </div>

                <Paper elevation={3}>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope="col" className='text-center'>부서</th>
                                <th scope="col" className='text-center'>직급</th>
                                <th scope="col" className='text-center'>성명</th>
                                <th scope="col" className='text-center'>입사일</th>
                                <th scope="col" className='text-center'>재직상태</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='text-center'>{memberDetail?.teamName}</td>
                                <td className='text-center'>{memberDetail?.rankName}</td>
                                <td className='text-center'>{memberDetail?.memberName}</td>
                                <td className='text-center'>{memberDetail?.joinDate?.slice(0, 10)}</td>
                                <td className='text-center'>{memberDetail?.workingStatus}</td>
                            </tr>
                        </tbody>
                    </table>
                </Paper>

                {/* <!-- check box --> */}
                <Paper elevation={3} className={`d-flex flex-row justify-content-around ${amdStyle.annualMainBox}`}>
                    {Array.isArray(memberLeaveList) && memberLeaveList?.map((memberLeave) => {
                        if (memberLeave.leaveCategoryCode === "LC1") {
                        const { leavePaymentCount, leaveLeftoverCount } = memberLeave;
                        return (
                            <div key={memberLeave.memberCode} className='mt-3'>
                                <p>총 연차</p>
                                <p className="fs-3">{leavePaymentCount}</p>
                            </div>
                        );
                        }
                        return null;
                    })}
                    {Array.isArray(memberLeaveList) && memberLeaveList?.map((memberLeave) => {
                        if (memberLeave.leaveCategoryCode === "LC1") {
                        const { leavePaymentCount, leaveLeftoverCount } = memberLeave;
                        return (
                            <div key={memberLeave.memberCode} className='mt-3'>
                                <p>사용 연차</p>
                                <p className="fs-3">{leavePaymentCount - leaveLeftoverCount}</p>
                            </div>
                        );
                        }
                        return null;
                    })}
                    {Array.isArray(memberLeaveList) && memberLeaveList?.map((memberLeave) => {
                        if (memberLeave.leaveCategoryCode === "LC1") {
                        const { leavePaymentCount, leaveLeftoverCount } = memberLeave;
                        return (
                            <div key={memberLeave.memberCode} className='mt-3'>
                                <p>잔여 연차</p>
                                <p className="fs-3">{leaveLeftoverCount}</p>
                            </div>
                        );
                        }
                        return null;
                    })}
                    <div className='mt-3 text-danger fw-bold'>
                        <p>특별 연차</p>
                        <p className="fs-3">{sumLeavePaymentCount}</p>
                    </div>
                </Paper>
                {/* <!-- check box --> */}
                
                <div className={amdStyle.mainBtn}>
                    <div className="float-left">
                        <span>휴가구분 : </span>
                        <select className={amdStyle.selectBox} defaultValue="payment" onChange={handleSelectChange}>
                            <option value="payment">지급 내역</option>
                            <option value="deduction">차감 내역</option>
                        </select>
                    </div>
                    <div>
                        <AnnualIncrease className={amdStyle.annualBtn}/>
                        <AnnualDiminish className={amdStyle.annualBtn}/>
                    </div>
                </div>

                <Paper elevation={3} className="mt-5">
                    <table className="table">
                        <thead>
                            <tr className={amdStyle.annualMainContentTitle}>
                                <th colSpan="4">구분</th>
                                <th colSpan="3">정산</th>
                                <th colSpan="2">내역</th>
                            </tr>
                            <tr className={amdStyle.annualMainContentSubTitle}>
                                <th scope="col">발생구분</th>
                                <th scope="col">휴가구분</th>
                                <th scope="col">시작/발생일</th>
                                <th scope="col">종료일</th>
                                <th scope="col">대상일</th>
                                <th scope="col">적용일</th>
                                <th scope="col">잔여일</th>
                                <th scope="col">담당자</th>
                                <th scope="col">메모</th>
                            </tr>
                        </thead>
                        <tbody>
                        {isPaymentSelected ? (
                            <>
                            {Array.isArray(memberLeaveList) && memberLeaveList?.sort(sortByDateDescending).map((leave) => {
                                return (
                                    <tr key={leave.leavePaymentHistoryCode} className='mt-3'>
                                        <td className='text-center'>지급</td>
                                        <td className='text-center'>{leave.leaveCategoryCode}</td>
                                        <td className='text-center'>{leave.leavePaymentDate.slice(0, 10)}</td>
                                        <td className='text-center'>-</td>
                                        <td className='text-center'>{leave.leavePaymentCount}</td>
                                        <td className='text-center'>{leave.leavePaymentCount}</td>
                                        <td className='text-center'>{leave.leaveLeftoverCount}</td>
                                        <td className='text-center'>{leave.leavePaymentProcess}</td>
                                        <td className='text-center'>{leave.leavePaymentMemo === null ? '없음' : leave.leavePaymemtMemo}</td>
                                    </tr>
                                );
                            })}
                            </>
                            ) : (
                            <>
                            {Array.isArray(leaveUseHistoryCodes) && leaveUseHistoryCodes?.map((leave) => {
                                return (
                                    <tr key={leave.leaveUseHistoryCode} className='mt-3'>
                                        <td className='text-center'>차감</td>
                                        <td className='text-center'>{leave.leaveUseHistoryCode}</td>
                                        <td className='text-center'>{leave.startDate.slice(0, 10)}</td>
                                        <td className='text-center'>{leave.endDate.slice(0, 10)}</td>
                                        <td className='text-center'>{leave.generationCount}</td>
                                        <td className='text-center'>-{leave.generationCount}</td>
                                        <td className='text-center'>-</td>
                                        <td className='text-center'>{leave.leaveUseProcess}</td>
                                        <td className='text-center'>{leave.leaveUseMemo === null ? '없음' : leave.leaveUseMemo}</td>
                                    </tr>
                                );
                            })}
                            </>
                            )}
                        </tbody>
                    </table>
                </Paper>
            </div>
        </main>
    );
}

export default AnnualManagementDetailed;