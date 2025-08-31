import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';

// 메인 App 컴포넌트 - 웹디자인 기능사 시험용 쇼핑몰 애플리케이션
// React Router와 AuthProvider를 사용하여 라우팅과 인증 상태를 관리하는 최상위 컴포넌트
function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
        {/* 라우팅 설정 - 각 경로에 따른 컴포넌트 렌더링 */}
        <Routes>
          {/* 홈페이지 라우트 */}
          <Route path="/" element={<Home />} />
          
          {/* 아우터 관련 라우트들 */}
          <Route path="/outer" element={<Home />} />
          <Route path="/outer/jacket" element={<Home />} />
          <Route path="/outer/jumper" element={<Home />} />
          <Route path="/outer/zipup" element={<Home />} />
          
          {/* 팬츠 관련 라우트들 */}
          <Route path="/pants" element={<Home />} />
          <Route path="/pants/jeans" element={<Home />} />
          <Route path="/pants/slacks" element={<Home />} />
          <Route path="/pants/leggings" element={<Home />} />
          
          {/* 악세서리 관련 라우트들 */}
          <Route path="/accessories" element={<Home />} />
          <Route path="/accessories/earring" element={<Home />} />
          <Route path="/accessories/necklace" element={<Home />} />
          <Route path="/accessories/ring" element={<Home />} />
          
          {/* 개별 상품 페이지 라우트 */}
          <Route path="/product/:id" element={<Home />} />
          
          {/* 공지사항 관련 라우트 */}
          <Route path="/notice" element={<Home />} />
          <Route path="/notice/:id" element={<Home />} />
          
          {/* 바로가기 관련 라우트 */}
          <Route path="/order" element={<Home />} />
          <Route path="/exchange" element={<Home />} />
          <Route path="/support" element={<Home />} />
          <Route path="/benefits" element={<Home />} />
        </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
