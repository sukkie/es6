// 생성자 함수 - 첫글자를 대문자로
function User0(name, age) {
  this.name = name;
  this.age = age;
}
// 실제 동작 방식
function User(name, age) {
  //this = {}   // 자동실행
  this.name = name;
  this.age = age;
  //return this;    // 자동실행
}

// new를 안붙이면 그냥 함수 실행으로되서 에러 발생.
let user1 = new User("Mike", 30);

// 메소드 추가된 생성자 함수
function User2(name, age) {
  this.name = name;
  this.age = age;
  this.sayName = function () {
    console.log(this.name);
  };
}

let user2 = new User2("Han", 40);
user2.sayName();
