import Table from 'react-bootstrap/Table';

function TaxTable({salaryDetail : {incomTax, healthTax, nationalTax }}){

    const formattedIncomTax = incomTax.toLocaleString();
    const formattedHealthTax = healthTax.toLocaleString();
    const formattedNationalTax = nationalTax.toLocaleString();
    const totalTax = incomTax + healthTax + nationalTax;
    const formattedTotalTax = totalTax.toLocaleString();

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
                <td>{ formattedIncomTax }</td>
            </tr>
            <tr>
                <td>건강보험</td>
                <td>{ formattedHealthTax }</td>
            </tr>
            <tr>
                <td>국민연금</td>
                <td>{ formattedNationalTax }</td>
            </tr>
            <tr>
                <td>총 공제액</td>
                <td>{ formattedTotalTax }</td>
            </tr>
        </tbody>
    </Table>
   
    );
}

export default TaxTable;