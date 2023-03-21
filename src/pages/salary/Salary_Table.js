import Table from 'react-bootstrap/Table';

function SalaryTable({salaryDetail :{ beforeSalary, 
    incomTax,
    healthTax,
    nationalTax,
    afterSalary }}) {


    const totalTax = incomTax + healthTax + nationalTax;
    var afterSalary = beforeSalary - totalTax;

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

export default SalaryTable;
