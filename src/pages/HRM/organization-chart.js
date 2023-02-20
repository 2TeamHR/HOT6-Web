import mainTitleStyle from '../../resources/css/pages/mypage/main-title.module.css';
import Pagination from '../../components/Pagination';
import { SelectBar } from '../../components/SelectBar';

function OrganizationChart() {


    return (
        <main className={mainTitleStyle.main}>
            <div>

                <div className={mainTitleStyle.title}>
                    <p>조직도</p>
                </div>

                <div className="mt-5">
                    <table className="table">
                        <thead>
                        <tr className="text-center">
                            <th scope="col">부서</th>
                            <th scope="col">팀</th>
                            <th scope="col">이름</th>
                            <th scope="col">직급</th>
                            <th scope="col">내선번호</th>
                            <th scope="col">메일</th>
                        </tr>
                        </thead>
                        <tbody className="text-center">
                        <tr>
                            <td>경영관리부</td>
                            <td>인사팀</td>
                            <td>대리</td>
                            <td>홍길동</td>
                            <td>712</td>
                            <td>asd1234@5do.com</td>
                        </tr>
                        <tr>
                            <td>경영관리부</td>
                            <td>인사팀</td>
                            <td>대리</td>
                            <td>홍길동</td>
                            <td>712</td>
                            <td>asd1234@5do.com</td>
                        </tr>
                        <tr>
                            <td>경영관리부</td>
                            <td>인사팀</td>
                            <td>대리</td>
                            <td>홍길동</td>
                            <td>712</td>
                            <td>asd1234@5do.com</td>
                        </tr>
                        <tr>
                            <td>경영관리부</td>
                            <td>인사팀</td>
                            <td>대리</td>
                            <td>홍길동</td>
                            <td>712</td>
                            <td>asd1234@5do.com</td>
                        </tr>
                        <tr>
                            <td>경영관리부</td>
                            <td>인사팀</td>
                            <td>대리</td>
                            <td>홍길동</td>
                            <td>712</td>
                            <td>asd1234@5do.com</td>
                        </tr>
                        </tbody>
                    </table>

                    <Pagination/>

                    <SelectBar/>

                    <div className="d-flex m-auto justify-content-center">
                        <div className="d-flex">
                            <select className="">
                                <option>퇴직여부</option>
                                <option>재직중</option>
                                <option>퇴직</option>
                            </select>
                        </div>
                       
                    </div>
                    
                </div>
            </div>
        </main>
    );
}

export default OrganizationChart;