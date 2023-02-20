// import annualHistoryStyle from '../../resources/css/pages/attendance-management/annual-history.module.css';
import mainTitleStyle from '../../resources/css/pages/mypage/main-title.module.css';
import {TsbDepartment, TsbEmployee, PayState, Term, EmployState, SearchBtn, LeaveState} from '../../components/TableSearchBox';
import mpahStyle from '../../resources/css/pages/mypage/mypage-attendance-history.module.css';
import Pagination from '../../components/Pagination';
import {EnhancedTable} from '../../components/EnhancedTable';
import { getAttendanceHistoryTable } from '../../api/tableAPI';

function annualHistory(props) {


    return(
        <main className={ mainTitleStyle.main}>
            <div className="main">

                <div className="title">
                    <p>연차 내역</p>
                </div>

                <div>
                    <div className={mpahStyle.searchTop} style={{display:"flex"}}>
                        <TsbDepartment/>
                        <TsbEmployee/>
                        <PayState/>
                        <LeaveState/>
                        <SearchBtn/>
                    </div>
                    <div>
                        <Term/>
                        <EmployState/>
                    </div>
                </div>
                <EnhancedTable tabledata={ getAttendanceHistoryTable()}/>

                {/* <div className="mt-5">
                    <table className="table">
                        <thead>
                        <tr className="text-center">
                            <th scope="col">No</th>
                            <th scope="col">부서</th>
                            <th scope="col">팀</th>
                            <th scope="col">직급</th>
                            <th scope="col">성명</th>
                            <th scope="col">고용형태</th>
                            <th scope="col">재직구분</th>
                            <th scope="col">휴가구분</th>
                            <th scope="col">휴가 상태</th>
                            <th scope="col">날짜</th>
                        </tr>
                        </thead>
                        <tbody className="text-center">
                        <tr>
                            <th scope="row">1</th>
                            <td>경영관리부</td>
                            <td>영업1팀</td>
                            <td>대리</td>
                            <td>홍길동</td>
                            <td>정규직</td>
                            <td>재직중</td>
                            <td>기본연차</td>
                            <td>지급</td>
                            <td>2022-01-01</td>
                        </tr>
                        </tbody>
                    </table>

                    <div className='text-center'>
                        <Pagination/>
                    </div>
                </div> */}
            </div>
        </main>
    );
}

export default annualHistory;