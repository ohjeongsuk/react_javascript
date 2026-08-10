import "./../css/Viewer.css";
import { getEmotionImage } from "../util/get-emotion-image";
import { emotionList } from "../util/constants"

const Viewer = ({ emotionId, content }) => {
  const emotionItem = emotionList.find(
    (item) => String(item.emotionId) === String(emotionId)
  );
  return (
    <div className="Viewer">
      <section className="img_section">
        <h4>평점</h4>
        <div className="emotion_img">
          <img src={getEmotionImage(emotionId)} />
          <div>{emotionItem.emotionName}</div>
        </div>
      </section>
      <section className="content_section">
        <h4>영화 리뷰</h4>
        <div className="content">
          <p>{content}</p>
        </div>
      </section>
    </div>
  );

};

export default Viewer;