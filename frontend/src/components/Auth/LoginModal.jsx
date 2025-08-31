import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../../context/AuthContext';

// 로그인 모달 컴포넌트
function LoginModal({ onClose, onSwitchToSignup }) {
  const { login } = useAuth();
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const [errors, setErrors] = useState({});
  
  // 입력 필드 변경 처리
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // 에러 메시지 초기화
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  // 폼 유효성 검사
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = '이메일을 입력해주세요.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '올바른 이메일 형식을 입력해주세요.';
    }
    
    if (!formData.password) {
      newErrors.password = '비밀번호를 입력해주세요.';
    } else if (formData.password.length < 6) {
      newErrors.password = '비밀번호는 6자리 이상 입력해주세요.';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // 로그인 처리
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    // AuthContext의 login 함수 사용
    const result = login(formData.email, formData.password);
    
    if (result.success) {
      // 로그인 성공
      alert(result.message);
      onClose();
    } else {
      // 로그인 실패
      setErrors({ email: result.message });
    }
  };
  
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>로그인</ModalTitle>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        
        <ModalForm onSubmit={handleSubmit}>
          <FormGroup>
            <FormLabel>이메일</FormLabel>
            <FormInput
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="이메일을 입력하세요"
              $hasError={!!errors.email}
            />
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          </FormGroup>
          
          <FormGroup>
            <FormLabel>비밀번호</FormLabel>
            <FormInput
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="비밀번호를 입력하세요"
              $hasError={!!errors.password}
            />
            {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
          </FormGroup>
          
          <SubmitButton type="submit">로그인</SubmitButton>
          
          <SwitchText>
            계정이 없으신가요?{' '}
            <SwitchLink onClick={onSwitchToSignup}>회원가입</SwitchLink>
          </SwitchText>
        </ModalForm>
      </ModalContent>
    </ModalOverlay>
  );
}

// 모달 스타일들
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
`;

const ModalContent = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  overflow: hidden;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #e0e0e0;
  background-color: #f8f9fa;
`;

const ModalTitle = styled.h2`
  margin: 0;
  color: #2c5aa0;
  font-size: 24px;
  font-weight: bold;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 28px;
  color: #666666;
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:hover {
    color: #333333;
  }
`;

const ModalForm = styled.form`
  padding: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #333333;
  font-weight: 500;
  font-size: 14px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 2px solid ${props => props.$hasError ? '#ff4757' : '#e0e0e0'};
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: ${props => props.$hasError ? '#ff4757' : '#2c5aa0'};
  }
  
  &::placeholder {
    color: #999999;
  }
`;

const ErrorMessage = styled.span`
  display: block;
  color: #ff4757;
  font-size: 12px;
  margin-top: 5px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #2c5aa0;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 15px;
  
  &:hover {
    background-color: #1e3d72;
  }
  
  &:active {
    transform: translateY(1px);
  }
`;

const SwitchText = styled.p`
  text-align: center;
  margin: 0;
  color: #666666;
  font-size: 14px;
`;

const SwitchLink = styled.span`
  color: #2c5aa0;
  cursor: pointer;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

export default LoginModal;
