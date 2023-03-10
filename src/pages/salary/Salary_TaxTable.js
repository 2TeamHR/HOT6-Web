import Table from 'react-bootstrap/Table';

function TaxTable({salaryDetail : {incomTax, healthTax, nationalTax }}){

    console.log(incomTax);
    const totalTax = incomTax + healthTax + nationalTax;

    return(
    <Table striped style={{width:500}}>
        <thead className="mt-5">
            <tr>
            <th colSpan={2} className="text-center">공제내역(원)</th>
            
            </tr>
        </thead>
        <tbody className="text-center">
            <tr>
                <td>소득세</td>
                <td>{incomTax == null ? '' : { incomTax }}</td>
            </tr>
            <tr>
                <td>건강보험</td>
                <td>{healthTax == null ? '' : { healthTax }}</td>
            </tr>
            <tr>
                <td>국민연금</td>
                <td>{healthTax == null ? '' : { nationalTax }}</td>
            </tr>
            <tr>
                <td>총 공제액</td>
                <td>{totalTax == null ? '' : { totalTax }}</td>
            </tr>
        </tbody>
    </Table>
   
    );
}

export default TaxTable;