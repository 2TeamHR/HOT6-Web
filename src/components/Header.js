import sidebarStyle from "../resources/css/components/sidebar.module.css";
import headerStyle from "../resources/css/components/header.module.css";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { decodeJwt } from '../utils/tokenUtils';
import moment from 'moment';
import { BiTimeFive } from 'react-icons/bi';
import { 
    callGetMemberAPI, 
    callLogoutAPI
} from "../apis/MemberAPICalls";

function Header() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = decodeJwt(window.localStorage.getItem("accessToken"));
    const member = useSelector(state => state.memberReducer);
    const memberDetail = member.data; 
    const presentationDate = moment('2023-03-22 14:00:00', 'YYYY-MM-DD HH:mm:ss'); // 발표일
    const [now, setNow] = useState(new Date().getTime()); // 현재 시간 타임스탬프
    const [dDay, setDDay] = useState(null); // D-day 타임스탬프
    const dDayTime = presentationDate.toDate().getTime(); // D-day 시간 타임스탬프
    // const [search, setSearch] = useState('');

    const [date, setDate] = useState(new Date());

    useEffect(
        () => {
            if (token !== null) {
                dispatch(callGetMemberAPI({ 
                  memberCode: token.sub 
                }));
              }
        }, []
    );

    /* 남은 발표까지 */
    useEffect(() => {
        // 매 초마다 현재 시간을 업데이트
        const interval = setInterval(() => {
          setNow(new Date().getTime());
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);
    
      useEffect(() => {
        // D-day까지 남은 시간을 계산하고 업데이트
        const timeLeft = dDayTime - now;
        if (timeLeft > 0) {
          setDDay(timeLeft);
        } else {
          setDDay(0);
        }
      }, [now]);
    
      // 타임스탬프를 시간으로 변환하는 함수
      const timestampToTime = (timestamp) => {
        const days = Math.floor(timestamp / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timestamp % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timestamp % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
        const seconds = Math.floor((timestamp % (1000 * 60)) / 1000).toString().padStart(2, '0');
        return `${days}일 ${hours}시간 ${minutes}분 ${seconds}초`;
      };

      const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setRotation(prev => prev + 30);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

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
            <header className={sidebarStyle.header}>
                <div className={sidebarStyle.headerContainer}>

                    {/* <div className={sidebarStyle.headerSearch}>
                        <input type="search" placeholder="Search" className={sidebarStyle.headerInput}/>
                        <i className={`bx bx-search ${sidebarStyle.headerIcon}`}></i>
                    </div> */}

                    <div className="d-flex align-items-center">
                        <BiTimeFive style={{ transform: `rotate(${rotation}deg)`, fontSize: "2rem" }} />
                        <span className="ml-2 fs-3 fw-bold text-danger">
                            발표까지 남은 시간: {dDay !== null ? timestampToTime(dDay) : "loading..."}
                        </span>
                    </div>

                    {memberDetail && (
                        <div className={headerStyle.headerRight}>
                            <button className="btn-primary mr-5 rounded-1" onClick={ onClickLogoutHandler }>로그아웃</button>
                            <img
                                alt="profile_img"
                                src={memberDetail.profileImageList?.[0]?.profileImageLocation ?? 'default-profile-image.png'}
                                width="10%"
                                className="rounded-circle"
                            />
                            <div className="d-flex flex-column ml-2">
                                <span className={`fw-bold ${headerStyle.profileText}`}>{memberDetail.memberName}{memberDetail.rank.rankName}</span>
                                <span className={headerStyle.profileText}>{memberDetail.team.teamName}</span>
                            </div>
                        </div>
                    )}
                </div>
            </header>
        </>
    );
}

export default Header;
