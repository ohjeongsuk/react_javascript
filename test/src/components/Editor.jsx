import "./../css/Editor.css";
import Button from "../components/Button";
import EmotionItem from "../components/EmotionItem";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const emotionList = [
  {
    emotionId: 1,
    emotionName: "(평점)5점",
  },
  {
    emotionId: 2,
    emotionName: "4점",
  },
  {
    emotionId: 3,
    emotionName: "3점",
  },
  {
    emotionId: 4,
    emotionName: "2점",
  },
  {
    emotionId: 5,
    emotionName: "1점",
  },
];

const getStrDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }
  return `${year}-${month}-${date}`;
};

const Editor = ({ initData, onSubmit }) => {
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  });
  const nav = useNavigate();

  useEffect(() => {
    if (initData) {
      setInput({
        createdDate: new Date(initData.createdDate),
        emotionId: initData.emotionId,
        content: initData.content,
      });
    }
  }, [initData]);


  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "createdDate") {
      value = new Date(value);
    }
    setInput({
      ...input,
      [name]: value,
    });
  };

  const onSubmitButtonClick = () => {
    onSubmit(input);
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>리뷰 작성 날짜</h4>
        <input
          name="createdDate"
          onChange={onChangeInput}
          value={getStrDate(input.createdDate)}
          type="date"
        />
      </section>
      <section className="emotion_section">
        <h4>평점</h4>
        <div className="emotion_list">
          {emotionList.map((item) => (
            <EmotionItem
              onClick={() =>
                onChangeInput({
                  target: { name: "emotionId", value: item.emotionId },
                })
              }
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>영화 리뷰</h4>
        <textarea
          name="content"
          value={input.content}
          onChange={onChangeInput}
          placeholder="영화 리뷰를 작성해주세요"
        />
      </section>
      <section className="button_section">
        <Button onClick={() => nav(-1)} text={"취소하기"} />
        <Button
          onClick={onSubmitButtonClick}
          text={"작성완료"}
          type={"POSITIVE"}
        />
      </section>
    </div>
  );
};

export default Editor;
