import * as React from 'react';
import {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {callBoardNoticeWriteAPI,} from '../../apis/BoardNoticeAPICalls';
import {callGetMemberAPI} from "../../apis/MemberAPICalls";
import {decodeJwt} from "../../utils/tokenUtils";

function BoardNoticeWrite() {

    const dispatch = useDispatch();
    const member = useSelector(state => state.memberReducer);
    const memberDetail = member.data;
    const token = decodeJwt(window.localStorage.getItem("accessToken"));

    // const [image, setImage] = useState(null);
    // const [imageUrl, setImageUrl] = useState();
    // const imageInput = useRef();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        memberCode: '',
        noticeTitle: '',
        noticeContent: '',
    });

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    useEffect(() => {
            if (token !== null) {
                dispatch(callGetMemberAPI({
                    memberCode: token.sub
                }));
            }
        }, []
    );

    console.log("memberCode", memberDetail?.memberCode);

    const onClickNoticeWriteHandler = () => {

        console.log('[NoticeWrite] onClickNoticeWriteHandler');

        const formData = new FormData();
        formData.append("memberCode", token.sub);
        formData.append("noticeTitle", form.noticeTitle);
        formData.append("noticeContent", form.noticeContent);


        dispatch(callBoardNoticeWriteAPI({
            form: formData,
        }));

        console.log("form: ", form);

        alert('공지사항이 등록되었습니다.');
        navigate('/board/notice', {replace: true});
        window.location.reload();
    }

    return (

        <div className="container">
            <h1 className="mt-5 text-center">공지사항 글쓰기</h1>
            <hr/>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">제목</label>
                <input
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="제목을 작성해주세요."
                    name="noticeTitle"
                    onChange={onChangeHandler}/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">내용</label>
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    placeholder="본문을 작성해주세요."
                    name="noticeContent"
                    rows={15}
                    onChange={onChangeHandler}/>
            </div>
            <br/>
            <div>
                <button
                    // type="submit"
                    className="btn btn-info me-3"
                    style={{"backgroundColor": "black", "borderColor": "black"}}
                    onClick={onClickNoticeWriteHandler}>
                    등록하기
                </button>
                    <button type="button" className="btn btn-secondary" onClick={ () => navigate(-1) }>목록으로</button>
            </div>
        </div>
    );
}

export default BoardNoticeWrite;