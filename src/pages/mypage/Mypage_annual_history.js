import mpahStyle from '../../resources/css/pages/mypage/mypage-annual-history.module.css';
import mainTitleStyle from '../../resources/css/pages/mypage/main-title.module.css';
import Paper from '@mui/material/Paper';
import {EnhancedTable} from '../../components/tableComponent';
import { getMypageAnnualHistoryTableData } from '../../api/tableAPI';

function MypageAnnualHistory() {

    return(
        <main className={mainTitleStyle.main}>
            <div>
                <div className={mainTitleStyle.title}>
                    <p>나의 연차 이력</p>
                </div>

                {/* <!-- check box --> */}
                <Paper elevation="3" className="d-flex flex-row pt-5 pb-3 justify-content-around">
                    <div className={mpahStyle.annualMainBox}>
                        <div className={mpahStyle.annualMainBoxTitle}>
                            <p className='fs-3 fw-bold'>2022년도</p>
                        </div>
                        <div className='d-flex flex-row justify-content-around'>
                            <div>
                                <p>총 연차</p>
                                <p className="fs-3">0</p>
                            </div>
                            <div>
                                <p>사용</p>
                                <p className="fs-3">0</p>
                            </div>
                            <div>
                                <p>잔여</p>
                                <p className="fs-3">0</p>
                            </div>
                        </div>
                    </div>
                    <div className={`text-success ${mpahStyle.annualMainBox}`}>
                        <div className={mpahStyle.annualMainBoxTitle}>
                            <p className='fs-3 fw-bold'>2023년도</p>
                        </div>
                        <div className='d-flex flex-row justify-content-around'>
                            <div>
                                <p>총 연차</p>
                                <p className="fs-3">0</p>
                            </div>
                            <div>
                                <p>사용</p>
                                <p className="fs-3">0</p>
                            </div>
                            <div>
                                <p>잔여</p>
                                <p className="fs-3">0</p>
                            </div>
                        </div>
                    </div>
                </Paper>
                {/* <!-- check box --> */}
                <div className={mpahStyle.annualSelectBox}>
                    <span className='float-left fs-4 fw-bold'>휴가 발생 내역</span>
                    <select className='float-right'>
                        <option>발생 내역</option>
                        <option>사용 내역</option>
                    </select>
                </div>
                <div className={mpahStyle.annualTableMargin}>
                    <EnhancedTable tabledata={ getMypageAnnualHistoryTableData() }/>
                </div>
            </div>
        </main>
    );
}

export default MypageAnnualHistory;