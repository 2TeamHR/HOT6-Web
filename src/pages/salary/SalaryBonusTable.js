import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callGetBonusSalaryAPI } from "../../apis/SalaryAPICalls";
import AllBonusModal from "./Salary_AllBonusModal";

function BonusTable() {

    const [showModal, setShowModal] = useState(false);
    const [selectedBonusCode, setSelectedBonusCode] = useState("");
    const [bonusInfo, setBonusInfo] = useState({});
    const [memberData, setMemberData] = useState([]);
    const dispatch = useDispatch();
    const bonus = useSelector(state => state.salaryReducer);

    function handleButtonClick(bonusDetail) {

        setBonusInfo(bonusDetail);
        setShowModal(true);
        setSelectedBonusCode(bonusDetail.bonus.bonusCode);
    }

    useEffect(() => {    
            dispatch(callGetBonusSalaryAPI({
                year: "2023",
                month: "02",
                paymentsYn: "N"
            })).then((data) => {
                setMemberData(data);
            });          
    }
    ,[bonusInfo]
    );

    function handleCloseModal() {
        setBonusInfo({});
        setShowModal(false);
    }


    let bonusList = '';

    if(bonus !== undefined) {
        bonusList = bonus;

    } else {
        bonusList = {
            team: {
                teamName: ''
            },
            rank: {
                rankName: ''
            },
            memberName: '',
            bonus: {
                bonusType: '',
                bonusSalary: ''
            }
        }
    }

    return (
        <>
            <div className="container-fluid">
                <div className="table-area">
                    <table className="table table-hover">
                        <thead>
                            <tr style={{ "backgroundColor": "#DDDDDD" }}>
                                <th>구분</th>
                                <th>조직</th>
                                <th>직급</th>
                                <th>이름</th>
                                <th>상여구분</th>
                                <th>금액</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            { bonusList.length > 0 && bonusList.map((bonusDetail, index) => (
                                <tr style={{ "cursor": "pointer" }} key={ bonusDetail.bonusCode }>
                                <td>{ index + 1 }</td>
                                <td>{bonusDetail.team?.teamName}</td>
                                <td>{bonusDetail.rank?.rankName}</td>
                                <td>{bonusDetail.memberName}</td>
                                <td>{bonusDetail.bonus?.bonusType}</td>
                                <td>{bonusDetail.bonus?.bonusSalary?.toLocaleString()}</td>
                                <td></td>
                                </tr>
                            ))
                            }
                            {showModal && <AllBonusModal
                                onClose={handleCloseModal} 
                                bonusDetail={ bonusInfo } 
                                selectedBonusCode= { selectedBonusCode }    
                            />}
                        </tbody>
                    </table>
                </div>
                <div align="center">
                    <form name="search-form" autoComplete="off" style={{ "display": "inline-block" }}>
                        <select id="searchCondition" name="searchCondition">
                            <option value="teamName">조직</option>
                            <option value="rankName">직급</option>
                            <option value="memberName">이름</option>
                        </select>
                        <input type="search" id="searchValue" name="searchValue" placeholder="검색할 내용을 입력하세요." 
                        />
                        <input type="submit" id="searchList" className="btn btn-secondary" value="검색" />
                    </form>
                        {/* <button type="submit" className="btn btn-primary float:right">지급하기</button> */}
                </div>
            </div>
        </>
    )
}

export default BonusTable;
