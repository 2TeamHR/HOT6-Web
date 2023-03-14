import mainTitleStyle from '../../resources/css/pages/mypage/main-title.module.css';
import {TsbDepartment, TsbEmployee, PayState, Term, EmployState, SearchBtn, LeaveState} from '../../components/TableSearchBox';
import tableStyle from '../../resources/css/components/tableComponent.module.css';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Pagination from '@mui/material/Pagination';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { callGetMemberAPI } from '../../apis/organizationAPICalls';

function OrganizationChart() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const members = useSelector(state => state.organizationReducer);

    useEffect(() => {
      dispatch(callGetMemberAPI());
    }, []);
  
    const [form, setForm] = useState({
      teamSearch: 0,
    });

    // 팀 검색 상태 값 처리 핸드러
    const handlePayStateChange = (value) => {
      setForm({
        teamSearch: value
      })
    }

    // 페이지네이션 처리
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
          
          <Paper elevation={3}>
            <div className={tableStyle.boxStyle}>
                <div className={tableStyle.searchBox}>
                    <TsbDepartment onChange={handlePayStateChange}/>
                    {form.teamSearch}
                    <TsbEmployee/>
                    <Term/>
                    <SearchBtn/>
                </div>
            </div>
          </Paper>
            
          <Paper elevation={3} className="mt-4 pb-5">
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
            
            <div className="d-flex justify-content-center mt-5">
              <Pagination 
                count={Math.ceil(members.length / perPage)} 
                page={currentPage} 
                onChange={handlePageChange} 
              />
            </div>
          </Paper>

        </div>
      </main>
    );
  }
  

export default OrganizationChart;