import React from 'react';
import sidebarStyle from "../../resources/css/components/sidebar.module.css";
import { Link } from "react-router-dom";

const BoardCommunity = () => {

    return (
        <>
            <div className="container">
                <h1 className="mt-5 text-center">커뮤니티 게시판</h1>
                <div className="table-area">
                    <table className="table table-hover">
                        <thead>
                            <tr style={{ "backgroundColor": "#DDDDDD" }}>
                                <th>번호</th>
                                <th>제목</th>
                                <th>작성자</th>
                                <th>날짜</th>
                                <th>조회수</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ "cursor": "pointer" }}>
                                <td>51</td>
                                <td>빛성일</td>
                                <td>작성자1</td>
                                <td>2023-01-12 16:17</td>
                                <td>35</td>
                            </tr>
                            <tr style={{ "cursor": "pointer" }}>
                                <td>50</td>
                                <td>킹보성</td>
                                <td>작성자2</td>
                                <td>2023-01-10 18:33</td>
                                <td>21</td>
                            </tr>
                            <tr style={{ "cursor": "pointer" }}>
                                <td>40</td>
                                <td>테스트 제목2</td>
                                <td>작성자3</td>
                                <td>2023-01-09 16:17</td>
                                <td>16</td>
                            </tr>
                            <tr style={{ "cursor": "pointer" }}>
                                <td>39</td>
                                <td>테스트 제목3</td>
                                <td>작성자4</td>
                                <td>2023-01-09 16:17</td>
                                <td>16</td>
                            </tr>
                            <tr style={{ "cursor": "pointer" }}>
                                <td>37</td>
                                <td>테스트5</td>
                                <td>작성자5</td>
                                <td>2023-01-09 16:17</td>
                                <td>6</td>
                            </tr>
                            <tr style={{ "cursor": "pointer" }}>
                                <td>36</td>
                                <td>테스트 제목6</td>
                                <td>작성자6</td>
                                <td>2023-01-08 16:17</td>
                                <td>12</td>
                            </tr>
                            <tr style={{ "cursor": "pointer" }}>
                                <td>35</td>
                                <td>희재님 그곳은 행복하십니까?</td>
                                <td>작성자7</td>
                                <td>2023-01-08 16:17</td>
                                <td>8</td>
                            </tr>
                            <tr style={{ "cursor": "pointer" }}>
                                <td>34</td>
                                <td>현구는 더 커여워</td>
                                <td>작성자8</td>
                                <td>2023-01-08 16:17</td>
                                <td>6</td>
                            </tr>
                            <tr style={{ "cursor": "pointer" }}>
                                <td>33</td>
                                <td>상목이 커여워</td>
                                <td>작성자9</td>
                                <td>2023-01-08 16:17</td>
                                <td>6</td>
                            </tr>
                            <tr style={{ "cursor": "pointer" }}>
                                <td>32</td>
                                <td>하이미디어의 진실</td>
                                <td>작성자10</td>
                                <td>2023-01-08 16:17</td>
                                <td>8</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="search-area" align="center">
                    <form name="search-form" autoComplete="off" style={{ "display": "inline-block" }}>
                        <select id="searchCondition" name="searchCondition">
                            <option value="communityTitle">제목</option>
                            <option value="nickName">작성자</option>
                        </select>
                        <input type="search" id="searchValue" name="searchValue" placeholder="검색할 내용을 입력하세요." />
                        <input type="submit" id="searchList" className="btn btn-secondary" value="검색" />
                    </form>
                    <Link to="/board/community/write" className={""}>
                        <input type="submit" id="" className="btn btn-info me-1"
                            style={{ "float": "right", "backgroundColor": "black", "borderColor": "black" }} value="글쓰기" />
                    </Link>
                </div>
                <br />
                {/* 페이지 처리 */}
                <div className="pagingArea" align="center">
                    {/* 맨 앞으로 이동 버튼 */}
                    <button onClick={() => ""}>
                        &lt;&lt;
                    </button>
                    {/* 이전 페이지 버튼 */}
                    <button onClick={() => ""}>
                        &lt;
                    </button>
                    {/* 숫자 버튼 */}
                    <button onClick={() => ""} disabled="disabled">1</button>
                    <button onClick={() => ""}>2</button>
                    <button onClick={() => ""}>3</button>
                    {/* 다음 페이지 버튼 */}
                    <button onClick={() => ""}>
                        &gt;
                    </button>
                    {/* 마지막 페이지로 이동 버튼 */}
                    <button onClick={() => ""}>
                        &gt;&gt;
                    </button>
                </div>
            </div>
        </>
    );
};

export default BoardCommunity;
