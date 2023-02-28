import amdStyle from '../../resources/css/pages/attendance-management/annual-management-detailed.module.css'
import mainTitleStyle from '../../resources/css/pages/mypage/main-title.module.css';
import { AnnualIncrease, AnnualDiminish } from '../../components/ModalGroup';
import Paper from '@mui/material/Paper';

function AnnualManagementDetailed() {

    return(
        <main className={mainTitleStyle.main}>
            <div>

                <div className={mainTitleStyle.title}>
                    <p>연차 관리 - 상세페이지</p>
                </div>

                <Paper elevation="3">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope="col" className='text-center'>부서</th>
                                <th scope="col" className='text-center'>팀</th>
                                <th scope="col" className='text-center'>직급</th>
                                <th scope="col" className='text-center'>성명</th>
                                <th scope="col" className='text-center'>입사일</th>
                                <th scope="col" className='text-center'>퇴사일</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='text-center'>경영관리부</td>
                                <td className='text-center'>영업1팀</td>
                                <td className='text-center'>대리</td>
                                <td className='text-center'>홍길동</td>
                                <td className='text-center'>2023-01-01</td>
                                <td className='text-center'>-</td>
                            </tr>
                        </tbody>
                    </table>
                </Paper>

                {/* <!-- check box --> */}
                <Paper elevation="3" className={`d-flex flex-row justify-content-around ${amdStyle.annualMainBox}`}>
                    <div className='mt-5'>
                        <p>총 연차</p>
                        <p className="fs-3">0</p>
                    </div>
                    <div>
                        <p className='mt-5'>사용 연차</p>
                        <p className="fs-3">0</p>
                    </div>
                    <div>
                        <p className='mt-5'>잔여 연차</p>
                        <p className="fs-3">0</p>
                    </div>
                    <div>
                        <p className='mt-5'>특별 연차</p>
                        <p className="fs-3">0</p>
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

                <Paper className="mt-5">
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
                            <tr className={amdStyle.annualMainContentBody}>
                                <td>발생</td>
                                <td>기본연차</td>
                                <td>2023-01-01</td>
                                <td>-</td>
                                <td>15</td>
                                <td>15</td>
                                <td>15</td>
                                <td>자동지급</td>
                                <td></td>
                            </tr>
                            <tr className={amdStyle.annualMainContentBody}>
                                <td>사용</td>
                                <td>기본연차</td>
                                <td>2023-01-10</td>
                                <td>2023-01-12</td>
                                <td>3</td>
                                <td>-3</td>
                                <td>12</td>
                                <td>결제완료</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </Paper>
            </div>
        </main>
    );
}

export default AnnualManagementDetailed;