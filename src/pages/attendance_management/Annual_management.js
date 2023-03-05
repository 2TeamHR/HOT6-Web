import mainTitleStyle from '../../resources/css/pages/mypage/main-title.module.css';
import tableStyle from '../../resources/css/components/tableComponent.module.css';
import annualManagementStyle from '../../resources/css/pages/attendance-management/annual_management.module.css';
import {TsbDepartment, TsbEmployee, PayState, Term, SearchBtn, LeaveState} from '../../components/TableSearchBox';
import Pagination from '@mui/material/Pagination';

function AnnualManagement(){

    return(
        <main className={mainTitleStyle.main}>
            <div>
                <div className={mainTitleStyle.title}>
                    <p>연차 관리</p>
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

                <table className={`table ${annualManagementStyle.annualStandardTable}`}>
                    <thead>
                        <tr className={annualManagementStyle.annualStandardTableHead}>
                            <th colSpan="5" scope="col" className='text-center'>인사구분</th>
                            <th colSpan="4" scope="col" className='text-center'>집계정보</th>
                            <th colSpan="12" scope="col" className='text-center'>2022년도</th>
                            <th colSpan="12" scope="col" className='text-center'>2023년도</th>
                        </tr>
                        <tr className={annualManagementStyle.annualStandardTableSubHead}>
                            <th scope="col">No</th>
                            <th scope="col">부서</th>
                            <th scope="col">팀</th>
                            <th scope="col">직급</th>
                            <th scope="col">성명</th>
                            <th scope="col">년도</th>
                            <th scope="col">연차 총 갯수</th>
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
                        <tr className={annualManagementStyle.annualStandardTablebody}>
                            <td>1</td>
                            <td>경영관리부</td>
                            <td>영업1팀</td>
                            <td>대리</td>
                            <td>홍길동</td>
                            <td>2023년도</td>
                            <td>15</td>
                            <td>5</td>
                            <td>10</td>
                            <td>1.0</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>1.0</td>
                            <td>2.0</td>
                            <td></td>
                            <td></td>
                            <td>1.0</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>1.0</td>
                            <td>1.0</td>
                            <td></td>
                            <td></td>
                            <td>2.0</td>
                            <td></td>
                            <td></td>
                            <td>1.0</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>     
                <div className="d-flex justify-content-center mt-5">
                    <Pagination count={10} shape="rounded" />
                </div>
            </div>
        </main>
    );
}

export default AnnualManagement;