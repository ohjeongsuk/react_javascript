import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

// main.jsx는 리액트 앱의 진입점입니다
// 1. createRoot: React 18에서 DOM에 리액트를 연결하는 방식
// 2. BrowserRouter: 라우팅 기능을 활성화합니다 (페이지 전환, URL 변경 감지 등)
// 3. App: 우리가 만든 메인 컴포넌트

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
      <App/>
   </BrowserRouter>
);