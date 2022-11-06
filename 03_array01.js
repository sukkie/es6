// 배열생성
let days = ["mon", "tue", "wed"];
// 출력
console.log(days[1]); // tue

// 변경
days[1] = "화요일";
// 출력
console.log(days); // [ 'mon', '화요일', 'wed' ]

// 마지막에 목요일 추가
days.push("thu");
// 출력
console.log(days); // [ 'mon', '화요일', 'wed', 'thu' ]

// 맨앞에 일요일 추가
days.unshift("sun");
// 출력
console.log(days); // [ 'sun', 'mon', '화요일', 'wed', 'thu' ]

// 반복
for (let i = 0; i < days.length; i++) {
  console.log(days[i]);
}

// forof 반복
for (let day of days) {
  console.log(day);
}
