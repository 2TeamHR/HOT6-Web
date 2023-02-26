import mainTitleStyle from '../../resources/css/pages/mypage/main-title.module.css';
import tableStyle from '../../resources/css/components/tableComponent.module.css';
import {TsbDepartment, TsbEmployee, Term, SearchBtn} from '../../components/TableSearchBox';
import {CollapsibleTable} from '../../components/CollapsibleTable';


function AnnualPayment(){

    return(
        <main className={mainTitleStyle.main}>
            <div>

                <div className={mainTitleStyle.title}>
                    <p>휴가 결제 완료 리스트</p>
                </div>

                <div className={tableStyle.boxStyle}>
                    <div className={tableStyle.searchBox}>
                        <TsbDepartment/>
                        <TsbEmployee/>
                        <Term/>
                        <SearchBtn/>
                    </div>
                </div>
                <CollapsibleTable className="mt-5"/>
            </div>
        </main>
    );
}

export default AnnualPayment;