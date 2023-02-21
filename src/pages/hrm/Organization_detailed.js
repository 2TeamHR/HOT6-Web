import organizagtionCreateStyle from '../../resources/css/pages/hrm/organization-create.module.css';
import mainTitleStyle from '../../resources/css/pages/mypage/main-title.module.css';

function OrganizationDetailed() {

    return (
        <main className={mainTitleStyle.main}>
            <div>

                <div className={mainTitleStyle.title}>
                    <p>사원 상세 정보</p>
                </div>
 
                <div className={organizagtionCreateStyle.infoBtn}>
                    <button className="ml-2 mr-2">수정</button>
                </div>

                <div className="container mt-5">
                    <div className="row main_row">
                        <div className="mb-3">
                            <p className={organizagtionCreateStyle.infoHead}>이름</p>
                            <p className={organizagtionCreateStyle.infoHead}>홍길동</p>
                        </div>
                        <div className="mb-3">
                            <p className={organizagtionCreateStyle.infoHead}>사번</p>
                            <p className={organizagtionCreateStyle.infoHead}>5DO001</p>
                        </div>
                        <div className="mb-3">
                            <p className={organizagtionCreateStyle.infoHead}>이메일</p>
                            <p className={organizagtionCreateStyle.infoHead}>asd1234@5DO.com</p>
                        </div>
                        <div className="mb-3">
                            <p className={organizagtionCreateStyle.infoHead}>내선번호</p>
                            <p className={organizagtionCreateStyle.infoHead}>712</p>
                        </div>
                        <div className="mb-3">
                            <p className={organizagtionCreateStyle.infoHead}>휴대번호</p>
                            <p className={organizagtionCreateStyle.infoHead}>010.1234.5678</p>
                        </div>
                        <div className="mb-3">
                            <p className={organizagtionCreateStyle.infoHead}>직급</p>
                            <p className={organizagtionCreateStyle.infoHead}>팀장</p>
                        </div>
                        <div className="mb-3">
                            <p className={organizagtionCreateStyle.infoHead}>주소</p>
                            <p className={organizagtionCreateStyle.infoHead}>서울시 마포구 아현동 123-34</p>
                        </div>
                        <div className="mb-3">
                            <p className={organizagtionCreateStyle.infoHead}>생년월일</p>
                            <p className={organizagtionCreateStyle.infoHead}>1993-01-01</p>
                        </div>
                        <div className="mb-3">
                            <p className={organizagtionCreateStyle.infoHead}>성별</p>
                            <p className={organizagtionCreateStyle.infoHead}>남</p>
                        </div>
                        <div className="mb-3">
                            <p className={organizagtionCreateStyle.infoHead}>입사일</p>
                            <p className={organizagtionCreateStyle.infoHead}>2019-10-24</p>
                        </div>
                    </div>
                </div>            
            </div>
        </main>
    );
}

export default OrganizationDetailed;