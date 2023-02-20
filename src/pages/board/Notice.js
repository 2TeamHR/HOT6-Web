import React from 'react';

const Notice = () => {

  return (
    <>
      <div className="container">
        <h1 className="mt-5 text-center">공지사항</h1>
        <hr />
        <br />
        <div className="table-area">
          <table className="table">
            <thead>
              <tr style={{ "backgroundColor": "#DDDDDD" }}>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
                <th>조회수</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ "cursor": "pointer" }}>
                <td>81</td>
                <td>상목</td>
                <td>테스트멤버</td>
                <td>2023-01-26 19:28</td>
                <td>1</td>
              </tr>
              <tr style={{ "cursor": "pointer" }}>
                <td>80</td>
                <td>상목 안뇽</td>
                <td>테스트멤버</td>
                <td>2023-01-16 21:06</td>
                <td>3</td>
              </tr>
              <tr style={{ "cursor": "pointer" }}>
                <td>78</td>
                <td>2조 최고</td>
                <td>테스트멤버</td>
                <td>2023-01-13 15:09</td>
                <td>3</td>
              </tr>
              <tr style={{ "cursor": "pointer" }}>
                <td>73</td>
                <td>빚성일 아들 김현구</td>
                <td>테스트멤버</td>
                <td>2023-01-13 10:23</td>
                <td>9</td>
              </tr>
              <tr style={{ "cursor": "pointer" }}>
                <td>72</td>
                <td>어르신 김보성</td>
                <td>테스트멤버</td>
                <td>2023-01-13 10:22</td>
                <td>3</td>
              </tr>
              <tr style={{ "cursor": "pointer" }}>
                <td>71</td>
                <td>현구맘 빛성일</td>
                <td>테스트멤버</td>
                <td>2023-01-13 10:22</td>
                <td>1</td>
              </tr>
              <tr style={{ "cursor": "pointer" }}>
                <td>70</td>
                <td>무친 과학자 서도원</td>
                <td>테스트멤버</td>
                <td>2023-01-13 10:22</td>
                <td>3</td>
              </tr>
              <tr style={{ "cursor": "pointer" }}>
                <td>69</td>
                <td>페이징</td>
                <td>테스트멤버</td>
                <td>2023-01-13 10:22</td>
                <td>1</td>
              </tr>
              <tr style={{ "cursor": "pointer" }}>
                <td>67</td>
                <td>페이징4</td>
                <td>테스트멤버</td>
                <td>2023-01-13 10:21</td>
                <td>2</td>
              </tr>
              <tr style={{ "cursor": "pointer" }}>
                <td>66</td>
                <td>페이징3</td>
                <td>테스트멤버</td>
                <td>2023-01-13 10:21</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="search-area" align="center">
          <form name="search-form" autoComplete="off" style={{ "display": "inline" }}>
            <select id="searchCondition" name="searchCondition">
              <option value="noticeTitle">제목</option>
              <option value="nickName">작성자</option>
            </select>
            <input type="search" id="searchValue" name="searchValue" placeholder="검색할 내용을 입력하세요." />
            <input type="submit" className="btn btn-secondary" value="검색" />
          </form>
        </div>
        <br /><br />
        {/* 페이지 처리 */}
        <div className="pagingArea" align="center">
          {/* 맨 앞으로 이동 버튼 */}
          <button onClick={()=>""}>
            &lt;&lt;
          </button>
          {/* 이전 페이지 버튼 */}
          <button onClick={()=>""}>
            &lt;
          </button>
          {/* 숫자 버튼 */}
          <button onClick={()=>""}>1</button>
          <button onClick={()=>""}>2</button>
          {/* 다음 페이지 버튼 */}
          <button onClick={()=>""}>
            &gt;
          </button>
          {/* 마지막 페이지로 이동 버튼 */}
          <button onClick={()=>""}>
            &gt;&gt;
          </button>
        </div>
      </div>
    </>
  );
};

export default Notice;
