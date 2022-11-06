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
  console.log(Mike[key]); //Mike ​​​​, 30
}
