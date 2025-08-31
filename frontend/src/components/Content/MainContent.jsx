import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// 메인 콘텐츠 컴포넌트 - 웹디자인 기능사 와이어프레임에 맞는 레이아웃
// 왼쪽: 상품 영역, 오른쪽: 공지사항/베네/바로가기 영역 (C2, C3, C4)
function MainContent() {
  // 신상품 데이터 - 샘플 이미지 색상 포함
  const newProducts = [
    { id: 1, name: '가을 데님 자켓', price: '89,000원', category: 'outer', imageColor: 'linear-gradient(135deg, #2c3e50, #34495e)' },
    { id: 2, name: '슬림핏 청바지', price: '45,000원', category: 'pants', imageColor: 'linear-gradient(135deg, #3498db, #2980b9)' },
    { id: 3, name: '심플 골드 목걸이', price: '25,000원', category: 'accessories', imageColor: 'linear-gradient(135deg, #f39c12, #e67e22)' },
    { id: 4, name: '오버핏 점퍼', price: '75,000원', category: 'outer', imageColor: 'linear-gradient(135deg, #8e44ad, #9b59b6)' },
    { id: 5, name: '와이드 슬랙스', price: '55,000원', category: 'pants', imageColor: 'linear-gradient(135deg, #95a5a6, #7f8c8d)' },
    { id: 6, name: '실버 귀고리', price: '18,000원', category: 'accessories', imageColor: 'linear-gradient(135deg, #bdc3c7, #95a5a6)' }
  ];

  // 공지사항 데이터
  const notices = [
    { id: 1, title: '신규 회원 가입 이벤트 안내', date: '2024-01-15' },
    { id: 2, title: '배송 정책 변경 안내', date: '2024-01-12' },
    { id: 3, title: '설 연휴 배송 일정 안내', date: '2024-01-10' },
    { id: 4, title: '새해 첫 특가 이벤트', date: '2024-01-08' },
    { id: 5, title: '고객센터 운영시간 변경', date: '2024-01-05' }
  ];

  // 베네 데이터 (혜택/이벤트)
  const benefits = [
    { id: 1, title: '무료배송', description: '5만원 이상 구매시' },
    { id: 2, title: '적립금', description: '구매금액의 3%' },
    { id: 3, title: '할인쿠폰', description: '신규회원 10%' }
  ];

  // 바로가기 데이터 - 아이콘과 색상 추가
  const quickLinks = [
    { id: 1, title: '주문배송', icon: '📦', path: '/order', color: '#3498db' },
    { id: 2, title: '교환반품', icon: '↩️', path: '/exchange', color: '#e74c3c' },
    { id: 3, title: '고객센터', icon: '☎️', path: '/support', color: '#2ecc71' },
    { id: 4, title: '회원혜택', icon: '🎁', path: '/benefits', color: '#f39c12' }
  ];

  return (
    <ContentWrapper> {/* div 태그 */}
      {/* 왼쪽 영역 - 상품 */}
      <LeftSection> {/* div 태그 */}
        {/* 신상품 섹션 */}
        <ProductSection> {/* section 태그 */}
          <SectionTitle>신상품</SectionTitle> {/* h2 태그 */}
          <ProductGrid> {/* div 태그 */}
            {newProducts.map((product) => (
              <ProductCard key={product.id} to={`/product/${product.id}`}> {/* Link → a 태그 */}
                <ProductImage $imageColor={product.imageColor}> {/* div 태그 */}
                  <ProductOverlay> {/* div 태그 */}
                    <ProductCategory>{product.category === 'outer' ? '아우터' : product.category === 'pants' ? '팬츠' : '악세서리'}</ProductCategory> {/* span 태그 */}
                  </ProductOverlay>
                </ProductImage>
                <ProductInfo> {/* div 태그 */}
                  <ProductName>{product.name}</ProductName> {/* h3 태그 */}
                  <ProductPrice>{product.price}</ProductPrice> {/* p 태그 */}
                </ProductInfo>
              </ProductCard>
            ))}
          </ProductGrid>
        </ProductSection>
      </LeftSection>

      {/* 오른쪽 영역 - C2, C3, C4 */}
      <RightSection> {/* div 태그 */}
        {/* C2 영역 - 공지사항/게시판 */}
        <SideSection> {/* div 태그 */}
          <SideSectionHeader> {/* div 태그 */}
            <SideSectionTitle>공지사항</SideSectionTitle> {/* h3 태그 */}
            <MoreLink to="/notice">더보기 +</MoreLink> {/* Link → a 태그 */}
          </SideSectionHeader>
          <NoticeList> {/* ul 태그 */}
            {notices.slice(0, 5).map((notice) => (
              <NoticeItem key={notice.id}> {/* li 태그 */}
                <NoticeLink to={`/notice/${notice.id}`}> {/* Link → a 태그 */}
                  <NoticeTitle>{notice.title}</NoticeTitle> {/* span 태그 */}
                  <NoticeDate>{notice.date}</NoticeDate> {/* span 태그 */}
                </NoticeLink>
              </NoticeItem>
            ))}
          </NoticeList>
        </SideSection>

        {/* C3 영역 - 베네 */}
        <SideSection> {/* div 태그 */}
          <SideSectionHeader> {/* div 태그 */}
            <SideSectionTitle>회원혜택</SideSectionTitle> {/* h3 태그 */}
          </SideSectionHeader>
          <BenefitGrid> {/* div 태그 */}
            {benefits.map((benefit) => (
              <BenefitCard key={benefit.id}> {/* div 태그 */}
                <BenefitTitle>{benefit.title}</BenefitTitle> {/* h4 태그 */}
                <BenefitDescription>{benefit.description}</BenefitDescription> {/* p 태그 */}
              </BenefitCard>
            ))}
          </BenefitGrid>
        </SideSection>

        {/* C4 영역 - 바로가기 */}
        <SideSection> {/* div 태그 */}
          <SideSectionHeader> {/* div 태그 */}
            <SideSectionTitle>바로가기</SideSectionTitle> {/* h3 태그 */}
          </SideSectionHeader>
          <QuickLinkGrid> {/* div 태그 */}
            {quickLinks.map((link) => (
              <QuickLinkCard key={link.id} to={link.path} color={link.color}> {/* Link → a 태그 */}
                <QuickLinkIcon>{link.icon}</QuickLinkIcon> {/* div 태그 */}
                <QuickLinkTitle>{link.title}</QuickLinkTitle> {/* span 태그 */}
              </QuickLinkCard>
            ))}
          </QuickLinkGrid>
        </SideSection>
      </RightSection>
    </ContentWrapper>
  );
}

