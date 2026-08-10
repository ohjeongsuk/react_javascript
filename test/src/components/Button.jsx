import "./../css/Button.css";

// components/Button.jsx: 재사용 가능한 버튼 컴포넌트
// props:
//   - text: 버튼에 표시할 텍스트
//   - type: 버튼 스타일 (예: "POSITIVE", "NEGATIVE" 등) → CSS 클래스명으로 사용됨
//   - onClick: 버튼 클릭 시 실행할 함수

const Button = ({ text, type, onClick }) => {
  return (
    <button onClick={onClick} className={`Button Button_${type}`}>
      {text}
    </button>
  );
};

export default Button;
