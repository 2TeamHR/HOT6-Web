import mpManagement from '../../resources/css/pages/mypage/mypage-management.module.css';
import mainTitleStyle from '../../resources/css/pages/mypage/main-title.module.css';
import Paper from '@mui/material/Paper';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { callGetNoticeAPI, callUpdateNoticeAPI } from '../../apis/BoardNoticeAPICalls';
import { decodeJwt } from '../../utils/tokenUtils';

function BoardNoticeDetail() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();
    const notice = useSelector(state => state.boardNoticeReducer);
    const noticeDetail = notice.data;
    const token = decodeJwt(window.localStorage.getItem("accessToken"));

    console.log('noticeDetail', noticeDetail);

    useEffect(() => {
        dispatch(callGetNoticeAPI({
            noticeCode: params.noticeCode}));
        }, []
    );
  

    if (!noticeDetail) {
        return <div>Loading...</div>
    };

    const noticeUpdateHref = () => {
        navigate("/board/notice/update", { replace: true })
    }

    const onClickNoticeDelete = () => {
        dispatch(
            callUpdateNoticeAPI({
                noticeCode: noticeDetail.noticeCode,
                noticeDeleteYn: "Y",
            })
        );
    }

    const noticeDate = noticeDetail.noticeDate ? new Date(noticeDetail.noticeDate) : null;
    const formattedNoticeDate = noticeDate ? noticeDate.toISOString().slice(0, 10) : '';


    return (
        <main className={mainTitleStyle.main}>
            {noticeDetail ? (
                <>
                    <div className={`justify-content-center `}>
                        <Paper elevation={3} className={mpManagement.profileInfoBox} style={{ height: '150px' }}>
                            <div className={mpManagement.infoTitle}>
                                <span className='fs-3' >제목&ensp;&ensp;{ noticeDetail.noticeTitle }</span>
                            </div>
                            <div className={mpManagement.infoModule}>
                                <span>글쓴이&ensp;&ensp;{ noticeDetail.memberCode || ''}&ensp;&ensp;&ensp;</span>
                                <span>|&ensp;&ensp;&ensp;작성일&ensp;&ensp;{ formattedNoticeDate }&ensp;&ensp;&ensp;</span>
                                <span>|&ensp;&ensp;&ensp;조회수&ensp;&ensp;{ noticeDetail.noticeCount || 0 }</span>
                            </div>
                        </Paper>
                        <br/>
                        <Paper elevation={3} className={mpManagement.profileInfoBox} style={{ height: '400px' }} >
                            <div className={mpManagement.infoModule}>
                                <span>{ noticeDetail.noticeContent || '' }</span>
                            </div>
                        </Paper>
                    </div>
                    <br/>
                    <button className="btn btn-info me-3" onClick={() => navigate(-1)}>목록으로</button>
                    {(token.sub === noticeDetail.memberCode) && (
                        <>
                            <button className="btn btn-info me-3" onClick={noticeUpdateHref}>수정</button>
                            <button className="btn btn-info me-3" onClick={onClickNoticeDelete}>삭제</button>
                        </>
                    )}    
                </>
            ) : '해당 게시글을 찾을 수 없습니다.'
            }
        </main>

        // <div className="container">

        //     <span className='float-right fw-blod'>{post.noticeCount || 0}</span>
            
            /* <h3>댓글</h3>
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
            </form> */
        // </div>
    );
}


export default BoardNoticeDetail;