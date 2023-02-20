import mainTitleStyle from '../../resources/css/pages/mypage/main-title.module.css';
import {TsbDepartment, TsbEmployee, PayState, Term, EmployState, SearchBtn, LeaveState} from '../../components/TableSearchBox';
import tableStyle from '../../resources/css/components/tableComponent.module.css';
import {EnhancedTable} from '../../components/tableComponent';
import { getAnnualHistoryTableData } from '../../api/tableAPI';

function annualHistory(props) {


    return(
        <main className={mainTitleStyle.main}>
            <div className="main">

                <div className={mainTitleStyle.title}>
                    <p>연차 내역</p>
                </div>

                <div className={tableStyle.boxStyle}>
                    <div className={tableStyle.searchBox}>
                        <TsbDepartment/>
                        <TsbEmployee/>
                        <PayState/>
                        <LeaveState/>
                        <SearchBtn/>
                    </div>
                    <div className={tableStyle.searchBox}>
                        <Term/>
                        <EmployState/>
                    </div>
                </div>
                <EnhancedTable tabledata={ getAnnualHistoryTableData() }/>
            </div>
        </main>
    );
}

export default annualHistory;