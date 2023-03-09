import mainTitleStyle from '../../resources/css/pages/mypage/main-title.module.css';
import {TsbDepartment, TsbEmployee, PayState, Term, EmployState, SearchBtn, LeaveState} from '../../components/TableSearchBox';
import tableStyle from '../../resources/css/components/tableComponent.module.css';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Pagination from '@mui/material/Pagination';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

import { callGetMemberAPI } from '../../apis/organizationAPICalls';

function OrganizationChart() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const members = useSelector(state => state.organizationReducer);

    console.log('member', members);

    useEffect(() => {
      dispatch(callGetMemberAPI());
    }, []);
  
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 10;
  
    const handlePageChange = (event, value) => {
      setCurrentPage(value);
    };
    
    if (!members) {
        return null;
      }

    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
  
    return (
      <main className={mainTitleStyle.main}>
        <div>
          <div className={mainTitleStyle.title}>
            <p>조직도</p>
          </div>
  
          <div className={tableStyle.boxStyle}>
            <div className={tableStyle.searchBox}>
              <TsbDepartment />
              <TsbEmployee />
              <Term />
              <SearchBtn />
            </div>
  
            <Table>
              <thead>
                <tr className="text-center">
                  <th>No</th>
                  <th>팀</th>
                  <th>직급</th>
                  <th>성명</th>
                  <th>내선번호</th>
                  <th>메일</th>
                </tr>
              </thead>
              <tbody>
                {members && members.slice(startIndex, endIndex).map((member, index) => (
                  <tr key={member.memberCode} className="text-center">
                    <td className='align-middle'>{startIndex + index + 1}</td>
                    <td className='align-middle'>{member.teamName}</td>
                    <td className='align-middle'>{member.rankName}</td>
                    <td className='align-middle'>{member.memberName}</td>
                    <td className='align-middle'>{member.inlinePhone}</td>
                    <td className='align-middle'>{member.memberEmail}</td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <Pagination 
                className="mr-auto"
                count={Math.ceil(members.length / perPage)} 
                page={currentPage} 
                onChange={handlePageChange} />
          </div>
        </div>
      </main>
    );
  }
  

export default OrganizationChart;