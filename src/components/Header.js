import sidebarStyle from "../resources/css/components/sidebar.module.css";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {callLogoutAPI} from "../apis/MemberAPICalls";
import { decodeJwt } from '../utils/tokenUtils';

function Header() {

    const navigate = useNavigate();

    // 리덕스를 이용하기 위한 디스패처, 셀렉터 선언
    const dispatch = useDispatch();
    const loginMember = useSelector(state => state.memberReducer);  // 저장소에서 가져온 loginMember 정보
    const isLogin = window.localStorage.getItem('accessToken');    // Local Storage 에 token 정보 확인
    const loginMemberCode = decodeJwt(window.localStorage.getItem('accessToken'));
    const [search, setSearch] = useState('');

    // console.log("loginMemberCode.sub : " + loginMemberCode.sub);    // 사번 출력


    const onClickLogoutHandler = () => {
        window.localStorage.removeItem('accessToken');
        //로그아웃
        dispatch(callLogoutAPI());

        alert('로그아웃이 되어 메인화면으로 이동합니다.');
        navigate("/", { replace: true })
        window.location.reload();
    }

    const onClickLoginHandler = () => {
        navigate("/login");
    }

    function BeforeLogin() {

        return (
            <div>
                <button className="btn-primary ml-3 rounded-1" onClick={onClickLoginHandler}>로그인</button>
            </div>
        );
    }

    function AfterLogin() {

        return (
            <div className={sidebarStyle.headerRight}>
                <span>{loginMemberCode.sub}님 안녕하세요</span>

                <button className="btn-primary ml-3 rounded-1" onClick={ onClickLogoutHandler }>로그아웃</button>
            </div>
        );
    }


    return (
    <>
        {/* <!--========== HEADER ==========--> */}
        <header className={sidebarStyle.header}>
            <div className={sidebarStyle.headerContainer}>

                <div className={sidebarStyle.headerSearch}>
                    <input type="search" placeholder="Search" className={sidebarStyle.headerInput}/>
                    <i className={`bx bx-search ${sidebarStyle.headerIcon}`}></i>
                </div>

                <div>
                    { (isLogin == null || isLogin === undefined) ? <BeforeLogin /> : <AfterLogin />}
                </div>

            </div>
        </header>
    </>
    );
}

export default Header;
