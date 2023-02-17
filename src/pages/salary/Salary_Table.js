import Table from 'react-bootstrap/Table';

function SalaryTable() {

    return (
    <Table className="mr-5" striped style={{width:"400px"}}>
        <thead>
            <tr>
            <th colSpan={2} className="text-center">근태내역(시간)</th>
            </tr>
        </thead>
        <tbody className="text-center">
            <tr>
                <td>기본근로시간</td>
                <td>180</td>
            </tr>
            <tr>
                <td>연장근무시간</td>
                <td>20</td>
            </tr>
          
        </tbody>
    </Table>
    );

}

export default SalaryTable;
