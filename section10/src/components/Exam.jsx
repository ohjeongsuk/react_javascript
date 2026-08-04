import { useState, useReducer } from "react";

function reducer(count, action) {
  switch (action.type) {
    case "PLUS":
      return count + action.data

    case "MINUS":
      return count - action.data

    default:
      return count
  }
}
const Exam = () => {
  // const [count, setCount] = useState(0)
  const [count, dispatch] = useReducer(reducer, 0)
  // const minus = (e) => {
  //   setCount(count - 1)
  // }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "PLUS", data: 1 })}>+</button>
      <button onClick={() => dispatch({ type: "MINUS", data: 1 })}>-</button>
    </div>
  );
};

export default Exam;