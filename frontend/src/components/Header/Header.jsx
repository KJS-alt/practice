import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AuthButtons from '../Auth/AuthButtons';

// 헤더 컴포넌트 - 웹디자인 기능사 시험용 쇼핑몰 헤더
// 로고, 메인메뉴, 서브메뉴를 포함한 네비게이션 구조
function Header() {
  // 마우스 오버 상태를 관리하는 state (어떤 메뉴에 마우스가 올라가 있는지)
  const [hoveredMenu, setHoveredMenu] = useState(null);

  // 메인 메뉴와 서브 메뉴 데이터 구조 - 웹디자인 기능사 시험 사이트맵 준수
  const menuData = [
    {
      id: 'home',
      title: '홈',
      path: '/',
      subMenus: []
    },
    {
      id: 'outer',
      title: '아우터',
      path: '/outer',
      subMenus: [
        { title: '자켓', path: '/outer/jacket' },
        { title: '점퍼', path: '/outer/jumper' },
        { title: '집업', path: '/outer/zipup' }
      ]
    },
    {
      id: 'pants',
      title: '팬츠',
      path: '/pants',
      subMenus: [
        { title: '청바지', path: '/pants/jeans' },
        { title: '슬랙스', path: '/pants/slacks' },
        { title: '레깅스', path: '/pants/leggings' }
      ]
    },
    {
      id: 'accessories',
      title: '악세서리',
      path: '/accessories',
      subMenus: [
        { title: '귀고리', path: '/accessories/earring' },
        { title: '목걸이', path: '/accessories/necklace' },
        { title: '반지', path: '/accessories/ring' }
      ]
    }
  ];

  return (
    <HeaderContainer> {/* header 태그 */}
      {/* 로고 영역 - 와이어프레임 A 영역 */}
      <LogoSection> {/* div 태그 */}
        <Logo to="/"> {/* Link → a 태그 */}
          <LogoImage> {/* div 태그 */}
            <CompanyName>JUST 쇼핑몰</CompanyName> {/* h1 태그 */}
            <LogoDescription>웹디자인 기능사 실기시험 문제</LogoDescription> {/* p 태그 */}
          </LogoImage>
        </Logo>
        
        {/* 로그인/회원가입 버튼 영역 */}
        <AuthButtons />
      </LogoSection>

      {/* 네비게이션 영역 */}
      <NavigationSection> {/* nav 태그 */}
        {/* 메인 메뉴 */}
        <MainMenuContainer> {/* ul 태그 */}
          {menuData.map((menu) => (
            <MainMenuItem /* li 태그 */
              key={menu.id}
              onMouseEnter={() => setHoveredMenu(menu.id)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <MainMenuLink to={menu.path}> {/* Link → a 태그 */}
                {menu.title}
              </MainMenuLink>
              
              {/* 서브 메뉴 - 메인 메뉴에 마우스가 올라갔을 때만 표시 */}
              {hoveredMenu === menu.id && menu.subMenus.length > 0 && (
                <SubMenuContainer> {/* ul 태그 */}
                  {menu.subMenus.map((subMenu, index) => (
                    <SubMenuItem key={index}> {/* li 태그 */}
                      <SubMenuLink to={subMenu.path}> {/* Link → a 태그 */}
                        {subMenu.title}
                      </SubMenuLink>
                    </SubMenuItem>
                  ))}
                </SubMenuContainer>
              )}
            </MainMenuItem>
          ))}
        </MainMenuContainer>
      </NavigationSection>
    </HeaderContainer>
  );
}

// 헤더 전체 컨테이너 스타일
const HeaderContainer = styled.header`
  width: 100%;
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  position: relative;
  z-index: 1000;
`;

// 로고 섹션 스타일 - 와이어프레임 A 영역
const LogoSection = styled.div`
  padding: 30px 0;
  text-align: center;
  background-color: #ffffff;
  border-bottom: 2px solid #2c5aa0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 로고 링크 스타일
const Logo = styled(Link)`
  text-decoration: none;
  display: inline-block;
`;

// 로고 이미지 컨테이너 스타일
const LogoImage = styled.div`
  text-align: center;
`;

// 회사명 스타일
const CompanyName = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: #2c5aa0;
  margin: 0 0 5px 0;
  letter-spacing: 3px;
`;

// 로고 설명 스타일
const LogoDescription = styled.p`
  font-size: 14px;
  color: #666666;
  margin: 0;
  letter-spacing: 1px;
`;

// 네비게이션 섹션 스타일
const NavigationSection = styled.nav`
  background-color: #2c5aa0;
  position: relative;
`;

// 메인 메뉴 컨테이너 스타일
const MainMenuContainer = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: #2c5aa0;
`;

// 메인 메뉴 아이템 스타일
const MainMenuItem = styled.li`
  position: relative;
  
  &:hover {
    background-color: #1e3d72;
  }
`;

// 메인 메뉴 링크 스타일
const MainMenuLink = styled(Link)`
  display: block;
  padding: 15px 30px;
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  transition: background-color 0.3s ease;
  
  &:hover {
    color: #ffffff;
  }
`;

// 서브 메뉴 컨테이너 스타일
const SubMenuContainer = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-top: none;
  list-style: none;
  margin: 0;
  padding: 0;
  min-width: 150px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

// 서브 메뉴 아이템 스타일
const SubMenuItem = styled.li`
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: #f8f9fa;
  }
`;

// 서브 메뉴 링크 스타일
const SubMenuLink = styled(Link)`
  display: block;
  padding: 12px 20px;
  color: #333333;
  text-decoration: none;
  font-size: 14px;
  transition: background-color 0.3s ease;
  
  &:hover {
    color: #2c5aa0;
  }
`;

export default Header;