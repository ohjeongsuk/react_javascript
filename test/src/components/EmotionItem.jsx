import "./../css/EmotionItem.css";
import { getEmotionImage } from "../util/get-emotion-image";

// components/EmotionItem.jsx: 평점 선택 UI (감정 아이콘 + 텍스트)
// props:
//   - emotionId: 평점 번호 (1~5)
//   - emotionName: 평점 텍스트 ("5점", "4점" 등)
//   - isSelected: 현재 선택 중인지 여부 (true면 강조 스타일 적용)
//   - onClick: 클릭 시 실행할 함수

const EmotionItem = ({ emotionId, emotionName, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      // isSelected가 true면 CSS 클래스에 색상 정보(emotionId)를 추가해서 강조 표시
      className={`EmotionItem ${isSelected ? `EmotionItem_on_${emotionId}` : ""}`}
    >
      <img className="emotion_img" src={getEmotionImage(emotionId)} />
      <div className="emotion_name">{emotionName}</div>
    </div>
  );
};

export default EmotionItem;
