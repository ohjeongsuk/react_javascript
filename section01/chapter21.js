//1. 함수선언식
function task(a, b, callback) {
  setTimeout(() => {
    let sum = a + b;
    callback(sum);
  }, 100);
}

// task(10, 20, (sum) => console.log(sum));

//2. 비동기 방식으로 1단계 : 음식을 주문하는 사항
function orderFood(food, callback) {
  console.log(`스프링부트에 음식을 주문함 : ${food}`);
  setTimeout(() => {
    callback(food);
  }, 1000);
}

// orderFood("백숙", (food) => console.log(`${food} 음식 조리완료`));

// 3. 비동기 방식으로 1단계 : 음식을 차갑게요청하는 사항
function coolFood(food, callback) {
  console.log(`스프링부트에 음식을 차갑게해주세요 : ${food}`);
  setTimeout(() => {
    callback(food);
  }, 1000);
}

// coolFood("뜨거운 백숙", (food) =>
//   console.log(`${food} 음식을 차갑게 했습니다.`),
// );

// 4. 비동기 동식방식 1단계 : 음식을 냉동시켜주세요.
function freezeFood(food, callback) {
  (console.log(`스프링부트에 음식을 냉동시켜주세요 : ${food}`),
    setTimeout(() => {
      callback(food);
    }, 1000));
}

// freezeFood("차가운백숙", (food) =>
//   console.log(`${food} 음식을 냉동시켰습니다`),
// );

// 5. 비동기방식 백숙 -> 뜨거운 백숙 -> 차가운 백숙
orderFood("백숙", (food) => {
  console.log(`${food} 음식 조리완료`);
  coolFood("뜨거운" + food, (food) =>
    console.log(`${food} 음식을 차갑게 했습니다.`),
  );
});

// 6. 비동기 방식 3단계 백숙 => 뜨거운백숙 => 차가운백숙 => 냉동백숙
orderFood("백숙", (food) => {
  console.log(`${food} 음식 조리완료`);
  coolFood("뜨거운" + food, (food) => console.log(`${food} 음식을 차갑게 했습니다`)
    freezeFood("차가운백숙", (food) => console.log(`${food} 음식을 냉동시켰습니다`)));
});
