import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {callBoardNoticeListAPI} from "../../apis/BoardNoticeAPICalls";
import Pagination from "@mui/material/Pagination";
import {Link, useNavigate} from "react-router-dom";


function BoardNotice() {

    const dispatch = useDispatch();
    const boardNotice = useSelector(state => state.boardNoticeReducer);
    console.log('boardNotice: ', boardNotice);

    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 10;
    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const navigate = useNavigate();
    const onClickTableTr = (noticeCode) => {
        navigate(`/board/notice/${noticeCode}`, {replace: false});
    }


    useEffect(
        () => {
            dispatch(callBoardNoticeListAPI());
        }
        , []
    );
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;

    function displayTime(ggg) {

        const dateTime = new Date(ggg);
        const now = new Date();
        const diff = (now.getTime() - dateTime.getTime()) / 1000;

        if (diff < 60) {
            return "방금 전";
        } else if (diff < 3600) {
            const minutes = Math.floor(diff / 60);
            return `${minutes}분 전`;
        } else if (diff < 86400 && dateTime.getDate() === now.getDate()) {
            const hours = Math.floor(diff / 3600);
            return `${hours}시간 전`;
        } else {
            const year = dateTime.getFullYear();
            const month = dateTime.getMonth() + 1;
            const day = dateTime.getDate();
            return `${year}년 ${month}월 ${day}일`;
        }
    }

    return (
        <div className="container">
            <h1 className="mt-5 text-center">공지사항</h1><br/>
            <div className="table-area">
                <table className="table">
                    <thead>
                    <tr style={{"textAlign": "center", "backgroundColor": "#DDDDDD"}}>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                        <th>조회수</th>
                    </tr>
                    </thead>
                    <tbody>
                    {boardNotice && boardNotice.slice(startIndex, endIndex).map((notice, noticeIndex) => (
                        <tr key={notice.noticeCode} className="text-center"
                            onClick={() => onClickTableTr(notice.noticeCode)} style={{cursor: 'pointer'}}>
                            <td className='align-middle'>{noticeIndex + 1}</td>
                            <td className='align-middle'>{notice.noticeTitle}</td>
                            <td className='align-middle'>{notice.member.memberName}</td>
                            <td className='align-middle'>{displayTime(notice.noticeDate)}</td>
                            <td className='align-middle'>{notice.noticeCount}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <div className="d-flex justify-content-center">
                    <Pagination
                        className="d-flex justify-content-center"
                        count={Math.ceil(boardNotice.length / perPage)}
                        page={currentPage}
                        onChange={handlePageChange}/>
                    <br/>
                </div>
                <Link to="/board/notice/write" className={""}>
                    <input type="submit" id="" className="btn btn-info me-1"
                           style={{"float": "right", "backgroundColor": "black", "borderColor": "black"}}
                           value="글쓰기"/>
                </Link><br/>
                <div className="search-area" align="center">
                    <form name="search-form" autoComplete="off" style={{"display": "inline"}}>
                        <select id="searchCondition" name="searchCondition">
                            <option value="noticeTitle">제목</option>
                            <option value="nickName">작성자</option>
                        </select>
                        <input type="search" id="searchValue" name="searchValue" placeholder="검색할 내용을 입력하세요."/>
                        <input type="submit" className="btn btn-secondary" value="검색"/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default BoardNotice;
