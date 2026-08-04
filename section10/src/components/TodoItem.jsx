import "../css/TodoItem.css";
import { memo } from "react";

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onChangeCheckBox = () => {
    onUpdate(id);
  };
  const onClickBtn = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input type="checkbox" checked={isDone} onChange={onChangeCheckBox} />
      <div className="content">{content}</div>
      <div className="data">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickBtn}>삭제</button>
    </div>
  );
};

export default memo(TodoItem);
