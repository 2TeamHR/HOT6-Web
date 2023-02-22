import organizagtionCreateStyle from '../../resources/css/pages/hrm/organization-create.module.css';
import mainTitleStyle from '../../resources/css/pages/mypage/main-title.module.css';

function OrganizationCreate() {

    return (
        <main className={mainTitleStyle.main}>
            <div>

                <div className={mainTitleStyle.title}>
                    <p>개인정보관리</p>
                </div>
 
                <div className={organizagtionCreateStyle.infoBtn}>
                    <button className="ml-2 mr-2">완료</button>
                    <button className="ml-2 mr-2">취소</button>
                </div>

                <div className="container mt-5">
                    <div className="row main_row">
                        <div className="mb-3">
                            <p className={organizagtionCreateStyle.infoHead}>이름</p>
                            <input className={organizagtionCreateStyle.myInfo}/>
                        </div>
                        <div className="mb-3">
                            <p className={organizagtionCreateStyle.infoHead}>사번</p>
                            <input className={organizagtionCreateStyle.myInfo}/>
                        </div>
                        <div className="mb-3">
                            <p className={organizagtionCreateStyle.infoHead}>이메일</p>
                            <input className={organizagtionCreateStyle.myInfo}/>
                        </div>
                        <div className="mb-3">
                            <p className={organizagtionCreateStyle.infoHead}>내선번호</p>
                            <input className={organizagtionCreateStyle.myInfo}/>
                        </div>
                        <div className="mb-3">
                            <p className={organizagtionCreateStyle.infoHead}>휴대번호</p>
                            <input className={organizagtionCreateStyle.myInfo}/>
                        </div>
                        <div className="mb-3">
                            <p className={organizagtionCreateStyle.infoHead}>직급</p>
                            <input className={organizagtionCreateStyle.myInfo}/>
                        </div>
                        <div className="mb-3">
                            <p className={organizagtionCreateStyle.infoHead}>주소</p>
                            <input className={organizagtionCreateStyle.myInfo}/>
                        </div>
                        <div className="mb-3">
                            <p className={organizagtionCreateStyle.infoHead}>생년월일</p>
                            <input className={organizagtionCreateStyle.myInfo}/>
                        </div>
                        <div className="mb-3">
                            <p className={organizagtionCreateStyle.infoHead}>성별</p>
                            <input className={organizagtionCreateStyle.myInfo}/>
                        </div>
                        <div className="mb-3">
                            <p className={organizagtionCreateStyle.infoHead}>입사일</p>
                            <input className={organizagtionCreateStyle.myInfo}/>
                        </div>
                    </div>
                </div>            
            </div>
        </main>
    );
}

export default OrganizationCreate;