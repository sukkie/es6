// 3초후 실행
setTimeout(function () {
  console.log("3000");
}, 3000);

const tId = function showName(name) {
  console.log(name);
};
// 3초뒤 실행
setTimeout(tId, 3000, "Mike");
// 설정한 함수 취소
clearTimeout(tId);

// setInterval도 동일
// clearInterval로 취소

// 예1.
let num = 0;
function showTime() {
  if (num == 5) {
    clearInterval(tId2);
  }
  console.log(`안녕하세요. 접속한지 ${num++}초가 지났습니다.`);
}
const tId2 = setInterval(showTime, 1000);
