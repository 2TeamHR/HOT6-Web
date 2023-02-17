function EsForm() {
    return (
        <>
        <div>
            <h2>증명서 신청서</h2>
            <li><label>결재선</label><div></div></li>
            <li><label>기안문서번호</label><input type="text" /></li>
            <li><label>기안일시</label><input type="date" name="" id="" /></li>
            <li><label>제목</label><input type="text" /></li>
            <li><label>내용</label><input type="text" name="" id="" /></li>
            <li>
                <label>증명서 종류</label>
                <select>
                    <option>재직 증명서</option>
                    <option>증명서1</option>
                </select>
            </li>
            <li><label>신청부수</label><input type="text"/></li>
            <button>신청하기</button><button>취소하기</button>
            </div>
        </>
    );
}

export  default EsForm;