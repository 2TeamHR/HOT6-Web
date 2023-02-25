import mainTitleStyle from '../../resources/css/pages/mypage/main-title.module.css';
import {TsbDepartment, TsbEmployee, PayState, Term, EmployState, SearchBtn, LeaveState} from '../../components/TableSearchBox';
import tableStyle from '../../resources/css/components/tableComponent.module.css';
import {EnhancedTable} from '../../components/tableComponent';
import { getOrganizationChartTableData } from '../../api/tableAPI';
// import { SelectBar } from '../../components/SelectBar';

function OrganizationRetireeChart() {


    return (
        <main className={mainTitleStyle.main}>
            <div>

                <div className={mainTitleStyle.title}>
                    <p>퇴직자 명단</p>
                </div>

                <div className={tableStyle.boxStyle}>
                    <div className={tableStyle.searchBox}>
                        <TsbDepartment/>
                        <TsbEmployee/>
                        <Term/>
                        <SearchBtn/>
                    </div>
                </div>
                <EnhancedTable tabledata={ getOrganizationChartTableData() }/>
            </div>
        </main>
    );
}

export default OrganizationRetireeChart;