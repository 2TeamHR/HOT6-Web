import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import salaryInsertStyle from '../../resources/css/pages/salary/salary-insert.module.css';

function SalaryInsert() {

    const navigate = useNavigate();
    const [recipient, setRecipient] = useState([]);
    const [memberName, setMemberName] = useState('');
    const [memberInfo, setMemberInfo] = useState({
        memberCode: '',
        team: '',
        rank: '',
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


    useEffect(() =>{

        if(memberName) { 
            axios.get(`http://localhost:8888/api/v1/salary/check/insert/${memberName}`)
            .then(response => {
                const data = response.data;
                setMemberInfo({
                    memberCode: data.memberCode,
                    team: data.team,
                    rank: data.rank,
                    name: data.name,
                    hourlyMoney: data.hourlyMoney,
                    totalTime: data.totalTime,
                    basicSalary: data.basicSalary,
                    mealSalary: data.mealSalary,
                    bonusSalary: data.bonusSalary,
                    beforeSalary: data.beforeSalary,
                    totalTax: data.totalTax,
                    afterSalary: data.afterSalary,
                });
            })
            .catch(error => {
                console.log(error);
                setMemberInfo({
                    memberCode: '',
                    team: '',
                    rank: '',
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
            });
        }
       
    }, [memberName]);


    useEffect(() =>{
        if(memberName) {
            axios.get(`http://localhost:8888/api/v1/salary/check/insert/${memberName}`)
            .then(response => {
            const membersData = response.data.data.map(member =>({
                memberCode:member.memberCode,
                rank: member.rankName,
                name:member.memberName, 
                hourlyMoney:member.hourlyMoney, 
                totalTime:member.totalTime, 
                basicSalary:member.basicSalary, 
                mealSalary:member.mealSalary, 
                bonusSalary:member.bonusSalary, 
                beforeSalary:member.beforeSalary, 
                totalTax:member.totalTax, 
                afterSalary:member.afterSalary, 
                }));   
            setMemberInfo(membersData);
            }).catch(error =>console.log(error))
            }    
        }, [memberName]);


    const handlerSearch = (event) => {
        event.preventDefault(); //기본 동작을 막는다.
        const input = document.getElementById('searchInput').value;
        setMemberName(input || '');
    }

    const handleSelectRecipient = (recipient) => {
        setRecipient([...recipient, recipient]);
        setMemberInfo([]);
        document.getElementById('searchInput').value= '';
    }


    const handleRemoveRecipient = (recipient) => {
        setRecipient(recipient.filter( r=> r.id !== recipient.id));
    }

    const complete =(recipient) => {
            const name = recipient
            if(name == name){
                document.getElementById('searchInput').value = name;
                setMemberName(name);
            } else {
                document.getElementById('searchInput').value ='';
                setMemberName('');
            }
            setRecipient([]);
    }

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
                                        value={memberInfo.name}
                                />
                                {recipient.map((recipient, index)=> (
                                    <div key={index} className={salaryInsertStyle.selectName}>
                                        <b>{recipient.name} {recipient.team} {recipient.rank}</b>
                                        <button onClick={()=>handleRemoveRecipient(recipient)}>삭제</button>
                                        <button onClick={() =>complete(recipient)}>완료</button>
                                    </div>
                                ))}
                               
                            </div>
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>사원 번호</p>
                                <input className={salaryInsertStyle.myInfo} 
                                        value={memberInfo.memberCode}
                                        readOnly
                                />
                            </div>
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>조직</p>
                                <input className={salaryInsertStyle.myInfo} 
                                        value={memberInfo.team}
                                        readOnly
                                />
                            </div>
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>직급</p>
                                <input className={salaryInsertStyle.myInfo} 
                                        value={memberInfo.rank}
                                        readOnly
                                />
                            </div>
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>시급</p>
                                <input className={salaryInsertStyle.myInfo} 
                                        value={memberInfo.hourlyMoney}
                                        readOnly
                                />
                            </div>
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>총근무시간</p>
                                <input className={salaryInsertStyle.myInfo} 
                                        value={memberInfo.totalTime}
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
                                        value={memberInfo.basicSalary}
                                        readOnly
                                />
                            </div>
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>식대</p>
                                <input className={salaryInsertStyle.myInfo} 
                                        value={memberInfo.mealSalary}
                                />
                            </div>
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>상여금</p>
                                <input className={salaryInsertStyle.myInfo} 
                                        value={memberInfo.bonusSalary}
                                        readOnly
                                />
                            </div>
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>세전 급액</p>
                                <input className={salaryInsertStyle.myInfo} 
                                        value={memberInfo.beforeSalary}
                                        readOnly
                                />
                            </div>
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>총 공제액</p>
                                <input className={salaryInsertStyle.myInfo} 
                                        value={memberInfo.totalTax}
                                        readOnly
                                />
                            </div>
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>세후 급액</p>
                                <input className={salaryInsertStyle.myInfo} 
                                        value={memberInfo.afterSalary}
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