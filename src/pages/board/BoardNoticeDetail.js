import React from 'react';

function BoardNoticeDetail() {

    return (

        <div>
            <h1>제목</h1>
        <hr />
            <p>글쓴이 | 작성일 | 조회수 : 0</p>
            <hr/>
            <p>본문<br />본문<br />본문<br />본문<br />본문<br />본문<br />본문<br />본문<br />본문<br />본문<br /></p>
            <hr/>
            <button onClick="editPost()">수정</button>
            <button onClick="deletePost()">삭제</button>
            <button onClick="goToList()">목록</button>
            <hr />
            <h3>댓글</h3>
            <div>
                <p>작성자 | 작성일</p>
                <p>댓글 내용</p>
                <button onclick="deleteComment()">삭제</button>
            </div>
            <div>
                <p>작성자 | 작성일</p>
                <p>댓글 내용</p>
                <button onclick="deleteComment()">삭제</button>
            </div>
            <div>
                <p>작성자 | 작성일</p>
                <p>댓글 내용</p>
                <button onclick="deleteComment()">삭제</button>
            </div>
            <hr/>
            <hr/>
            <form>
                <label htmlFor="content">내용:</label>
                <textarea id="content" name="content" defaultValue={""}/><br/>
                <button type="submit">등록</button>
            </form>
        </div>
    );
}


export default BoardNoticeDetail;