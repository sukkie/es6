// 1. async
// Promis문법보다 가독성이 높음
// async를 사용하면 promise를 반환
async function getName() {
  return "Mike";
}

console.log(getName()); // Promise { 'Mike' }
// Promise를 반환하므로 then을 사용할 수 있음
getName().then((name) => console.log(name)); // Mike

// 2. await - aysnc 함수내부에서만 사용가능
{
  function getName(name) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(name);
      }, 1000);
    });
  }

  async function showName() {
    const result = await getName("Mike");
    console.log(result);
  }

  //   async function showName() {
  //     getName('Mike').then(name => console.log(name));
  //   }

  console.log("시작");
  showName();
}

// promise를 async, await 으로 변경하기
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

  console.log("시작");
  async function order() {
    try {
      const result1 = await f1();
      const result2 = await f2(result1);
      const result3 = await f2(result2);
    } catch (e) {
      console.log(e);
    }
    console.log("종료");
  }

  order();
}
