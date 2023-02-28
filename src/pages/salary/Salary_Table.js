import Table from 'react-bootstrap/Table';

function SalaryTable() {

    return (
    <Table className="mr-5" striped style={{width:"400px"}}>
        <thead>
            <tr>
            <th colSpan={2} className="text-center">실 지급액(원)</th>
            </tr>
        </thead>
        <tbody className="text-center">
            <tr>
                <td>1,768,160</td>
            </tr>
          
        </tbody>
    </Table>
    );

}

export default SalaryTable;
