import React, { createContext, useContext, useState, useEffect } from 'react';

// 인증 상태 관리를 위한 Context - 로그인/로그아웃 상태 및 사용자 정보 관리
const AuthContext = createContext();

// AuthContext를 사용하기 위한 커스텀 훅
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth는 AuthProvider 내에서 사용되어야 합니다.');
  }
  return context;
};

// AuthProvider 컴포넌트 - 전체 앱에 인증 상태를 제공
export const AuthProvider = ({ children }) => {
  // 현재 로그인한 사용자 정보 상태
  const [currentUser, setCurrentUser] = useState(null);
  // 로딩 상태 (초기 로그인 확인 중)
  const [loading, setLoading] = useState(true);

  // 컴포넌트 마운트 시 로컬 스토리지에서 로그인 상태 확인
  useEffect(() => {
    checkAuthState();
  }, []);

  // 로그인 상태 확인 함수
  const checkAuthState = () => {
    try {
      const savedUser = localStorage.getItem('currentUser');
      if (savedUser) {
        const user = JSON.parse(savedUser);
        setCurrentUser(user);
      }
    } catch (error) {
      console.error('로그인 상태 확인 중 오류 발생:', error);
      localStorage.removeItem('currentUser');
    } finally {
      setLoading(false);
    }
  };

  // 로그인 함수
  const login = (email, password) => {
    try {
      // 로컬 스토리지에서 사용자 목록 가져오기
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      
      // 이메일과 비밀번호로 사용자 찾기
      const user = users.find(u => u.email === email && u.password === password);
      
      if (user) {
        // 로그인 성공
        const userWithoutPassword = { ...user };
        delete userWithoutPassword.password; // 보안을 위해 비밀번호 제거
        
        setCurrentUser(userWithoutPassword);
        localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
        
        return { success: true, message: '로그인이 완료되었습니다!' };
      } else {
        // 로그인 실패
        return { success: false, message: '이메일 또는 비밀번호가 올바르지 않습니다.' };
      }
    } catch (error) {
      console.error('로그인 중 오류 발생:', error);
      return { success: false, message: '로그인 중 오류가 발생했습니다.' };
    }
  };

  // 회원가입 함수
  const signup = (userData) => {
    try {
      // 로컬 스토리지에서 기존 사용자 목록 가져오기
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      
      // 이메일 중복 체크
      if (users.find(u => u.email === userData.email)) {
        return { success: false, message: '이미 가입된 이메일입니다.' };
      }
      
      // 새 사용자 생성
      const newUser = {
        id: Date.now(),
        name: userData.name,
        email: userData.email,
        password: userData.password,
        createdAt: new Date().toISOString()
      };
      
      // 사용자 목록에 추가 및 저장
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      
      return { success: true, message: '회원가입이 완료되었습니다!' };
    } catch (error) {
      console.error('회원가입 중 오류 발생:', error);
      return { success: false, message: '회원가입 중 오류가 발생했습니다.' };
    }
  };

  // 로그아웃 함수
  const logout = () => {
    try {
      setCurrentUser(null);
      localStorage.removeItem('currentUser');
      return { success: true, message: '로그아웃되었습니다.' };
    } catch (error) {
      console.error('로그아웃 중 오류 발생:', error);
      return { success: false, message: '로그아웃 중 오류가 발생했습니다.' };
    }
  };

  // 사용자 정보 업데이트 함수
  const updateUser = (updatedData) => {
    try {
      if (!currentUser) {
        return { success: false, message: '로그인이 필요합니다.' };
      }

      // 현재 사용자 정보 업데이트
      const updatedUser = { ...currentUser, ...updatedData };
      setCurrentUser(updatedUser);
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));

      // 사용자 목록에서도 업데이트
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const userIndex = users.findIndex(u => u.id === currentUser.id);
      if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...updatedData };
        localStorage.setItem('users', JSON.stringify(users));
      }

      return { success: true, message: '사용자 정보가 업데이트되었습니다.' };
    } catch (error) {
      console.error('사용자 정보 업데이트 중 오류 발생:', error);
      return { success: false, message: '정보 업데이트 중 오류가 발생했습니다.' };
    }
  };

  // 로그인 여부 확인 함수
  const isLoggedIn = () => {
    return currentUser !== null;
  };

  // Context에 제공할 값들
  const value = {
    currentUser,        // 현재 로그인한 사용자 정보
    loading,           // 로딩 상태
    login,             // 로그인 함수
    signup,            // 회원가입 함수
    logout,            // 로그아웃 함수
    updateUser,        // 사용자 정보 업데이트 함수
    isLoggedIn,        // 로그인 여부 확인 함수
    checkAuthState     // 인증 상태 재확인 함수
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
