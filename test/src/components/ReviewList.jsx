import "./../css/ReviewList.css";
import Button from "./Button";
import ReviewItem from "./ReviewItem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// components/ReviewList.jsx: 리뷰 목록 화면 컴포넌트
// props:
//   - data: 표시할 리뷰 배열
//
// 기능:
//   - 정렬 드롭다운 (최신순/오래된순)
//   - 각 리뷰를 ReviewItem 컴포넌트로 표시
//   - "새 영화 리뷰 작성" 버튼

const ReviewList = ({ data }) => {
  const nav = useNavigate();
  const [sortType, setSortType] = useState("latest"); // 정렬 방식: "latest" 또는 "oldest"

  // select 요소 변경 시 정렬 방식 업데이트
  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  // 정렬 방식에 따라 리뷰 목록을 정렬하는 함수
  // toSorted는 원본 배열을 변경하지 않고 새 배열을 반환합니다
  // 날짜를 숫자로 비교해서 최신순 또는 오래된순으로 정렬합니다
  const getSortedData = () => {
    return data.toSorted((a, b) => {
      if (sortType === "latest") {
        return Number(a.createdDate) - Number(b.createdDate);
      } else {
        return Number(b.createdDate) - Number(a.createdDate);
      }
    });
  };

  const sortedData = getSortedData();

  return (
    <div className="ReviewList">
      <div className="menu_bar">
        {/* 정렬 방식 선택 드롭다운 */}
        <select onChange={onChangeSortType} value={sortType}>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된순</option>
        </select>
        {/* 새 리뷰 작성 페이지로 이동하는 버튼 */}
        <Button
          onClick={() => nav("/new")}
          text={"새 영화 리뷰 작성"}
          type={"POSITIVE"}
        />
      </div>
      <div className="list_wrapper">
        {/* 정렬된 리뷰 목록을 순회하며 각각 ReviewItem으로 렌더 */}
        {sortedData.map((item) => (
          <ReviewItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ReviewList;
