import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { callGetMemberCodeSalaryAPI,
         callInsertSalaryAPI        
} from '../../apis/SalaryAPICalls';
import salaryInsertStyle from '../../resources/css/pages/salary/salary-insert.module.css';

function SalaryInsert() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [memberCode, setMemberCode] = useState('');
    let [memberInfo, setMemberInfo] = useState('');
    const member = useSelector(state => state.salaryReducer);

    console.log('member=======', member);

    memberInfo = member;

    useEffect(() => {
        if (memberCode) {
          dispatch(callGetMemberCodeSalaryAPI({ memberCode })).then(data => {
            setMemberInfo(data || {});
          });
        }
      }, [memberCode, dispatch]);


    if(memberCode == null) {
        memberInfo = {
            memberCode: '',
            team: {
                teamName: ''
            },
            rank: {
                rankName: ''
            },
            memberName: '',
            hourlyMoney: 0,
            totalTime: 0,
            mealSalary: 0,
            incomTax : 0,
            healthTax: 0,
            nationalTax: 0,
            beforeSalary: 0,
            totalTax: 0,
            afterSalary: 0,
        };
    }

    
    const handleSubmit = () => {
        dispatch(callInsertSalaryAPI(memberInfo));
    };




    console.log('memberInfo ============', memberInfo);

    return (
        <main className= {salaryInsertStyle.main}>
            <div>

                <div className={salaryInsertStyle.title}>
                    <p>급여 명단 추가</p>
                </div>
 
                <form>
                <div className={salaryInsertStyle.infoBtn}>
                    <button className="ml-2 mr-2" onClick={handleSubmit}>등록하기</button>
                    <button className="ml-2 mr-2" onClick={ () => { navigate(-1)}}>이전 페이지로</button>
                </div>

                <div className={salaryInsertStyle.parent}>
                    <div className= "container mt-5">
                        <div className="row">
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>사원 번호</p>
                                <input className={salaryInsertStyle.myInfo} value={memberInfo.memberCode} onChange={(e) => setMemberCode(e.target.value)} 

                                />                            
                                </div>
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>이름</p>
                                <input  className={salaryInsertStyle.myInfo} 
                                        value={memberInfo.memberName}
                                        readOnly
                                />
                            </div>
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>조직</p>
                                <input  className={salaryInsertStyle.myInfo} 
                                        value={memberInfo.team?.teamName}
                                        readOnly
                                />
                            </div>
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>직급</p>
                                <input  className={salaryInsertStyle.myInfo} 
                                        value={memberInfo.rank?.rankName}
                                        readOnly
                                />
                            </div>
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>시급</p>
                                <input  className={salaryInsertStyle.myInfo} 
                                        value={memberInfo.rank?.hourlyMoney}
                                        readOnly
                                />
                            </div>
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>총근무시간</p>
                                <input  className={salaryInsertStyle.myInfo} 
                                        value={memberInfo.totalTime}
                                        readOnly
                                />
                            </div>
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>기본급</p>
                                <input  className={salaryInsertStyle.myInfo} 
                                        value= {memberInfo.basicSalary}
                                        readOnly
                                />
                            </div>
                        </div>
                    </div>
                    <div className="container mt-5">
                        <div className="row">
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>식대</p>
                                <input  className={salaryInsertStyle.myInfo} 
                                        value= {memberInfo.mealSalary}
                                        readOnly
                                />
                            </div>
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>세전 급액</p>
                                <input  className={salaryInsertStyle.myInfo} 
                                        value= {memberInfo.beforeSalary}
                                        readOnly
                                />
                            </div>
                            
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>소득세</p>
                                <input  className={salaryInsertStyle.myInfo} 
                                        value= {memberInfo.incomTax}
                                        readOnly
                                />
                            </div>
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>건강보험세</p>
                                <input  className={salaryInsertStyle.myInfo} 
                                        value= {memberInfo.healthTax}
                                        readOnly
                                />
                            </div>
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>국민연금세</p>
                                <input  className={salaryInsertStyle.myInfo} 
                                        value= {memberInfo.nationalTax}
                                        readOnly
                                />
                            </div>
                           
                         
                            
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>총 공제액</p>
                                <input  className={salaryInsertStyle.myInfo} 
                                        value= {memberInfo.totalTax}
                                        readOnly
                                />
                            </div>
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>세후 급액</p>
                                <input  className={salaryInsertStyle.myInfo} 
                                        value= {memberInfo.afterSalary}
                                        readOnly
                                />
                            </div>
                        </div>
                    </div>
                </div>
                </form>            
            </div>
        </main>
    );

    
}

export default SalaryInsert;