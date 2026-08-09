import { useParams } from "react-router-dom";

const Review = () => {
  const params = useParams();

  return <div>{params.id}번 영화리뷰</div>;
};

export default Review;
