import React, { useEffect, useState } from 'react';
import { callGetMySalaryAPI } from '../../apis/SalaryAPICalls';
import { useDispatch, useSelector } from 'react-redux';
import { decodeJwt } from '../../utils/tokenUtils';

const years = Array.from({length: (new Date().getFullYear() - 2007)}, (_, i) => 2008 + i);
const months = [
  { label: '1', value: '01' },
  { label: '2', value: '02' },
  { label: '3', value: '03' },
  { label: '4', value: '04' },
  { label: '5', value: '05' },
  { label: '6', value: '06' },
  { label: '7', value: '07' },
  { label: '8', value: '08' },
  { label: '9', value: '09' },
  { label: '10', value: '10' },
  { label: '11', value: '11' },
  { label: '12', value: '12' },
];


function SelectDatePiker() {

  const dispatch = useDispatch();
  const token = decodeJwt(window.localStorage.getItem("accessToken"));
  const [year, setYear] = useState('2023');
  const [month, setMonth] = useState('02');
  
  useEffect(
    () => {    
        console.log('token', token);
        if(token !== null) {
            dispatch(callGetMySalaryAPI({
                memberCode: token.sub,
                year: year,
                month: month
            }));          
        }
    }
    ,[year, month]
  );

//   function handleSearch() {
//     alert(year);
//     alert(month);
//     // setYear(parseInt(year, 10));
//     // setMonth(parseInt(month, 10));

//  }

  function handleYearChange(e) {
    setYear(e.target.value);
  }

  function handleMonthChange(e) {
    setMonth(e.target.value);
  }

  

  return (
    <div>
    <form>
      <label className='mt-5 pl-3'>
        
        <select value={year} onChange={handleYearChange}
        style={{width:70}}>
          <option value=""></option>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
        <span className="ml-2">년</span>
      </label>
      <label className="ml-3">
        <select value={month} onChange={handleMonthChange}
        style={{width:50}}>
          <option value=""></option>
          {months.map((m) => (
            <option key={m.value} value={m.value}>
              {m.label}
            </option>
          ))}
        </select>
        <span className="ml-2">월</span>
      </label>
      <button className='btn btn-primary ml-3'>조회하기</button>
    </form>
    </div>
  );
}

export default SelectDatePiker;