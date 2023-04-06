/*
규칙
1. 변수는 문자와 숫자, $와 _만 사용한다.
2. 첫글자는 숫자가 될 수 없다.
3. 예약어는 사용할 수 없다.
4. 가급적 상수는 대문자로
5. 변수명은 읽기 쉽고 이해할 수 있게 선언
*/

/*
const name = 'Mike';
const age = 30;

const name1 = 'Mike';
const name2 = 'Mike';
const name3 = 'Mike';

const message = "I'm a boy.";
const message2 = "I'm a boy.";

const message3 = `My name is ${name}`;
// console.log(message3);

const message4 = `My age is ${30 + 1} years old.`;
// console.log(message4);

const x = 1 / 0;
console.log(x); 
*/

/* 
---------------------불린타입 
const a = true;
const b = false;

const name = 'Mike';
const age = 30;

console.log(name == 'Mike');
console.log(age > 40);
*/

/* 
---------------------null 과 undefined

null : 존재하지 않는 값 (아무 내용도 없다)
undefined : 값이 할당되지 않음

*/

/* let age;
console.log(age);
변수를 선언만 하고 값을 할당하지 않으면 undefined를 출력 */

// let user = null;
//user는 존재하지 않는다

/* 
---------------------typoof 연산자 
const name = 'Mike';

console.log(typeof 3);
console.log(typeof name);
console.log(typeof true);
console.log(typeof 'xxx');
console.log(typeof null);
console.log(typeof undefined);
null = object 타입으로 (object == 객체) 이지만 null !== 이다.
이건 자바스크립트 초기 설정오류지만 하위호환성을 유지하기 위해 수정하진 않는다.  */

/* 
---------------------프롬프트의 사용

*prompt
const name = prompt('이름을 입력하세요');
alert(`안녕하세요, ${name}님. 환영합니다.`); 
const name = prompt('예약일을 입력해주세요', '2020-10-10');
console.log(name);

*confirm
const isAdult = confirm('당신은 성인 입니까?');
console.log(isAdult);

※단점
1. 사용하는 동안 스크립트가 일시 정지됨
2.스타일링 불가


*prompt로 점수 입력받기
const mathScore = Number(prompt('수학 몇점'));
const engScore = Number(prompt('영어 몇점'));
const result = (mathScore + engScore) / 2;
console.log(result);
프롬프트에서 아무 값도 입력하지 않으면 null 값 반환 null == 0 / 0 == false
ㄴ숫자형, 빈문자열 == false / 문자열, 공백 == true

※Number(null) == 0
※Number(undefined) == NaN */

// console.log(10 > 5);
// console.log(10 == 5);
// console.log(10 != 5);

/* 19세 미만 접속자 입장 불가 안내 메세지
let age = Number(prompt('나이를 입력하세요.'));

if (age > 19) {
  alert('환영합니다.');
} else {
  alert('19세 미만은 입장하실 수 없습니다.');
}

let age = Number(confirm('19세 이상 이십니까?'));

if (age == true) {
  alert('환영합니다');
} else {
  alert('19세 미만은 입장할 수 없습니다.');
} */

/* ---------------------논리 연산자 OR / AND / ! 

*이름이 TOM 이거나, 성인이면 통과

const name = 'Tom';
const age = 30;

if (name == 'Tom' || age == 30) {
  alert('통과');
}

--------
*prompt 활용

const name = prompt('이름을 입력해주세요');
const age = Number(prompt('나이를 입력해주세요'));

if (name == 'Tom' || age >= 30) {
  alert('안녕하세요 반갑습니다.');
} else {
  alert('조건을 충족하지 못해 방문이 차단되었습니다.');
}


const age = Number(prompt('나이를 입력해주세요'));
const isAdult = age > 19;

if (!isAdult) {
  alert('돌아가');
} else {
  alert('환영~');
}
*/

/* ---------------------반복문 for / while / do.. while  
*for
for (i = 0; i < 10; i++) {
  console.log(i);
}
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

let i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);


*break / contiue


*break
while (true) {
  let answer = confirm('계속 할까요?');
  if (!answer) {
    break;
  }
}


for (i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
*/

/* --------------------switch / case */
// 사고 싶은 과일 물어보고 가격 알려주기
let fruit = prompt('무슨 과일 살겨');

switch (fruit) {
  case 'Oranges':
    console.log('2000원');
    break;
  case 'Banana':
    console.log('1000원');
    break;
  case 'Strawberry':
    console.log('3000원');
    break;
  default:
    console.log('그런 과일은 없습니다.');
}
