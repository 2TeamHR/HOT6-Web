import React, { useState } from 'react';
import axios from 'axios';

function CommunityDetail() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [file, setFile] = useState(null);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('file', file);

        axios.post('/api/board/write', formData)
            .then((response) => {
                // 게시글 등록 완료 후 처리할 로직 작성
            })
            .catch((error) => {
                // 에러 처리 로직 작성
            });
    };

    return (

        <div className="container">
            <h1 className="mt-5 text-center">커뮤니티 글쓰기</h1>

            <form action="" method="post">
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">제목</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" name="title"
                        placeholder="제목을 작성해주세요." />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">내용</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" name="contents" rows={10}
                        defaultValue={""} />
                </div>

                <div>
                    <label htmlFor="file">첨부파일</label>
                    <input type="file" id="file" onChange={handleFileChange} />
                </div><br />

                <div>
                    <button type="submit" className="btn btn-info me-3" style={{ "backgroundColor": "black", "borderColor": "black" }}>등록하기</button>
                    <button type="button" className="btn btn-secondary">목록으로</button>
                </div>

            </form>
        </div>
    );
}

export default CommunityDetail;