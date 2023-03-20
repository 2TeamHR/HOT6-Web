// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { callGetBonusSalaryAPI } from '../../apis/SalaryAPICalls';
// import salaryStyle from '../../resources/css/pages/salary/salary.module.css';
// import RequireSalaryListTable from './Salary_RequireSalaryListTable';

// function RequireSalaryList(){
    
//     const dispatch = useDispatch();
    
//     // useEffect(
//     //     () => {
//     //         dispatch(callGetRequireSalaryAPI({

//     //         }));
//     //     }
//     //     , []
//     // );
 
//     return (
//         <>
//         <div className={`ml-5 ${salaryStyle.checkTitle}`}>
//             <div>
//                 <h1 className="fs-1 mt-5">이번 달 급여 정정 신청 현황</h1>
//             </div>
//         </div>

//         <div className="pt-5 pl-5">
//             <RequireSalaryListTable />
//         </div>
//         </>
//     );
// }

// export default RequireSalaryList;