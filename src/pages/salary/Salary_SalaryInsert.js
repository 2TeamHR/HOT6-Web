import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { callGetMemberNameSalaryAPI } from '../../apis/SalaryAPICalls';
import { callGetMemberAPI } from '../../apis/MemberAPICalls';
import salaryInsertStyle from '../../resources/css/pages/salary/salary-insert.module.css';

function SalaryInsert() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [memberName, setMemberName] = useState('');
    const [memberInfo, setMemberInfo] = useState({

        memberCode: '',
        team: {
            teamName: ''
        },
        rank: {
            rankName: ''
        },
        name: '',
        hourlyMoney: '',
        totalTime: '',
        basicSalary: '',
        mealSalary: '',
        bonusSalary: '',
        beforeSalary: '',
        totalTax: '',
        afterSalary: '',
    });


    useEffect(() => {    

        if(memberName !== 'null') {
            dispatch(callGetMemberNameSalaryAPI({
                memberName: memberName
            })).then((data) => {
              setMemberName(data);
            });          
        }
    }
    ,[memberName]
    );

    // useEffect(() => {

    //     if(memberCode !== 'null') {
    //         dispatch(callGetMemberAPI({
    //             // memberCo
    //         })).then((data) => {
    //             getmember
    //         })
    //     })
    // }



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
                                <p className={salaryInsertStyle.infoHead}>이름</p>
                                <input className={salaryInsertStyle.myInfo} 
                                />
                               
                            </div>
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>사원 번호</p>
                                <input className={salaryInsertStyle.myInfo} 
                                        readOnly
                                />
                            </div>
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>조직</p>
                                <input className={salaryInsertStyle.myInfo} 
                                        readOnly
                                />
                            </div>
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>직급</p>
                                <input className={salaryInsertStyle.myInfo} 
                                        readOnly
                                />
                            </div>
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>시급</p>
                                <input className={salaryInsertStyle.myInfo} 
                                        readOnly
                                />
                            </div>
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>총근무시간</p>
                                <input className={salaryInsertStyle.myInfo} 
                                        readOnly
                                />
                            </div>
                        </div>
                    </div>
                    <div className="container mt-5">
                        <div className="row">
                            
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>기본급</p>
                                <input className={salaryInsertStyle.myInfo} 
                                        readOnly
                                />
                            </div>
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>식대</p>
                                <input className={salaryInsertStyle.myInfo} 
                                />
                            </div>
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>상여금</p>
                                <input className={salaryInsertStyle.myInfo} 
                                        readOnly
                                />
                            </div>
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>세전 급액</p>
                                <input className={salaryInsertStyle.myInfo} 
                                        readOnly
                                />
                            </div>
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>총 공제액</p>
                                <input className={salaryInsertStyle.myInfo} 
                                        readOnly
                                />
                            </div>
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>세후 급액</p>
                                <input className={salaryInsertStyle.myInfo} 
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