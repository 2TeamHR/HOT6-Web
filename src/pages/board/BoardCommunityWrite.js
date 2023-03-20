import * as React from 'react';
import {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {callBoardCommunityWriteAPI,} from '../../apis/BoardCommunityAPICalls';
import {callGetMemberAPI} from "../../apis/MemberAPICalls";
import {decodeJwt} from "../../utils/tokenUtils";

function BoardCommunityWrite() {

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
        boardTitle: '',
        boardContent: '',
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

    const onClickCommunityWriteHandler = () => {

        console.log('[CommunityWrite] onClickCommunityWriteHandler');

        const formData = new FormData();
        formData.append("memberCode", token.sub);
        formData.append("boardTitle", form.boardTitle);
        formData.append("boardContent", form.boardContent);


        dispatch(callBoardCommunityWriteAPI({
            form: formData,
        }));

        console.log("form: ", form);

        alert('커뮤니티이 등록되었습니다.');
        navigate('/board/community', {replace: true});
        window.location.reload();
    }

    return (

        <div className="container">
            <h1 className="mt-5 text-center">커뮤니티 글쓰기</h1>
            <hr/>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">제목</label>
                <input
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="제목을 작성해주세요."
                    name="boardTitle"
                    onChange={onChangeHandler}/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">내용</label>
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    placeholder="본문을 작성해주세요."
                    name="boardContent"
                    rows={15}
                    onChange={onChangeHandler}/>
            </div>
            <br/>
            <div>
                <button
                    // type="submit"
                    className="btn btn-info me-3"
                    style={{"backgroundColor": "black", "borderColor": "black"}}
                    onClick={onClickCommunityWriteHandler}>
                    등록하기
                </button>
                <button type="button" className="btn btn-secondary" onClick={ () => navigate(-1) }>목록으로</button>
            </div>
        </div>
    );
}

export default BoardCommunityWrite;