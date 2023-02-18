import Table from 'react-bootstrap/Table';

function SalaryTable2(){

    return(
    <Table striped style={{width:500}}>
        <thead className="mt-5">
            <tr>
            <th colSpan={2} className="text-center">급여내역(원)</th>
            
            </tr>
        </thead>
        <tbody className="text-center">
            <tr>
                <td>기본급</td>
                <td>1,800,000</td>
            </tr>
            <tr>
                <td>상여금</td>
                <td>50,000</td>
            </tr>
            <tr>
                <td>공제액</td>
                <td>185,000</td>
            </tr>
            <tr>
                <td>실지급액</td>
                <td>1,665,000</td>
            </tr>
        </tbody>
    </Table>
   
    );
}

export default SalaryTable2;