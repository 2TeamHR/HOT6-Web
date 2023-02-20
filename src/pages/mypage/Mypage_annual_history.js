import mpahStyle from '../../resources/css/pages/mypage/mypage-annual-history.module.css';
import mainTitleStyle from '../../resources/css/pages/mypage/main-title.module.css';
import Pagination from '../../components/Pagination';

function MypageAnnualHistory() {

    return(
        <main className={mainTitleStyle.main}>
            <div>
                <div className={mainTitleStyle.title}>
                    <p>나의 연차 이력</p>
                </div>

                {/* <!-- check box --> */}
                <div className={`d-flex flex-row justify-content-around ${mpahStyle.annualMainBox}`}>
                    <div>
                        <p>현재 총 연차</p>
                        <p className="fs-3">0</p>
                    </div>
                    <div>
                        <p>현재 사용 연차</p>
                        <p className="fs-3">0</p>
                    </div>
                    <div>
                        <p>현재 잔여 연차</p>
                        <p className="fs-3">0</p>
                    </div>
                    <div>
                        <p>현재 특별 연차</p>
                        <p className="fs-3">0</p>
                    </div>
                    <div className="text-success">
                        <p>총 연차</p>
                        <p className="fs-3">0</p>
                    </div>
                    <div className="text-success">
                        <p>사용 연차</p>
                        <p className="fs-3">0</p>
                    </div>
                    <div className="text-success">
                        <p>잔여 연차</p>
                        <p className="fs-3">0</p>
                    </div>
                </div>
                {/* <!-- check box --> */}
            </div>

            <div class="mt-5 table-margin">
                <table class="table">
                    <thead>
                    <tr class="text-center">
                        <th scope="col">No</th>
                        <th scope="col">휴가종류</th>
                        <th scope="col">시작일</th>
                        <th scope="col">종료일</th>
                    </tr>
                    </thead>
                    <tbody class="text-center">
                    </tbody>
                </table>
                <div className='text-center'>
                    <Pagination/>
                </div>
            </div>

         </main>
    );
}

export default MypageAnnualHistory;