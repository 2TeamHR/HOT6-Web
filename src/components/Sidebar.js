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
                            <h3 className={`${sidebarStyle.h3} ${sidebarStyle.navSubtitle}`}></h3>

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
                                            <Link to="/myPageMain" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>메인</Link>
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
                                            <Link to="/" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>재직자명단</Link>
                                    </div>
                                    <div className={sidebarStyle.navDropdownContent}>
                                        <div className={sidebarStyle.navDropdownContentTitle}>
                                            증명서
                                        </div>
                                            <Link to="/" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>증명서 신청</Link>
                                            <Link to="/" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>신청 현황</Link>
                                    </div>
                                    <div className={sidebarStyle.navDropdownContent}>
                                        <div className={sidebarStyle.navDropdownContentTitle}>
                                            인사팀 기능
                                        </div>
                                            <Link to="/" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>신규 사원 등록</Link>
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
                                            근태관리
                                        </div> <Link to="/myPageMain" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>메인</Link>
                                            <a href="/attendence/AttendanceManage" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>근태 조회 및 관리</a>
                                            <a href="#!" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>근무 시간 이력</a>
                                    </div>
                                    <div className={sidebarStyle.navDropdownContent}>
                                        <div className={sidebarStyle.navDropdownContentTitle}>
                                            휴가관리
                                        </div>
                                            <a href="#!" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>연차 결재 리스트</a>
                                            <a href="#!" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>연차 내역</a>
                                            <a href="#!" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>연차 관리</a>
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
                                        <Link to="/CertificationForm" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>기안하기</Link>
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
                                            <Link to="/salaryCheck" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>급여 조회</Link>
                                    </div>
                                    <div className={sidebarStyle.navDropdownContent}>
                                        <div className={sidebarStyle.navDropdownContentTitle}>
                                            인사팀 관리
                                        </div>
                                            <Link to="/allcheckN" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>급여 지급 현황 </Link>
                                            <Link to="/severanceN" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>퇴직금 지급 현황</Link>
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