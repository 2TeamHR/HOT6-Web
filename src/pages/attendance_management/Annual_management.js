
import mainTitleStyle from '../../resources/css/pages/mypage/main-title.module.css';
import tableStyle from '../../resources/css/components/tableComponent.module.css';
import {TsbDepartment, TsbEmployee, PayState, Term, SearchBtn, LeaveState} from '../../components/TableSearchBox';
import {EnhancedTable} from '../../components/tableComponent';
import { getAnnualManagementTableData } from '../../api/tableAPI';

function AnnualManagement(){

    return(
        <main className={mainTitleStyle.main}>
            <div>
                <div className={mainTitleStyle.title}>
                    <p>연차 관리</p>
                </div>

                <div className={tableStyle.boxStyle}>
                    <div className={tableStyle.searchBox} style={{display:"flex"}}>
                        <TsbDepartment/>
                        <TsbEmployee/>
                        <PayState/>
                        <Term/>
                        <LeaveState/>
                        <SearchBtn/>
                    </div>
                </div>

                <EnhancedTable tabledata={ getAnnualManagementTableData() }/>
                
            </div>
        </main>
    );
}

export default AnnualManagement;