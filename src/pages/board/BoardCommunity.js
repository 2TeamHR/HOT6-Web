import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {callBoardCommunityListAPI} from "../../apis/BoardCommunityAPICalls";
import Pagination from "@mui/material/Pagination";
import {Link, useNavigate} from "react-router-dom";


function BoardCommunity() {

    const dispatch = useDispatch();
    const boardCommunity = useSelector(state => state.boardCommunityReducer);
    console.log('boardCommunity: ', boardCommunity);

    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 10;
    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const navigate = useNavigate();
    const onClickTableTr = (boardCode) => {
        navigate(`/board/community/${boardCode}`, {replace: false});
    }


    useEffect(
        () => {
            dispatch(callBoardCommunityListAPI());
        }
        , []
    );
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;

    function displayTime(date) {

        const dateTime = new Date(date);
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

    function boardCommunityCommentColor(number) {
        if (number < 1) {
            return {color: "black"}
        } else if (number < 4) {
            return {color: "#f68d91"}
        } else if (number < 7) {
            return {color: "#f1545a"}
        } else {
            return {color: "#ff0000"};
        }
    }

    return (
        <div className="container">
            <h1 className="mt-5 text-center"><b>커뮤니티</b></h1><br/>
            <div className="table-area">
                <table className="table">
                    <thead>
                    <tr style={{"textAlign": "center", "backgroundColor": "#5EDCB3"}}>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                        <th>조회수</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Array.isArray(boardCommunity) && boardCommunity.slice(startIndex, endIndex).map((community, communityIndex) => (
                        <tr key={community.boardCode} className="text-center"
                            onClick={() => onClickTableTr(community.boardCode)} style={{cursor: 'pointer'}}>
                            <td className='align-middle'>{communityIndex + 1}</td>
                            <td className='align-middle' style={{"display":"flex"}}>{community.boardTitle}
                                <span style={boardCommunityCommentColor(community.boardCommunityComment.length)}>
                                    &ensp;[{community.boardCommunityComment.length}]
                                </span>
                            </td>
                            <td className='align-middle'>{community.member.memberName}</td>
                            <td className='align-middle'>{displayTime(community.boardInsertDate)}</td>
                            <td className='align-middle'>{community.boardCount}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <div className="d-flex justify-content-center">
                    <Pagination
                        className="d-flex justify-content-center"
                        count={Math.ceil(boardCommunity.length / perPage)}
                        page={currentPage}
                        onChange={handlePageChange}/>
                    <br/>
                </div>
                <Link to="/board/community/write" className={""}>
                    <input type="submit" id="" className="btn btn-info me-1"
                           style={{float: "right", color:"#000000", backgroundColor: "#5EDCB3", "borderColor": "#5EDCB3", fontWeight: "bold", fontSize: "larger"}}
                           value="글쓰기"/>
                </Link><br/>
                <div className="search-area" align="center">
                    <form name="search-form" autoComplete="off" style={{"display": "inline"}}>
                        <select id="searchCondition" name="searchCondition">
                            <option value="boardTitle">제목</option>
                            <option value="nickName">작성자</option>
                        </select>
                        <input type="search" id="searchValue" name="searchValue" placeholder="검색할 내용을 입력하세요."/>
                        <input type="submit" className="btn btn-secondary" style={{color:"black", backgroundColor: "#5EDCB3", "borderColor": "#5EDCB3"}} value="검색"/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default BoardCommunity;
