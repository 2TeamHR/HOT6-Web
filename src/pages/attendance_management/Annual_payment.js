import mainTitleStyle from '../../resources/css/pages/mypage/main-title.module.css';
import tableStyle from '../../resources/css/components/tableComponent.module.css';
import {TsbDepartment, TsbEmployee, Term, SearchBtn} from '../../components/TableSearchBox';
import Paper from '@mui/material/Paper';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


function AnnualPayment(){

    return(
        <main className={mainTitleStyle.main}>
            <div>

                <div className={mainTitleStyle.title}>
                    <p>휴가 결제 완료 리스트</p>
                </div>

                <Paper elevation={3}>
                    <div className={tableStyle.boxStyle}>
                        <div className={tableStyle.searchBox}>
                            <TsbDepartment/>
                            <TsbEmployee/>
                            <Term/>
                            <SearchBtn/>
                        </div>
                    </div>
                </Paper>

                <Paper elevation={3}>
                    <Table className='mt-5'>
                        <thead>
                            <tr className="text-center">
                                <th>No</th>
                                <th>팀</th>
                                <th>직급</th>
                                <th>성명</th>
                                <th>휴가구분</th>
                                <th>결제완료날짜</th>
                                <th>증빙서류</th>
                                <th>자세히보기</th>
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

export default AnnualPayment;