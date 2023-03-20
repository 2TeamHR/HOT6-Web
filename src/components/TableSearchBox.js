import { Component } from 'react';
import tableStyle from '../resources/css/components/tableComponent.module.css';


/* 팀 검색 컴포넌트 */
export class TsbDepartment extends Component{

    teamSearchChangeHandler = (e) => {
        this.props.onChange(e.target.value);
    }

    render(){

        return(
            <div className="float-left ml-5 mr-4">
                <span className="mr-2">팀명 : </span>
                <select className='rounded rounded-lg' name='teamSearch' onChange={this.teamSearchChangeHandler}>
                    <option>전체</option>
                    <option value="1">인사팀</option>
                    <option value="2">총무팀</option>
                    <option value="3">회계팀</option>
                    <option value="4">영업팀</option>
                    <option value="5">마케팅팀</option>
                    <option value="6">개발1팀</option>
                    <option value="7">개발2팀</option>
                </select>
            </div>
        );
    }
}

/* 직급 검색 컴포넌트 */
export class TsbRank extends Component{

    rankSearchChangeHandler = (e) => {
        this.props.onChange(e.target.value);
    }

    render(){

        return(
            <div className="float-left mr-4">
                <span className="mr-2">직급명 : </span>
                <select className='rounded rounded-lg' name='teamSearch' onChange={this.rankSearchChangeHandler}>
                    <option>전체</option>
                    <option value="1">사장</option>
                    <option value="2">이사</option>
                    <option value="3">팀장</option>
                    <option value="4">차장</option>
                    <option value="5">과장</option>
                    <option value="6">대리</option>
                    <option value="7">주임</option>
                    <option value="7">사원</option>
                </select>
            </div>
        );
    }
}

/* 사원 이름 검색 컴포넌트 */
export class TsbEmployee extends Component{

    render(){

        return(
            <div className="float-left mr-4">
                <span className="mr-2">사원명 : </span>
                <input className='rounded rounded-lg'/>
            </div>
        );
    }
}

/* 결재 상태 검색 컴포넌트 */
export class PayState extends Component{

    render(){

        return (
            <div className="float-left mr-5">
                <span className="mr-2">결재 상태 : </span>
                <select className='rounded rounded-lg'>
                    <option>전체</option>
                    <option>완료</option>
                    <option>취소</option>
                    <option>반려</option>
                </select>
            </div>
        );
    }
}

/* 기간 검색 컴포넌트 */
export class Term extends Component{

    render(){

        return(
            <div className="float-left mr-4">
                <span className="mr-2">기간 : </span>
                <input className='rounded rounded-lg' type="date"/>
                <span> ~ </span>
                <input className='rounded rounded-lg' type="date"/>
            </div>
        );
    }
}

/* 고용형태 검색 컴포넌트 */
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

export class LeaveState extends Component{

    render(){

        return(
            <div>
            <span className="mr-2">휴가구분 : </span>
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

/* 검색 버튼 컴포넌트 */
export class SearchBtn extends Component{

    render(){

        return(
            <div className={`float-left ml-3 ${tableStyle.searchBtn}`}>
                <button>조회</button>
            </div>
        );
    }
}