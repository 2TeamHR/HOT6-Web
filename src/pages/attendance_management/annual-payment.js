import annualPayment from '../../resources/css/pages/attendance-management/annual-payment.module.css';
import mainTitleStyle from '../../resources/css/pages/mypage/main-title.module.css';
import mpahStyle from '../../resources/css/pages/mypage/mypage-annual-history.module.css';
import {TsbDepartment, TsbEmployee, PayState, Term, EmployState, SearchBtn} from '../../components/TableSearchBox';
import Pagination from '../../components/Pagination';

function AnnualPayment(){

    return(
        <main className={mainTitleStyle.main}>
            <div>

                <div className={mainTitleStyle.title}>
                    <p>연차 결제 리스트</p>
                </div>

                <div>
                    <div className={mpahStyle.searchTop} style={{display:"flex"}}>
                        <TsbDepartment/>
                        <TsbEmployee/>
                        <PayState/>
                        <SearchBtn/>
                    </div>
                    <div>
                        <Term/>
                        <EmployState/>
                    </div>
                </div>

                <div className="mt-5">
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
                            <th scope="col">결제상태</th>
                            <th scope="col">문서날짜</th>
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
                            <td>완료</td>
                            <td>2022-01-01</td>
                        </tr>
                        </tbody>
                    </table>
                    <div className='text-center'>
                    <Pagination/>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default AnnualPayment;