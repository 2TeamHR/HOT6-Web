import { useNavigate } from "react-router-dom";
import salaryBonusInsertStyle from "../../resources/css/pages/salary/salary-insert.module.css";
import mainTitleStyle from "../../resources/css/pages/mypage/main-title.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { callGetMemberCodeBonusAPI, callInsertBonusAPI } from "../../apis/SalaryAPICalls";

function BonusInsert() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [memberCode, setMemberCode] = useState("");
  let [memberInfo, setMemberInfo] = useState("");
  const [bonusType, setBonusType] = useState("");
  const [bonusSalary, setBonusSalary] = useState("");
  const [salary, setSalary] = useState('');

//   salary.salaryCode = memberInfo.salaryList[0].salaryCode;

  const member = useSelector((state) => state.salaryReducer);

  console.log("member =============", member);

  memberInfo = member;

  useEffect(() => {
    if (memberCode) {
      dispatch(callGetMemberCodeBonusAPI({ memberCode })).then((data) => {
        setMemberInfo(data || {});
      });
    }
  }, [memberCode, dispatch]);

  if (memberCode == null) {
    memberInfo = {
      memberCode: "",
      teamName: "",
      rankName: "",
      memberName: "",
      bonusType: '',
      bonusSalary: 0
        
    };
    console.log(`memberInfo=====>>>test`, memberInfo);
  }

  const handleSubmit = () => {

        memberInfo.bonusType = bonusType;
        memberInfo.bonusSalary = bonusSalary;
      dispatch(callInsertBonusAPI(memberInfo, salary));
  };


  useEffect(() => {
    if (memberInfo && memberInfo.salaryList && memberInfo.salaryList.length > 0) {
      setSalary({ salaryCode: memberInfo.salaryList[0].salaryCode });
    }
  }, [memberInfo]);

  return (
    <main className={salaryBonusInsertStyle.main}>
      <div>
        <div className={salaryBonusInsertStyle.title}>
          <p>상여금 명단 추가</p>
        </div>

        <form>
        <div className={salaryBonusInsertStyle.infoBtn}>
            <button   
                className="ml-2 mr-2"
                onClick={handleSubmit}
            >
                등록하기
            </button>
            <button
                className="ml-2 mr-2"
                onClick={() => {
                navigate(-1);
                }}
            >
                이전 페이지로
            </button>
        </div>

        <div className="container mt-5">
          <div className="row main_row">
            <div className="mb-3">
              <p className={salaryBonusInsertStyle.infoHead}>사원 번호</p>
              <input
                className={salaryBonusInsertStyle.myInfo}
                value={memberInfo.memberCode}
                onChange={(e) => setMemberCode(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <p className={salaryBonusInsertStyle.infoHead}>조직</p>
              <input
                className={salaryBonusInsertStyle.myInfo}
                value={memberInfo.teamName}
                readOnly
              />
            </div>
            <div className="mb-3">
              <p className={salaryBonusInsertStyle.infoHead}>직급</p>
              <input
                className={salaryBonusInsertStyle.myInfo}
                value={memberInfo.rankName}
                readOnly
              />
            </div>
            <div className="mb-3">
              <p className={salaryBonusInsertStyle.infoHead}>이름</p>
              <input
                className={salaryBonusInsertStyle.myInfo}
                value={memberInfo.memberName}
                readOnly
              />
            </div>
            <div className="mb-3">
              <p className={salaryBonusInsertStyle.infoHead}>상여구분</p>
              <input
                className={salaryBonusInsertStyle.myInfo}
                value={memberInfo?.bonusType}
                onChange={(e) => setBonusType(e.target.value)}
                
                name="bonusType"
              />
            </div>
            <div className="mb-3">
              <p className={salaryBonusInsertStyle.infoHead}>상여금액</p>
              <input
                className={salaryBonusInsertStyle.myInfo}
                value={memberInfo?.bonusSalary}
                onChange={(e) => setBonusSalary(e.target.value)}
                name="bonusSalary"
              />
            </div>
            <div className="mb-3">
                <input 
                    type='hidden' 
                    value={memberInfo?.salaryCode}
                    name="salaryCode"
                />
            </div>
          </div>
        </div>
        </form>
      </div>
    </main>
  );
}

export default BonusInsert;
