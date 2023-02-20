import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

const statues = [
  { label: '지급대기', value: 'N'},
  { label: '지급완료', value: 'Y'},
];


function SelectDatePiker2() {
  const [year, setYear] = useState('2023');
  const [month, setMonth] = useState('02');
  const [status, setStatus] = useState('N');
  
  const navigate = useNavigate();

  function handleYearChange(e) {
    setYear(e.target.value);
  }

  function handleMonthChange(e) {
    setMonth(e.target.value);
  }

  function handleStatusChange(e) {
    setStatus(e.target.value);
  }

  function handleClick() {


    const paymentStatus = statues.find(statu => statu.value === status);

    console.log(paymentStatus.value);
    
    if (paymentStatus.value === 'Y') {
      navigate('/allcheckY');
    } else {
      navigate('/allcheckN');
    }
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
      <label className="ml-3">
        <select value={status} onChange={handleStatusChange} style={{width:100}}>
            {statues.map((status) => (
              <option key={status.value} value={status.value}>
                {status.label}
              </option>
            ))}
        </select>
      </label>
      <button className='btn btn-primary ml-3' onClick={handleClick}>조회하기</button>
    </div>
  );
}

export default SelectDatePiker2;