import mainTitleStyle from '../../resources/css/pages/mypage/main-title.module.css';
import tableStyle from '../../resources/css/components/tableComponent.module.css';
import {TsbDepartment, TsbEmployee, PayState, Term, EmployState, SearchBtn} from '../../components/TableSearchBox';
import {EnhancedTable} from '../../components/tableComponent';
import { getAnnualPaymentTableData } from '../../api/tableAPI';

function AnnualPayment(){

    return(
        <main className={mainTitleStyle.main}>
            <div>

                <div className={mainTitleStyle.title}>
                    <p>연차 결제 리스트</p>
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
                <EnhancedTable tabledata={ getAnnualPaymentTableData() }/>
            </div>
        </main>
    );
}

export default AnnualPayment;