import Table from 'react-bootstrap/Table';

function BasicTable({ salaryDetail: {basicSalary, bonus, mealSalary, beforeSalary }}){


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
                <td>{ basicSalary }</td>
            </tr>
            <tr>
                <td>상여금</td>
                <td>{ bonus ? bonus.bonusSalary : 0 }</td>
            </tr>
            <tr>
                <td>식대</td>
                <td>{ mealSalary }</td>
            </tr>
            <tr>
                <td>세전 총액</td>
                <td>{ beforeSalary }</td>
            </tr>
        </tbody>
    </Table>
   
    );
}

export default BasicTable;