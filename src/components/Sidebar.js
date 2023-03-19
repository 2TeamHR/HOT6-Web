import sidebarStyle from '../resources/css/components/sidebar.module.css';
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {callLogoutAPI} from "../apis/MemberAPICalls";
import { decodeJwt } from '../utils/tokenUtils';

function Sidebar() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = decodeJwt(window.localStorage.getItem('accessToken'));

    const onClickLogoutHandler = () => {
        window.localStorage.removeItem('accessToken');
        //로그아웃
        dispatch(callLogoutAPI());

        alert('로그아웃이 되어 로그인 페이지로 이동합니다.');
        navigate("/", { replace: true })
        window.location.reload();
    }

    return (
        <>  
        {/* <!--========== Sidebar ==========--> */}
        <div className={sidebarStyle.nav} id="navbar">
            <nav className={sidebarStyle.navContainer}>
                <div>
                    <Link to="/" className={`${sidebarStyle.a} ${sidebarStyle.navLink} ${sidebarStyle.navLogo}`}>
                        <i className={`bx bxs-disc ${sidebarStyle.navIcon}`}></i>
                        <span className={sidebarStyle.navLogoName}>The Tech Titan</span>
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
                                            <Link to="/mypage/management" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>개인 정보 관리</Link>
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

                                    { (token.auth.includes("ROLE_ADMIN")) ? 
                                    <div className={sidebarStyle.navDropdownContent}>
                                        <div className={sidebarStyle.navDropdownContentTitle}>
                                            인사팀 기능
                                        </div>
                                            <Link to="/organization/create" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>신규 사원 등록</Link>
                                            {/* <Link to="/" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>인사 이동 명단</Link> */}
                                            <Link to="/organization/retireeChart" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>퇴직자 명단</Link>
                                            {/* <Link to="/" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>상여금 명단</Link> */}
                                    </div>
                                    : <div/> }
                                    
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
                                            <Link to="/mypage/attendance/history" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>나의 근태이력</Link>
                                    </div>
                                    <div className={sidebarStyle.navDropdownContent}>
                                        <div className={sidebarStyle.navDropdownContentTitle}>
                                            휴가
                                        </div>
                                            <Link to="mypage/annual/history" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>나의 휴가이력</Link>
                                    </div>
                                    { (token.auth.includes("ROLE_ADMIN")) ? 
                                    <div className={sidebarStyle.navDropdownContent}>
                                        <div className={sidebarStyle.navDropdownContentTitle}>
                                            인사팀 관리
                                        </div>
                                            <Link to="/attendence/AttendanceManage" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>근태 이력 조회</Link>
                                            <Link to="/attendence/AttendanceSelectTime" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>근무 시간 이력</Link>
                                            <Link to="/annual/payment" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>휴가 결재 리스트</Link>
                                            <Link to="/annual/standardsManagement" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>휴가 기준 관리</Link>
                                            <Link to="/annual/management" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>휴가 관리</Link>
                                    </div>
                                    : <div/> }
                                </div>
                            </div>
                        </div>

                         {/* <!-- nav 전자 결재 --> */}
                         <div className={sidebarStyle.navItems}>

                            <div className={sidebarStyle.navDropdown}>
                                <div className={`${sidebarStyle.a} ${sidebarStyle.navLink}`}>
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
                                        <Link to="/ea/main" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>메인</Link>
                                    </div>
                                    <div className={sidebarStyle.navDropdownContent}>
                                        <div className={sidebarStyle.navDropdownContentTitle}>
                                            기안함
                                        </div>
                                        <Link to="/ea/draftMenu" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>기안하기</Link>
                                        <Link to="/ea/draftInbox" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>결재 기안함</Link>

                                    </div>
                                    <div className={sidebarStyle.navDropdownContent}>
                                        <div className={sidebarStyle.navDropdownContentTitle}>
                                            결재 수신함
                                        </div>
                                        <Link to="/ea/wait" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>결재 대기 문서함</Link>
                                        <Link to="/ea/prograss" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>결재 진행 문서함</Link>
                                        <Link to="/ea/complete" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>결재 완료 문서함</Link>                                        
                                    </div>
                                    { (token.auth.includes("ROLE_ADMIN")) ? 
                                    <div className={sidebarStyle.navDropdownContent}>
                                        <div className={sidebarStyle.navDropdownContentTitle}>
                                            인사팀 기능
                                        </div>
                                            <Link to="/ea/allEaList" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>전체 전자결재 문서함</Link>                                        
                                    </div>
                                    : <div/> }
                                </div>
                            </div>
                        </div>

                        {/* <!-- nav 급여 --> */}
                        <div className={sidebarStyle.navItems}>

                            <div className={sidebarStyle.navDropdown}>
                                <div className={`${sidebarStyle.a} ${sidebarStyle.navLink}`}>
                                    <i className={`bx bx-money ${sidebarStyle.navIcon}`}></i>
                                    <span className={sidebarStyle.navName}>급여</span>
                                    <i className={`bx bx-chevron-down ${sidebarStyle.navIcon} ${sidebarStyle.navDropdownIcon}`}></i>
                                </div>
                                <div className={sidebarStyle.navDropdownCollapse}>
                                    {/* <!-- 중분류 --> */}
                                    <div className={sidebarStyle.navDropdownContent}>
                                        <div className={sidebarStyle.navDropdownContentTitle}>
                                            급여
                                        </div>
                                            <Link to="/salary/check" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>내 급여 조회</Link>
                                    </div>
                                    { (token.auth.includes("ROLE_ADMIN")) ? 
                                    <div className={sidebarStyle.navDropdownContent}>
                                        <div className={sidebarStyle.navDropdownContentTitle}>
                                            인사팀 관리
                                        </div>
                                            <Link to="/salary/check/All" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>급여 지급 현황 </Link>
                                            <Link to="/salary/bonus" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>상여금 지급 현황</Link>
                                            {/* <Link to="/salary/severance/N" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>퇴직금 지급 현황</Link> */}
                                    </div>
                                    : <div/> }
                                </div>
                            </div>
                        </div>

                        {/* <!-- nav 게시판 --> */}
                        <div className={sidebarStyle.navItems}>

                            <div className={sidebarStyle.navDropdown}>
                                <div className={`${sidebarStyle.a} ${sidebarStyle.navLink}`}>
                                    <i className={`bx bx-message-edit ${sidebarStyle.navIcon}`}></i>
                                    <span className={sidebarStyle.navName}>게시판</span>
                                    <i className={`bx bx-chevron-down ${sidebarStyle.navIcon} ${sidebarStyle.navDropdownIcon}`}></i>
                                </div>
                                <div className={sidebarStyle.navDropdownCollapse}>
                                    {/* <!-- 중분류 --> */}
                                    <div className={sidebarStyle.navDropdownContent}>
                                        <div className={sidebarStyle.navDropdownContentTitle}>
                                            게시판
                                        </div>
                                            <Link to="/board/notice" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>공지사항</Link>
                                            <Link to="/board/community" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>커뮤니티</Link>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* <!-- nav 캘린더 --> */}
                        <div className={sidebarStyle.navItems}>

                            <div className={sidebarStyle.navDropdown}>
                            <div className={`${sidebarStyle.a} ${sidebarStyle.navLink}`}>   
                                    <i className={`bx bx-calendar-check ${sidebarStyle.navIcon}`}></i>
                                    <span className={sidebarStyle.navName}>캘린더</span>
                                    <i className={`bx bx-chevron-down ${sidebarStyle.navIcon} ${sidebarStyle.navDropdownIcon}`}></i>
                            </div>  
                                <div className={sidebarStyle.navDropdownCollapse}>
                                    {/* <!-- 중분류 --> */}
                                    <div className={sidebarStyle.navDropdownContent}>
                                        <div className={sidebarStyle.navDropdownContentTitle}>
                                            캘린더
                                        </div>
                                            <Link to="/calendar" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>일정관리</Link>
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
                                            <Link to="/messsage/message" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>메세지 보내기</Link>
                                            <Link to="/messsage/receivedMessage" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>받은 메세지</Link>
                                            <Link to="/messsage/MessageSent" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>보낸 메세지</Link>
                                            <Link to="/messsage/MessageTrash" className={`${sidebarStyle.a} ${sidebarStyle.navDropdownItem}`}>휴지통</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${sidebarStyle.navLink} ${sidebarStyle.navLogout}`}>
                    <i className={`bx bx-log-out ${sidebarStyle.navIcon}`}></i>
                    <span className={sidebarStyle.navName} onClick={ onClickLogoutHandler }>로그아웃</span>
                </div>
            </nav>
        </div>
        </>
    );
}



export default Sidebar;


