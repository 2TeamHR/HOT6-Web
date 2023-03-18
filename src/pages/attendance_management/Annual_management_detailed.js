import amdStyle from '../../resources/css/pages/attendance-management/annual-management-detailed.module.css'
import mainTitleStyle from '../../resources/css/pages/mypage/main-title.module.css';
import { AnnualIncrease, AnnualDiminish } from '../../components/ModalGroup';
import { useLocation } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import { callmemberLeaveAPI } from '../../apis/LeaveAPICalls';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

function AnnualManagementDetailed() {


    const dispatch = useDispatch();
    // const memberleaveList = useSelector(state => state.leaveReducer);
    const location = useLocation();
    const memberCode = location.state?.memberCode;

    const a = [{
        "status": 200,
        "message": "조회 성공",
        "data": {
            "memberCode": "220205",
            "memberName": "유영주",
            "joinDate": "2022-02-28T15:00:00.000+00:00",
            "workingStatus": "재직",
            "teamName": "인사팀",
            "rankName": "사원",
            "leaveHistoryAndMemberList": [
                {
                    "leavePaymentHistoryCode": "LP153",
                    "leaveCategoryCode": "LC1",
                    "leavePaymentDate": "2023-01-01 00:00:00",
                    "leavePaymentCount": 15,
                    "leaveLeftoverCount": 11,
                    "leavePaymentProcess": "자동",
                    "leavePaymentMemo": null,
                    "leaveUseHistoryList": [
                        {
                            "leaveUseHistoryCode": "LU4",
                            "leavePaymentHistoryCode": "LP153",
                            "startDate": "2023-01-31T15:00:00.000+00:00",
                            "endDate": "2023-02-01T15:00:00.000+00:00",
                            "generationCount": 2,
                            "leaveUseProcess": "AUTO",
                            "leaveUseMemo": null,
                            "leaveUseCancellYn": "N"
                        },
                        {
                            "leaveUseHistoryCode": "LU3",
                            "leavePaymentHistoryCode": "LP153",
                            "startDate": "2023-01-18T15:00:00.000+00:00",
                            "endDate": "2023-01-19T15:00:00.000+00:00",
                            "generationCount": 2,
                            "leaveUseProcess": "AUTO",
                            "leaveUseMemo": null,
                            "leaveUseCancellYn": "N"
                        },
                        {
                            "leaveUseHistoryCode": "LU5",
                            "leavePaymentHistoryCode": "LP153",
                            "startDate": "2022-02-09T15:00:00.000+00:00",
                            "endDate": "2022-02-11T15:00:00.000+00:00",
                            "generationCount": 3,
                            "leaveUseProcess": "AUTO",
                            "leaveUseMemo": null,
                            "leaveUseCancellYn": "N"
                        }
                    ],
                    "leavePaymentCancellYn": "N"
                },
                {
                    "leavePaymentHistoryCode": "LP216",
                    "leaveCategoryCode": "LC5",
                    "leavePaymentDate": "2023-01-01 00:00:00",
                    "leavePaymentCount": 1,
                    "leaveLeftoverCount": 1,
                    "leavePaymentProcess": "AUTO",
                    "leavePaymentMemo": null,
                    "leaveUseHistoryList": [],
                    "leavePaymentCancellYn": "N"
                },
                {
                    "leavePaymentHistoryCode": "LP217",
                    "leaveCategoryCode": "LC5",
                    "leavePaymentDate": "2023-02-01 00:00:00",
                    "leavePaymentCount": 1,
                    "leaveLeftoverCount": 0,
                    "leavePaymentProcess": "AUTO",
                    "leavePaymentMemo": null,
                    "leaveUseHistoryList": [
                        {
                            "leaveUseHistoryCode": "LU6",
                            "leavePaymentHistoryCode": "LP217",
                            "startDate": "2023-02-05T15:00:00.000+00:00",
                            "endDate": "2023-02-05T15:00:00.000+00:00",
                            "generationCount": 1,
                            "leaveUseProcess": "AUTO",
                            "leaveUseMemo": null,
                            "leaveUseCancellYn": "N"
                        }
                    ],
                    "leavePaymentCancellYn": "N"
                },
                {
                    "leavePaymentHistoryCode": "LP218",
                    "leaveCategoryCode": "LC5",
                    "leavePaymentDate": "2023-03-01 00:00:00",
                    "leavePaymentCount": 1,
                    "leaveLeftoverCount": 0,
                    "leavePaymentProcess": "AUTO",
                    "leavePaymentMemo": null,
                    "leaveUseHistoryList": [
                        {
                            "leaveUseHistoryCode": "LU7",
                            "leavePaymentHistoryCode": "LP218",
                            "startDate": "2023-03-01T15:00:00.000+00:00",
                            "endDate": "2023-03-01T15:00:00.000+00:00",
                            "generationCount": 1,
                            "leaveUseProcess": "AUTO",
                            "leaveUseMemo": null,
                            "leaveUseCancellYn": "N"
                        }
                    ],
                    "leavePaymentCancellYn": "N"
                }
            ]
        }
    }];

    const memberLeaveList = a[0].data;
    console.log('memberLeaveList :', memberLeaveList);

    useEffect(
        () => {
                dispatch(callmemberLeaveAPI({
                    memberCode: memberCode
                }));          
        }, []
    );

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
                                <td className='text-center'>{memberLeaveList.teamName}</td>
                                <td className='text-center'>{memberLeaveList.rankName}</td>
                                <td className='text-center'>{memberLeaveList.memberName}</td>
                                <td className='text-center'>{memberLeaveList.joinDate?.slice(0, 10)}</td>
                                <td className='text-center'>{memberLeaveList.workingStatus}</td>
                            </tr>
                        </tbody>
                    </table>
                </Paper>

                {/* <!-- check box --> */}
                <Paper elevation={3} className={`d-flex flex-row justify-content-around ${amdStyle.annualMainBox}`}>
                    <div className='mt-5'>
                        <p>총 연차</p>
                        <p className="fs-3">{memberLeaveList.leaveHistoryAndMemberList[0].leavePaymentCount}</p>
                    </div>
                    <div>
                        <p className='mt-5'>사용 연차</p>
                        <p className="fs-3">{memberLeaveList.leaveHistoryAndMemberList[0].leavePaymentCount - memberLeaveList.leaveHistoryAndMemberList[0].leaveLeftoverCount}</p>
                    </div>
                    <div>
                        <p className='mt-5'>잔여 연차</p>
                        <p className="fs-3">{memberLeaveList.leaveHistoryAndMemberList[0].leaveLeftoverCount}</p>
                    </div>
                    <div>
                        <p className='mt-5'>특별 연차</p>
                        <p className="fs-3">
                            {
                            (() => {
                                let lc5Total = 0;

                                memberLeaveList.leaveHistoryAndMemberList.forEach((leaveHistory) => {
                                if (leaveHistory.leaveCategoryCode === "LC5") { 
                                    lc5Total += leaveHistory.leavePaymentCount;
                                }
                                });

                                return lc5Total;
                            })()
                            }
                        </p>
                    </div>
                    <div className="text-success mt-5">
                        <p>누적 총 연차</p>
                        <p className="fs-3">0</p>
                    </div>
                    <div className="text-success mt-5">
                        <p>누적 사용 연차</p>
                        <p className="fs-3">0</p>
                    </div>
                    <div className="text-success mt-5">
                        <p>누적 잔여 연차</p>
                        <p className="fs-3">0</p>
                    </div>
                    <div className="text-success mt-5">
                        <p>누적 특별 연차</p>
                        <p className="fs-3">0</p>
                    </div>
                </Paper>
                {/* <!-- check box --> */}
                
                <div className={amdStyle.mainBtn}>
                    <div className="float-left">
                        <span>휴가구분</span>
                        <select>
                            <option>전체</option>
                            <option>지급</option>
                            <option>차감</option>
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
                            {Array.isArray(memberLeaveList) && memberLeaveList.map((leave) => (
                                leave.leaveHistoryAndMemberList && leave.leaveHistoryAndMemberList.length > 0 && leave.leaveHistoryAndMemberList.map((history) => (
                                    <tr key={history.leavePaymentHistoryCode} className="text-center">
                                        <td className='align-middle'>{leave.name}</td>
                                        <td className='align-middle'>{history.leaveCategoryCode}</td>
                                        <td className='align-middle'>{history.leavePaymentCount}</td>
                                    </tr>
                                ))
                            ))}
                        </tbody>
                    </table>
                </Paper>
            </div>
        </main>
    );
}

export default AnnualManagementDetailed;