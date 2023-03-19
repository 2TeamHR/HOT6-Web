import { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { callGetPagingSalaryAPI } from "../../apis/SalaryAPICalls";

function CheckNTable({ year, month, paymentsYn, currentPage, itemsPerPage, salaryData }) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [selectedSalaryCode, setSelectedSalaryCode] = useState("");

  const salaryList = useSelector((state) => state.salaryReducer);
  const member = useSelector((state) => state.salaryReducer);
  const [memberInfo, setMemberInfo] = useState([]);
  const [selectedData, setSelectedData] = useState([]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  function handleButtonClick(memberDetail) {
    setMemberInfo(memberDetail);
    setShowModal(true);
    setSelectedSalaryCode(memberDetail.salaryCode);
  }

  useEffect(() => {
    setSelectedData(salaryList.data?.content || []);
  }, [salaryList.data]);

  function handleCloseModal() {
    setMemberInfo({});
    setShowModal(false);
  }

  let memberList = "";

  if (memberList !== undefined) {
    memberList = member;
  } else {
    memberList.content = {
      team: {
        teamName: "",
      },
      rank: {
        rankName: "",
      },
      memberName: "",
      salary: {
        afterSalary: 0,
        paymentsYn: "",
      },
      salaryCode: "",
    };
  }

  console.log("memberList====> ", memberList);

  return (
    <>
      <div className="container-fluid">
        <div className="table-area">
          <table className="table table-hover">
            <thead>
              <tr style={{ backgroundColor: "#DDDDDD" }}>
                <th>구분</th>
                <th>조직</th>
                <th>직급</th>
                <th>이름</th>
                <th>세후 지급액</th>
                <th>지급여부</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {memberList.content.map((member) => (
                <tr style={{ cursor: "pointer" }} key={member.salaryCode}>
                  <td>{1}</td>
                  <td>{member.team?.teamName}</td>
                  <td>{member.rank?.rankName}</td>
                  <td>{member.memberName}</td>
                  <td>{member?.afterSalary}</td>
                  <td>{member.paymentsYn}</td>
                  <td style={{ width: 120 }}>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleButtonClick(member)}
                      onClose={handleCloseModal}
                    >
                      상세보기
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <nav>
            <ul className="pagination">
              {[...Array(salaryList.data?.totalPages)].map((page, i) => (
                <li
                  key={i}
                  className={`page-item ${
                    currentPage === i + 1 ? "active" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    // onClick={() => onPageClick(i + 1)}
                  >
                    {i + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default CheckNTable;
