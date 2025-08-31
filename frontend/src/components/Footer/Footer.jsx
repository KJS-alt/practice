import React from 'react';
import styled from 'styled-components';

// 푸터 컴포넌트 - 웹디자인 기능사 시험용 쇼핑몰 푸터
// 저작권 정보, SNS 링크, 회사 정보 등을 포함
function Footer() {
  return (
    <FooterContainer> {/* footer 태그 */}
      <FooterContent> {/* div 태그 */}
        {/* 회사 정보 섹션 */}
        <CompanyInfo> {/* div 태그 */}
          <CompanyName>JUST 쇼핑몰</CompanyName> {/* h3 태그 */}
          <CompanyDetails> {/* div 태그 */}
            <InfoItem>대표자: 홍길동</InfoItem> {/* div 태그 */}
            <InfoItem>사업자등록번호: 123-45-67890</InfoItem> {/* div 태그 */}
            <InfoItem>주소: 서울특별시 강남구 테헤란로 123</InfoItem> {/* div 태그 */}
            <InfoItem>전화: 02-1234-5678</InfoItem> {/* div 태그 */}
            <InfoItem>이메일: info@justshopping.co.kr</InfoItem> {/* div 태그 */}
          </CompanyDetails>
        </CompanyInfo>

        {/* SNS 링크 섹션 */}
        <SnsSection> {/* div 태그 */}
          <SnsTitle>SNS</SnsTitle> {/* h3 태그 */}
          <SnsLinks> {/* div 태그 */}
            <SnsLink href="#" target="_blank" rel="noopener noreferrer"> {/* a 태그 */}
              <SnsIcon>📘</SnsIcon> {/* span 태그 */}
              <SnsName>Facebook</SnsName> {/* span 태그 */}
            </SnsLink>
            <SnsLink href="#" target="_blank" rel="noopener noreferrer"> {/* a 태그 */}
              <SnsIcon>📷</SnsIcon> {/* span 태그 */}
              <SnsName>Instagram</SnsName> {/* span 태그 */}
            </SnsLink>
            <SnsLink href="#" target="_blank" rel="noopener noreferrer"> {/* a 태그 */}
              <SnsIcon>🐦</SnsIcon> {/* span 태그 */}
              <SnsName>Twitter</SnsName> {/* span 태그 */}
            </SnsLink>
            <SnsLink href="#" target="_blank" rel="noopener noreferrer"> {/* a 태그 */}
              <SnsIcon>📺</SnsIcon> {/* span 태그 */}
              <SnsName>YouTube</SnsName> {/* span 태그 */}
            </SnsLink>
          </SnsLinks>
        </SnsSection>

        {/* 고객센터 정보 섹션 */}
        <CustomerService> {/* div 태그 */}
          <ServiceTitle>고객센터</ServiceTitle> {/* h3 태그 */}
          <ServiceDetails> {/* div 태그 */}
            <ServiceItem> {/* div 태그 */}
              <ServiceLabel>전화문의</ServiceLabel> {/* span 태그 */}
              <ServiceValue>02-1234-5678</ServiceValue> {/* span 태그 */}
            </ServiceItem>
            <ServiceItem> {/* div 태그 */}
              <ServiceLabel>운영시간</ServiceLabel> {/* span 태그 */}
              <ServiceValue>평일 09:00 - 18:00</ServiceValue> {/* span 태그 */}
            </ServiceItem>
            <ServiceItem> {/* div 태그 */}
              <ServiceLabel>점심시간</ServiceLabel> {/* span 태그 */}
              <ServiceValue>12:00 - 13:00</ServiceValue> {/* span 태그 */}
            </ServiceItem>
            <ServiceItem> {/* div 태그 */}
              <ServiceLabel>주말/공휴일</ServiceLabel> {/* span 태그 */}
              <ServiceValue>휴무</ServiceValue> {/* span 태그 */}
            </ServiceItem>
          </ServiceDetails>
        </CustomerService>
      </FooterContent>

      {/* 저작권 정보 */}
      <CopyrightSection> {/* div 태그 */}
        <CopyrightText> {/* p 태그 */}
          Copyright © 2024 JUST 쇼핑몰. All rights reserved.
        </CopyrightText>
        <PolicyLinks> {/* div 태그 */}
          <PolicyLink href="#">개인정보처리방침</PolicyLink> {/* a 태그 */}
          <PolicySeparator>|</PolicySeparator> {/* span 태그 */}
          <PolicyLink href="#">이용약관</PolicyLink> {/* a 태그 */}
          <PolicySeparator>|</PolicySeparator> {/* span 태그 */}
          <PolicyLink href="#">이용안내</PolicyLink> {/* a 태그 */}
        </PolicyLinks>
      </CopyrightSection>
    </FooterContainer>
  );
}

// 푸터 전체 컨테이너 스타일
const FooterContainer = styled.footer`
  background-color: #2c3e50;
  color: #ffffff;
  margin-top: 80px;
`;

// 푸터 메인 콘텐츠 스타일
const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

// 회사 정보 섹션 스타일
const CompanyInfo = styled.div``;

// 회사명 스타일
const CompanyName = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 15px 0;
  color: #3498db;
`;

// 회사 세부 정보 스타일
const CompanyDetails = styled.div`
  line-height: 1.6;
`;

// 정보 아이템 스타일
const InfoItem = styled.div`
  font-size: 14px;
  color: #bdc3c7;
  margin-bottom: 5px;
`;

// SNS 섹션 스타일
const SnsSection = styled.div``;

// SNS 제목 스타일
const SnsTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 15px 0;
  color: #ffffff;
`;

// SNS 링크들 컨테이너 스타일
const SnsLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

// 개별 SNS 링크 스타일
const SnsLink = styled.a`
  display: flex;
  align-items: center;
  color: #bdc3c7;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
  
  &:hover {
    color: #3498db;
  }
`;

// SNS 아이콘 스타일
const SnsIcon = styled.span`
  margin-right: 8px;
  font-size: 16px;
`;

// SNS 이름 스타일
const SnsName = styled.span``;

// 고객센터 섹션 스타일
const CustomerService = styled.div``;

// 고객센터 제목 스타일
const ServiceTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 15px 0;
  color: #ffffff;
`;

// 고객센터 세부 정보 스타일
const ServiceDetails = styled.div``;

// 서비스 아이템 스타일
const ServiceItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 14px;
`;

// 서비스 라벨 스타일
const ServiceLabel = styled.span`
  color: #bdc3c7;
`;

// 서비스 값 스타일
const ServiceValue = styled.span`
  color: #ffffff;
  font-weight: 500;
`;

// 저작권 섹션 스타일
const CopyrightSection = styled.div`
  border-top: 1px solid #34495e;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
`;

// 저작권 텍스트 스타일
const CopyrightText = styled.p`
  font-size: 14px;
  color: #bdc3c7;
  margin: 0;
`;

// 정책 링크들 컨테이너 스타일
const PolicyLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

// 개별 정책 링크 스타일
const PolicyLink = styled.a`
  font-size: 14px;
  color: #bdc3c7;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #3498db;
  }
`;

// 정책 링크 구분자 스타일
const PolicySeparator = styled.span`
  color: #7f8c8d;
  font-size: 12px;
`;

export default Footer;
