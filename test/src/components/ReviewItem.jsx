import { getEmotionImage } from "../util/get-emotion-image";
import Button from "./Button";
import "./../css/ReviewItem.css";
import { useNavigate } from "react-router-dom";

// components/ReviewItem.jsx: 리뷰 목록의 개별 항목 컴포넌트
// props:
//   - id: 리뷰 고유 ID
//   - emotionId: 평점 (1~5)
//   - createdDate: 작성 날짜
//   - content: 리뷰 텍스트

const ReviewItem = ({ id, emotionId, createdDate, content }) => {
  const nav = useNavigate(); // 페이지 이동 함수

  // 상세 조회 페이지로 이동
  const goReviewPage = () => {
    nav(`/review/${id}`);
  };

  // 수정 페이지로 이동
  const goEditPage = () => {
    nav(`/edit/${id}`);
  };

  return (
    <div className="ReviewItem">
      <div onClick={goReviewPage} className="img_section">
        <img src={getEmotionImage(emotionId)} />
      </div>
      <div onClick={goReviewPage} className="info_section">
        <div className="created_date">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
      </div>
      <div className="button_section">
        <Button onClick={goEditPage} text={"수정하기"} />
      </div>
    </div>
  );
};

export default ReviewItem;
