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
                            <td className='align-middle'>{notice.noticeDate}</td>
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
