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

function coolFood(rice, flag) {
  const promise = new Promise((resolve, reject)=>{
    console.log(`찬${rice} 주문`)
    setTimeout(() => {
      (flag === true)
      ? resolve(`찬${rice} 완료`)
      : reject(`찬${rice} 실패`);
    }, 1000);
  });
  return promise;
}

function freezeFood(rice, flag) {
  const promise = new Promise((resolve, reject)=>{
    console.log(`냉동${rice} 주문`)
    setTimeout(() => {
      (flag === true)
      ? resolve(`${rice} 냉동 완료`)
      : reject(`${rice} 냉동 실패`);
    }, 1000);
  });
  return promise;
}

// const promise = orderFood('밥', true)

orderFood('밥', true)
.then((result)=>{
  console.log(result)
  return coolFood('밥',true)
}).then((result)=>{
  console.log(result);
  return freezeFood('밥',true)
}).then((result)=>{
  console.log(result);
}).catch((result)=>{
  console.log(result)
})
const arr = [10,20,30,40,50]
arr.forEach((e)=>{
  console.log(`사용자 화면 ${e}`)
})



















