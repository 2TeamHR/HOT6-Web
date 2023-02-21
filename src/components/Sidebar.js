import sidebarStyle from '../resources/css/components/sidebar.module.css';
import { Link } from 'react-router-dom';

function Sidebar() {
    

    return (
        <>  
        {/* <!--========== Sidebar ==========--> */}
        <div className={sidebarStyle.nav} id="navbar">
            <nav className={sidebarStyle.navContainer}>
                <div>
                    <Link to="/" className={`${sidebarStyle.a} ${sidebarStyle.navLink} ${sidebarStyle.navLogo}`}>
                        <i className={`bx bxs-disc ${sidebarStyle.navIcon}`}></i>
                        <span className={sidebarStyle.navLogoName}>5DO</span>
                    </Link>

                    {/* <!-- nav var --> */}
                    <div className={sidebarStyle.navList}>

                        {/* <!-- nav 마이페이지 --> */}
                        <div className={sidebarStyle.navItems}>
                            <div className={sidebarStyle.navDropdown}>
                                <div href="#!" className={`${sidebarStyle.a} ${sidebarStyle.navLink}`}>
                                    <i className={`bx bx-home ${sidebarStyle.navIcon}`}></i>
                                    <span className={sidebarStyle.navName}>마이페이지</span>
                                    <i className={`bx bx-chevron-down ${sidebarStyle.navIcon} ${sidebarStyle.navDropdownIcon}`}></i>
                                </div>
                                <div className={sidebarStyle.navDropdownCollapse}>
                                    {/* <!-- 중분류 --> */}
                                    <div className={sidebarStyle.navDropdownContent}>
                                        <div className={sidebarStyle.navDropdownContentTitle}>
                                            마이페이지
                                        </div>
                                            <Link to="/mypage/main" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>나의 인사 카드</Link>
                                            <Link to="/mypage/update" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>개인 정보 관리</Link>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* <!-- nav 인사 --> */}
                        <div className={sidebarStyle.navItems}>

                            <div className={sidebarStyle.navDropdown}>
                                <div href="#!" className={`${sidebarStyle.a} ${sidebarStyle.navLink}`}>
                                    <i className={`bx bx-user ${sidebarStyle.navIcon}`}></i>
                                    <span className={sidebarStyle.navName}>인사</span>
                                    <i className={`bx bx-chevron-down ${sidebarStyle.navIcon} ${sidebarStyle.navDropdownIcon}`}></i>
                                </div>
                                <div className={sidebarStyle.navDropdownCollapse}>
                                    {/* <!-- 중분류 --> */}
                                    <div className={sidebarStyle.navDropdownContent}>
                                        <div className={sidebarStyle.navDropdownContentTitle}>
                                            조직도
                                        </div>
                                            <Link to="/organization/chart" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>재직자명단</Link>
                                    </div>
                                    <div className={sidebarStyle.navDropdownContent}>
                                        <div className={sidebarStyle.navDropdownContentTitle}>
                                            증명서
                                        </div>
                                            <Link to="/organization/certification" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>신청 현황</Link>
                                    </div>
                                    <div className={sidebarStyle.navDropdownContent}>
                                        <div className={sidebarStyle.navDropdownContentTitle}>
                                            인사팀 기능
                                        </div>
                                            <Link to="/organization/create" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>신규 사원 등록</Link>
                                            <Link to="/" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>인사 이동 명단</Link>
                                            <Link to="/" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>퇴직자 명단</Link>
                                            <Link to="/" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>상여금 명단</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        {/* <!-- nav 근태 --> */}
                        <div className={sidebarStyle.navItems}>

                            <div className={sidebarStyle.navDropdown}>
                                <div href="#!" className={`${sidebarStyle.a} ${sidebarStyle.navLink}`}>
                                    <i className={`bx bx-building-house ${sidebarStyle.navIcon}`}></i>
                                    <span className={sidebarStyle.navName}>근태</span>
                                    <i className={`bx bx-chevron-down ${sidebarStyle.navIcon} ${sidebarStyle.navDropdownIcon}`}></i>
                                </div>
                                <div className={sidebarStyle.navDropdownCollapse}>
                                    {/* <!-- 중분류 --> */}
                                    <div className={sidebarStyle.navDropdownContent}>
                                        <div className={sidebarStyle.navDropdownContentTitle}>
                                            근태
                                        </div>
                                            <Link to="/attendence/main" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>나의 근태이력</Link>
                                    </div>
                                    <div className={sidebarStyle.navDropdownContent}>
                                        <div className={sidebarStyle.navDropdownContentTitle}>
                                            연차
                                        </div>
                                            <Link to="/annual/payment" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>나의 연차이력</Link>
                                    </div>
                                    <div className={sidebarStyle.navDropdownContent}>
                                        <div className={sidebarStyle.navDropdownContentTitle}>
                                            인사팀 관리
                                        </div>
                                            <Link to="/attendence/AttendanceManage" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>근태 이력 조회</Link>
                                            <Link to="/attendence/AttendanceSelectTime" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>근무 시간 이력</Link>
                                            <Link to="/annual/payment" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>연차 결재 리스트</Link>
                                            <Link to="/annual/history" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>연차 내역</Link>
                                            <Link to="/annual/management" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>연차 관리</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                         {/* <!-- nav 전자 결재 --> */}
                         <div className={sidebarStyle.navItems}>

                            <div className={sidebarStyle.navDropdown}>
                                <div href="#!" className={`${sidebarStyle.a} ${sidebarStyle.navLink}`}>
                                    <i className={`bx bx-edit ${sidebarStyle.navIcon}`}></i>
                                    <span className={sidebarStyle.navName}>전자결재</span>
                                    <i className={`bx bx-chevron-down ${sidebarStyle.navIcon} ${sidebarStyle.navDropdownIcon}`}></i>
                                </div>
                                <div className={sidebarStyle.navDropdownCollapse}>
                                    {/* <!-- 중분류 --> */}
                                    <div className={sidebarStyle.navDropdownContent}>
                                        <div className={sidebarStyle.navDropdownContentTitle}>
                                            전자결재
                                        </div>
                                        <Link to="/es/main" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>메인</Link>
                                    </div>
                                    <div className={sidebarStyle.navDropdownContent}>
                                        <div className={sidebarStyle.navDropdownContentTitle}>
                                            기안함
                                        </div>
                                        <Link to="/es/draft" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>기안하기</Link>
                                            <a href="#!" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>결재 진행함</a>
                                            <a href="#!" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>결재 요청함</a>
                                    </div>
                                    <div className={sidebarStyle.navDropdownContent}>
                                        <div className={sidebarStyle.navDropdownContentTitle}>
                                            결재 수신함
                                        </div>
                                            <a href="#!" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>결재 내역</a>
                                            <a href="#!" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>결재 요청</a>
                                            <a href="#!" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>대리 결재</a>
                                            <a href="#!" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>수신 참조</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- nav 급여 --> */}
                        <div className={sidebarStyle.navItems}>

                            <div className={sidebarStyle.navDropdown}>
                                <a href="#!" className={`${sidebarStyle.a} ${sidebarStyle.navLink}`}>
                                    <i className={`bx bx-money ${sidebarStyle.navIcon}`}></i>
                                    <span className={sidebarStyle.navName}>급여</span>
                                    <i className={`bx bx-chevron-down ${sidebarStyle.navIcon} ${sidebarStyle.navDropdownIcon}`}></i>
                                </a>
                                <div className={sidebarStyle.navDropdownCollapse}>
                                    {/* <!-- 중분류 --> */}
                                    <div className={sidebarStyle.navDropdownContent}>
                                        <div className={sidebarStyle.navDropdownContentTitle}>
                                            급여
                                        </div>
                                            <Link to="/salary/check" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>내 급여 조회</Link>
                                    </div>
                                    <div className={sidebarStyle.navDropdownContent}>
                                        <div className={sidebarStyle.navDropdownContentTitle}>
                                            인사팀 관리
                                        </div>
                                            <Link to="/salary/checkN" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>급여 지급 현황 </Link>
                                            <Link to="/salary/bonus" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>상여금 지급 현황</Link>
                                            <Link to="/salary/severanceN" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>퇴직금 지급 현황</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- nav 게시판 --> */}
                        <div className={sidebarStyle.navItems}>

                            <div className={sidebarStyle.navDropdown}>
                                <a href="/board/notice" className={`${sidebarStyle.a} ${sidebarStyle.navLink}`}>
                                    <i className={`bx bx-message-edit ${sidebarStyle.navIcon}`}></i>
                                    <span className={sidebarStyle.navName}>게시판</span>
                                    <i className={`bx bx-chevron-down ${sidebarStyle.navIcon} ${sidebarStyle.navDropdownIcon}`}></i>
                                </a>
                                <div className={sidebarStyle.navDropdownCollapse}>
                                    {/* <!-- 중분류 --> */}
                                    <div className={sidebarStyle.navDropdownContent}>
                                        <div className={sidebarStyle.navDropdownContentTitle}>
                                            게시판
                                        </div>
                                            <a href="/board/notice" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>공지사항</a>
                                            <a href="/board/community" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>커뮤니티</a>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                        {/* <!-- nav 캘린더 --> */}
                        <div className={sidebarStyle.navItems}>

                            <div className={sidebarStyle.navDropdown}>
                                <a href="#!" className={`${sidebarStyle.a} ${sidebarStyle.navLink}`}>
                                    <i className={`bx bx-calendar-check ${sidebarStyle.navIcon}`}></i>
                                    <span className={sidebarStyle.navName}>캘린더</span>
                                    <i className={`bx bx-chevron-down ${sidebarStyle.navIcon} ${sidebarStyle.navDropdownIcon}`}></i>
                                </a>
                                <div className={sidebarStyle.navDropdownCollapse}>
                                    {/* <!-- 중분류 --> */}
                                    <div className={sidebarStyle.navDropdownContent}>
                                        <div className={sidebarStyle.navDropdownContentTitle}>
                                            캘린더
                                        </div>
                                            <Link to="schedule/main" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>일정관리</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- nav 메세지 --> */}
                        <div className={sidebarStyle.navItems}>

                            <div className={sidebarStyle.navDropdown}>
                                <a href="#!" className={`${sidebarStyle.a} ${sidebarStyle.navLink}`}>
                                    <i className={`bx bx-envelope ${sidebarStyle.navIcon}`}></i>
                                    <span className={sidebarStyle.navName}>메세지</span>
                                    <i className={`bx bx-chevron-down ${sidebarStyle.navIcon} ${sidebarStyle.navDropdownIcon}`}></i>
                                </a>
                                <div className={sidebarStyle.navDropdownCollapse}>
                                    {/* <!-- 중분류 --> */}
                                    <div className={sidebarStyle.navDropdownContent}>
                                        <div className={sidebarStyle.navDropdownContentTitle}>
                                            메세지
                                        </div>
                                            <a href="/messsage/message" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>메세지 보내기</a>
                                            <a href="/messsage/receivedMessage" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>받은 메세지</a>
                                            <a href="/messsage/MessageSent" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>보낸 메세지</a>
                                            <a href="/messsage/MessageTrash" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>휴지통</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <a href="#!" className={`${sidebarStyle.navLink} ${sidebarStyle.navLogout}`}>
                    <i className={`bx bx-log-out ${sidebarStyle.navIcon}`}></i>
                    <span className={sidebarStyle.navName}>로그아웃</span>
                </a>
            </nav>
        </div>
        </>
    );
}



export default Sidebar;