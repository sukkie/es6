// 객체 생성 (리터럴 방식)
const superman = {
  name: "aaa",
  age: 12,
};

// 객체 내의 값 취득방법 2가지
console.log(superman.name); // aaa
console.log(superman["age"]); // 12

// 새로운 프로퍼티 추가
superman.haricolor = "black";

// 프로퍼티 삭제
delete superman.age;

// 결과 출력
console.log(superman); // { name: 'aaa', haricolor: 'black' }

// 객체 반환하는 함수
function createObject(name, age) {
  return { name, age };
}

const Mike = createObject("Mike", 30);
// age 프로퍼티가 있는지 조회
console.log("age" in Mike); // true

// forin문
for (key in Mike) {
  console.log(Mike[key]); // Mike, 30
}
// 객체 프로퍼티로 할당된 함수가 메소드
const superman2 = {
  name: "cleak",
  age: 33,
  fly() {
    console.log(날다);
  },
};

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