// 전체 콘텐츠 래퍼 - 와이어프레임 레이아웃
const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 20px;
  display: flex;
  gap: 30px;
`;

// 왼쪽 섹션 - 상품 영역
const LeftSection = styled.div`
  flex: 2;
`;

// 오른쪽 섹션 - C2, C3, C4 영역
const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

// 상품 섹션
const ProductSection = styled.section`
  margin-bottom: 30px;
`;

// 섹션 제목
const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333333;
  margin: 0 0 20px 0;
  padding-bottom: 10px;
  border-bottom: 2px solid #2c5aa0;
`;

// 상품 그리드
const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

// 상품 카드
const ProductCard = styled(Link)`
  text-decoration: none;
  color: inherit;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

// 상품 이미지 - 샘플 이미지 그라디언트 적용
const ProductImage = styled.div`
  height: 180px;
  background: ${props => props.$imageColor || '#f8f9fa'};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 10px,
      rgba(255,255,255,0.1) 10px,
      rgba(255,255,255,0.1) 20px
    );
    pointer-events: none;
  }
`;

// 상품 이미지 오버레이
const ProductOverlay = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 8px;
  border-radius: 4px;
  text-align: center;
`;

// 상품 카테고리 라벨
const ProductCategory = styled.span`
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

// 상품 정보
const ProductInfo = styled.div`
  padding: 15px;
`;

// 상품명
const ProductName = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: #333333;
  margin: 0 0 8px 0;
`;

// 상품 가격
const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #2c5aa0;
  margin: 0;
`;

// 사이드 섹션 (C2, C3, C4)
const SideSection = styled.div`
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
`;

// 사이드 섹션 헤더
const SideSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding-bottom: 8px;
  border-bottom: 1px solid #f0f0f0;
`;

// 사이드 섹션 제목
const SideSectionTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #333333;
  margin: 0;
`;

// 더보기 링크
const MoreLink = styled(Link)`
  color: #2c5aa0;
  text-decoration: none;
  font-size: 12px;
  
  &:hover {
    text-decoration: underline;
  }
`;

// 공지사항 리스트
const NoticeList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

// 공지사항 아이템
const NoticeItem = styled.li`
  border-bottom: 1px solid #f5f5f5;
  
  &:last-child {
    border-bottom: none;
  }
`;

// 공지사항 링크
const NoticeLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  text-decoration: none;
  color: inherit;
  
  &:hover {
    background-color: #f8f9fa;
    margin: 0 -10px;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

// 공지사항 제목
const NoticeTitle = styled.span`
  font-size: 13px;
  color: #333333;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// 공지사항 날짜
const NoticeDate = styled.span`
  font-size: 11px;
  color: #999999;
  margin-left: 8px;
`;

// 혜택 그리드
const BenefitGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

// 혜택 카드
const BenefitCard = styled.div`
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 6px;
  text-align: center;
`;

// 혜택 제목
const BenefitTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
  color: #2c5aa0;
  margin: 0 0 5px 0;
`;

// 혜택 설명
const BenefitDescription = styled.p`
  font-size: 12px;
  color: #666666;
  margin: 0;
`;

// 바로가기 그리드
const QuickLinkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

// 바로가기 카드 - 색상 테마 적용
const QuickLinkCard = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 10px;
  background-color: #ffffff;
  border: 2px solid ${props => props.color || '#e0e0e0'};
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${props => props.color || '#e0e0e0'};
  }
  
  &:hover {
    background-color: ${props => props.color}10;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px ${props => props.color}30;
    border-color: ${props => props.color};
  }
`;

// 바로가기 아이콘 - 색상 적용
const QuickLinkIcon = styled.div`
  font-size: 24px;
  margin-bottom: 8px;
  filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.1));
`;

// 바로가기 제목 - 색상 적용
const QuickLinkTitle = styled.span`
  font-size: 13px;
  color: #333333;
  font-weight: 600;
  text-align: center;
`;

export default MainContent;
