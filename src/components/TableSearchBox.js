import { Component } from 'react';
import tableStyle from '../resources/css/components/tableComponent.module.css';

export class TsbDepartment extends Component{

    render(){

        return(
            <div className="float-left mr-4">
                <span className="mr-2">부서 이름</span>
                <select>
                    <option>전체</option>
                    <option>경영관리부</option>
                    <option>마케팅부</option>
                </select>
            </div>
        );
    }
}

export class TsbEmployee extends Component{

    render(){

        return(
            <div className="float-left mr-4">
                <span className="mr-2">사원</span>
                <input/>
            </div>
        );
    }
}

export class PayState extends Component{

    render(){

        return(
            <div className="float-left mr-5">
                <span className="mr-2">결제 상태</span>
                <select>
                    <option>전체</option>
                    <option>완료</option>
                    <option>취소</option>
                    <option>반려</option>
                </select>
            </div>
        );
    }
}

export class Term extends Component{

    render(){

        return(
            <div className="float-left mr-4">
                <span className="mr-2">기간</span>
                <input type="date"/>
                <span>~</span>
                <input type="date"/>
            </div>
        );
    }
}

export class EmployState extends Component{

    render(){

        return(
            <div>
                <span className="mr-2">고용형태</span>
                <select>
                    <option>정규직</option>
                    <option>임원</option>
                    <option>계약직</option>
                </select>
            </div>
        );
    }
}

export class SearchBtn extends Component{

    render(){

        return(
            <div className={`float-left ml-3 ${tableStyle.searchBtn}`}>
                <button>조회</button>
            </div>
        );
    }
}

export class LeaveState extends Component{

    render(){

        return(
            <div>
            <span className="mr-2">휴가구분</span>
            <select>
                <option>전체</option>
                <option>기본연차</option>
                <option>보건휴가</option>
                <option>가족돌봄휴가</option>
                <option>출산휴가</option>
                <option>배우자출산휴가</option>
            </select>
        </div>
        );
    }
}
