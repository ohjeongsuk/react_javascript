import "./../css/Editor.css";
import Button from "./Button";
import EmotionItem from "./EmotionItem";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const emotionList = [
  { emotionId: 1, emotionName: "매우 좋음" },
  { emotionId: 2, emotionName: "좋음" },
  { emotionId: 3, emotionName: "보통" },
  { emotionId: 4, emotionName: "나쁨" },
  { emotionId: 5, emotionName: "매우 나쁨" },
];

// 날짜를 YYYY-MM-DD 문자열로 변환해주는 헬퍼 함수
const getStrDate = (targetDate) => {
  if (!targetDate || !(targetDate instanceof Date) || isNaN(targetDate.getTime())) {
    return "";
  }
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) month = `0${month}`;
  if (date < 10) date = `0${date}`;

  return `${year}-${month}-${date}`;
};

const Editor = ({ initData, onCreate, onUpdate }) => {
  const nav = useNavigate();

  // 💡 useState 초기화 함수를 사용하여 useEffect 없이 initData 적용
  const [input, setInput] = useState(() => {
    if (initData) {
      return {
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),
      };
    }
    return {
      createdDate: new Date(),
      emotionId: 1,
      content: "",
    };
  });

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "createdDate") {
      value = new Date(value);
    }

    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onClickSubmit = () => {
    if (input.content.trim() === "") {
      alert("일기 내용을 입력해주세요!");
      return;
    }

    if (initData) {
      if (onUpdate) {
        onUpdate(
          initData.id,
          input.createdDate.getTime(),
          input.emotionId,
          input.content
        );
      }
    } else {
      if (onCreate) {
        onCreate(
          input.createdDate.getTime(),
          input.emotionId,
          input.content
        );
      }
    }

    nav("/", { replace: true });
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          type="date"
          name="createdDate"
          onChange={onChangeInput}
          value={getStrDate(input.createdDate)}
        />
      </section>

      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
              onClick={() =>
                onChangeInput({
                  target: {
                    name: "emotionId",
                    value: item.emotionId,
                  },
                })
              }
            />
          ))}
        </div>
      </section>

      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          placeholder="오늘은 어땠나요?"
          name="content"
          value={input.content}
          onChange={onChangeInput}
        />
      </section>

      <section className="button_section">
        <Button text={"취소하기"} onClick={() => nav(-1)} />
        <Button
          text={"작성완료"}
          type={"POSITIVE"}
          onClick={onClickSubmit}
        />
      </section>
    </div>
  );
};

export default Editor;