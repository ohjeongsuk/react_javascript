import { useParams } from "react-router-dom";

const Diary = () => {
  const params = useParams();

  return (
    <div>
      <h1>Diary {params.id} 번 일기입니다.</h1>
      <viewer />
    </div>
  );
};

export default Diary;
