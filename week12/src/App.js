import './App.css';
import styled from "styled-components";
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LikeLionList from './pages/LikeLionList';
import LikeLionQ from './pages/LikeLionQ';
import BookList from './pages/BookList';
import BookDetail from './pages/BookDetail';

function App() { 
  return (
    <AppDom>
      <Routes>
        <Route path = "/" element = {<Home />}/>

        <Route path = "/likeLionList" element={<LikeLionList/>}>
        <Route path = ":likelionQ" element={<LikeLionQ />} />
        </Route>
        <Route path = "/books" element={<BookList/>}>
          <Route path = ":id" element={<BookDetail />} />
        </Route>
      </Routes>
    </AppDom>
    //<Route path = "/" element = {<Home />}/> 이게 경로지정 및 어떤 페이지 띄워줄 지 설정하는 것
    // 동적라우팅 하려면 /:xx 이런식으로 : 붙여야 함
    // 자식라우트에서 path  에 / 없으면 알아서 자식값으로 읽어옴 ":id"
    // 즉 /만 붙여서 접근하면 정적 경로고 이는 아예 새로운 페이지 의미.
    // :로 접근하면 자식라우트니가 부모 라우트에 컴포넌트 추가해줌.
  );
}

export default App;

const AppDom = styled.div`
  display: flex;
  width: 100%;
  min-height: 95vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
