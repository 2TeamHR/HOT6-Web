import * as React from 'react';
import {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {callBoardNoticeWriteAPI,} from '../../apis/BoardNoticeAPICalls';
import {callGetMemberAPI} from "../../apis/MemberAPICalls";
import {decodeJwt} from "../../utils/tokenUtils";

function BoardNoticeUpdate() {
    //
    // const navigate = useNavigate();
    // const dispatch = useDispatch();
    // const params = useParams();
    // const notice = useSelector(state => state.boardNoticeReducer);
    // const noticeDetail = notice.data;
    // const token = decodeJwt(window.localStorage.getItem("accessToken"));
    //
    // console.log('noticeDetail', noticeDetail);
    //
    // useEffect(() => {
    //         dispatch(callGetNoticeAPI({
    //             noticeCode: params.noticeCode}));
    //     }, []
    // );
    //
    //
    // if (!noticeDetail) {
    //     return <div>Loading...</div>
    // };
    //
    // const noticeUpdateHref = () => {
    //     navigate("/board/notice/update", { replace: true })
    // }
    //
    // const onClickNoticeDelete = () => {
    //     dispatch(
    //         callUpdateNoticeAPI({
    //             noticeCode: noticeDetail.noticeCode,
    //             noticeDeleteYn: "Y",
    //         })
    //     );
    // }
    //
    // const onClickNoticeListHandler = () => {
    //
    //     alert('공시자항 목록으로 이동합니다.');
    //     navigate('/board/notice', {replace: true});
    //     window.location.reload();
    // }
    //
    // const noticeDate = noticeDetail.noticeDate ? new Date(noticeDetail.noticeDate) : null;
    // const formattedNoticeDate = noticeDate ? noticeDate.toISOString().slice(0, 10) : '';
    //
    //
    // return (
    //     <main className={mainTitleStyle.main}>
    //         {noticeDetail ? (
    //             <>
    //                 <div className={`justify-content-center `}>
    //                     <Paper elevation={3} className={mpManagement.profileInfoBox} style={{ height: '150px' }}>
    //                         <div className={mpManagement.infoTitle}>
    //                             <span className='fs-3' >제목&ensp;&ensp;{ noticeDetail.noticeTitle }</span>
    //                         </div>
    //                         <div className={mpManagement.infoModule}>
    //                             <span>글쓴이&ensp;&ensp;{ noticeDetail.memberCode || ''}&ensp;&ensp;&ensp;</span>
    //                             <span>|&ensp;&ensp;&ensp;작성일&ensp;&ensp;{ formattedNoticeDate }&ensp;&ensp;&ensp;</span>
    //                             <span>|&ensp;&ensp;&ensp;조회수&ensp;&ensp;{ noticeDetail.noticeCount || 0 }</span>
    //                         </div>
    //                     </Paper>
    //                     <br/>
    //                     <Paper elevation={3} className={mpManagement.profileInfoBox} style={{ height: '400px' }} >
    //                         <div className={mpManagement.infoModule}>
    //                             <span>{ noticeDetail.noticeContent || '' }</span>
    //                         </div>
    //                     </Paper>
    //                 </div>
    //                 <br/>
    //                 <button className="btn btn-info me-3" onClick={onClickNoticeListHandler}>목록으로</button>
    //                 {(token.sub === noticeDetail.memberCode) && (
    //                     <>
    //                         <button className="btn btn-info me-3" onClick={noticeUpdateHref}>수정</button>
    //                         <button className="btn btn-info me-3" onClick={onClickNoticeDelete}>삭제</button>
    //                     </>
    //                 )}
    //             </>
    //         ) : '해당 게시글을 찾을 수 없습니다.'
    //         }
    //     </main>
    // );
}

export default BoardNoticeUpdate;