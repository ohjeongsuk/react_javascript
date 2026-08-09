import { getEmotionImage } from "../util/get-emotion-image";
import Button from "./Button";
import "./../css/ReviewItem.css";
import { useNavigate } from "react-router-dom";

const ReviewItem = ({ id, emotionId, createdDate, content }) => {
  const nav = useNavigate();

  const goReviewPage = () => {
    nav(`/review/${id}`);
  };
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
