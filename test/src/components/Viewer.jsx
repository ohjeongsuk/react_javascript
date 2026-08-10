import "./../css/Viewer.css";
import { getEmotionImage } from "../util/get-emotion-image";
import { emotionList } from "../util/constants"

// components/Viewer.jsx: 리뷰 상세 조회 페이지에서 리뷰 내용을 표시하는 컴포넌트
// props:
//   - emotionId: 평점 (1~5)
//   - content: 리뷰 텍스트

const Viewer = ({ emotionId, content }) => {
  // emotionId에 해당하는 평점 정보를 찾아서 평점 텍스트("5점" 등)를 얻습니다
  const emotionItem = emotionList.find(
    (item) => String(item.emotionId) === String(emotionId)
  );
  return (
    <div className="Viewer">
      <section className="img_section">
        <h4>평점</h4>
        <div className="emotion_img">
          {/* 평점 이미지와 평점 텍스트를 표시 */}
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