import amdStyle from '../../resources/css/pages/attendance-management/annual-management-detailed.module.css'
import mainTitleStyle from '../../resources/css/pages/mypage/main-title.module.css';
import Pagination from '../../components/Pagination';
import { AnnualIncrease, AnnualDiminish } from '../../components/ModalGroup';

function AnnualManagementDetailed() {

    return(
        <main className={mainTitleStyle.main}>
            <div>

                <div className={mainTitleStyle.title}>
                    <p>연차 관리 - 상세페이지</p>
                </div>

                <div className={amdStyle.userName}>
                    <span>박준영</span>
                    <span>사원</span>
                </div>

                {/* <!-- check box --> */}
                <div className={`d-flex flex-row justify-content-around ${amdStyle.annualMainBox}`}>
                    <div>
                        <p>총 연차</p>
                        <p className="fs-3">0</p>
                    </div>
                    <div>
                        <p>사용 연차</p>
                        <p className="fs-3">0</p>
                    </div>
                    <div>
                        <p>잔여 연차</p>
                        <p className="fs-3">0</p>
                    </div>
                    <div>
                        <p>특별 연차</p>
                        <p className="fs-3">0</p>
                    </div>
                    <div className="text-success">
                        <p>누적 총 연차</p>
                        <p className="fs-3">0</p>
                    </div>
                    <div className="text-success">
                        <p>누적 사용 연차</p>
                        <p className="fs-3">0</p>
                    </div>
                    <div className="text-success">
                        <p>누적 잔여 연차</p>
                        <p className="fs-3">0</p>
                    </div>
                    <div className="text-success">
                        <p>누적 특별 연차</p>
                        <p className="fs-3">0</p>
                    </div>
                </div>
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

                <div className="mt-5">
                    <table className="table">
                        <thead>
                        <tr className="text-center">
                            <th scope="col">No</th>
                            <th scope="col">휴가종류</th>
                            <th scope="col">휴가구분</th>
                            <th scope="col">날짜</th>
                            <th scope="col">대상일</th>
                        </tr>
                        </thead>
                        <tbody className="text-center">
                        <tr>
                            <th scope="row">1</th>
                            <td>기본연차</td>
                            <td>지급</td>
                            <td>2023-01-11</td>
                            <td>1일</td>
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

export default AnnualManagementDetailed;