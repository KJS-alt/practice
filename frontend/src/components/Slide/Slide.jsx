import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

function Slide() {

  const [currentSlide, setCurrentSlide] = useState(0)

  const slideImages = [
    {
      id: 1,
      title: '신상품 특가 할인',
      description: '최신 상품들을 특별한 가격으로 만나보세요',
      backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      pattern: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)'
    },
    {
      id: 2,
      title: '베스트 상품 모음',
      description: '고객들이 가장 사랑하는 인기 상품들',
      backgroundImage: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      pattern: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)'
    },
    {
      id: 3,
      title: '시즌 한정 이벤트',
      description: '지금만 누릴 수 있는 특별한 혜택',
      backgroundImage: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      pattern: 'radial-gradient(circle at 50% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)'
    }
  ]
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slideImages.length - 1 ? 0 : prev + 1)
    }, 80000)

    return () => {
      clearInterval(slideInterval)
    }
  }, [slideImages.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? slideImages.length - 1 : currentSlide - 1
    )
  }

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === slideImages.length - 1 ? 0 : currentSlide + 1
    )
  }

  return (
    <SlideContainer>

      {/* 슬라이드 이미지들을 담는 래퍼 */}
      <SlidesWrapper $currentSlide={currentSlide}>
        {slideImages.map((slide, index) => (
          <SlideItem
            key={slide.id}
            $slideCount={slideImages.length}
            $backgroundImage={slide.backgroundImage}
            $pattern={slide.pattern}
            $isActive={index === currentSlide}>
            <SlideContent>
              <SlideTitle>{slide.title}</SlideTitle>
              <SlideDescription>{slide.description}</SlideDescription>
            </SlideContent>
          </SlideItem>
        ))}
      </SlidesWrapper>

      {/* 이전/다음 네비게이션 버튼 */}
      <NavigationButton onClick={prevSlide} $position="left">
        &#8249;
      </NavigationButton>
      <NavigationButton onClick={nextSlide} $position="right">
        &#8250;
      </NavigationButton>

        <IndicatorContainer>
          {slideImages.map((_, index) =>(
            <Indicator
            key={index}
            $isActive={index === currentSlide}
            onClick={() => goToSlide(index)}></Indicator>
          ))}
        </IndicatorContainer>
    </SlideContainer>


  )
}



// -------------------------CSS-------------------------------

// 슬라이드 전체 컨테이너 스타일 - 와이어프레임 B 영역
const SlideContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  background-color: #f8f9fa;
  border-bottom: 1px solid #e0e0e0;
`
// 슬라이드들을 감싸는 래퍼 스타일
const SlidesWrapper = styled.div`
  display: flex;
  width: ${props => props.children.length * 100}%;
  height: 100%;
  transform: translateX(-${props => props.$currentSlide * (100 / props.children.length)}%);
  transition: transform 0.5s ease-in-out;
`

// 개별 슬라이드 아이템 스타일 - 샘플 배경 이미지 적용
const SlideItem = styled.div`
  width: ${props => 100 / props.$slideCount}%;
  height: 100%;
  background: ${props => props.$backgroundImage};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.$pattern};
    pointer-events: none;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: repeating-linear-gradient(
      90deg,
      transparent,
      transparent 100px,
      rgba(255,255,255,0.05) 100px,
      rgba(255,255,255,0.05) 200px
    );
    pointer-events: none;
  }
`

// 슬라이드 콘텐츠 컨테이너 스타일
const SlideContent = styled.div`
  text-align: center;
  color: #ffffff;
  z-index: 2;
`;

// 슬라이드 제목 스타일
const SlideTitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin: 0 0 20px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

// 슬라이드 설명 스타일
const SlideDescription = styled.p`
  font-size: 18px;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

// 네비게이션 버튼 스타일
const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.$position}: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 24px;
  font-weight: bold;
  color: #333333;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  
  &:hover {
    background-color: rgba(255, 255, 255, 1);
    transform: translateY(-50%) scale(1.1);
  }
  
  &:active {
    transform: translateY(-50%) scale(0.95);
  }
`;

// 인디케이터 컨테이너 스타일
const IndicatorContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
`;

// 개별 인디케이터 스타일
const Indicator = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid #c8ced1;
  background-color: ${props => props.$isActive ? '#5194e0' : 'transparent'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
    transform: scale(1.2);
  }
`;



export default Slide