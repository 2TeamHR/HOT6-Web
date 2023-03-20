import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callGetMyRequireSalary } from "../../apis/SalaryAPICalls";
import { decodeJwt } from "../../utils/tokenUtils";
import MyRequireSalaryTable from "./Salary_MyRequireSalaryTable";

function MyRequireSalary() {

    const dispatch = useDispatch();
    const requireSalary = useSelector(state => state.salaryReducer);
    const token = decodeJwt(window.localStorage.getItem("accessToken"));

    console.log(`requireSalary =====`, requireSalary);
    
    useEffect(() => {

        dispatch(callGetMyRequireSalary({
            memberCode: token.sub,
        }));
    }, []
    );
    

    return (
        <>
        <div style={{margin:"1px"}}>
            <div>
                <h1 className="fs-1 mt-5">나의 급여 정정 신청 현황</h1>
            </div>
        </div>

        <div className="pt-5 pl-5">
            <MyRequireSalaryTable requireSalary={requireSalary} />
        </div>
        </>
    );
}

export default MyRequireSalary;