import mpManagement from '../../resources/css/pages/mypage/mypage-management.module.css';
import mainTitleStyle from '../../resources/css/pages/mypage/main-title.module.css';
import Paper from '@mui/material/Paper';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { callGetNoticeAPI, callUpdateNoticeAPI } from '../../apis/BoardNoticeAPICalls';

function BoardNoticeDetail() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const notice = useSelector(state => state.boardNoticeReducer);
  const noticeDetail = notice.data;
  console.log('noticeDetail', noticeDetail);

  const member = useSelector(state => state.memberReducer);
  const memberDetail = member.data; 
  console.log('memberDetail', memberDetail);

  useEffect(() => {
          dispatch(callGetNoticeAPI({
            noticeCode: params.noticeCode
          }));
      }, []
  );

  if (!noticeDetail) {
    return <div>Loading...</div>
  };

  /* 공지사항 게시글 수정페이지 이동 핸들러 */
  const noticeUpdateHref = () => {
    navigate("/board/notice/update", { replace: true })
  };
  
  /* 공지사항 게시글 삭제 핸들러 */
  const onClickNoticeDeleteHandler = () => {
    
    console.log('[NoticeDelete] onClickNoticeDeleteHandler');

    const formData = new FormData();
    formData.append("noticeDeleteYn", noticeDetail.noticeDeleteYn);

    dispatch(callUpdateNoticeAPI({
        form: formData,
        noticeCode: noticeDetail.noticeCode
    }));

    alert('게시글이 삭제되었습니다.');
    navigate('/board/notice', {replace: true});
    window.location.reload();
  }

  /* 목록으로 이동 핸들러 */
  const onClickNoticeListHandler = () => {
      alert('공지사항 목록으로 이동합니다.');
      navigate('/board/notice', {replace: true});
      window.location.reload();
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
                    {/* <span>|&ensp;&ensp;&ensp;조회수&ensp;&ensp;{ noticeDetail.noticeCount || 0 }</span> */}
                  </div>
                </Paper>
                <br/>
                <Paper elevation={3} className={mpManagement.profileInfoBox} style={{ height: '400px' }} >
                  <div className={mpManagement.infoModule}>
                    <pre>{ noticeDetail.noticeContent || '' }</pre>
                  </div>
                </Paper>
              </div>
              <br/>
              <button className="btn btn-info me-3" onClick={onClickNoticeListHandler}>목록으로</button>
              {(memberDetail?.teamName === '인사팀') ? (
                  <>
                    <button className="btn btn-info me-3" onClick={noticeUpdateHref}>수정</button>
                    {/* <button className="btn btn-info me-3" onClick={onClickNoticeDeleteHandler}>삭제</button> */}
                  </>
              ) : ''}
            </>
        ) : '해당 게시글을 찾을 수 없습니다.'
        }
      </main>
  );
}


export default BoardNoticeDetail;