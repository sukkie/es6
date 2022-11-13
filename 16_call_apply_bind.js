// 1. call : 객체와 매개변수를 파라미터로 넘겨서 호출
{
  const mike = {
    name: "Mike",
  };

  const tom = {
    name: "Tom",
  };

  function showThisName() {
    console.log(this.name);
  }
  showThisName(); // undefined
  // mike객체를 넘기면 showThisName 내에서 this로 mike객체를 사용 할 수 있음.
  showThisName.call(mike); // Mike
  showThisName.call(tom); // Tom

  function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
  }
  update.call(mike, 1999, "singer");
  console.log(mike); // { name: 'Mike', birthYear: 1999, occupation: 'singer' }
  update.call(tom, 2002, "teacher");
  console.log(tom); // { name: 'Tom', birthYear: 2002, occupation: 'teacher' }
}

// 2. apply는 call과 비슷하나 함수 매겨변수를 배열로 받는다.
{
  const mike = {
    name: "Mike",
  };

  const tom = {
    name: "Tom",
  };

  function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
  }
  update.apply(mike, [1999, "singer"]);
  console.log(mike); // { name: 'Mike', birthYear: 1999, occupation: 'singer' }
  update.apply(tom, [2002, "teacher"]);
  console.log(tom); // { name: 'Tom', birthYear: 2002, occupation: 'teacher' }

  // apply 사용예
  const num = [3, 10, 1, 6, 4];
  console.log(Math.max(num)); // NaN
  console.log(Math.max(...num)); // 10
  // Math.max.apply(null, [3, 10, 1, 6, 4]])
  console.log(Math.max.apply(null, num)); // 10
  // Math.max.call(null, .3, 10, 1, 6, 4))
  console.log(Math.max.call(null, ...num)); // 10
}

// 3. bind는 bind생성시 this를 고정시켜 놓음
{
  const mike = {
    name: "Mike",
  };

  const tom = {
    name: "Tom",
  };

  function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
  }

  const updateMike = update.bind(mike);
  updateMike(1980, "police");
  console.log(mike); // { name: 'Mike', birthYear: 1980, occupation: 'police' }
}

// 전체 예제
{
  const user = {
    name: "Mike",
    showName: function () {
      console.log(`hello ${name}`);
    },
  };

  // 1. 일반 호출
  user.showName(); // hello, Mike

  let fn = user.showName;
  // 2. 변수 호출, this를 잃어버렸음
  fn(); // hello, undefined

  // 3. call로 호출
  fn.call(user); // hello, Mike

  // 4. apply로 호출
  fn.apply(user); // hello, Mike

  // 5. bind로 호출
  let boundFn = fn.bind(user);
  boundFn(); // hello, Mike
}
