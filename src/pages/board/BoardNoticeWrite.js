import {useEffect, useRef, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from 'react-redux';
import {
    callBoardNoticeWriteAPI,
} from '../../apis/BoardNoticeAPICalls';

function BoardNoticeWrite() {

    const dispatch = useDispatch();

    // const [image, setImage] = useState(null);
    // const [imageUrl, setImageUrl] = useState();
    // const imageInput = useRef();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        noticeTitle: '',
        noticeContent: '',
        noticeDeleteYn: 'N',
    });

    // useEffect(() => {
    //
    //       /* 이미지 업로드시 미리보기 세팅 */
    //       if(image){
    //         const fileReader = new FileReader();
    //         fileReader.onload = (e) => {
    //           const { result } = e.target;
    //           if( result ){
    //             setImageUrl(result);
    //           }
    //         }
    //         fileReader.readAsDataURL(image);
    //       }
    //     },
    //     [image]);
    //
    //
    // const onChangeImageUpload = (e) => {
    //
    //   const image = e.target.files[0];
    //
    //   setImage(image);
    // };
    //
    // const onClickImageUpload = () => {
    //   imageInput.current.click();
    // }

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const onClickNoticeWriteHandler = () => {

        console.log('[NoticeWrite] onClickNoticeWriteHandler');

        const formData = new FormData();

        formData.append("noticeTitle", form.noticeTitle);
        formData.append("noticeContent", form.noticeContent);
        formData.append("noticeDeleteYn", form.noticeDeleteYn);
        // if(image){
        //   formData.append("noticeImage", image);
        // }
        console.log("formData: ", formData);
        dispatch(callBoardNoticeWriteAPI({
            form: formData

        }));

        alert('공시자항 목록으로 이동합니다.');
        navigate('/board/notice', { replace: true});
        window.location.reload();
    }

    return (

        <div className="container">
            <h1 className="mt-5 text-center">공지사항 글쓰기</h1>
            <hr/>

            <form action="" method="post">
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">제목</label>
                    <input
                        type="text"
                        className="form-control"
                        name="noticeTitle"
                        id="exampleFormControlInput1"
                        placeholder="제목을 작성해주세요."
                        onChange={onChangeHandler}/>

                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">내용</label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        name="noticeContent"
                        rows={15}
                        placeholder="본문을 작성해주세요."
                        onChange={onChangeHandler}/>
                    {/*defaultValue={""} />*/}
                </div>

                <div>
                    <label htmlFor="file">첨부파일 </label>
                    {/*<p><input type="file" id="file" onChange={handleFileChange} /></p>*/}
                    <p><input type="file" id="file"/></p>
                </div>
                <br/>

                <div>
                    <button
                        type="submit"
                        className="btn btn-info me-3"
                        style={{"backgroundColor": "black", "borderColor": "black"}}
                        onClick={onClickNoticeWriteHandler}>
                        등록하기
                    </button>
                    <Link to="/board/notice" className={""}>
                        <button type="button" className="btn btn-secondary">목록으로</button>
                    </Link>
                </div>

            </form>
        </div>
    );
}

export default BoardNoticeWrite;