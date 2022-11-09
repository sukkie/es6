// resolve : 성공 , reject : 실패
// Promise의 프로퍼티 (state, result)
const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("OK");
  }, 3000);
});

pr.then(
  // 이행 되었을때 실행
  // result에는 위의 'OK' 값이 넘어옴
  function (result) {
    console.log(result); // OK
  },
  // 거부 되었을때 실행
  function (err) {
    console.log(error);
  }
);

// 위를 아래와 같이도 사용 할 수 있음
pr.then(function (result) {}).catch(function (err) {});

// 예제1
// callback hell
{
  const f1 = (callback) => {
    setTimeout(function () {
      console.log("1번완료");
      callback();
    }, 3000);
  };
  const f2 = (callback) => {
    setTimeout(function () {
      console.log("2번완료");
      callback();
    }, 3000);
  };
  const f3 = (callback) => {
    setTimeout(function () {
      console.log("3번완료");
      callback();
    }, 3000);
  };

  console.log("시작");
  f1(function () {
    f2(function () {
      f3(function () {
        console.log("완료");
      });
    });
  });
}

// Promise사용
{
  const f1 = () => {
    return new Promise((res, rej) => {
      setTimeout(function () {
        res("1번완료");
      }, 3000);
    });
  };
  const f2 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
      setTimeout(function () {
        // res("2번완료");
        rej("2번실패");
      }, 3000);
    });
  };
  const f3 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
      setTimeout(function () {
        res("3번완료");
      }, 3000);
    });
  };

  // 프로미스 체이닝
  console.log("시작");
  f1().then((res) =>
    f2(res)
      .then((res) => f3(res).then((res) => console.log(res)))
      .catch(console.log)
      .finally(() => console.log("끝"))
  );

  // Promise.all(모든 Promise를 동시에 실행해서 모두 완료되면 결과값을 받을 수 있음, 하나라도 에러가 있으면 결과값을 받을 수 없음)
  Promise.all([f1(), f2(), f3()]).then((res) => console.log(res)); // [ '1번완료', '2번완료', '3번완료' ]

  // Promise.race(모든 Promise를 동시에 실행해서 중간에 에러가 나도 결과값을 받을 수 있음)
  Promise.race([f1(), f2(), f3()]).then((res) => console.log(res));
}
