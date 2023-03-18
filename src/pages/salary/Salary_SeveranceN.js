import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import salaryStyle from "../../resources/css/pages/salary/salary.module.css";
import SalarySeveranceTableN from "./SalarySeveranceTableN";
import SeveraceDatePiker from "./Salary_SeveranceDatePiker";
import { callGetSeverancePaymentAPI } from '../../apis/SalaryAPICalls';

function SeveranceN() {

  const dispatch = useDispatch();
  const member = useSelector(state => state.salaryReducer);

    let memberInfo = '';
    console.log('memberInfo ============', memberInfo);

    useEffect(
        () => {
            dispatch(callGetSeverancePaymentAPI({

            }));
        }
        , []
    );

  return (
    <>
      <div className={`ml-5 ${salaryStyle.checkTitle}`}>
        <div>
          <h1 className="fs-1 mt-5">퇴직금 지급 현황</h1>
        </div>
        <div className={salaryStyle.selectDate}>
          <SeveraceDatePiker />
        </div>
      </div>

      <div className="pt-5 pl-5">
        <SalarySeveranceTableN />
      </div>
    </>
  );
}

export default SeveranceN;
