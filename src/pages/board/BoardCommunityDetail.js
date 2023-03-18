import mpManagement from '../../resources/css/pages/mypage/mypage-management.module.css';
import mainTitleStyle from '../../resources/css/pages/mypage/main-title.module.css';
import Paper from '@mui/material/Paper';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { callGetCommunityAPI, callUpdateCommunityAPI } from '../../apis/BoardCommunityAPICalls';
import { decodeJwt } from '../../utils/tokenUtils';

function BoardCommunityDetail() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();
    const community = useSelector(state => state.boardCommunityReducer);
    const communityDetail = community.data;
    const token = decodeJwt(window.localStorage.getItem("accessToken"));

    console.log('communityDetail', communityDetail);

    useEffect(() => {
            dispatch(callGetCommunityAPI({
                boardCode: params.boardCode}));
        }, []
    );


    if (!communityDetail) {
        return <div>Loading...</div>
    };

    const communityUpdateHref = () => {
        navigate("/board/community/update", { replace: true })
    }

    const onClickCommunityDelete = () => {
        dispatch(
            callUpdateCommunityAPI({
                boardCode: communityDetail.boardCode,
                boardDeleteYn: "Y",
            })
        );
    }

    const onClickCommunityListHandler = () => {

        alert('공시자항 목록으로 이동합니다.');
        navigate('/board/community', {replace: true});
        window.location.reload();
    }

    const communityDate = communityDetail.communityDate ? new Date(communityDetail.communityDate) : null;
    const formattedCommunityDate = communityDate ? communityDate.toISOString().slice(0, 10) : '';


    return (
        <main className={mainTitleStyle.main}>
            {communityDetail ? (
                <>
                    <div className={`justify-content-center `}>
                        <Paper elevation={3} className={mpManagement.profileInfoBox} style={{ height: '150px' }}>
                            <div className={mpManagement.infoTitle}>
                                <span className='fs-3' >제목&ensp;&ensp;{ communityDetail.boardTitle }</span>
                            </div>
                            <div className={mpManagement.infoModule}>
                                <span>글쓴이&ensp;&ensp;{ communityDetail.memberCode || ''}&ensp;&ensp;&ensp;</span>
                                <span>|&ensp;&ensp;&ensp;작성일&ensp;&ensp;{ formattedCommunityDate }&ensp;&ensp;&ensp;</span>
                                <span>|&ensp;&ensp;&ensp;조회수&ensp;&ensp;{ communityDetail.boardCount || 0 }</span>
                            </div>
                        </Paper>
                        <br/>
                        <Paper elevation={3} className={mpManagement.profileInfoBox} style={{ height: '400px' }} >
                            <div className={mpManagement.infoModule}>
                                <span>{ communityDetail.boardContent || '' }</span>
                            </div>
                        </Paper>
                    </div>
                    <br/>
                    <button className="btn btn-info me-3" onClick={onClickCommunityListHandler}>목록으로</button>
                    {(token.sub === communityDetail.memberCode) && (
                        <>
                            <button className="btn btn-info me-3" onClick={communityUpdateHref}>수정</button>
                            <button className="btn btn-info me-3" onClick={onClickCommunityDelete}>삭제</button>
                        </>
                    )}
                </>
            ) : '해당 게시글을 찾을 수 없습니다.'
            }
        </main>
    );
}


export default BoardCommunityDetail;