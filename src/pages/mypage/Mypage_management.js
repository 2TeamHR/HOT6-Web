import mpManagement from '../../resources/css/pages/mypage/mypage-management.module.css';
import mainTitleStyle from '../../resources/css/pages/mypage/main-title.module.css';
import profileStyle from '../../resources/css/components/profile.module.css';
import sampleImg from '../../resources/image/hong.jpeg';
import Paper from '@mui/material/Paper';

function MypageManagement (){

    const mypageManagementUpdateHref = () => {
        document.location.href = "/mypage/management/update"
    }

    const findPasswordHref = () => {
        document.location.href = "/findpassword"
    }

    
    return(
        <main className={mainTitleStyle.main}>
            <div>

                <div className={mainTitleStyle.title}>
                    <p>개인정보관리</p>
                </div>

                <div className='d-flex ml-5 mr-5'>
                    <Paper elevation={3} className={mpManagement.profileMain}>
                        <div className={mpManagement.infoTitle}>
                            <p>프로필 관리</p>
                        </div>
                        <div className={mpManagement.mpmProfile}>
                            <img className={profileStyle.mpmProfileImg} alt="profile_img" src={sampleImg} />
                        </div>
                        <div className={mpManagement.infoBtn}>
                            <button onClick={findPasswordHref}>비밀번호변경</button>
                            <button onClick={mypageManagementUpdateHref}>수정</button>
                            <button>인쇄</button>
                        </div>
                    </Paper>
                    <div className={mpManagement.profileMain2}>
                        <Paper elevation={3} className={mpManagement.profileInfoBox}>
                            <div className={mpManagement.infoTitle}>
                                <p>개인정보</p>
                            </div>
                            <div className={mpManagement.infoModule}>
                                <i className={`bx bx-user mr-3`}></i>
                                <span>이름</span>
                                <span className='float-right fw-blod'>홍길동</span>
                            </div>
                            <div className={mpManagement.infoModule}>
                                <i className={`bx bx-phone mr-3`}></i>
                                <span>휴대전화</span>
                                <span className='float-right fw-blod'>010-1234-4444</span>
                            </div>
                            <div className={mpManagement.infoModule}>
                                <i className={`bx bx-envelope mr-3`}></i>
                                <span>이메일</span>
                                <span className='float-right fw-blod'>asd1234@5DO.com</span>
                            </div>
                            <div className={mpManagement.infoModule}>
                                <i className={`bx bx-home mr-3`}></i>
                                <span>주소</span>
                                <span className='float-right fw-blod'>서울시 마포구 아현동 123-34</span>
                            </div>
                            <div className={mpManagement.infoModule}>
                                <i className={`bx bx-calendar-alt mr-3`}></i>
                                <span>생년월일</span>
                                <span className='float-right fw-blod'>1993-01-01</span>
                            </div>
                            <div className={mpManagement.infoModule}>
                                <i className={`bx bx-male-female mr-3`}></i>
                                <span>성별</span>
                                <span className='float-right fw-blod'>남</span>
                            </div>
                        </Paper>
                        <Paper elevation={3} className={`mt-3 ${mpManagement.profileInfoBox}`}>
                            <div className={mpManagement.infoTitle}>
                                <p>회사정보</p>
                            </div>
                            <div className={mpManagement.infoModule}>
                                <i className={`bx bx-buildings mr-3`}></i>
                                <span>사번</span>
                                <span className='float-right fw-blod'>5DO001</span>
                            </div>
                            <div className={mpManagement.infoModule}>
                                <i className={`bx bx-buildings mr-3`}></i>
                                <span>소속부서</span>
                                <span className='float-right fw-blod'>경영관리부</span>
                            </div>
                            <div className={mpManagement.infoModule}>
                                <i className={`bx bx-buildings mr-3`}></i>
                                <span>소속팀</span>
                                <span className='float-right fw-blod'>인사팀</span>
                            </div>
                            <div className={mpManagement.infoModule}>
                                <i className={`bx bx-buildings mr-3`}></i>
                                <span>직급</span>
                                <span className='float-right fw-blod'>팀장</span>
                            </div>
                            <div className={mpManagement.infoModule}>
                                <i className={`bx bx-buildings mr-3`}></i>
                                <span>내선번호</span>
                                <span className='float-right fw-blod'>712</span>
                            </div>
                            <div className={mpManagement.infoModule}>
                                <i className={`bx bx-buildings mr-3`}></i>
                                <span>입사일</span>
                                <span className='float-right fw-blod'>2019-10-24</span>
                            </div>
                        </Paper>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default MypageManagement;