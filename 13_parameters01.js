// 전개구문은 ...으로 표현
// 자바스크립트는 함수의 인수에 제한이 없음
// 인수 없이 또는 더 많은 인수를 넣어도 문제 없이 호출 가능
function showName(name) {
  console.log(name);
}
showName("Mike"); // Mike
showName("Mike", "Tom"); // Mike
showName(); // undefined

// 1. arguments란
// 함수로 넘어온 모든 인수에 접근
// 함수내에서 이용 가능한 지역변수
// length / index 사용가능
// Array형태의 객체(배열이 아님)
// 배열의 내장 메서드는 없음 (forEach, map )
function showName2(name) {
  console.log(arguments.length);
  console.log(arguments[0]);
  console.log(arguments[1]);
}

// 2. 나머지 매개변수(추천)
function showName3(...names) {
  console.log(names);
}
showName3("Mike"); // [ 'Mike' ]
showName3("Mike", "Tom"); // [ 'Mike', 'Tom' ]
showName3(); // []

// 예제1 - 더하기 함수
// reduce사용
function add(...nums) {
  return nums.reduce((prev, cur) => {
    return prev + cur;
  }, 0);
}

// forEach사용
function add2(...nums) {
  let result = 0;
  nums.forEach((v) => {
    result += v;
  });
  return result;
}

console.log(add(1, 2, 4, 5, 6, 7, 8)); // 33
console.log(add2(1, 2, 4, 5, 6, 7, 8)); // 33

// 생성자 함수에서 사용
function User(name, age, ...skills) {
  this.name = name;
  this.age = age;
  this.skills = skills;
}

const user1 = new User("Mike", 30, "html", "css");
const user2 = new User("Tom", 20, "JS", "React");
const user3 = new User("Jane", 10, "English");

console.log(user1); // User { name: 'Mike', age: 30, skills: [ 'html', 'css' ] }
console.log(user2); // User { name: 'Tom', age: 20, skills: [ 'JS', 'React' ] }
console.log(user3); // User { name: 'Jane', age: 10, skills: [ 'English' ] }

// 3. 전개구문(Spred syntax)
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let result = [...arr1, ...arr2];
console.log(result); // [ 1, 2, 3, 4, 5, 6 ]
let result2 = [0, ...arr1, ...arr2, 7, 8, 9];
console.log(result2); //  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// 객체도 가능

{
  // 예제1.
  let arr1 = [1, 2, 3];
  let arr2 = [4, 5, 6];

  // 4,5,6,1,2,3으로 만들기
  console.log(...arr2, ...arr1); // 4 5 6 1 2 3

  // 예제2. - 객체를 전개연산자 사용하기
  let user = { name: "Mike" };
  let info = { age: 30 };
  let fe = ["JS", "React"];
  let lang = ["Korean", "English"];

  const userInfo = { ...user, ...info, skills: [...fe, ...lang] };
  // { name: 'Mike',
  // age: 30,
  // skills: [ 'JS', 'React', 'Korean', 'English' ] }
  console.log(userInfo);
}
