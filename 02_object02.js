// 객체 프로퍼티로 할당된 함수가 메소드
const superman = {
  name: "cleak",
  age: 33,
  fly() {
    console.log("날다");
  },
};

const _superman = superman;
_superman.fly(); // 날다

// 예제 1.
const boy = {
  name: "Mike",
  showName: function () {
    console.log(this.name); // Mike
  },
};
// 정상 동작
boy.showName();

// 예제 2(어로우 함수면 this는 윈도우 객체).
const boy2 = {
  name: "Mike",
  showName: () => {
    console.log(this);
  },
};
// 비정상 동작
boy2.showName();
