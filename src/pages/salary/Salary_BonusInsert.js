import { useNavigate } from 'react-router-dom';
import salaryBonusInsertStyle from '../../resources/css/pages/salary/salary-insert.module.css';
import mainTitleStyle from '../../resources/css/pages/mypage/main-title.module.css';

function BonusInsert() { 

    const navigate = useNavigate();

    return (
        <main className= {mainTitleStyle.main}>
            <div>

                <div className={mainTitleStyle.title}>
                    <p>상여금 명단 추가</p>
                </div>
 
                <div className={salaryBonusInsertStyle.infoBtn}>
                    <button className="ml-2 mr-2">등록하기</button>
                    <button className="ml-2 mr-2" onClick={ () => { navigate(-1)}}>이전 페이지로</button>
                </div>

                <div className="container mt-5">
                    <div className="row main_row">
                        <div className="mb-3">
                            <p className={salaryBonusInsertStyle.infoHead}>조직</p>
                            <input className={salaryBonusInsertStyle.myInfo}/>
                        </div>
                        <div className="mb-3">
                            <p className={salaryBonusInsertStyle.infoHead}>직급</p>
                            <input className={salaryBonusInsertStyle.myInfo}/>
                        </div>
                        <div className="mb-3">
                            <p className={salaryBonusInsertStyle.infoHead}>이름</p>
                            <input className={salaryBonusInsertStyle.myInfo}/>
                        </div>
                        <div className="mb-3">
                            <p className={salaryBonusInsertStyle.infoHead}>상여구분</p>
                            <input className={salaryBonusInsertStyle.myInfo}/>
                        </div>
                        <div className="mb-3">
                            <p className={salaryBonusInsertStyle.infoHead}>상여금액</p>
                            <input className={salaryBonusInsertStyle.myInfo}/>
                        </div>
                    
                    </div>
                </div>            
            </div>
        </main>
    );
}

export default BonusInsert;