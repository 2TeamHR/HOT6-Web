import mpahStyle from '../../resources/css/pages/mypage/mypage-attendance-history.module.css';
import mainTitleStyle from '../../resources/css/pages/mypage/main-title.module.css';
import {TsbDepartment, TsbEmployee, PayState, Term, EmployState, SearchBtn} from '../../components/TableSearchBox';
import Pagination from '../../components/Pagination';
import { MypageAttendanceHistoryModal } from '../../components/ModalGroup';

function  MypageAttendanceHistory () {


    return (
        <>
            <main className={mainTitleStyle.main}>
                <div>

                    <div className={mainTitleStyle.title}>
                        <p>근태 이력</p>
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
                    
                    <div class="mt-5 table-margin">
                        <table class="table">
                            <thead>
                            <tr class="text-center">
                                <th scope="col">No</th>
                                <th scope="col">일자</th>
                                <th scope="col">근태유형</th>
                                <th scope="col">출근시간</th>
                                <th scope="col">퇴근시간</th>
                                <th scope="col">총 근무 시간</th>
                                <th scope="col">사유</th>
                            </tr>
                            </thead>
                            <tbody class="text-center">
                            <tr>
                                <th scope="row">1</th>
                                <td>2023-01-12</td>
                                <td>정상근무</td>
                                <td>08:45</td>
                                <td>18:05</td>
                                <td>9시간</td>
                                <td>해당 없음</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>2023-01-11</td>
                                <td>결근</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>
                                <MypageAttendanceHistoryModal/>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <div className='text-center'>
                            <Pagination/>
                        </div>
                        
                    </div>
                </div>
            </main>
        </>
    );
}

export default MypageAttendanceHistory;