import "./../css/Header.css";

// components/Header.jsx: 페이지 상단에 표시되는 헤더 컴포넌트 (슬롯 패턴)
// props:
//   - title: 헤더 중앙에 표시할 제목
//   - leftChild: 헤더 왼쪽에 표시할 컴포넌트 (버튼 등)
//   - rightChild: 헤더 오른쪽에 표시할 컴포넌트 (버튼 등)

const Header = ({ title, leftChild, rightChild }) => {
  return (
    <header className="Header">
      <div className="header_left">{leftChild}</div>
      <div className="header_center">{title}</div>
      <div className="header_right">{rightChild}</div>
    </header>
  );
};

export default Header;
