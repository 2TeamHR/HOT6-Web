import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { callGetBonusSalaryAPI } from '../../apis/SalaryAPICalls';

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



function BonusDatePicker() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [year, setYear] = useState('2023');
  const [month, setMonth] = useState('02');
  const [bonusData, setBonusData] = useState(null);
  const [changeDate, setChangeDate] = useState('N');

  useEffect(() => {
    if(changeDate !== null) {
      dispatch(callGetBonusSalaryAPI({
        year: year,
        month: month
      })).then((data) => {
        setBonusData(data);
      });
    }
  }
  ,[changeDate]
  );

  function handleSearch(e) {
    e.preventDefault();
    setChangeDate("Y");
    if(changeDate !== null) {
    dispatch(callGetBonusSalaryAPI({
            year: year,
            month: month
    })).then((data) => {
        setBonusData(data);
    });          
    }
}

  function handleYearChange(e) {
    setYear(e.target.value);
  }

  function handleMonthChange(e) {
    setMonth(e.target.value);
  }


  function insertHandler() {

    navigate("/salary/bonus/insert")
  }

  return (
    <div>
      <label className='mt-5 pl-3'>
        
        <select value={year} onChange={handleYearChange} style={{width:70}}>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
        <span className="ml-2">년</span>
      </label>
      <label className="ml-3">
        <select value={month} onChange={handleMonthChange} style={{width:50}}>
          {months.map((m) => (
            <option key={m.value} value={m.value}>
              {m.label}
            </option>
          ))}
        </select>
        <span className="ml-2">월</span>
      </label>
      <button className='btn btn-primary ml-3' onClick={handleSearch}>조회하기</button>
      <button className='btn btn-primary ml-3' onClick={insertHandler}>명단 등록하기</button>
    </div>
  );
}

export default BonusDatePicker;