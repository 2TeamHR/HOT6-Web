import { useSelect } from '@mui/base';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { callGetNoticeAPI } from '../../apis/BoardNoticeAPICalls';

function BoardNoticeDetail() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { noticeCode } = useParams(); // URL 파라미터에서 게시글 ID 가져오기
    const [post, setPost] = useState(null); // 게시글 정보 상태 관리
    // const notice = useSelector(state => state.boardNoticeReducer);
    // const noticeDetail = notice.data;

    // console.log('noticeDetail', noticeDetail);
    console.log('post', post);

    useEffect(() => {
        dispatch(callGetNoticeAPI({ noticeCode }));
        }, [noticeCode]
    );
  

    if (!post) {
        return <div>Loading...</div>
    }; // 게시글 정보가 로드되지 않은 경우

    const noticeUpdateHref = () => {
        navigate("/board/notice/update", { replace: true })
    }

    const noticeDate = post.noticeDate ? new Date(post.noticeDate) : null;
    const formattedNoticeDate = noticeDate ? noticeDate.toISOString().slice(0, 10) : '';


    return (

        <div className="container">
            <h1>{post.noticeTitle}</h1>
            <hr/>

            <span>글쓴이</span>
            <span className='float-right fw-blod'>{post.memberCode || ''}</span>
            <p> | </p>
            <span>작성일</span>
            <span className='float-right fw-blod'>{formattedNoticeDate}</span>
            <p> | </p>
            <span>조회수</span>
            <span className='float-right fw-blod'>{post.noticeCount || 0}</span>
            
            <hr/>
            
            <span className='float-right fw-blod'>{post.noticeContent || ''}</span>
            
            <hr/>

            <div className="btn btn-info me-3">
                <button onClick={noticeUpdateHref}>수정</button>
                {/* <button onClick={noticeUpdateHref}>삭제</button> */}
                <button onClick={() => navigate(-1)}>목록으로</button>
            </div>
            
            
            <hr/>




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