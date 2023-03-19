import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { callGetNoticeAPI, callUpdateNoticeAPI } from "../../apis/BoardNoticeAPICalls";

function BoardNoticeUpdate() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const boardNotice = useSelector(state => state.boardNoticeReducer);
    const noticeDetail = boardNotice.data;

    console.log('noticeDetail', noticeDetail);

    useEffect(() => {    
            dispatch(callGetNoticeAPI({
                noticeCode: noticeDetail.noticeCode
            }));     
        },[]
    );

    /* 변경할 데이터 form */
    const [form, setForm] = useState({
        noticeTitle: noticeDetail.noticeTitle || '',
        noticeContent: noticeDetail.noticeContent || ''
    });

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };
      
    /* 공지사항 정보 변경 핸들러 */
    const onClickNoticeUpdateHandler = () => {

    console.log('[NoticeUpdate] onClicNoticeUpdateHandler');

        const formData = new FormData();
        formData.append("noticeTitle", form.noticeTitle);
        formData.append("noticeContent", form.noticeContent);

        dispatch(callUpdateNoticeAPI({
            form: formData,
            noticeCode: noticeDetail.noticeCode
        }));        
        
        alert("게시글이 수정되었습니다.")
        navigate("/board/notice", { replace: true })
        window.location.reload();
    }

    /* 취소시 메인 이동 */
    const cancelNoticeUpdateHref = () => {
        alert("수정이 취소 되었습니다.");
        navigate("/board/notice", { replace: true })
        window.location.reload();
    }

    return (
        <div className="container">
            <h1 className="mt-5 text-center">공지사항 수정하기</h1>
            <hr/>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">제목</label>
                <input
                    className="form-control"
                    name="noticeTitle"
                    id="exampleFormControlInput1"
                    defaultValue={form.noticeTitle}
                    onChange={onChangeHandler}
                />
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">내용</label>
                <textarea
                    className="form-control"
                    name="noticeContent"
                    id="exampleFormControlTextarea1"
                    defaultValue={form.noticeContent}
                    rows={15}
                    onChange={onChangeHandler}
                />
            </div>
            <br/>
            <div>
                <button
                    className="btn btn-info me-3"
                    style={{"backgroundColor": "black", "borderColor": "black"}}
                    onClick={onClickNoticeUpdateHandler}>완료
                </button>
                    <button type="button" className="btn btn-secondary" onClick={cancelNoticeUpdateHref}>취소</button>
            </div>
        </div>
    );
}

export default BoardNoticeUpdate;