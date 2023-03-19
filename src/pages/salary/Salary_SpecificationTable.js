import { Table } from "react-bootstrap";
import salarytableStyle from "../../resources/css/pages/salary/salaryTable.module.css"

function SpecificationTable({salaryDetail}) {

    const totalTax = salaryDetail.incomTax + salaryDetail.healthTax + salaryDetail.nationalTax;
    const afterSalary = salaryDetail.beforeSalary - totalTax;

    // const fotmat

  return (
    <>
      <div className={`${salarytableStyle.salaryModal }` }>
        <Table striped style={{ width: 500 }} className={`mr-5 ${salarytableStyle.leftTable}`}>
          <thead className="mt-1">
            <tr>
              <th colSpan={2} className="text-center">
                급여내역(원)
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td>기본급</td>
              <td>{salaryDetail.basicSalary.toLocaleString()}</td>
            </tr>
            <tr>
              <td>상여금</td>
              <td>{salaryDetail.bonus ? salaryDetail.bonus.bonusSalary.toLocaleString() : 0}</td>
            </tr>
            <tr>
              <td>식대</td>
              <td>{salaryDetail.mealSalary.toLocaleString()}</td>
            </tr>
            <tr>
              <td>연장 수당</td>
              <td>0</td>
            </tr>
            <tr>
              <td>세전 총액</td>
              <td>{salaryDetail.beforeSalary.toLocaleString()}</td>
            </tr>
          </tbody>
        </Table>
        <Table striped style={{ width: 500 }} className={`ml-5 ${salarytableStyle.rightTable}`}>
          <thead className="mt-5">
            <tr>
              <th colSpan={2} className="text-center">
                공제내역(원)
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td>소득세</td>
              <td>{ salaryDetail.incomTax.toLocaleString() }</td>
            </tr>
            <tr>
              <td>건강보험</td>
              <td>{ salaryDetail.healthTax.toLocaleString() }</td>
            </tr>
            <tr>
              <td>국민연금</td>
              <td>{ salaryDetail.nationalTax.toLocaleString() }</td>
            </tr>
            <tr>
              <td>총 공제액</td>
              <td>{ totalTax.toLocaleString() }</td>
            </tr>
            <tr>
              <td>실 수령액</td>
              <td>{ afterSalary.toLocaleString() }</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default SpecificationTable;
