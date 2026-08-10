import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import useReview from "../hooks/useReview"
import { getStrDate } from "../util/get-stringed-date"
import { ReviewStateContext } from "../App"
import { useContext, useEffect, useState } from "react";

const Review = () => {
  const params = useParams();
  const nav = useNavigate();

  const data = useContext(ReviewStateContext);
  const [curReviewItem, setCurReviewItem] = useState();

  useEffect(() => {
    const currentReviewItem = data.find(
      (item) => String(item.id) === String(params.id)
    );
    if (!currentReviewItem) {
      window.alert("리뷰가 존재하지 않습니다");
      nav("/", { replace: true });
      return;
    }
    setCurReviewItem(currentReviewItem);
  }, [nav, data, params.id]);

  if (!curReviewItem) {
    return <div>로딩중...</div>;
  }

  const { createdDate, emotionId, content } = curReviewItem;
  const titie = getStrDate(new Date(createdDate))

  return (
    <div>
      <Header
        title={`${titie}`}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
        rightChild={<Button onClick={() => nav(`/edit/${params.id}`)}
          text={"수정하기"} />}
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};

export default Review;
