// 음식주문함수
function orderFood(rice, flag) {
  const promise = new Promise((resolve, reject)=>{
    console.log(`${rice} 주문`)
    setTimeout(() => {
      (flag === true)
      ? resolve(`${rice} 조리 완료`)
      : reject(`${rice} 조리 실패`);
    }, 1000);
  });
  return promise;
}

// async (비동기식) 함수가 비동기식 함수로 처리,
// 리턴값을 promise 준다.

async function getData(flag) {
  if (flag === true) {
    return {
      name:"zeus",
      age:30
    }
  } else {
    return new Error("객체가 없음")
  }
}

// getData(false)
// .then((result)=>{
//   console.log(result);
// })
// .catch((result)=>{
//   console.log(result);
// })
// console.log("클라 화면");

async function printData() {
  const result = await getData(true);
  console.log(result)
}

printData();
