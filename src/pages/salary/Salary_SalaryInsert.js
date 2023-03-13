import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { callGetMemberCodeSalaryAPI } from '../../apis/SalaryAPICalls';
import salaryInsertStyle from '../../resources/css/pages/salary/salary-insert.module.css';

function SalaryInsert() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [memberCode, setMemberCode] = useState('');
    const [bonusSalary, setBonusSalary] = useState('');
    let [memberInfo, setMemberInfo] = useState('');
    const member = useSelector(state => state.salaryReducer);

    console.log('member====test ===', member);
    console.log('test =============', member?.team?.teamName);
    console.log('test2 ==============', memberInfo.salaryList && memberInfo.salaryList.length > 0 ? memberInfo.salaryList[0].basicSalary : 0);

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
            basicSalary: 0,
            mealSalary: 0,
            bonus: {
                bonusSalary: 0
            },
            incomTax : 0,
            healthTax: 0,
            nationalTax: 0,
            beforeSalary: 0,
            totalTax: 0,
            afterSalary: 0,
        };
        console.log(`memberInfo=====>>>test`, memberInfo);
    }





    // useEffect(() => {    

    //     if(memberCode !== null) {
    //         dispatch(callGetMemberCodeSalaryAPI({
    //             memberCode: memberCode
    //         })).then((data) => {
    //             if(data){
    //                 return data;
    //             }else {
    //                 return null;
    //             }
    //         });
    //     }
    // }
    // , [memberCode]
    // );


    console.log('memberInfo ============', memberInfo);

    return (
        <main className= {salaryInsertStyle.main}>
            <div>

                <div className={salaryInsertStyle.title}>
                    <p>급여 명단 추가</p>
                </div>
 
                <div className={salaryInsertStyle.infoBtn}>
                    <button className="ml-2 mr-2">등록하기</button>
                    <button className="ml-2 mr-2" onClick={ () => { navigate(-1)}}>이전 페이지로</button>
                </div>

                <div className={salaryInsertStyle.parent}>
                    <div className= "container mt-5">
                        <div className="row">
                            
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>사원 번호</p>
                                <input className={salaryInsertStyle.myInfo} value={memberCode} onChange={(e) => setMemberCode(e.target.value)} 

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
                                        value={member.team?.teamName}
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
                                        // value={memberInfo.totalTime}
                                        readOnly
                                />
                            </div>
                        </div>
                    </div>
                    <div className="container mt-5">
                        <div className="row">
                            
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>기본급</p>
                                <input  className={salaryInsertStyle.myInfo} 
                                        value= {memberInfo.salaryList && memberInfo.salaryList.length > 0 ? memberInfo.salaryList[0].basicSalary : 0}
                                        readOnly
                                />
                            </div>
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>식대</p>
                                <input  className={salaryInsertStyle.myInfo} 
                                        value= {memberInfo.salaryList && memberInfo.salaryList.length > 0 ? memberInfo.salaryList[0].mealSalary : 0}
                                />
                            </div>
                         
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>세전 급액</p>
                                <input  className={salaryInsertStyle.myInfo} 
                                        value= {memberInfo.salaryList && memberInfo.salaryList.length > 0 ? memberInfo.salaryList[0].beforeSalary : 0}
                                        readOnly
                                />
                            </div>
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>총 공제액</p>
                                <input  className={salaryInsertStyle.myInfo} 
                                        value= {memberInfo.salaryList && memberInfo.salaryList.length > 0 ? memberInfo.salaryList[0].totalTax : 0}
                                        readOnly
                                />
                            </div>
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>세후 급액</p>
                                <input  className={salaryInsertStyle.myInfo} 
                                        value= {memberInfo.salaryList && memberInfo.salaryList.length > 0 ? memberInfo.salaryList[0].afterSalary : 0}
                                        readOnly
                                />
                            </div>
                        </div>
                    </div>
                </div>            
            </div>
        </main>
    );

    
}

export default SalaryInsert;