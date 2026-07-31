const Main = () => {
  let number = 9;
  let obj = { name: "제우스" }
  let array = [1, 2, 3, 4]
  let bool = false
  let hobby = "배드민턴"

  return (
    <main>
      <h1>안녕!!!</h1>
      <h3>number={number}</h3>
      <h3>number={number % 2 === 0 ? '짝수' : '홀수'}</h3>
      <h3>obj.name={obj.name}</h3>
      <h3>array={array}</h3>
      <h3>array[2]={array[2]}</h3>
      <h3>bool={bool}</h3>
      <h3>hobby={hobby}</h3>
      <h3>array filter={array.filter((e) => e >= 3)}</h3>
    </main>

  );

};
export default Main;