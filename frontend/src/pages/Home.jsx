import React from 'react';
import Header from '../components/Header/Header';
import Slide from '../components/Slide/Slide';
import MainContent from '../components/Content/MainContent';
import Footer from '../components/Footer/Footer';

// 홈 페이지 컴포넌트 - 웹디자인 기능사 시험용 쇼핑몰 메인 페이지
// 헤더, 슬라이드, 메인 콘텐츠, 푸터를 조합하여 완전한 홈페이지 구성
function Home() {
  return (
    <div>
      {/* 상단 헤더 영역 - 로고와 네비게이션 메뉴 */}
      <Header />
      
      {/* 메인 슬라이드 영역 - 프로모션 이미지 슬라이더 */}
      <Slide />
      
      {/* 메인 콘텐츠 영역 - 와이어프레임에 맞는 레이아웃 (상품, 공지사항, 베네, 바로가기) */}
      <MainContent />
      
      {/* 하단 푸터 영역 - 회사 정보, SNS, 저작권 정보 */}
      <Footer />
    </div>
  );
}

export default Home;
