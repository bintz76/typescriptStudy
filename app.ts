// function add(n1, n2) {
//   return n1 + n2;
// }

// const number1 = "5";
// const number2 = 5.5;

// const result = add(number1, number2);

// console.log(result);

// // 수학적 덧셈이 아닌 문자열 연결이 됨

// function add(n1: number, n2: number) {
//   return n1 + n2;
// }

// const number1 = 5;
// const number2 = 5.5;

// const result = add(number1, number2);

// console.log(result);

// function add(n1: number, n2: number, showResult: boolean, phrase: string) {
//   if (showResult) {
//     console.log(resultPhease + n1 + n2);
//   } else {
//     n1 + n2;
//   }
// }

// const number1 = 5;
// const number2 = 10;
// const printResult = true;
// const resultPhease = "결과는";

// add(number1, number2, printResult, resultPhease);

// ts에서는 오류가 없지만 런타임 이후에 에러가 남

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(resultPhease + result);
  } else {
    result;
  }
}

const number1 = 5;
const number2 = 10;
const printResult = true;
const resultPhease = "결과는";

add(number1, number2, printResult, resultPhease);

// 이게 올바른 답!
