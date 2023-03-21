import Table from 'react-bootstrap/Table';

function MyRequireBasicTable({ salaryInfo }){

    const formattedBasicSalary = salaryInfo.basicSalary?.toLocaleString();
    const formattedBonusSalary = salaryInfo.bonus ? salaryInfo.bonus.bonusSalary.toLocaleString() : 0;
    const formattedMealSalary = salaryInfo.mealSalary?.toLocaleString();
    const formattedBeforeSalary = salaryInfo.beforeSalary?.toLocaleString();

    return(
    <Table striped style={{width:500}} className="mr-5">
        <thead className="mt-5">
            <tr>
            <th colSpan={2} className="text-center">급여내역(원)</th>
            
            </tr>
        </thead>
        <tbody className="text-center">
            <tr>
                <td>기본급</td>
                <td>{ formattedBasicSalary }</td>
            </tr>
            <tr>
                <td>상여금</td>
                <td>{formattedBonusSalary }</td>
            </tr>
            <tr>
                <td>식대</td>
                <td>{ formattedMealSalary }</td>
            </tr>
            <tr>
                <td>세전 총액</td>
                <td>{ formattedBeforeSalary }</td>
            </tr>
        </tbody>
    </Table>
   
    );
}

export default MyRequireBasicTable;