import Table from 'react-bootstrap/Table';

function MyRequireAfterSalary({ salaryInfo }) {



    const totalTax = salaryInfo.incomTax + salaryInfo.healthTax + salaryInfo.nationalTax;
    var afterSalary = salaryInfo.beforeSalary - totalTax;

    const formattedAfterSalary = afterSalary?.toLocaleString();

    return (
    <Table className="mr-5" striped style={{width:"400px"}}>
        <thead>
            <tr>
            <th colSpan={2} className="text-center">실 지급액(원)</th>
            </tr>
        </thead>
        <tbody className="text-center">
            <tr>
                <td>{ formattedAfterSalary }</td>
            </tr>
          
        </tbody>
    </Table>
    );

}

export default MyRequireAfterSalary;
