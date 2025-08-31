import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../../context/AuthContext';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

// 인증 버튼 컴포넌트 - 로그인/회원가입 버튼과 모달 관리
function AuthButtons() {
  // 인증 상태 및 함수들 가져오기
  const { currentUser, logout, isLoggedIn } = useAuth();
  
  // 모달 표시 상태를 관리하는 state
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  
  // 로그아웃 처리 함수
  const handleLogout = () => {
    const result = logout();
    if (result.success) {
      alert(result.message);
    }
  };

  return (
    <>
      {/* 로그인/회원가입 버튼 영역 */}
      <AuthButtonsContainer>
        {isLoggedIn() ? (
          // 로그인된 상태
          <>
            <UserInfo>안녕하세요, {currentUser?.name}님!</UserInfo>
            <AuthButton onClick={handleLogout}>로그아웃</AuthButton>
          </>
        ) : (
          // 로그인되지 않은 상태
          <>
            <AuthButton onClick={() => setShowLoginModal(true)}>로그인</AuthButton>
            <AuthButton $primary onClick={() => setShowSignupModal(true)}>회원가입</AuthButton>
          </>
        )}
      </AuthButtonsContainer>
      
      {/* 로그인 모달 */}
      {showLoginModal && (
        <LoginModal 
          onClose={() => setShowLoginModal(false)}
          onSwitchToSignup={() => {
            setShowLoginModal(false);
            setShowSignupModal(true);
          }}
        />
      )}
      
      {/* 회원가입 모달 */}
      {showSignupModal && (
        <SignupModal 
          onClose={() => setShowSignupModal(false)}
          onSwitchToLogin={() => {
            setShowSignupModal(false);
            setShowLoginModal(true);
          }}
        />
      )}
    </>
  );
}

// 인증 버튼 컨테이너 스타일
const AuthButtonsContainer = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  display: flex;
  gap: 10px;
`;

// 인증 버튼 스타일
const AuthButton = styled.button`
  padding: 10px 20px;
  border: 2px solid #2c5aa0;
  background-color: ${props => props.$primary ? '#2c5aa0' : 'transparent'};
  color: ${props => props.$primary ? '#ffffff' : '#2c5aa0'};
  font-size: 14px;
  font-weight: 500;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.$primary ? '#1e3d72' : '#2c5aa0'};
    color: #ffffff;
    border-color: ${props => props.$primary ? '#1e3d72' : '#2c5aa0'};
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

// 사용자 정보 표시 스타일
const UserInfo = styled.span`
  color: #2c5aa0;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 0;
  display: flex;
  align-items: center;
`;

export default AuthButtons;
