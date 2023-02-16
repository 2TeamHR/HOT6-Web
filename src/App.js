import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main'
import MyPageMain from './pages/mypage/mypage_main'
import Layout from './layouts/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
       {/* 레이아웃 사이에 넣기 */}
        <Route path="/" element={ <Layout /> } >
          <Route index element={ <Main />} />
          <Route path="/mypageMain" element={ <MyPageMain />} />
        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
