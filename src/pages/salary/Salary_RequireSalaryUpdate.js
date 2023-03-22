import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { callGetRequireSalaryDetailAPI, callPutRequireSalary } from '../../apis/SalaryAPICalls';
import salaryInsertStyle from '../../resources/css/pages/salary/salary-insert.module.css';

function RequireSalaryUpdate() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { salaryCode } = useParams();
    const salaryInfo = useSelector(state => state.salaryReducer);
    const [basicSalary, setBasicSalary] = useState();

    const [beforeSalary, setBeforeSalary] = useState(0);
    const [incomTax, setIncomTax] = useState(0);
    const [healthTax, setHealthTax] = useState(0);
    const [nationalTax, setNationalTax] = useState(0);
    const [afterSalary, setAfterSalary] = useState(0);
    const [totalTax, setTotalTax] = useState(0);


    const [salaryDetail, setSalaryDetail] = useState({
        
        basicSalary: salaryInfo.basicSalary || '',
        mealSalary: salaryInfo.mealSalary || '',
        beforeSalary: salaryInfo.beforeSalary || '',
        incomTax: salaryInfo.incomTax || '',
        healthTax: salaryInfo.healthTax || '',
        nationalTax: salaryInfo.nationalTax || '',
        totalTax: salaryInfo.totalTax || '',
        afterSalary: salaryInfo.afterSalary || '',

    });

    const { member, salary } = salaryInfo;

    
    useEffect(() => {
        dispatch(callGetRequireSalaryDetailAPI({ salaryCode }))
            
            setSalaryDetail(salaryInfo);

            setBeforeSalary(basicSalary + salaryInfo.mealSalary)
            setIncomTax(beforeSalary * 0.066);
            setHealthTax(beforeSalary * 0.0306);
            setNationalTax(beforeSalary * 0.081);
            setTotalTax(incomTax + healthTax + nationalTax);
            setAfterSalary(beforeSalary - totalTax);
    }, [basicSalary]
    );

    const changeHandler = (e) => {

        setBasicSalary(e.target.value);
    }
    
    const handleSubmit = () => {
        dispatch(callPutRequireSalary(salaryInfo));
    };


    return (
        <main className= {salaryInsertStyle.main}>
            <div>

                <div className={salaryInsertStyle.title}>
                    <p>급여 수정</p>
                </div>
 
                <form>
                <div className={salaryInsertStyle.infoBtn}>
                    <button className="ml-2 mr-2" onClick={handleSubmit}>수정하기</button>
                    <button className="ml-2 mr-2" onClick={ () => { navigate('/salary/require/list')}}>이전 페이지로</button>
                </div>

                <div className={salaryInsertStyle.parent}>
                    <div className= "container mt-5">
                        <div className="row">
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>사원 번호</p>
                                <input className={salaryInsertStyle.myInfo} value={salaryInfo.member?.memberCode} readOnly/>                            
                                </div>
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>이름</p>
                                <input  className={salaryInsertStyle.myInfo} 
                                        value={salaryInfo.member?.memberName.toLocaleString()}
                                        readOnly
                                />
                            </div>
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>조직</p>
                                <input  className={salaryInsertStyle.myInfo} 
                                        value={salaryInfo.member?.teamName.toLocaleString()}
                                        readOnly
                                />
                            </div>
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>직급</p>
                                <input  className={salaryInsertStyle.myInfo} 
                                        value={salaryInfo.member?.rankName.toLocaleString()}
                                        readOnly
                                />
                            </div>
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>기본급</p>
                                <input  className={salaryInsertStyle.myInfo} 
                                        value={salaryInfo.salary?.basicSalary}
                                        onChange={changeHandler}
                                        
                                        
                                />
                            </div>
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>식대</p>
                                <input  className={salaryInsertStyle.myInfo} 
                                        value= {salaryInfo.salary?.mealSalary}
                                        readOnly
                                />
                            </div>
                        </div>
                    </div>
                    <div className="container mt-5">
                        <div className="row">
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>세전 급액</p>
                                <input  className={salaryInsertStyle.myInfo} 
                                        value= {salaryInfo.salary?.beforeSalary}
                                        readOnly
                                />
                            </div>
                            
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>소득세</p>
                                <input  className={salaryInsertStyle.myInfo} 
                                        value= {salaryInfo.salary?.incomTax}
                                        readOnly
                                />
                            </div>
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>건강보험세</p>
                                <input  className={salaryInsertStyle.myInfo} 
                                        value= {salaryInfo.salary?.healthTax.toLocaleString()}
                                        readOnly
                                />
                            </div>
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>국민연금세</p>
                                <input  className={salaryInsertStyle.myInfo} 
                                        value= {salaryInfo.salary?.nationalTax.toLocaleString()}
                                        readOnly
                                />
                            </div>
                           
                         
                            
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>총 공제액</p>
                                <input  className={salaryInsertStyle.myInfo.toLocaleString()} 
                                        value= {(salaryInfo.salary?.incomTax + salaryInfo.salary?.healthTax + salaryInfo.salary?.nationalTax).toLocaleString()}
                                        readOnly
                                />
                            </div>
                            <div className="mb-3">
                                <p className={salaryInsertStyle.infoHead}>세후 급액</p>
                                <input  className={salaryInsertStyle.myInfo} 
                                        value= {salaryInfo.salary?.afterSalary.toLocaleString()}
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

export default RequireSalaryUpdate;