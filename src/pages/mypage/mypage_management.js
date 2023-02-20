import mpManagement from '../../resources/css/pages/mypage/mypage-management.module.css';
import mainTitleStyle from '../../resources/css/pages/mypage/main-title.module.css';

function MypageManagement (){

    return(
        <>
        <main className={mainTitleStyle.main}>
            <div>

                <div className={mainTitleStyle.title}>
                    <p>개인정보관리</p>
                </div>

                <div className={mpManagement.infoBtn}>
                    <button>비밀번호변경</button>
                    <button>수정</button>
                    <button>인쇄</button>
                </div>

                <div className="container mt-5">
                    <div className={`row ${mpManagement.mainRow}`}>
                    <div className="mb-3">
                        <p className={mpManagement.infoHead}>이름</p>
                        <p className={mpManagement.myInfo}>홍길동</p>
                    </div>
                    <div className="mb-3">
                        <p className={mpManagement.infoHead}>사번</p>
                        <p className={mpManagement.myInfo}>5DO001</p>
                    </div>
                    <div className="mb-3">
                        <p className={mpManagement.infoHead}>이메일</p>
                        <p className={mpManagement.myInfo}>asd1234@5DO.com</p>
                    </div>
                    <div className="mb-3">
                        <p className={mpManagement.infoHead}>내선번호</p>
                        <p className={mpManagement.myInfo}>712</p>
                    </div>
                    <div className="mb-3">
                        <p className={mpManagement.infoHead}>휴대번호</p>
                        <p className={mpManagement.myInfo}>010.1234.5678</p>
                    </div>
                    <div className="mb-3">
                        <p className={mpManagement.infoHead}>직급</p>
                        <p className={mpManagement.myInfo}>팀장</p>
                    </div>
                    <div className="mb-3">
                        <p className={mpManagement.infoHead}>주소</p>
                        <p className={mpManagement.myInfo}>서울시 마포구 아현동 123-34</p>
                    </div>
                    <div className="mb-3">
                        <p className={mpManagement.infoHead}>생년월일</p>
                        <p className={mpManagement.myInfo}>1993-01-01</p>
                    </div>
                    <div className="mb-3">
                        <p className={mpManagement.infoHead}>성별</p>
                        <p className={mpManagement.myInfo}>남</p>
                    </div>
                    <div className="mb-3">
                        <p className={mpManagement.infoHead}>입사일</p>
                        <p className={mpManagement.myInfo}>2019-10-24</p>
                    </div>
                    </div>
                </div>            
            </div>
        </main>
        </>
    );
}

export default MypageManagement;