// 1-MASALA
let numbers = [];

const numberOne = numbers.push(Number(prompt("1-Raqamni kiriting")));
const numberTwo = numbers.push(Number(prompt("2-Raqamni kiriting")));
const numberThree = numbers.push(Number(prompt("3-Raqamni kiriting")));
const numberFour = numbers.push(Number(prompt("4-Raqamni kiriting")));

function sumInput(numbers) {
  let s = 0;
  for (let i = 0; i <= numbers.length - 1; i++) {
    s = s + numbers[i];
  }

  return s;
}

console.log(sumInput(numbers));

// ----------------------------------------------------------------------------------------------------------------
// // 2-MASALA
// // 1.shart
// let arr = ["Jazz", "Blues"];
// console.log(arr);
// // 2-shart
// arr.push("Rock-n-roll");
// console.log(arr);
// // 3-shart
// const averageValue = function (arr) {
//   return (arr.length - 1) / 2;
// };

// arr[averageValue(arr)] = "Classic";
// console.log(arr);
// // 4-shart
// arr.shift();
// console.log(arr);
// // 5-shart
// arr.unshift("Reggae");
// arr.unshift("Rap");
// console.log(arr);

// --------------------------------------------------------------------------------------------------------------------

// 3-MASALA

// let salaries = {
//   Akmal: 1200,
//   Salim: 5200,
//   Karima: 1800,
// };

// function sumSalaries(salaries) {
//   let s = 0;
//   for (let Monthly of Object.values(salaries)) {
//     s = s + Monthly;
//   }
//   return s;
// }

// console.log(sumSalaries(salaries));

// --------------------------------------------------------------------------------------------------------------------

// 4-MASALA

// arr = [1, 3, 8, 5, 6];
// arrEvenNumber = [];
// arrOddNumber = [];
// arrAllNumber = [];

// function calcSum(arr) {
//   let sum = [],
//     odd = 0,
//     event = 0;
//   for (i = 0; i <= arr.length - 1; i++) {
//     if (arr[i] % 2 == 0) {
//       event = event + arr[i];
//     } else {
//       odd = odd + arr[i];
//     }
//   }
//   sum.push(event);
//   sum.push(odd);
//   return sum;
// }

// console.log(calcSum(arr));

// -------------------------------------------------------------------------------------------------------------------

// 5-MASALA

// const arrNumbers = [-3, -2, 1, 5, -4, 6];

// function calcMax(numb) {
//   return Math.max.apply(null, numb);
// }
// console.log(calcMax(arrNumbers));
// function calcMin(numb) {
//   return Math.min.apply(null, numb);
// }
// console.log(calcMin(arrNumbers));

// let missNumbers = [];
// let num = [];

// for (let i = calcMin(arrNumbers); i <= calcMax(arrNumbers); i++) {
//   if (!arrNumbers.includes(i)) {
//     missNumbers.push(i);
//   }
// }
// console.log(missNumbers);
