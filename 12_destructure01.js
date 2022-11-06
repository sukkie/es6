// 구조분해할당
// 객체나 배열의 속성을 분해해서 그 값을 변수에 담을 수 있게 하는 표현식

// 1. 배열 구조 분해
let [x, y] = [1, 2];
console.log(x); // 1
console.log(y); // 2

let users = ["Mike", "Tom", "Jane"];
let [user1, user2, user3] = users;
console.log(user1); // Mike

// 값이 없는경우
let [a, b, c] = [1, 2];
console.log(c); // undefined

// 기본값 설정
let [a1 = 3, b1 = 4, c1 = 5] = [1, 2];
console.log(c1); // 5

// 2. 객체 구조 분해
let user = { name: "Mike", age: 30 };
let { name, age } = user;
console.log(name); // Mike
console.log(age); // 30

// 프로퍼티명 변경도 가능
let { name: userName, age: uesrAge } = user;
console.log(userName); // Mike
console.log(uesrAge); // 30

// 배열처럼 기본값 설정도 가능
