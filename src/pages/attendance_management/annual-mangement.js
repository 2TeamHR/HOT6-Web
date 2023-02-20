
import mainTitleStyle from '../../resources/css/pages/mypage/main-title.module.css';
import mpahStyle from '../../resources/css/pages/mypage/mypage-annual-history.module.css';
import {TsbDepartment, TsbEmployee, PayState, Term, SearchBtn, LeaveState} from '../../components/TableSearchBox';
import Pagination from '../../components/Pagination';

function AnnualManagement(){

    return(
        <main className={mainTitleStyle.mainMargin}>
            <div>
                <div className={mainTitleStyle.title}>
                    <p>연차 관리</p>
                </div>

                <div>
                    <div className={mpahStyle.searchTop} style={{display:"flex"}}>
                        <TsbDepartment/>
                        <TsbEmployee/>
                        <PayState/>
                        <Term/>
                        <LeaveState/>
                        <SearchBtn/>
                    </div>
                </div>
                
                <div></div>

                <div className="mt-5">
                    <table className="table">
                        <thead>
                        <tr className="text-center">
                            <th scope="col">No</th>
                            <th scope="col">조직</th>
                            <th scope="col">팀</th>
                            <th scope="col">직급</th>
                            <th scope="col">성명</th>
                            <th scope="col">휴가구분</th>
                            <th scope="col">발생</th>
                            <th scope="col">사용</th>
                            <th scope="col">잔여</th>
                        </tr>
                        </thead>
                        <tbody className="text-center">
                        <tr>
                            <th scope="row" rowspan="2" className="align-middle">1</th>
                            <td rowspan="2" className="align-middle">경영관리부</td>
                            <td rowspan="2" className="align-middle">영업1팀</td>
                            <td rowspan="2" className="align-middle">대리</td>
                            <td rowspan="2" className="align-middle">홍길동</td>
                            <td>기본연차</td>
                            <td>15</td>
                            <td>4</td>
                            <td>11</td>
                        </tr>
                        <tr>
                            <td>특별휴가</td>
                            <td>5</td>
                            <td>1</td>
                            <td>4</td>
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

export default AnnualManagement;