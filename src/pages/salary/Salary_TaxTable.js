import Table from 'react-bootstrap/Table';

function TaxTable({tax : {incomTax, healthTax, nationalTax }}){

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
                <td>{ incomTax }</td>
            </tr>
            <tr>
                <td>건강보험</td>
                <td>{ healthTax }</td>
            </tr>
            <tr>
                <td>국민연금</td>
                <td>{ nationalTax }</td>
            </tr>
            <tr>
                <td>총 공제액</td>
                <td>381,840</td>
            </tr>
        </tbody>
    </Table>
   
    );
}

export default TaxTable;