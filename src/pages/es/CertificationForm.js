



function CertificationForm() {
    return (
        <>
            <h2>증명서 신청서</h2>
            <li><label for="">결재선</label><input type="text" /></li>
            <li><label for="">기안문서번호</label><input type="text" /></li>
            <li><label for="">기안일시</label><input type="date" name="" id="" /></li>
            <li><label for="">제목</label><input type="text" /></li>
            <li><label for="">내용</label><input type="text" name="" id="" /></li>
            <li>
                <label for="">증명서 종류</label
                ><select name="" id="">
                    <option value="">재직 증명서</option>
                    <option value="">증명서1</option>
                </select>
            </li>
            <li><label for="">신청부수</label><input type="number" name="" id=""></li>
        </>
    );
}

export  default CertificationForm;