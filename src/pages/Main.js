import mainStyle from '../resources/css/components/main.module.css';
import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import MyCalendar from './calendar/MyCalendar';
import Paper from '@mui/material/Paper';
import {callBoardNoticeListAPI} from "../apis/BoardNoticeAPICalls";
import {useDispatch, useSelector} from "react-redux";

function Main() {

    const [value, onChange] = useState(new Date());
    const boardNotice = useSelector(state => state.boardNoticeReducer);
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(callBoardNoticeListAPI());
        }, []
    );

    const navigate = useNavigate();
    const onClickTableTr = (noticeCode) => {
        navigate(`/board/notice/${noticeCode}`, {replace: false});
    }

    return (
        <main className={`${mainStyle.main} mt-4 m row`}>

            {/* 캘린더 */}
            <div className={`col-md-7 ${mainStyle.mainClass}`}>
                <MyCalendar />
            </div>
            <div className='col-md-5'>
                <div className="row justify-content-center">
                    <Paper elevation={3} className={`col-md-11 ${mainStyle.noticeBox}`}>
                        <table className="table">
                            <thead style={{fontSize: "xx-large"}}>공지사항&ensp;<Link to="/board/notice" style={{ textDecoration: "none", color: "black", fontSize: "initial"}}>더 보기</Link></thead>
                            <tbody>
                            {Array.isArray(boardNotice) && boardNotice.slice(0, 8).map((notice, index) => (
                                <tr key={notice.noticeCode} className="text-center" onClick={() => onClickTableTr(notice.noticeCode)} style={{cursor: 'pointer'}}>
                                    <td className='align-middle' style={{textAlign : "initial"}}>{notice.noticeTitle}</td>
                                    <td className='align-middle'>{notice.noticeDate.slice(6, 10)}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </Paper>
                    {/*<div className="col-md-12">*/}
                    {/*    <div className="row justify-content-center">*/}
                    {/*        <Paper elevation={3} className="col-md-5">*/}
                    {/*            <p className={`${mainStyle.mainApproval} fs-2 mt-5 text-center`}>승인된 결재</p>*/}
                    {/*            <div className={mainStyle.noteCount}>*/}
                    {/*                <span>5</span>*/}
                    {/*                <span>건</span>*/}
                    {/*            </div>*/}
                    {/*        </Paper>*/}
                    {/*        <div className='col-md-1'></div>*/}
                    {/*        <Paper elevation={3} className="col-md-5">*/}
                    {/*            <p className={`${mainStyle.mainApproval} fs-2 mt-5 text-center`}>반려된 결재</p>*/}
                    {/*            <div className={mainStyle.noteCount}>*/}
                    {/*                <span>5</span>*/}
                    {/*                <span>건</span>*/}
                    {/*            </div>*/}
                    {/*        </Paper>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </main>
    );
}

export default Main;