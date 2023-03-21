import mpManagement from '../../resources/css/pages/mypage/mypage-management.module.css';
import mainTitleStyle from '../../resources/css/pages/mypage/main-title.module.css';
import Paper from '@mui/material/Paper';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import {callGetCommunityAPI, callUpdateCommunityAPI} from '../../apis/BoardCommunityAPICalls';
import {decodeJwt} from '../../utils/tokenUtils';

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
                boardCode: params.boardCode
            }));
        }, []
    );


    if (!communityDetail) {
        return <div>Loading...</div>
    }
    ;

    const communityUpdateHref = () => {
        navigate("/board/community/update", {replace: true})
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

    /* 삭제 추가 예정 */
    /* 삭제 추가 예정 */
    /* 삭제 추가 예정 */

    const communityDate = communityDetail.boardInsertDate ? new Date(communityDetail.boardInsertDate) : null;
    const formattedCommunityDate = communityDate ? communityDate.toISOString().slice(0, 10) : '';

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

    return (
        <main className={mainTitleStyle.main}>
            {communityDetail ? (
                <>
                    {/* 제목 & 본문 */}
                    <div className={`justify-content-center `}>
                        <Paper elevation={3} className={mpManagement.profileInfoBox}
                               style={{height: '150px', "backgroundColor": "#5EDCB3"}}>
                            <div className={mpManagement.infoTitle}>
                                <span className='fs-3'>제목&ensp;&ensp;{communityDetail.boardTitle}</span>
                            </div>
                            <div className={mpManagement.infoModule}>
                                <span>글쓴이 :&ensp;{communityDetail.member.memberName || ''}&ensp;&ensp;&ensp;</span>
                                <span>|&ensp;&ensp;&ensp;작성일 :&ensp;{formattedCommunityDate}&ensp;&ensp;&ensp;</span>
                                <span>|&ensp;&ensp;&ensp;조회수 :&ensp;{communityDetail.boardCount || 0}</span>
                            </div>
                        </Paper>
                        <br/>
                        <Paper elevation={3} className={mpManagement.profileInfoBox} style={{height: '400px'}}>
                            <div className={mpManagement.infoModule}>
                                <span>{communityDetail.boardContent || ''}</span>
                            </div>
                        </Paper>
                    </div>
                    <br/>

                    {/* 버튼 */}
                    <button className="btn btn-info me-3" onClick={onClickCommunityListHandler}
                            style={{
                                color: "#000000",
                                backgroundColor: "#5EDCB3",
                                "borderColor": "#5EDCB3",
                                fontWeight: "bold",
                                fontSize: "larger"
                            }}>목록으로
                    </button>
                    {(token.sub === communityDetail.memberCode) && (
                        <>
                            <button className="btn btn-info me-3" onClick={onClickCommunityDelete}
                                    style={{
                                        float: "right",
                                        color: "#000000",
                                        backgroundColor: "#5EDCB3",
                                        "borderColor": "#5EDCB3",
                                        fontWeight: "bold",
                                        fontSize: "larger"
                                    }}>삭제
                            </button>
                            <button className="btn btn-info me-3" onClick={communityUpdateHref}
                                    style={{
                                        float: "right",
                                        color: "#000000",
                                        backgroundColor: "#5EDCB3",
                                        "borderColor": "#5EDCB3",
                                        fontWeight: "bold",
                                        fontSize: "larger"
                                    }}>수정
                            </button>
                        </>
                    )}
                    <br/><br/>

                    <div>
                        {/* 댓글 */}
                        {communityDetail.boardCommunityComment.length > 0 ? (

                            <div>
                                {Array.isArray(communityDetail.boardCommunityComment) && communityDetail.boardCommunityComment?.map((boardCommunityComment, boardCommunityCommentIndex) => (
                                    <p style={{"display": "table"}} key={boardCommunityComment.commentCode}
                                       className="text-center">
                                        <h4><span
                                            className='align-middle'>{`[댓글 ${boardCommunityCommentIndex + 1}]`}</span>
                                            <span
                                                className='align-middle'>{`[${boardCommunityComment.boardMember.memberName}]`}</span>
                                            <span
                                                className='align-middle'>{`[${displayTime(boardCommunityComment.commentInsertDate)}]`}</span>
                                            <span className='align-middle'
                                                  style={{"textAlign": "initial"}}>&ensp;{boardCommunityComment.commentContent}</span>
                                        </h4>
                                    </p>
                                ))}
                            </div>
                        ) : (
                            <p>댓글이 없습니다.</p>
                        )}
                    </div>
                    <br/>

                    <div className="form-group" style={{"display": "inline-block"}}>
                        <label htmlFor="exampleFormControlInput1"><h3><b>&ensp;댓글&ensp;</b></h3></label><br/>
                        <span style={{"display": "inline-block"}}><input
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="댓글을 작성해주세요."
                            name="commentCode"
                            style={{height: '5em', width: '100ex'}}/></span>
                        {/*onChange={onChangeHandler}/>*/}
                        &ensp;
                        <button
                            className="btn btn-info me-3"
                            style={{
                                color: "#000000",
                                backgroundColor: "#5EDCB3",
                                "borderColor": "#5EDCB3",
                                fontWeight: "bold",
                                fontSize: "larger"
                            }}>
                            등록하기
                        </button>
                    </div>
                </>
            ) : '해당 게시글을 찾을 수 없습니다.'
            }
        </main>
    );
}

export default BoardCommunityDetail;