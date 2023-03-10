import tableStyle from '../../resources/css/components/tableComponent.module.css';
import mainTitleStyle from '../../resources/css/pages/mypage/main-title.module.css';
import {TsbDepartment, TsbEmployee, PayState, Term, EmployState, SearchBtn} from '../../components/TableSearchBox';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Paper from '@mui/material/Paper';

function  MypageAttendanceHistory () {


    return (
        <main className={mainTitleStyle.main}>
            <div>

                <div className={mainTitleStyle.title}>
                    <p>근태 이력</p>
                </div>

                <div className={tableStyle.boxStyle}>
                    <div className={tableStyle.searchBox}>
                        <TsbDepartment/>
                        <TsbEmployee/>
                        <PayState/>
                        <SearchBtn/>
                    </div>
                    <div className={tableStyle.searchBox}>
                        <Term/>
                        <EmployState/>
                    </div>
                </div>
                <Paper elevation={3} className="mt-5">
                    <Table>
                        <thead>
                            <tr className="text-center">
                                <th>No</th>
                                <th>일자</th>
                                <th>근태유형</th>
                                <th>출근시간</th>
                                <th>퇴근시간</th>
                                <th>총근무시간</th>
                                <th>사유</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {leave.map((category, index) => (
                                <tr key={category.leaveCategoryCode} className="text-center">
                                    <td className='align-middle'>{index + 1}</td>
                                    <td className='align-middle'>{category.leaveCategoryName}</td>
                                    <td className='align-middle'>{category.leaveCategoryDateCount}</td>
                                    <td className='align-middle'>{category.leavePayState === 8 ? '유급' : '무급'}</td>
                                    <td className='align-middle'>
                                        <Button className={asmStyle.deleteBtn} onClick={() => onDeleteHandler(category.leaveCategoryCode)}>
                                            삭제
                                        </Button>
                                    </td>
                                </tr>
                            ))} */}
                        </tbody>
                    </Table>
                </Paper>
            </div>
        </main>
    );
}

export default MypageAttendanceHistory;