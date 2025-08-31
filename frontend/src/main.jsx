import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// React 애플리케이션의 진입점 - 웹디자인 기능사 시험용 쇼핑몰
// DOM의 root 요소에 React 애플리케이션을 마운트
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
